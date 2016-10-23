'use strict';

/* eslint-disable */
var reviews = [{
  "author": {
    "name": "Иванов Иван",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 10,
  "rating": 2,
  "description": "Плохая игра: слишком сильно затягивает и невозможно оторваться. Я потерял работу, учебу, девушку и дар речи, но продолжаю играть. Это призыв о помощи: спасите."
}, {
  "author": {
    "name": "Ксения Собчак",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 6,
  "rating": 5,
  "description": "Все хорошо, мне нравится."
}, {
  "author": {
    "name": "Ксюша Бородина",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 3,
  "rating": 1,
  "description": "Все плохо, мне не нравится"
}, {
  "author": {
    "name": "Мария Антуанетта",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 4,
  "rating": 3,
  "description": "Невероятно чумовая игра. Пендальф-синий — мой герой)))) Он такой милашка. Благодаря ему я наконец нацчилась отвлекаться от работы и учёбы."
}, {
  "author": {
    "name": "Дмитрий Карпов",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 20,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Максим Шаровары",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 115,
  "rating": 2,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Зулейха Валиева",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 10,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Федор Непомнящих",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 10,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Макаронный Монстр",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": -3,
  "rating": 5,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Миклухо Маклай",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 0,
  "rating": 2,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Муравьев Апостол",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 0,
  "rating": 1,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Максим Горький",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 8,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Аноним",
    "picture": "img/ijwdoq"
  },
  "review_usefulness": 102,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Иван Иванов",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 5,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Василиса Васильева",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 0,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Хороший Человек",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 24,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Гейб Ньюэлл",
    "picture": "img/dwjiqo9"
  },
  "review_usefulness": 10,
  "rating": 5,
  "description": "Игра очень интересная. Нравится возможность выбирать между героями, а самое крутое, что есть альтернативные концовки в игре. Она точно стоит своих денег."
}];
/* eslint-enable */

var container = document.querySelector('.reviews-list');
var template = document.querySelector('template');
var filters = document.querySelector('.reviews-filter');
var templateContainer = 'content' in template ? template.content : template;
var IMAGE_LOAD_TIMEOUT = 10000;

var getReviewElem = function(review) {
  var reviewElem = templateContainer.querySelector('.review').cloneNode(true);
  var profileImage = new Image();
  var profileImageTimeout = null;
  var author = reviewElem.querySelector('.review-author');

  profileImage.onload = function(evt) {
    clearTimeout(profileImageTimeout);
    author.src = evt.target.src;
    author.width = 124;
    author.height = 124;
    author.alt = review.author.name;
  };

  profileImage.onerror = function() {
    reviewElem.classList.add('review-load-failure');
  };

  profileImage.src = review.author.picture;

  profileImageTimeout = setTimeout(function() {
    reviewElem.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  var authorRating = review.rating;
  var raitingField = reviewElem.querySelector('.review-rating');
  switch (authorRating) {
    case 1:
      raitingField.classList.add('review-rating-one');
      break;
    case 2:
      raitingField.classList.add('review-rating-two');
      break;
    case 3:
      raitingField.classList.add('review-rating-three');
      break;
    case 4:
      raitingField.classList.add('review-rating-four');
      break;
    case 5:
      raitingField.classList.add('review-rating-five');
      break;
    default:
      console.log('No author rating');
  }
  reviewElem.querySelector('.review-text').textContent = review.description;
  return reviewElem;
};

var addReviews = function(reviewsJSON) {
  filters.classList.add('invisible');
  reviewsJSON.forEach(function(review) {
    container.appendChild(getReviewElem(review));
  });
  filters.classList.remove('invisible');
};

addReviews(reviews);
