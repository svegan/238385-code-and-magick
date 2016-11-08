'use strict';

define(function() {
  return function(callback, delay) {
    var execute = true;
    return function() {
      if (execute) {
        callback();
        execute = false;
        setTimeout(function() {
          execute = true;
        }, delay);
      }
    };
  };
});
