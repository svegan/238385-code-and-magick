'use strict';

define(function() {
  var DOMcomponent = function(el) {
    this.element = el;
  };
  DOMcomponent.prototype = {
    addTo: function(container) {
      container.appendChild(this.element);
    },
    remove: function() {
      this.element.parentNode.removeChild(this.element);
    }
  };
  return DOMcomponent;
});
