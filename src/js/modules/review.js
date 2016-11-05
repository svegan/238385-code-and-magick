'use strict';

define(function() {
  var Review = function(review) {
    var self = this;
    this.data = review;
    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;
    this.element = templateContainer.querySelector('.review').cloneNode(true);
    var profileImage = new Image();
    var profileImageTimeout = null;
    var author = this.element.querySelector('.review-author');
    var raitingsDic = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'};
    var IMAGE_LOAD_TIMEOUT = 10000;

    profileImage.onload = function(evt) {
      clearTimeout(profileImageTimeout);
      author.src = evt.target.src;
      author.width = 124;
      author.height = 124;
      author.alt = review.author.name;
    };

    profileImage.onerror = function() {
      self.element.classList.add('review-load-failure');
    };

    profileImage.src = review.author.picture;

    profileImageTimeout = setTimeout(function() {
      self.element.classList.add('review-load-failure');
      profileImage.src = '';
    }, IMAGE_LOAD_TIMEOUT);

    var authorRating = review.rating;
    var raitingField = this.element.querySelector('.review-rating');
    raitingField.classList.add('review-rating-' + raitingsDic[authorRating]);
    this.element.querySelector('.review-text').textContent = review.description;

    this.usefulness = this.element.querySelectorAll('.review-quiz-answer');
    Array.prototype.forEach.call(this.usefulness, function(elem) {
      elem.onclick = function() {
        Array.prototype.forEach.call(self.usefulness, function(item) {
          item.classList.remove('review-quiz-answer-active');
        });
        this.classList.add('review-quiz-answer-active');
      };
    });

    var debug = false;
    if (debug) {
      var timeStampInfo = document.createElement('p');
      var createdDate = new Date(review.created);
      timeStampInfo.textContent = 'TimeStamp: ' + createdDate.getDate();
      this.element.appendChild(timeStampInfo);
      var popularity = document.createElement('p');
      popularity.textContent = 'Popularity: ' + review.review_usefulness;
      this.element.appendChild(popularity);
    }
  };

  Review.prototype.remove = function() {
    Array.prototype.forEach.call(this.usefulness, function(elem) {
      elem.onclick = null;
    });
  };

  return Review;
});
