'use strict';

define(function() {
  var createParamString = function(params) {
    return Object.keys(params).map(function(param) {
      return [param, params[param]].join('=');
    }).join('&');
  };

  return function(url, params, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(evt) {
      var loadedData = JSON.parse(evt.target.response);
      callback(loadedData);
    });
    console.log(createParamString(params));
    xhr.open('GET', url + '?' + createParamString(params));
    xhr.send();
  };
});
