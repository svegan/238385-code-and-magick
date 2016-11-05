'use strict';

define(['./load', './review'], function(loadData, Review) {
  return function() {
    var container = document.querySelector('.reviews-list');
    var filters = document.querySelector('.reviews-filter');
    var moreReviewsButton = document.querySelector('.reviews-controls-more');
    var REVIEWS_URL = 'http://localhost:1507/api/reviews';
    var REVIEWS_STEP = 3;
    var page = 0;
    var currentFilter = 'reviews-all';

    var renderReviews = function(reviews) {
      filters.classList.add('invisible');
      Array.prototype.forEach.call(reviews, function(review) {
        var reviewObj = new Review(review);
        container.appendChild(reviewObj.element);
      });
      filters.classList.remove('invisible');
    };

    var updateReviews = function() {
      loadData(REVIEWS_URL, {
        from: page,
        to: page + REVIEWS_STEP,
        filter: currentFilter
      }, renderReviews);
      page += REVIEWS_STEP;
    };

    moreReviewsButton.addEventListener('click', updateReviews);

    var applyFilter = function(e) {
      container.innerHTML = '';
      page = 0;
      currentFilter = e.target.id;
      updateReviews();
    };
    filters.addEventListener('change', applyFilter, true);

    updateReviews();
  };
});
