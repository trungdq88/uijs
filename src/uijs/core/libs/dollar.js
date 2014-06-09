/**
 * Dollar - javascript utils just like jQuery
 * https://github.com/trungdq88/dollar
 * How to use: just like when you use jQuery, ex: $('.item').hide();
 * Available functions:
 * on, off, fadeIn, hide, show, addClass, removeClass, each, trigger,
 * find, parent, css, attr, html, text, hasClass
 */

(function(root, undefined) {

  "use strict";


/* dollar main */

// Base function.
var dollar = function (s) {

  var dollarWrapper = function ($) {
    var _each = function(obj, handler) {
      var result;
      if (obj.constructor.name == 'NodeList') {
        for (var i = 0; i < obj.length; i++) {
          result = handler(obj[i], i);
          if (result !== undefined) {
            return result;
          }
        }
      } else {
        result = handler(obj);
      }
      return result || obj;
    };

    // PROCEDURE METHODS (return nothing)
    $.on = function (eventName, eventHandler) {
      return _each(this, function(el) {
        el.addEventListener(eventName, eventHandler);
      });
    };
    $.off = function(eventName, eventHandler) {
      return _each(this, function(el) {
        el.removeEventListener(eventName, eventHandler);
      });
    };
    $.fadeIn = function (duration) {
      if (!duration) {
        duration = 400;
      }
      return _each(this, function(el) {
        el.style.opacity = 0;
        var last = +new Date();
        var tick = function () {
          el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
          last = +new Date();

          if (+el.style.opacity < 1) {
            if (root.requestAnimationFrame) {
              root.requestAnimationFrame(tick);
            } else {
              setTimeout(tick, 16);
            }
          }
        };

        tick();
      });
    };
    $.hide = function () {
      return _each(this, function(el) {
        el.style.display = 'none';
      });
    };
    $.show = function () {
      return _each(this, function(el) {
        el.style.display = '';
      });
    };
    $.addClass = function(className) {
      return _each(this, function(el) {
        if (el.classList) {
          el.classList.add(className);
        }
        else {
          el.className += ' ' + className;
        }
      });
    };
    $.removeClass = function(className) {
      return _each(this, function(el) {
        if (el.classList) {
          el.classList.remove(className);
        } else {
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      });
    };
    $.each = function(callback) {
      Array.prototype.forEach.call(this, function(element, index){
        callback(index, element);
      });
    };
    $.trigger = function(eventName, data) {
      return _each(this, function(el) {
        var event;
        if (data) {
          if (root.CustomEvent) {
            event = new root.CustomEvent(eventName, {detail: data});
          } else {
            event = root.document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
          }

          el.dispatchEvent(event);
        } else {
          event = root.document.createEvent('HTMLEvents');
          event.initEvent(eventName, true, false);
          el.dispatchEvent(event);
        }
      });
    };

    // FUNCTION METHODS (return thing)
    $.find = function(selector) {
      return dollarWrapper(this.querySelectorAll(selector));
    };
    $.parent = function() {
      return _each(this, function(el) {
        return el.parentNode;
      });
    };
    $.css = function(ruleName) {
      return _each(this, function(el) {
        return root.getComputedStyle(el)[ruleName];
      });
    };
    $.attr = function(attrName) {
      return _each(this, function(el) {
        return el.getAttribute(attrName);
      });
    };
    $.html = function(value) {
      return _each(this, function(el) {
        if (value) {
          el.innerHTML = value;
        } else {
          return el.innerHTML;
        }
      });
    };
    $.text = function(value) {
      return _each(this, function(el) {
        if (value) {
          el.textContent = value;
        } else {
          return el.textContent;
        }
      });
    };
    $.hasClass = function(className) {
      return _each(this, function(el) {
        if (el.classList) {
          return el.classList.contains(className);
        } else {
          return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
      });
    };
    return $;
  };

  if (s) {
    if (typeof s == 'function') {
      root.document.addEventListener('DOMContentLoaded', s);
    } else if (typeof s == 'object') {
      return dollarWrapper(s);
    } else {
      var result = root.document.querySelectorAll(s);
      return dollarWrapper(result);
    }
  }
};

dollar.ajax = function () {

};

// Version.
dollar.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.dollar = dollar;
if (!root.$) {
  root.$ = dollar;
}


}(this));
