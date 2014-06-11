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