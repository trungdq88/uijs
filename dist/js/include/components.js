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