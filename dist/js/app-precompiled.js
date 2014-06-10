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
  var output = '<div id="' + soy.$$escapeHtml(opt_data.id) + '">';
  var imageList11 = opt_data.images;
  var imageListLen11 = imageList11.length;
  for (var imageIndex11 = 0; imageIndex11 < imageListLen11; imageIndex11++) {
    var imageData11 = imageList11[imageIndex11];
    output += templates.imageview.image(soy.$$augmentMap(opt_data, {id: imageData11.id, imageSource: imageData11.imageSource}));
  }
  output += '</div>';
  return output;
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
  images: [],
  constructor: function(id, images) {
    this.base('FrameSlider_' + id);
    this.images = images;
    this.setNode(templates.frameslider.slider(this));
  }
});

// Source: src/uijs/core/components/ui-imageview/ImageView.js
/**
 * Created by TrungDQ3 on 6/10/14.
 */

var ImageView = BaseView.extend({
  imageSource: '',
  constructor: function (id, src) {
    this.base('ImageView_' + id);
    if (src) this.imageSource = src;
    this.setNode(templates.imageview.image(this));
  },
  setImageSource: function(src) {
    this.imageSource = src;
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