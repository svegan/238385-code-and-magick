'use strict';

define(['./inherit', './baseDOM'], function(inherit, baseDOM) {
  var Gallery = function(el, pictures) {
    baseDOM.call(this, el);
    this.pictures = pictures;
    this.activePicture = 0;
    this.backward = this.element.querySelector('.overlay-gallery-control-left');
    this.forward = this.element.querySelector('.overlay-gallery-control-right');
    this.currentPicture = this.element.querySelector('.preview-number-current');
    this.total = this.element.querySelector('.preview-number-total');
    this.close = this.element.querySelector('.overlay-gallery-close');
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onBackwardClick = this._onBackwardClick.bind(this);
    this._onForwardClick = this._onForwardClick.bind(this);
  };

  inherit(Gallery, baseDOM);

  Gallery.prototype.show = function(number) {
    this.close.addEventListener('click', this._onCloseClick);
    this.backward.addEventListener('click', this._onBackwardClick);
    this.forward.addEventListener('click', this._onForwardClick);
    this.element.classList.remove('invisible');
    this.total.textContent = this.pictures.length;
    this.setActivePicture(number);
  };
  Gallery.prototype.hide = function() {
    this.element.classList.add('invisible');
    this.close.removeEventListener('click', this._onCloseClick);
    this.backward.removeEventListener('click', this._onBackwardClick);
    this.forward.removeEventListener('click', this._onForwardClick);
  };
  Gallery.prototype.setActivePicture = function(number) {
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
  };
  Gallery.prototype._onCloseClick = function() {
    this.hide();
  };
  Gallery.prototype._onBackwardClick = function() {
    if (this.activePicture >= 1) {
      this.setActivePicture(this.activePicture - 1);
    }
  };
  Gallery.prototype._onForwardClick = function() {
    if (this.activePicture < this.pictures.length - 1) {
      this.setActivePicture(this.activePicture + 1);
    }
  };
  return Gallery;
});
