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
    return elem.firstChild.src;
  });
  var galleryContainer = document.querySelector('.overlay-gallery');
  var gallery = new Gallery(galleryContainer, images);
  Array.prototype.forEach.call(galleryImages, function(elem, index) {
    elem.addEventListener('click', function() {
      gallery.show(index);
    });
  });
});
