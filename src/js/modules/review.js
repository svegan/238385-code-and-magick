'use strict';

define(function() {
  var Review = function(review) {
    this.data = review;
    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;
    this.element = templateContainer.querySelector('.review').cloneNode(true);
    this.profileImage = new Image();
    this.profileImageTimeout = null;
    this.author = this.element.querySelector('.review-author');
    var raitingsDic = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'};
    var IMAGE_LOAD_TIMEOUT = 10000;

    this._onImageLoad = this._onImageLoad.bind(this);
    this._onImageError = this._onImageError.bind(this);
    this._onUsefulnessClick = this._onUsefulnessClick.bind(this);

    this.profileImage.addEventListener('load', this._onImageLoad);
    this.profileImage.addEventListener('error', this._onImageError);
    this.profileImage.src = review.author.picture;

    this.profileImageTimeout = setTimeout(function() {
      this.profileImage.src = '';
      this.element.classList.add('review-load-failure');
    }.bind(this), IMAGE_LOAD_TIMEOUT);

    var raitingField = this.element.querySelector('.review-rating');
    raitingField.classList.add('review-rating-' + raitingsDic[review.rating]);
    this.element.querySelector('.review-text').textContent = review.description;

    this.usefulness = this.element.querySelector('.review-quiz');
    this.usefulnessSpans = this.usefulness.querySelectorAll('.review-quiz-answer');
    this.usefulness.addEventListener('click', this._onUsefulnessClick, true);

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

  Review.prototype = {
    remove: function() {
      this.usefulness.removeEventListener('click', this._onUsefulnessClick);
    },
    _onImageLoad: function(evt) {
      clearTimeout(this.profileImageTimeout);
      this.author.src = evt.target.src;
      this.author.width = 124;
      this.author.height = 124;
      this.author.alt = this.data.author.name;
    },
    _onImageError: function() {
      this.element.classList.add('review-load-failure');
    },
    _onUsefulnessClick: function(evt) {
      if (!evt.target.classList.contains('review-quiz-answer')) {
        return;
      }
      Array.prototype.forEach.call(this.usefulnessSpans, function(item) {
        item.classList.remove('review-quiz-answer-active');
      });
      evt.target.classList.add('review-quiz-answer-active');
    }
  };

  return Review;
});
