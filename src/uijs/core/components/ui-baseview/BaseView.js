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