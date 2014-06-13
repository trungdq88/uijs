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