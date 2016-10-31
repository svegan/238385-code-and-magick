'use strict';

define(function() {
  return function(url, callback) {
    window.JSONPcallback = function(data) {
      callback(data);
    };
    var script = document.createElement('script');
    script.src = url + '?callback=' + 'JSONPcallback';
    document.body.appendChild(script);
  };
});
