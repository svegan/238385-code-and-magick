'use strict';

define(function() {
  var createParamString = function(params) {
    return Object.keys(params).map(function(param) {
      return [encodeURIComponent(param), encodeURIComponent(params[param])].join('=');
    }).join('&');
  };

  return function(url, params, callback, preStartLoad, afterEndLoad) {
    preStartLoad();
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(evt) {
      var loadedData = JSON.parse(evt.target.response);
      callback(loadedData);
      afterEndLoad();
    });
    xhr.open('GET', url + '?' + createParamString(params));
    xhr.send();
  };
});
