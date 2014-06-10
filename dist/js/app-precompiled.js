// Source: dist/js/include/templates.js
// This file was automatically generated from frame.soy.
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
      console.log('View ID (' + view.id + ') is not defined or already exist in parent View')
    }
  },
  getParentView: function () {
    return this.parentView;
  }
});

// Source: src/uijs/core/components/ui-frame/Frame.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var Frame = BaseView.extend({
  constructor: function (id) {
    this.base('Frame_' + id);
    this.childViews = {};
    this.setNode(templates.frame.frame(this));
  }
});

// Source: src/uijs/core/components/ui-frameslider/FrameSlider.js
/**
 * Created by TrungDQ3 on 6/10/14.
 */

var FrameSlider = BaseView.extend({
  currentIndex: 0,
  timeOut: 3,
  duration: 1,
  images: [],
  constructor: function (id, images) {
    this.base('FrameSlider_' + id);
    this.setNode(templates.frameslider.slider(this));
    if (images) this.setImages(images);
  },
  setImages: function(images) {
    var self = this;
    this.images = images;
    var defs = [];
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
    var doTransition = function() {
      if (self.currentIndex < 0) {
        self.currentIndex = self.images.length - 1;
      }
      self.images[self.currentIndex].node.style.webkitTransform =
        'translate3d(' + (-self.width) + 'px, 0px, 0px)';

      self.currentIndex--;

      setTimeout(function() {
        var targetIndex = self.currentIndex + 1;
        self.images[targetIndex].node.style.zIndex = 1;
        self.images[targetIndex].node.style.webkitTransform =
          'translate3d(0px, 0px, 0px)';
        for (var i = 0; i < self.images.length; i++) {
          if (i != targetIndex) {
            self.images[i].node.style.zIndex = +self.images[i].node.style.zIndex + 1;
          }
        }
      }, self.duration * 1000);
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

    if (src) this.imageSource = src;

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
       case $frameEnum.layout.vp1:
         return {
                left: FRAME_GAP,
                top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3)),
                width: APP_WIDTH - FRAME_GAP*2,
                height: (APP_HEIGHT - FRAME_GAP * 2)
         };
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: APP_WIDTH - FRAME_GAP * 2,
          height: (APP_HEIGHT - FRAME_GAP * 3) / 2
        };
      case $frameEnum.layout.vp3:
        return {
              left: FRAME_GAP,
              top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3) / 3 + FRAME_GAP/2),
              width: APP_WIDTH - FRAME_GAP * 2,
              height: (APP_HEIGHT - FRAME_GAP * 3 - FRAME_GAP) / 3
        };
      case $frameEnum.layout.hp1:
        return {
              left: FRAME_GAP,
              top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3)),
              width: APP_WIDTH - FRAME_GAP*2,
              height: (APP_HEIGHT - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
              left: FRAME_GAP + index * (APP_WIDTH - FRAME_GAP) / 2 ,
              top: FRAME_GAP,
              width: APP_WIDTH / 2 - FRAME_GAP * 1.5,
              height: (APP_HEIGHT - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp3:
        if(index == 1 || index == 2){
            return {
                left: (APP_WIDTH + FRAME_GAP) / 2,
                top: FRAME_GAP + (index - 1)* ((APP_HEIGHT - FRAME_GAP * 3) / 2 + FRAME_GAP),
                width: APP_WIDTH / 2 - FRAME_GAP * 1.5,
                height: (APP_HEIGHT - FRAME_GAP * 3) / 2
            };
        } else {
            return {
                left: FRAME_GAP + index * (APP_WIDTH - FRAME_GAP) / 2 ,
                top: FRAME_GAP,
                width: APP_WIDTH / 2 - FRAME_GAP * 1.5,
                height: (APP_HEIGHT - FRAME_GAP * 2)
            };
        }
      case $frameEnum.layout.hp4:
        if(index == 0 || index == 1){
            return {
                left: FRAME_GAP,
                top: FRAME_GAP + index * (APP_HEIGHT / 2 - FRAME_GAP / 2),
                width: APP_WIDTH / 2 - FRAME_GAP * 2 + FRAME_GAP/2,
                height:  APP_HEIGHT / 2 - FRAME_GAP * 1.5
            };
        } else {
            return {
                left: APP_WIDTH / 2 + FRAME_GAP / 2,
                top: FRAME_GAP + (index - 2) * (APP_HEIGHT / 2 - FRAME_GAP / 2),
                width: APP_WIDTH / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
                height:  APP_HEIGHT / 2 - FRAME_GAP * 1.5
            };
        }
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
      masterLayout: 'hp4',
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
        },
        {
            frameId: 3,
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
        },
        {
            frameId: 4,
            items: [
                {
                    itemId: 7,
                    type: 'image',
                    url: 'http://abc.com/def4.jpg'
                },
                {
                    itemId: 8,
                    type: 'image',
                    url: 'http://abc.com/def5.jpg'
                },
                {
                    itemId: 9,
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
var APP_HEIGHT = 800;
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
  document.body.style.width = APP_WIDTH + 'px';
  document.body.style.height = APP_HEIGHT + 'px';
  document.body.style.top = '0px';
  document.body.style.left = '0px';
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
  var a = new ImageView('image1', 'http://www.byui.edu/images/agriculture-life-sciences/flower.jpg');
  var b = new ImageView('image2', 'http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/Tropical+Plumeria+Flower.jpg');
  var c = new ImageView('image3', 'http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/flowers333.jpg');

  var slider = new FrameSlider('slider');
  var target = bodyFrame.childViews.Frame_1;
  slider.setPosition(0,0,target.width, target.height);
  slider.setImages([a,b,c]);
  target.addChildView(slider);
  $(target.node).addClass('frame_slider');
};

// Source: dist/js/include/modulesInit.js
// Source: src/uijs/app/modules/frame_manager/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var $backendService = new BackendService();
var $frameManager = new FrameManager();