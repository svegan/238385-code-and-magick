'use strict';

define(function() {
  var Gallery = function(pictures) {
    this.pictures = pictures;
    this.activePicture = 0;
    this.elem = document.querySelector('.overlay-gallery');
    this.backward = this.elem.querySelector('.overlay-gallery-control-left');
    this.forward = this.elem.querySelector('.overlay-gallery-control-right');
    this.currentPicture = this.elem.querySelector('.preview-number-current');
    this.total = this.elem.querySelector('.preview-number-total');
    this.close = this.elem.querySelector('.overlay-gallery-close');
  };

  Gallery.prototype = {
    show: function(number) {
      var self = this;
      this.close.onclick = function() {
        self.hide();
      };
      this.backward.onclick = function() {
        if (self.activePicture >= 1) {
          self.setActivePicture(self.activePicture - 1);
        }
      };
      this.forward.onclick = function() {
        if (self.activePicture < self.pictures.length - 1) {
          self.setActivePicture(self.activePicture + 1);
        }
      };
      this.elem.classList.remove('invisible');
      this.total.textContent = this.pictures.length;
      this.setActivePicture(number);
    },
    hide: function() {
      this.elem.classList.add('invisible');
      this.close.onclick = null;
      this.backward.onclick = null;
      this.forward.onclick = null;
    },
    setActivePicture: function(number) {
      this.activePicture = number;
      var preview = document.querySelector('.overlay-gallery-preview');
      var existImage = preview.querySelector('img');
      var picture = new Image();
      picture.src = this.pictures[number];
      if (existImage) {
        preview.replaceChild(picture, existImage);
      } else {
        preview.appendChild(picture);
      }
      this.currentPicture.textContent = number + 1;
    }
  };
  return Gallery;
});
