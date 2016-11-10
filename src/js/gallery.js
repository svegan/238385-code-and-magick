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
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onBackwardClick = this._onBackwardClick.bind(this);
    this._onForwardClick = this._onForwardClick.bind(this);
  };

  Gallery.prototype = {
    show: function(number) {
      this.close.addEventListener('click', this._onCloseClick);
      this.backward.addEventListener('click', this._onBackwardClick);
      this.forward.addEventListener('click', this._onForwardClick);
      this.elem.classList.remove('invisible');
      this.total.textContent = this.pictures.length;
      this.setActivePicture(number);
    },
    hide: function() {
      this.elem.classList.add('invisible');
      this.close.removeEventListener('click', this._onCloseClick);
      this.backward.removeEventListener('click', this._onBackwardClick);
      this.forward.removeEventListener('click', this._onForwardClick);
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
    },
    _onCloseClick: function() {
      this.hide();
    },
    _onBackwardClick: function() {
      if (this.activePicture >= 1) {
        this.setActivePicture(this.activePicture - 1);
      }
    },
    _onForwardClick: function() {
      if (this.activePicture < this.pictures.length - 1) {
        this.setActivePicture(this.activePicture + 1);
      }
    }
  };
  return Gallery;
});
