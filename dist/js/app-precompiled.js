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
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="frame_slider"><div id="' + soy.$$escapeHtml(opt_data.id) + '_loading" class="frame_slider_loading"></div><div id="' + soy.$$escapeHtml(opt_data.id) + '_content" class="frame_slider_content"></div></div>';
};

;
// This file was automatically generated from image_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.imageview == 'undefined') { templates.imageview = {}; }


templates.imageview.image = function(opt_data, opt_ignored) {
  return '<img id="' + soy.$$escapeHtml(opt_data.id) + '" src="' + soy.$$escapeHtml(opt_data.itemSource) + '"/>';
};

;
// This file was automatically generated from video_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.videoview == 'undefined') { templates.videoview = {}; }


templates.videoview.video = function(opt_data, opt_ignored) {
  return '<video id="' + soy.$$escapeHtml(opt_data.id) + '" loop><source id="' + soy.$$escapeHtml(opt_data.id) + '_source" src="' + soy.$$escapeHtml(opt_data.itemSource) + '"></video>';
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

// Source: src/uijs/core/utils/DeferredPool.js
/**
 * Created by TrungDQ3 on 6/13/14.
 */

/**
 * For apps that run on limited hardware device. This class keep the number of
 * async request at a time is always smaller than 5 so we have more hardware
 * resource to do what we want.
 * @type {*}
 */
var DeferredPool = Base.extend({
    MAX_REQUEST: 5,
    count: 0,
    freeSlot: new Topic(),
    constructor: function() {

    },
    /**
     *
     * @param def Deferred
     * @returns Deferred
     */
    pushDefer: function(def) {
        var self = this;
        if (this.count < this.MAX_REQUEST) {
            this.count++;
            console.log('Request pool: ' + this.count);
            return def.done(function () {
                self.count--;
                console.log('Request pool: ' + self.count);
                // Notify that we have free slot here
                self.freeSlot.publish();
            });
        } else {
            // TODO: When self.count--, try to sendRequest again.
            console.log('Request pool is full! Waiting...');
            var d = new Deferred();
            this.freeSlot.subscribe().done(function() {
                return self.pushDefer(def).done(function() {
                    d.resolve.apply(d, arguments);
                });
            });
            return d;
        }
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
    addChildView: function (view, altNode) {
        if (view && view.id && !this.childViews[view.id]) {
            view.parentView = this;
            this.childViews[view.id] = view;
            if (altNode) {
                altNode.appendChild(view.node);
            } else {
                this.node.appendChild(view.node);
            }
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
    items: [],
    effects: [],
    contentNode: null,
    loadingNode: null,
    constructor: function (id, items, effects) {
        this.base('FrameSlider_' + id);
        this.childViews = {};
        this.setNode(templates.frameslider.slider(this));
        this.contentNode = $(this.node).find('#' + this.id + '_content')[0];
        this.loadingNode = $(this.node).find('#' + this.id + '_loading')[0];
        this.loadingNode.style.webkitTransform = 'scaleX(0)';
        if (items) {
            this.setItems(items);
        }
        if (effects) {
            this.setEffects(effects);
        }
    },
    setPosition: function (left, top, width, height) {
        this.base(left, top, width, height);
        this.loadingNode.style.width = (this.width*0.8) + 'px';
        this.loadingNode.style.left = (this.width*0.1) + 'px';
        this.loadingNode.style.top = (this.height / 2 - 1) + 'px';
    },
    setItems: function (items) {
        var self = this,
            loaded = 0;
        this.items = items;
        this.hide();

        var updateProcess = function () {
            loaded++;
            if (loaded === items.length) {
                setTimeout(function () {
                    for (var i = 0; i < items.length; i++) {
                        self.addChildView(items[i], self.contentNode);
                        if (item instanceof VideoView) {
                            items[i].play();
                        }
                    }
                    self.show();
                    if (items.length > 1) {
                        self.startSlideShow();
                    }
                    self.loadingNode.parentNode.removeChild(self.loadingNode);
                    self.node.style.background = '';
                }, 1000);
            }
            self.updateProcessbar(loaded / items.length);
        };
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.setPosition(0, 0, this.width, this.height);
            item.node.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
            item.itemReady.done(updateProcess);
        }
    },
    updateProcessbar: function (percent) {
        this.loadingNode.style.webkitTransform = 'scaleX(' + percent + ')';
    },
    setEffects: function (effects) {
        this.effects = effects;
    },
    hide: function () {
        this.contentNode.style.opacity = 0;
    },
    show: function () {
        this.contentNode.style.opacity = 0.99;
    },
    startSlideShow: function () {
        var self = this;
        this.currentIndex = this.items.length - 1;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].node.style.zIndex = i + 1;
        }
        var moveLayers = function (index) {
            self.items[index].node.style.zIndex = 1;
            for (var i = 0; i < self.items.length; i++) {
                if (i != index) {
                    self.items[i].node.style.zIndex = +self.items[i].node.style.zIndex + 1;
                }
            }
        };
        var doTransition = function () {
            if (self.currentIndex < 0) {
                self.currentIndex = self.items.length - 1;
            }
            var anim = $frameAnimation[self.getRandomEffect()];

            if (anim) {
                self.items[self.currentIndex].enableTransition(self.duration);
                anim(self.items[self.currentIndex].node);

                self.currentIndex--;

                setTimeout(function () {
                    var targetIndex = self.currentIndex + 1;
                    self.items[targetIndex].disableTransition();
                    anim(self.items[targetIndex].node, true);
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
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.node.style.webkitTransition = '-webkit-transform ' + this.duration + 's';
        }
    },
    getRandomEffect: function () {
        return this.effects[Math.floor(Math.random() * this.effects.length)] || '';
    }
});

// Source: src/uijs/core/components/ui-itemview/ItemView.js
/**
 * Created by TrungDQ3 on 6/13/14.
 */

var ItemView = BaseView.extend({
    itemSource: '',
    itemReady: null,
    constructor: function (id, src) {
        this.base('ItemView_' + id);

        if (src) {
            this.itemSource = src;
        }

        this.prepareItemNode();
    },
    prepareItemNode: function () {
        // Abstract method
    },
    setItemSource: function (src) {
        this.itemSource = src;
        return this.itemReady;
    },
    enableTransition: function (duration) {
        this.node.style.webkitTransition = '-webkit-transform ' + duration + 's';
    },
    disableTransition: function () {
        this.node.style.webkitTransition = '';
    }
});

// Source: src/uijs/core/components/ui-imageview/ImageView.js
/**
 * Created by TrungDQ3 on 6/10/14.
 */

var ImageView = ItemView.extend({
    constructor: function (id, src) {
        this.base('ImageView_' + id, src);
    },
    prepareItemNode: function () {
        var self = this;
        this.setNode(templates.imageview.image(this));

        this.itemReady = new Deferred();
        this.node.addEventListener('load', function (e) {
            self.itemReady.resolve(self, e);
        });
    },
    setItemSource: function (src) {
        this.node.src = src;
        return this.base(src);
    }
});

// Source: src/uijs/core/components/ui-videoview/VideoView.js
/**
 * Created by TrungDQ3 on 6/13/14.
 */

var VideoView = ItemView.extend({
    constructor: function (id, src) {
        this.base('VideoView_' + id, src);
    },
    prepareItemNode: function () {
        var self = this;
        this.setNode(templates.videoview.video(this));

        this.itemReady = new Deferred();
        this.node.addEventListener('canplay', function (e) {
            self.itemReady.resolve(self, e);
        });
    },
    setItemSource: function (src) {
        this.node.src = src;
        this.node.load();
        return this.base(src);
    },
    play: function () {
        this.node.play();
    }
});

// Source: dist/js/include/appLibs.js


// Source: dist/js/include/appModules.js


// Source: dist/js/include/appComponents.js
