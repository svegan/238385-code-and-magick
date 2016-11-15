'use strict';

define(function() {
  var ReviewData = function(data) {
    this.data = data;
  };
  ReviewData.prototype = {
    getAuthorName: function() {
      return this.data.author.name;
    },
    getCreatedTime: function() {
      return this.data.created;
    },
    getMessage: function() {
      return this.data.description;
    },
    getUsefulness: function() {
      return this.data.review_usefulness;
    },
    getPicture: function() {
      return this.data.author.picture;
    },
    getRating: function() {
      return this.data.rating;
    },
    setAuthorName: function(name) {
      this.data.author.name = name;
    },
    setCreatedTime: function(time) {
      this.data.created = time;
    },
    setMessage: function(message) {
      this.data.description = message;
    },
    setUsefulness: function(usefulness, callback) {
      this.data.review_usefulness = usefulness;
      if (typeof callback === 'function') {
        callback();
      }
    },
    setPicture: function(picture) {
      this.data.author.picture = picture;
    },
    setRating: function(rating) {
      this.data.rating = rating;
    },
    remove: function() {
      this.data = null;
    }
  };
  return ReviewData;
});
