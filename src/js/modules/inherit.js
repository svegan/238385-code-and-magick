'use strict';

define(function() {
  return function(ChildClass, ParentClass) {
    if (typeof ChildClass !== 'function' && typeof ParentClass !== 'function') {
      throw 'Ошибка функции наследования прототипов';
    }
    var EmptyConstructor = function() {};
    EmptyConstructor.prototype = ParentClass.prototype;
    ChildClass.prototype = new EmptyConstructor();
  };
});
