'use strict';

module.exports = function(list, filterID) {
  var filteredReviews;
  switch (filterID) {
    case 'reviews-recent':
      filteredReviews = list.filter(function(elem) {
        return elem.created > Date.now() - 3 * 24 * 60 * 60 * 1000;
      }).sort(function(a, b) {
        return b.created - a.created;
      });
      break;
    case 'reviews-good':
      filteredReviews = list.filter(function(elem) {
        return elem.rating > 2;
      }).sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-bad':
      filteredReviews = list.filter(function(elem) {
        return elem.rating <= 2;
      }).sort(function(a, b) {
        return a.rating - b.rating;
      });
      break;
    case 'reviews-popular':
      filteredReviews = list.sort(function(a, b) {
        return b.review_usefulness - a.review_usefulness;
      });
      break;
    default:
      filteredReviews = list;
      break;
  }
  return filteredReviews;
};
