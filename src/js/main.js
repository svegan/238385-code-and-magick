'use strict';

define(['./modules/game', './modules/init', './modules/reviews'], function(initGame, initializePage, printReviews) {
  // Инициация игры
  initGame();
  // Запуск игры и инициация формы
  initializePage();
  // Отрисовка отзывов
  printReviews();
});
