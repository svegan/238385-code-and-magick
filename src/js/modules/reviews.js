'use strict';

define(['./load', './review'], function(loadData, Review) {
  var container = document.querySelector('.reviews-list');
  var filters = document.querySelector('.reviews-filter');
  var REVIEWS_URL = 'http://localhost:1507/api/reviews';
  var renderReviews = function(reviews) {
    filters.classList.add('invisible');
    reviews.forEach(function(review) {
      var reviewObj = new Review(review);
      container.appendChild(reviewObj.element);
    });
    filters.classList.remove('invisible');
  };
  return function() {
    loadData(REVIEWS_URL, renderReviews);
  };
});
