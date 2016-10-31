'use strict';

define(function() {
  return function(review) {
    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;
    var reviewElem = templateContainer.querySelector('.review').cloneNode(true);
    var profileImage = new Image();
    var profileImageTimeout = null;
    var author = reviewElem.querySelector('.review-author');
    var IMAGE_LOAD_TIMEOUT = 10000;

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
});
