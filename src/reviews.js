'use strict';

var reviews;
var container = document.querySelector('.reviews-list');
var template = document.querySelector('template');
var filters = document.querySelector('.reviews-filter');
var templateContainer = 'content' in template ? template.content : template;
var REVIEWS_URL = 'http://localhost:1507/api/reviews';
var IMAGE_LOAD_TIMEOUT = 10000;

var loadJSONData = function(url, callback) {
  // debugger;
  window.JSONPcallback = function(data) {
    reviews = data;
    callback(reviews);
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + 'JSONPcallback';
  document.body.appendChild(script);
};

var getReviewElem = function(review) {
  var reviewElem = templateContainer.querySelector('.review').cloneNode(true);
  var profileImage = new Image();
  var profileImageTimeout = null;
  var author = reviewElem.querySelector('.review-author');

  profileImage.onload = function(evt) {
    clearTimeout(profileImageTimeout);
    author.src = evt.target.src;
    author.width = 124;
    author.height = 124;
    author.alt = review.author.name;
  };

  profileImage.onerror = function() {
    reviewElem.classList.add('review-load-failure');
  };

  profileImage.src = review.author.picture;

  profileImageTimeout = setTimeout(function() {
    reviewElem.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  var authorRating = review.rating;
  var raitingField = reviewElem.querySelector('.review-rating');
  switch (authorRating) {
    case 1:
      raitingField.classList.add('review-rating-one');
      break;
    case 2:
      raitingField.classList.add('review-rating-two');
      break;
    case 3:
      raitingField.classList.add('review-rating-three');
      break;
    case 4:
      raitingField.classList.add('review-rating-four');
      break;
    case 5:
      raitingField.classList.add('review-rating-five');
      break;
    default:
      console.log('No author rating');
  }
  reviewElem.querySelector('.review-text').textContent = review.description;
  return reviewElem;
};

var addReviews = function(reviewsJSON) {
  filters.classList.add('invisible');
  reviewsJSON.forEach(function(review) {
    container.appendChild(getReviewElem(review));
  });
  filters.classList.remove('invisible');
};

loadJSONData(REVIEWS_URL, addReviews);
