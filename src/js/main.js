'use strict';

define(['./modules/game', './modules/init', './modules/reviews', './gallery'], function(initGame, initializePage, printReviews, Gallery) {
  // Инициация игры
  initGame();
  // Запуск игры и инициация формы
  initializePage();
  // Отрисовка отзывов
  printReviews();

  var galleryImages = document.querySelectorAll('.photogallery-image');
  var images = Array.prototype.map.call(galleryImages, function(elem) {
    return elem.firstChild.src;
  });
  var gallery = new Gallery(images);
  galleryImages.forEach(function(elem, index) {
    elem.addEventListener('click', function() {
      gallery.show(index);
    });
  });
});
