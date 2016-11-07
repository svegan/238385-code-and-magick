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
    var loading = false;

    var renderReviews = function(reviews) {
      Array.prototype.forEach.call(reviews, function(review) {
        var reviewObj = new Review(review);
        container.appendChild(reviewObj.element);
      });
    };

    var preStartLoad = function() {
      loading = true;
      filters.classList.add('invisible');
    };

    var afterEndLoad = function() {
      filters.classList.remove('invisible');
      loading = false;
      page += REVIEWS_STEP;
    };

    var updateReviews = function() {
      if (loading) {
        return;
      }
      loadData(REVIEWS_URL, {
        from: page,
        to: page + REVIEWS_STEP,
        filter: currentFilter
      }, renderReviews, preStartLoad, afterEndLoad);
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
