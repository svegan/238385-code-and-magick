'use strict';

define(['./inherit', './baseDOM'], function(inherit, baseDOM) {
  var Review = function(el, data) {
    baseDOM.call(this, el);
    this.data = data;
    this.profileImage = new Image();
    this.profileImageTimeout = null;
    this.author = this.element.querySelector('.review-author');
    var ratingsDic = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'};
    var IMAGE_LOAD_TIMEOUT = 10000;

    this._onImageLoad = this._onImageLoad.bind(this);
    this._onImageError = this._onImageError.bind(this);
    this._onUsefulnessClick = this._onUsefulnessClick.bind(this);

    this.profileImage.addEventListener('load', this._onImageLoad);
    this.profileImage.addEventListener('error', this._onImageError);
    this.profileImage.src = data.getPicture();

    this.profileImageTimeout = setTimeout(function() {
      this.profileImage.src = '';
      this.element.classList.add('review-load-failure');
    }.bind(this), IMAGE_LOAD_TIMEOUT);

    var ratingField = this.element.querySelector('.review-rating');
    ratingField.classList.add('review-rating-' + ratingsDic[data.getRating()]);
    this.element.querySelector('.review-text').textContent = data.getMessage();

    this.usefulness = this.element.querySelector('.review-quiz');
    this.usefulnessSpans = this.usefulness.querySelectorAll('.review-quiz-answer');
    this.usefulness.addEventListener('click', this._onUsefulnessClick, true);

    var debug = false;
    if (debug) {
      var timeStampInfo = document.createElement('p');
      var createdDate = new Date(data.getCreatedTime());
      timeStampInfo.textContent = 'TimeStamp: ' + createdDate.getDate();
      this.element.appendChild(timeStampInfo);
      var popularity = document.createElement('p');
      popularity.textContent = 'Popularity: ' + data.getUsefulness();
      this.element.appendChild(popularity);
    }
  };

  inherit(Review, baseDOM);

  Review.prototype._onImageLoad = function(evt) {
    clearTimeout(this.profileImageTimeout);
    this.author.src = evt.target.src;
    this.author.width = 124;
    this.author.height = 124;
    this.author.alt = this.data.getAuthorName();
  };

  Review.prototype._onImageError = function() {
    this.element.classList.add('review-load-failure');
  };

  Review.prototype._onUsefulnessClick = function(evt) {
    if (!evt.target.classList.contains('review-quiz-answer')) {
      return;
    }
    Array.prototype.forEach.call(this.usefulnessSpans, function(item) {
      item.classList.remove('review-quiz-answer-active');
    });
    evt.target.classList.add('review-quiz-answer-active');
  };

  Review.prototype.remove = function() {
    this.usefulness.removeEventListener('click', this._onUsefulnessClick);
    baseDOM.prototype.remove.call(this);
  };
  return Review;
});
