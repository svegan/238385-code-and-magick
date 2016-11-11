'use strict';

define(['./load', './review'], function(loadData, Review) {
  return function() {
    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;
    var cloneElem = templateContainer.querySelector('.review');
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
        var reviewObj = new Review(cloneElem.cloneNode(true), review);
        reviewObj.addTo(container);
        debugger;
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

    var applyFilter = function(e) {
      container.innerHTML = '';
      page = 0;
      currentFilter = e.target.id;
      localStorage.setItem('filter', currentFilter);
      updateReviews();
    };

    moreReviewsButton.addEventListener('click', updateReviews);
    filters.addEventListener('change', applyFilter, true);
    window.addEventListener('load', function() {
      if (localStorage.getItem('filter')) {
        document.getElementById(localStorage.getItem('filter')).click();
      } else {
        updateReviews();
      }
    });
  };
});
