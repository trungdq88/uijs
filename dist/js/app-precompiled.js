// Source: dist/js/include/templates.js
// This file was automatically generated from frame_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.frame == 'undefined') { templates.frame = {}; }


templates.frame.frame = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '"></div>';
};

;
// This file was automatically generated from frame_slider.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.frameslider == 'undefined') { templates.frameslider = {}; }


templates.frameslider.slider = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '"></div>';
};

;
// This file was automatically generated from image_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.imageview == 'undefined') { templates.imageview = {}; }


templates.imageview.image = function(opt_data, opt_ignored) {
  return '<img id="' + soy.$$escapeHtml(opt_data.id) + '" src="' + soy.$$escapeHtml(opt_data.imageSource) + '"/>';
};


// Source: dist/js/include/utils.js
// Source: src/uijs/core/utils/Topic.js
var Topic = Base.extend({

  _subscribers: null,

  constructor: function() {
    this._subscribers = [];
  },

  subscribe: function() {
    var d = new Deferred();
    this._subscribers.push(d);
    return d;
  },

  publish: function(data) {
    var subs = this._subscribers;
    this.clear();
    for (var i = 0; i < subs.length; i++)
      subs[i].resolve(data);
  },

  clear: function(){
    this._subscribers = [];
  }
});

// Source: dist/js/include/coreInit.js
// Source: src/uijs/core/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var $coreStartup = new Deferred();

document.addEventListener('DOMContentLoaded', function(){
  if (!DEBUG_MODE) {
    $coreStartup.resolve();
  }
});

// Source: src/uijs/app/main.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

$coreStartup.done(function () {
  // Start your app
});

// Source: dist/js/include/coreComponents.js
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
  childViews: {},
  constructor: function (id) {
    this.id = id || '';
    // Add event listener
  },
  setNode: function (html) {
    var dummyEl = document.createElement('div');
    dummyEl.innerHTML = html;
    if (dummyEl.childNodes.length > 1) {
      console.log('Cannot set node: the template contains multiple root node');
    } else {
      this.node = dummyEl.childNodes[0];
      this.node.style.position = 'absolute';
    }
  },
  setPosition: function (left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.node.style.left = left ? left + 'px' : '';
    this.node.style.top = top ? top + 'px' : '';
    this.node.style.width = width ? width + 'px' : '';
    this.node.style.height = height ? height + 'px' : '';
  },
  setBackgroundColor: function (color) {
    this.node.style.backgroundColor = color;
  },
  addChildView: function (view) {
    if (view && view.id && !this.childViews[view.id]) {
      view.parentView = this;
      this.childViews[view.id] = view;
      this.node.appendChild(view.node);
    } else {
      console.log('View ID (' + view.id + ') is not defined or already exist in parent View (' + this.id + ')');
    }
  },
  getParentView: function () {
    return this.parentView;
  }
});

// Source: src/uijs/core/components/ui-frameview/FrameView.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var FrameView = BaseView.extend({
  constructor: function (id) {
    this.base('FrameView_' + id);
    this.childViews = {};
    this.setNode(templates.frame.frame(this));
  }
});

// Source: src/uijs/core/components/ui-frameslider/FrameAnimation.js
/**
 * Created by TrungDQ3 on 6/11/14.
 */

var $frameAnimation = {
  swipeLeft: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(-100%, 0, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  swipeRight: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(100%, 0, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  swipeUp: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(0, -100%, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  swipeDown: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(0, 100%, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  zoomUpDown: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'scale(0)';
    } else {
      node.style.webkitTransform = 'scale(1)';
    }
  },
  flipRight: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateY(90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateY(0deg)';
    }
  },
  flipLeft: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateY(-90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateY(0deg)';
    }
  },
  flipUp: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateX(90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateX(0deg)';
    }
  },
  flipDown: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateX(-90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateX(0deg)';
    }
  }
};

// Source: src/uijs/core/components/ui-frameslider/FrameSlider.js
/**
 * Created by TrungDQ3 on 6/10/14.
 */

var FrameSlider = BaseView.extend({
  currentIndex: 0,
  timeOut: 3,
  duration: 1,
  images: [],
  effects: [],
  constructor: function (id, images, effects) {
    this.base('FrameSlider_' + id);
    this.childViews = {};
    this.setNode(templates.frameslider.slider(this));
    if (images) {
      this.setImages(images);
    }
    if (effects) {
      this.setEffects(effects);
    }
  },
  setImages: function (images) {
    var self = this,
      defs = [];
    this.images = images;
    this.hide();
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      image.setPosition(0, 0, this.width, this.height);
      image.node.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
      image.node.style.webkitTransition = '-webkit-transform ' + this.duration + 's';
      defs.push(image.imageReady);
    }
    Deferred.when(Deferred, defs).done(function() {
      for (var i = 1; i < arguments.length; i++) {
        self.addChildView(arguments[i][0]);
      }
      self.show();
      self.startSlideShow();
    });
  },
  setEffects: function (effects) {
    this.effects = effects;
  },
  hide: function () {
    this.node.style.webkitTransition = 'opacity 0.5s';
    this.node.style.opacity = 0;
  },
  show: function () {
    this.node.style.opacity = 0.99;
  },
  startSlideShow: function () {
    var self = this;
    this.currentIndex = this.images.length - 1;
    for (var i = 0; i < this.images.length; i++) {
      this.images[i].node.style.zIndex = i + 1;
    }
    var moveLayers = function(index) {
      self.images[index].node.style.zIndex = 1;
      for (var i = 0; i < self.images.length; i++) {
        if (i != index) {
          self.images[i].node.style.zIndex = +self.images[i].node.style.zIndex + 1;
        }
      }
    };
    var doTransition = function() {
      if (self.currentIndex < 0) {
        self.currentIndex = self.images.length - 1;
      }
      var anim = $frameAnimation[self.getRandomEffect()];

      if (anim) {
        anim(self.images[self.currentIndex].node);

        self.currentIndex--;

        setTimeout(function() {
          var targetIndex = self.currentIndex + 1;
          anim(self.images[targetIndex].node, true);
          moveLayers(targetIndex);
        }, self.duration * 1000);
      } else {
        moveLayers(self.currentIndex--);
      }
      setTimeout(doTransition, self.timeOut * 1000);
    };
    setTimeout(doTransition, this.timeOut * 1000);
  },
  /**
   * Set transition timeout in second
   * @param n
   */
  setTimeout: function (n) {
    this.timeOut = n;
  },
  setDuration: function (n) {
    this.duration = n;
    for (var i = 0; i < this.images.length; i++) {
      var image = this.images[i];
      image.node.style.webkitTransition = '-webkit-transform ' + this.duration + 's';
    }
  },
  getRandomEffect: function () {
    return this.effects[Math.floor(Math.random()*this.effects.length)] || '';
  }
});

// Source: src/uijs/core/components/ui-imageview/ImageView.js
/**
 * Created by TrungDQ3 on 6/10/14.
 */

var ImageView = BaseView.extend({
  imageSource: '',
  imageReady: null,
  constructor: function (id, src) {
    var self = this;
    this.base('ImageView_' + id);

    if (src) {
      this.imageSource = src;
    }

    this.setNode(templates.imageview.image(this));

    this.imageReady = new Deferred();
    this.node.onload = function(e) {
      self.imageReady.resolve(self, e);
    };
  },
  setImageSource: function(src) {
    this.imageSource = src;
    this.node.src = src;
  }
});

// Source: dist/js/include/appModules.js


// Source: dist/js/include/appComponents.js
