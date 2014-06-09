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