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
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="frame_slider"></div>';
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

    constructor: function () {
        this._subscribers = [];
    },

    subscribe: function () {
        var d = new Deferred();
        this._subscribers.push(d);
        return d;
    },

    publish: function (data) {
        var subs = this._subscribers;
        this.clear();
        for (var i = 0; i < subs.length; i++)
            subs[i].resolve(data);
    },

    clear: function () {
        this._subscribers = [];
    }
});

// Source: dist/js/include/coreInit.js
// Source: src/uijs/core/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var $coreStartup = new Deferred();

document.addEventListener('DOMContentLoaded', function () {
    if (!DEBUG_MODE) {
        $coreStartup.resolve();
    }
});

// Source: src/uijs/app/main.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

$coreStartup.done(function () {
  document.body.style.position = 'absolute';
  document.body.style.width = APP_WIDTH + 'px';
  document.body.style.height = APP_HEIGHT + 'px';
  document.body.style.top = '0px';
  document.body.style.left = '0px';

  window.$bodyFrame = new FrameView('bodyFrame');
  window.$bodyFrame.setPosition(0, 0, APP_WIDTH, APP_HEIGHT);
  window.$bodyFrame.setBackgroundColor('#eee');
  document.body.appendChild(window.$bodyFrame.node);
});

/*
var main = function () {
  var a = new ImageView('image1', 'http://www.byui.edu/images/agriculture-life-sciences/flower.jpg'),
    b = new ImageView('image2', 'http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/' +
      'Tropical+Plumeria+Flower.jpg'),
    c = new ImageView('image3', 'http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/' +
      'flowers333.jpg'),
    d = new ImageView('image4', 'http://2.bp.blogspot.com/-WuasmTMjMA4/TY0SS4TzIMI/AAAAAAAAFB4/6alyfOzWsqM/s640/' +
      'flowers-wallpapers-love-blooms-roses-bunch-of-flowers.jpg'),
    e = new ImageView('image5', 'http://www.boatshedmarket.com.au/image/data/flowers_img.jpg'),
    f = new ImageView('image6', 'http://www.grandpalaceriga.com/images/catalog_full/89ac280cc25173a167f93d4f0e7c' +
      '1e21.jpg'),
    g = new ImageView('image7', 'http://4.bp.blogspot.com/_6D_evDvZgNA/SKpsT-ic4DI/AAAAAAAAAD8/fv4lqqI0PRY/s400/' +
      'fragile-white-flowers.jpg'),
    h = new ImageView('image8', 'http://www.graphix1.co.uk/wp-content/uploads/2011/08/08Flowers.jpg'),
    i = new ImageView('image9', 'http://1.bp.blogspot.com/-WS3KVqdQn_Q/T-bU51hQJ3I/AAAAAAAAAFo/zwC4CKr7Xh0/s1600/' +
      'the-desktop-hd-Flowers-wallpapers+(3).jpg'),
    j = new ImageView('image10', 'http://blog.interflora.co.uk/wp-content/uploads/2012/07/Passion-Flower.jpg'),
    k = new ImageView('image11', 'http://1.bp.blogspot.com/-JBzh6ow4OW0/UTM-iRlaiyI/AAAAAAAASec/stu52MBuWnM/s1600/' +
      'y016-741067.jpg'),
    l = new ImageView('image12', 'http://1.bp.blogspot.com/-DvLpL0NphyU/TpSFQ6WiUOI/AAAAAAAABbg/B-ykNMvWQvU/s1600/' +
      'happy.jpg'),
    slider1 = new FrameSlider('slider1'),
    slider2 = new FrameSlider('slider2'),
    slider3 = new FrameSlider('slider3'),
    slider4 = new FrameSlider('slider4'),
    target1 = $bodyFrame.childViews.Frame_1,
    target2 = $bodyFrame.childViews.Frame_2,
    target3 = $bodyFrame.childViews.Frame_3,
    target4 = $bodyFrame.childViews.Frame_4;

  slider1.setPosition(0, 0, target1.width, target1.height);
  slider1.setImages([a, b, c]);
  slider1.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target1.addChildView(slider1);

  slider2.setPosition(0, 0, target2.width, target2.height);
  slider2.setImages([d, e, f]);
  slider2.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target2.addChildView(slider2);

  slider3.setPosition(0, 0, target3.width, target3.height);
  slider3.setImages([g, h, i]);
  slider3.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target3.addChildView(slider3);

  slider4.setPosition(0, 0, target4.width, target4.height);
  slider4.setImages([j, k, l]);
  slider4.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target4.addChildView(slider4);

  $(target1.node).addClass('frame_slider');
  $(target2.node).addClass('frame_slider');
  $(target3.node).addClass('frame_slider');
  $(target4.node).addClass('frame_slider');
};
 */


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
        Deferred.when(Deferred, defs).done(function () {
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
        var moveLayers = function (index) {
            self.images[index].node.style.zIndex = 1;
            for (var i = 0; i < self.images.length; i++) {
                if (i != index) {
                    self.images[i].node.style.zIndex = +self.images[i].node.style.zIndex + 1;
                }
            }
        };
        var doTransition = function () {
            if (self.currentIndex < 0) {
                self.currentIndex = self.images.length - 1;
            }
            var anim = $frameAnimation[self.getRandomEffect()];

            if (anim) {
                anim(self.images[self.currentIndex].node);

                self.currentIndex--;

                setTimeout(function () {
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
        return this.effects[Math.floor(Math.random() * this.effects.length)] || '';
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
        this.node.onload = function (e) {
            self.imageReady.resolve(self, e);
        };
    },
    setImageSource: function (src) {
        this.imageSource = src;
        this.node.src = src;
    }
});

// Source: dist/js/include/appLibs.js


// Source: dist/js/include/appModules.js
// Source: src/uijs/app/modules/config/Config.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

// Device config
var DEVICE_ID = "311TRUNGDQ3-W7";

// App config
var APP_WIDTH = 1280;
var APP_HEIGHT = 720;
var FRAME_GAP = 3;

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
    swipeLeft: 'swipeLeft',
    swipeRight: 'swipeRight',
    swipeUp: 'swipeUp',
    swipeDown: 'swipeUp',
    zoomUpDown: 'zoomUpDown',
    flipRight: 'flipRight',
    flipLeft: 'flipLeft',
    flipUp: 'flipUp',
    flipDown: 'flipDown'
  },
  method: {
    require_device_authenticate: 'require_device_authenticate',
    device_authenticate: 'device_authenticate'
  }
};

// Source: src/uijs/app/modules/frame_manager/FrameUtils.js
/**
 * Created by DuyPT1 on 6/11/14.
 */

var $frameUtils = {
  getSubFramePosition: function(layout, index, width, height){
    switch (layout) {
      case $frameEnum.layout.vp2:
        return {
          left: 0,
          top: (FRAME_GAP + height) * index / 2,
          width: width,
          height: height/2 - FRAME_GAP/2
        };
      case $frameEnum.layout.vp3:
        return {
          left: 0,
          top: (height / 3 + FRAME_GAP / 3) * index ,
          width: width,
          height: (height - FRAME_GAP * 3 - FRAME_GAP) / 3 + FRAME_GAP/1.5
        };
      case $frameEnum.layout.hp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
          left:  (FRAME_GAP + width) * index / 2,
          top: 0,
          width: (width - FRAME_GAP) / 2 ,
          height: height
        };
      case $frameEnum.layout.hp3:
        if (index == 1 || index == 2) {
          return {
            left: (width + FRAME_GAP) / 2,
            top: (index - 1) * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP*2),
            width: width / 2 - FRAME_GAP * 1.5 + FRAME_GAP,
            height: (height - FRAME_GAP ) / 2
          };
        } else {
          return {
            left: 0,
            top: 0,
            width: width / 2 - FRAME_GAP * 1.5 + FRAME_GAP,
            height: height
          };
        }
        break;
      case $frameEnum.layout.hp4:
        if (index === 0 || index == 1) {
          return {
            left: 0,
            top: index * (height / 2 + FRAME_GAP/2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP * 1.5,
            height: (height - FRAME_GAP) / 2
          };
        } else {
          return {
            left: width / 2 + FRAME_GAP / 2,
            top:  (index - 2) * (height + FRAME_GAP) / 2,
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP * 1.5,
            height: (height - FRAME_GAP) / 2
          };
        }
        break;
      default:
        return null;
    }
  },
  getFramePosition: function (layout, index, height, width) {
    switch (layout) {
      case $frameEnum.layout.vp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 3) / 2
        };
      case $frameEnum.layout.vp3:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3) / 3 + FRAME_GAP / 2),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 3 - FRAME_GAP) / 3
        };
      case $frameEnum.layout.hp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
          left: FRAME_GAP + index * (width - FRAME_GAP) / 2,
          top: FRAME_GAP,
          width: width / 2 - FRAME_GAP * 1.5,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp3:
        if (index == 1 || index == 2) {
          return {
            left: (width + FRAME_GAP) / 2,
            top: FRAME_GAP + (index - 1) * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP),
            width: width / 2 - FRAME_GAP * 1.5,
            height: (height - FRAME_GAP * 3) / 2
          };
        } else {
          return {
            left: FRAME_GAP + index * (width - FRAME_GAP) / 2,
            top: FRAME_GAP,
            width: width / 2 - FRAME_GAP * 1.5,
            height: (height - FRAME_GAP * 2)
          };
        }
        break;
      case $frameEnum.layout.hp4:
        if (index === 0 || index == 1) {
          return {
            left: FRAME_GAP,
            top: FRAME_GAP + index * (height / 2 - FRAME_GAP / 2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
            height: height / 2 - FRAME_GAP * 1.5
          };
        } else {
          return {
            left: width / 2 + FRAME_GAP / 2,
            top: FRAME_GAP + (index - 2) * (height / 2 - FRAME_GAP / 2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
            height: height / 2 - FRAME_GAP * 1.5
          };
        }
        break;
      default:
        return null;
    }
  },
  addSliderToFrame: function(frameData, frameView) {
    var items = frameData.items;
    if (items && items.length > 0) {
      var slider = new FrameSlider(frameData.frameId);
      slider.setPosition(0, 0, frameView.width, frameView.height);
      var itemViews = [];
      for (var k = 0; k < items.length; k++) {
        if (items[k].type == $frameEnum.item.image) {
          itemViews.push(new ImageView(k, items[k].url));
        }
      }
      slider.setImages(itemViews);
      slider.setEffects(frameData.effects);
      slider.setTimeout(6 + Math.random() * 6);
      frameView.addChildView(slider);
      $(frameView.node).addClass('frame_slider_container');
    }
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
    $backendService.subscribe().done(function (data) {
      console.log(data);
      console.log('Got data, now what?');
    });
    $backendService.connectBackend().done(function () {
      console.log('Connect to backend success');
    }).fail(function () {
      console.log('Connect to backend failed');
    });

    this.loadData();
    this.show();
  },
  loadData: function () {
    var data = $backendService.getFrameData();

    for (var i = 0; i < data.frames.length; i++) {
      var frameData = data.frames[i];
      var frameView = new FrameView(frameData.frameId);
      var _pos1 = $frameUtils.getFramePosition(data.masterLayout, i, APP_HEIGHT, APP_WIDTH);
      frameView.setPosition(_pos1.left, _pos1.top, _pos1.width, _pos1.height);

      if (frameData.subLayout !== null) {
        for(var j = 0; j < frameData.frames.length; j++){
          var subFrameView = new FrameView(frameData.frames[j].frameId);
          var _pos2 = $frameUtils.getSubFramePosition(
            frameData.subLayout, j, _pos1.width, _pos1.height);
          subFrameView.setPosition(_pos2.left, _pos2.top, _pos2.width, _pos2.height);
          subFrameView.setBackgroundColor('#ccc');

          $frameUtils.addSliderToFrame(frameData.frames[j], subFrameView);

          frameView.addChildView(subFrameView);
        }
      } else {
        frameView.setBackgroundColor('#ccc');

        $frameUtils.addSliderToFrame(frameData, frameView);

      }// end if


      this.frames.push(frameView);
    }// end for
  },
  show: function () {
    for (var i = 0; i < this.frames.length; i++) {
      $bodyFrame.addChildView(this.frames[i]);
    }
  }
});

// Source: src/uijs/app/modules/frame_manager/BackendService.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Topic.extend({
  BACKEND_SOCKET_URL: 'ws://10.88.66.251:8080/tsb-shareboard-api/websocket',
  socket: null,
  _isListening: false,
  getFrameData: function () {
    return {
      templateId: 1,
      masterLayout: 'hp4',
      frames: [
        {
          frameId: 1,
          subLayout: null,
          frames: [],
          items: [
            {
              itemId: 1,
              type: 'image',
              url: 'http://www.byui.edu/images/agriculture-life-sciences/flower.jpg'
            },
            {
              itemId: 2,
              type: 'image',
              url: 'http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/' +
                'Tropical+Plumeria+Flower.jpg'
            },
            {
              itemId: 3,
              type: 'image',
              url: 'http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/' +
                'flowers333.jpg'
            }
          ],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        },
        {
          frameId: 2,
          subLayout: 'hp3',
          frames: [
            {
              frameId: 3,
              items: [
                {
                  itemId: 4,
                  type: 'image',
                  url: 'http://www.boatshedmarket.com.au/image/data/flowers_img.jpg'
                },
                {
                  itemId: 5,
                  type: 'image',
                  url: 'http://www.grandpalaceriga.com/images/catalog_full/89ac280cc25173a167f93d4f0e7c' +
                    '1e21.jpg'
                },
                {
                  itemId: 6,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/_6D_evDvZgNA/SKpsT-ic4DI/AAAAAAAAAD8/fv4lqqI0PRY/s400/' +
                    'fragile-white-flowers.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 4,
              items: [
                {
                  itemId: 7,
                  type: 'image',
                  url: 'http://www.graphix1.co.uk/wp-content/uploads/2011/08/08Flowers.jpg'
                },
                {
                  itemId: 8,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-WS3KVqdQn_Q/T-bU51hQJ3I/AAAAAAAAAFo/zwC4CKr7Xh0/s1600/' +
                    'the-desktop-hd-Flowers-wallpapers+(3).jpg'
                },
                {
                  itemId: 9,
                  type: 'image',
                  url: 'http://blog.interflora.co.uk/wp-content/uploads/2012/07/Passion-Flower.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 5,
              items: [
                {
                  itemId: 10,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-JBzh6ow4OW0/UTM-iRlaiyI/AAAAAAAASec/stu52MBuWnM/s1600/' +
                    'y016-741067.jpg'
                },
                {
                  itemId: 11,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-DvLpL0NphyU/TpSFQ6WiUOI/AAAAAAAABbg/B-ykNMvWQvU/s1600/' +
                    'happy.jpg'
                },
                {
                  itemId: 12,
                  type: 'image',
                  url: 'http://images2.layoutsparks.com/1/179204/no-idea-t5-flowers.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            }
          ],
          items: [],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        },
        {
          frameId: 6,
          subLayout: 'hp4',
          frames: [
            {
              frameId: 7,
              items: [
                {
                  itemId: 13,
                  type: 'image',
                  url: 'http://3.bp.blogspot.com/-ONEZIRjcjXE/Uh-WjyE3aSI/AAAAAAAAAos/dLqEAVDfggE/s640/' +
                    'blue-flower-wallpaper-.jpg'
                },
                {
                  itemId: 14,
                  type: 'image',
                  url: 'http://www.bhg.com/videos/hosting/media/bhg/1620905/59977667/add-fragrant-flowers-' +
                    'to-your-garden.jpg'
                },
                {
                  itemId: 15,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-QrlW8v6xQos/UYnb7bMSNJI/AAAAAAAAKlI/XcqrCoJsZ68/s1600/vibra' +
                    'nt-flowers-248131_1024_768rrr.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 8,
              items: [
                {
                  itemId: 16,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/--VqUcuRqS8Q/TYwVmOKir8I/AAAAAAAAAJQ/ZSK5ygALMeU/s1600/red-flowers.jpg'
                },
                {
                  itemId: 17,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purple-flower-87a.jpg'
                },
                {
                  itemId: 18,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/-e9Obk_RFH4I/UYdQPpxggOI/AAAAAAAAKUY/KBVhQxwnB4c/s640/flowers44.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 9,
              items: [
                {
                  itemId: 19,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-ik3E8PBBf70/TwaZ9PMNbrI/AAAAAAAAAG0/kNrGnEbZ-WY/s640/flowers2.jpg'
                },
                {
                  itemId: 20,
                  type: 'image',
                  url: 'http://cdn.blogs.sheknows.com/gardening.sheknows.com/2011/02/lotus-flower.jpg'
                },
                {
                  itemId: 21,
                  type: 'image',
                  url: 'http://mw2.google.com/mw-panoramio/photos/medium/96447714.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 10,
              items: [
                {
                  itemId: 22,
                  type: 'image',
                  url: 'http://3.bp.blogspot.com/-ui6lvZa8CGA/TlnS2Hv2DkI/AAAAAAAACyM/E34Dab7dWfs/s685/Lily+flower+wallpaper4.jpg'
                },
                {
                  itemId: 23,
                  type: 'image',
                  url: 'http://flowerinfo.org/wp-content/gallery/lupine-flowers/lupine-flowers-5.jpg'
                },
                {
                  itemId: 24,
                  type: 'image',
                  url: 'http://vnfriend.files.wordpress.com/2010/11/flower-4.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            }
          ],
          items: [],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        },
        {
          frameId: 11,
          subLayout: 'hp4',
          frames: [
            {
              frameId: 12,
              items: [
                {
                  itemId: 25,
                  type: 'image',
                  url: 'http://3.bp.blogspot.com/-kEDW4tNSmpA/UYnb_TbNiqI/AAAAAAAAKlc/MuZ3D0k6xRs/s400/wallpa' +
                    'pers-of-Rose-Flower456.jpg'
                },
                {
                  itemId: 26,
                  type: 'image',
                  url: 'http://cimages.proflowers.com/is/image/ProvideCommerce/PF_13_T220_MDAY_VA0607_W1_SQ'
                },
                {
                  itemId: 27,
                  type: 'image',
                  url: 'http://cdn.twentytwowords.com/wp-content/uploads/Hot-Lips-Flower-01-634x396.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 13,
              items: [
                {
                  itemId: 28,
                  type: 'image',
                  url: 'http://www.whats-your-sign.com/images/ChineseFlowerMeanings.jpg'
                },
                {
                  itemId: 29,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-7YF-17Q2s8c/Uh-WX2tVrHI/AAAAAAAAAoc/lwRlay4pL8s/s640/light' +
                    '-blue-flowers-wallpapers-hd.jpg'
                },
                {
                  itemId: 30,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-l-ePa0ejM18/UAjHJz63NZI/AAAAAAAAEdU/XErwfKE6JPk/s1600/bird' +
                    '-of-paradise-flower-1.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 14,
              items: [
                {
                  itemId: 31,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/_mvHl0jIiX-E/S2j1d3skY_I/AAAAAAAAE9Q/ni4g5VuGmk8/s640/blue' +
                    '-violet-flower07.jpg'
                },
                {
                  itemId: 32,
                  type: 'image',
                  url: 'http://www.designboom.com/weblog/images/images_2/lara/818_images/robert_buelteman/' +
                    'electrocuted_flowers05.jpg'
                },
                {
                  itemId: 33,
                  type: 'image',
                  url: 'http://coverslike.com/thumbs/red_flower-t1.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 15,
              items: [
                {
                  itemId: 34,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/-EM-G_YNgKJ8/TV38pYHcG2I/AAAAAAAAJCU/GCjizjfOWMg/s400/pin' +
                    'k+rose+wallpapers+%252810%2529.jpg'
                },
                {
                  itemId: 35,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/-2k0vUtH2xZ8/US8aB1Fz1DI/AAAAAAAAHGI/XoxwF_s6Dhs/s400/flowe' +
                    'r_in_blue_sky-normal5.4.jpg'
                },
                {
                  itemId: 36,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purpl' +
                    'e-flower-87a.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            }
          ],
          items: [],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        }
      ]
    };
  },
  connectBackend: function () {
    var self = this;
    this.socket = new SocketClient();
    return this.socket.connect(this.BACKEND_SOCKET_URL).done(function () {
      self._isListening = true;
      self.startSubscribe();
    });
  },
  disconnectBackend: function () {
    this._isListening = false;
    this.socket.close();
  },
  startSubscribe: function () {
    var self = this;
    this.socket.subscribe().done(function (msgEvent) {
      self.processData(JSON.parse(msgEvent.data));
      if (self._isListening) {
        self.startSubscribe();
      }
    });
  },
  processData: function (data) {
    var self = this;
    switch (data.method) {
      case $frameEnum.method.require_device_authenticate:
        this.authenticateDevice();
        break;
      default:
        self.publish(data);
    }
  },
  authenticateDevice: function () {
    this.sendMessage($frameEnum.method.device_authenticate, {
      deviceId: DEVICE_ID
    });
  },
  sendMessage: function (method, data) {
    this.socket.send(JSON.stringify({
      method: method,
      data: data
    }));
  }
});

// Source: src/uijs/app/modules/frame_manager/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
$coreStartup.done(function() {
  window.$backendService = new BackendService();
  window.$frameManager = new FrameManager();
});

// Source: src/uijs/app/modules/socket_client/SocketClient.js
/**
 * Created by TrungDQ3 on 6/11/14.
 */

var SocketClient = Topic.extend({
  _ws: null,
  url: '',
  constructor: function (url) {
    if (url) {
      this.connect(url);
    }
    this.base();
  },
  connect: function (url) {
    var d = new Deferred();
    var self = this;
    this.url = url;
    this._ws = new WebSocket(url);

    this._ws.onopen = function() {
      d.resolve();
    };
    this._ws.onmessage = function (evt) {
      self.publish(evt);
    };
    this._ws.onclose = function() {
      d.reject();
    };
    return d;
  },
  send: function (msg) {
    this._ws.send(msg);
  },
  close: function () {
    this._ws.close();
  }
}, {
  isSupported: function () {
    return "WebSocket" in window;
  }
});

// Source: dist/js/include/appComponents.js
