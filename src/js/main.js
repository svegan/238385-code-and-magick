'use strict';

define(['./modules/game', './modules/init', './modules/reviews', './modules/gallery'], function(initGame, initializePage, reviewsInit, Gallery) {
  // Инициация игры
  initGame();
  // Запуск игры и инициация формы
  initializePage();
  // Инициация отзывов
  reviewsInit();

  var galleryImages = document.querySelectorAll('.photogallery-image');
  var images = Array.prototype.map.call(galleryImages, function(elem) {
    return elem.firstChild.attributes.src.nodeValue;
  });
  var galleryContainer = document.querySelector('.overlay-gallery');
  var gallery = new Gallery(galleryContainer, images);
  Array.prototype.forEach.call(galleryImages, function(elem) {
    elem.addEventListener('click', function() {
      location.hash = '#photo/' + elem.firstChild.attributes.src.nodeValue;
    });
  });
  window.addEventListener('load', function() {
    if (!location.hash) {
      return;
    }
    gallery.onHashChange();
  });
});
