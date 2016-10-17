'use strict';

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');

  var form = {
    onClose: null,

    /**
     * @param {Function} cb
     */
    open: function(cb) {
      formContainer.classList.remove('invisible');
      cb();
    },

    close: function() {
      formContainer.classList.add('invisible');

      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    }
  };


  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };

  var reviewForm = document.querySelector('.review-form');
  var raitings = reviewForm.elements['review-mark'];
  var name = reviewForm.elements['review-name'];
  var text = reviewForm.elements['review-text'];
  var textActive = false;
  var submitButton = reviewForm.querySelector('.review-submit');
  var infoBlock = reviewForm.querySelector('.review-fields');
  var infoLabels = infoBlock.querySelectorAll('label');
  var i;

  name.required = true;

  // Функция проверки заполненности полей, включение/отключения кнопки,
  // и запуска вывода информации  о незаполненных полях
  var validateForm = function() {
    var errors = 0;
    Array.prototype.forEach.call(reviewForm, function(elem) {
      var infoElem = elem.id ? infoBlock.querySelector('[for=' + elem.id + ']') : null;
      if (elem.value === '' && elem.hasAttribute('required')) {
        errors++;
        changeDisplay(infoElem, 'inline');
      } else if (infoElem) {
        changeDisplay(infoElem, 'none');
      }
    });
    submitButton.disabled = errors ? true : false;
    checkInfo();
  };

  validateForm();

  // Изменение состояния поля "Отзыв"
  var changeTextState = function(active) {
    text.required = active ? true : false;
  };
  changeTextState(textActive);

  // Присваивание обработчиков событий на радиокнопки
  raitings.forEach(function(elem) {
    elem.onchange = function() {
      if (this.value >= 3) {
        changeTextState(false);
      } else {
        changeTextState(true);
      }
      validateForm();
    };
  });

  // Присваивание обработчика событий поля "имя"
  name.oninput = validateForm;

  // Присваивание обработчика событий поля "Отзыв"
  text.oninput = validateForm;

  // Изменение видимости информационного блока
  function checkInfo() {
    for (i = 0; i < infoLabels.length; i++) {
      if(infoLabels[i].style.display === 'inline') {
        changeDisplay(infoBlock, 'inline-block');
        return;
      }
    }
    changeDisplay(infoBlock, 'none');
  }

  function changeDisplay(elem, property) {
    elem.style.display = property;
  }

  return form;
})();
