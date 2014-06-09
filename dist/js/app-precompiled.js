// Source: dist/js/include/libs.js
// Source: src/uijs/core/libs/base.js
/*
 Base.js, version 1.1a
 Copyright 2006-2010, Dean Edwards
 License: http://www.opensource.org/licenses/mit-license.php
 */

var Base = function() {
    // dummy
};

Base.extend = function(_instance, _static) { // subclass
    var extend = Base.prototype.extend;

    // build the prototype
    Base._prototyping = true;
    var proto = new this;
    extend.call(proto, _instance);
    proto.base = function() {
        // call this method from any other method to invoke that method's ancestor
    };
    delete Base._prototyping;

    // create the wrapper for the constructor function
    //var constructor = proto.constructor.valueOf(); //-dean
    var constructor = proto.constructor;
    var klass = proto.constructor = function() {
        if (!Base._prototyping) {
            if (this._constructing || this.constructor == klass) { // instantiation
                this._constructing = true;
                constructor.apply(this, arguments);
                delete this._constructing;
            } else if (arguments[0] != null) { // casting
                return (arguments[0].extend || extend).call(arguments[0], proto);
            }
        }
    };

    // build the class interface
    klass.ancestor = this;
    klass.extend = this.extend;
    klass.forEach = this.forEach;
    klass.implement = this.implement;
    klass.prototype = proto;
    klass.toString = this.toString;
    klass.valueOf = function(type) {
        //return (type == "object") ? klass : constructor; //-dean
        return (type == "object") ? klass : constructor.valueOf();
    };
    extend.call(klass, _static);
    // class initialisation
    if (typeof klass.init == "function") klass.init();
    return klass;
};

Base.prototype = {
    extend: function(source, value) {
        if (arguments.length > 1) { // extending with a name/value pair
            var ancestor = this[source];
            if (ancestor && (typeof value == "function") && // overriding a method?
                // the valueOf() comparison is to avoid circular references
                (!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
                /\bbase\b/.test(value)) {
                // get the underlying method
                var method = value.valueOf();
                // override
                value = function() {
                    var previous = this.base || Base.prototype.base;
                    this.base = ancestor;
                    var returnValue = method.apply(this, arguments);
                    this.base = previous;
                    return returnValue;
                };
                // point to the underlying method
                value.valueOf = function(type) {
                    return (type == "object") ? value : method;
                };
                value.toString = Base.toString;
            }
            this[source] = value;
        } else if (source) { // extending with an object literal
            var extend = Base.prototype.extend;
            // if this object has a customised extend method then use it
            if (!Base._prototyping && typeof this != "function") {
                extend = this.extend || extend;
            }
            var proto = {toSource: null};
            // do the "toString" and other methods manually
            var hidden = ["constructor", "toString", "valueOf"];
            // if we are prototyping then include the constructor
            var i = Base._prototyping ? 0 : 1;
            while (key = hidden[i++]) {
                if (source[key] != proto[key]) {
                    extend.call(this, key, source[key]);

                }
            }
            // copy each of the source object's properties to this object
            for (var key in source) {
                if (!proto[key]) extend.call(this, key, source[key]);
            }
        }
        return this;
    }
};

// initialise
Base = Base.extend({
    constructor: function() {
        this.extend(arguments[0]);
    }
}, {
    ancestor: Object,
    version: "1.1",

    forEach: function(object, block, context) {
        for (var key in object) {
            if (this.prototype[key] === undefined) {
                block.call(context, object[key], key, object);
            }
        }
    },

    implement: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == "function") {
                // if it's a function, call it
                arguments[i](this.prototype);
            } else {
                // add the interface using the extend method
                this.prototype.extend(arguments[i]);
            }
        }
        return this;
    },

    toString: function() {
        return String(this.valueOf());
    }
});

// Source: src/uijs/core/libs/dollar.js
/**
 * Dollar - javascript utils just like jQuery
 * https://github.com/trungdq88/dollar
 * How to use: just like when you use jQuery, ex: $('.item').hide();
 * Available functions:
 * on, off, fadeIn, hide, show, addClass, removeClass, each, trigger,
 * find, parent, css, attr, html, text, hasClass
 */

(function(root, undefined) {

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


// Source: dist/js/include/components.js
// Source: src/uijs/core/components/ui-baseview/BaseView.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

/**
 * Represent for dom, handle common event (click, key press...)
 * @type {*}
 */
var BaseView = Base.extend({
  id: null,
  node: null,
  childViews: [],
  constructor: function (id) {
    this.id = id || '';
    // Add event listener
  },
  setNode: function (node) {
    this.node = node;
    this.node.style.position = 'absolute';
  },
  setPosition: function (left, top, width, height) {
    this.node.style.left = left + 'px';
    this.node.style.top = top + 'px';
    this.node.style.width = width + 'px';
    this.node.style.height = height + 'px';
  },
  setBackgroundColor: function (color) {
    this.node.style.backgroundColor = color;
  },
  addChildView: function (view) {
    if (view && view.id && !this.childViews[view.id]) {
      this.childViews[view.id] = view;
      this.node.appendChild(view.node);
    } else {
      console.log('View ID (' + view.id + ') is not defined or already exist in parent View')
    }
  }
});

// Source: src/uijs/core/components/ui-frame/Frame.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var Frame = BaseView.extend({
  constructor: function (id) {
    this.base(id);
    this.node = document.createElement('div');
    this.node.id = 'Frame_' + this.id;
    this.node.style.position = 'absolute';
  }
});

// Source: dist/js/include/modules.js
// Source: src/uijs/app/modules/frame_manager/FrameEnums.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var $frameEnum = {
  layout: {
    vp1: 'vp1',
    vp2: 'vp2',
    vp3: 'vp3',
    hp1: 'hp1',
    hp2: 'hp2',
    hp3: 'hp3',
    hp4: 'hp4'
  },
  item: {
    image: 'image',
    video: 'video'
  },
  effect: {
    slideLeft: 'slideLeft',
    slideRight: 'slideRight'
  }
};

// Source: src/uijs/app/modules/frame_manager/FrameManager.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var FrameManager = Base.extend({
  templateId: 0,
  masterLayout: '',
  frames: [],
  constructor: function () {
    var data = $backendService.getFrameData();

    for (var i = 0; i < data.frames.length; i++) {
      var frame = new Frame(i + 1);
      var position = this.getFramePosition(data.masterLayout, i);
      frame.setPosition(position.left, position.top, position.width, position.height);
      frame.setBackgroundColor('#ccc');
      /*
       for (var j = 0; j < dataFrame.items.length; j++) {
       switch (dataFrame.items[j].type) {
       case $frameEnum.item.image:

       break;
       case $frameEnum.item.video:
       console.log('Not implement yet');
       break;
       }
       }
       */
      this.frames.push(frame);
    }

    this.show();
  },

  show: function () {
    for (var i = 0; i < this.frames.length; i++) {
      bodyFrame.addChildView(this.frames[i]);
    }
  },

  getFramePosition: function (layout, index) {
    switch (layout) {
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: APP_WIDTH - FRAME_GAP * 2,
          height: (APP_HEIGHT - FRAME_GAP * 3) / 2
        };
      default:
        return null;
    }
  }
});

// Source: src/uijs/app/modules/frame_manager/BackendService.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Base.extend({
  BACKEND_URL: '',
  getFrameData: function () {
    return {
      templateId: 1,
      masterLayout: 'vp2',
      frames: [
        {
          frameId: 1,
          items: [
            {
              itemId: 1,
              type: 'image',
              url: 'http://abc.com/def1.jpg'
            },
            {
              itemId: 2,
              type: 'image',
              url: 'http://abc.com/def2.jpg'
            },
            {
              itemId: 3,
              type: 'image',
              url: 'http://abc.com/def3.jpg'
            }
          ],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
          frameId: 2,
          items: [
            {
              itemId: 4,
              type: 'image',
              url: 'http://abc.com/def4.jpg'
            },
            {
              itemId: 5,
              type: 'image',
              url: 'http://abc.com/def5.jpg'
            },
            {
              itemId: 6,
              type: 'image',
              url: 'http://abc.com/def6.jpg'
            }
          ],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        }
      ]
    }
  }
});

// Source: dist/js/include/coreInit.js
// Source: src/uijs/app/conf/conf.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var APP_WIDTH = 1000;
var APP_HEIGHT = 400;
var FRAME_GAP = 10;

// Source: src/uijs/core/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var bodyFrame = new Frame('bodyFrame');
bodyFrame.setPosition(0, 0, APP_WIDTH, APP_HEIGHT);
bodyFrame.setBackgroundColor('#eee');

var initUIJS = function() {
  document.body.style.position = 'absolute';
  document.body.style.width = APP_WIDTH;
  document.body.style.height = APP_HEIGHT;
  document.body.style.top = '0px';
  document.body.style.left = '0px';
  document.body.style.padding = '0px';
  document.body.style.margin = '0px';
  document.body.appendChild(bodyFrame.node);
  main();
};

document.addEventListener('DOMContentLoaded', function(){
  initUIJS();
});

// Source: src/uijs/app/main.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var main = function() {

};

// Source: dist/js/include/modulesInit.js
// Source: src/uijs/app/modules/frame_manager/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var $backendService = new BackendService();
var $frameManager = new FrameManager();