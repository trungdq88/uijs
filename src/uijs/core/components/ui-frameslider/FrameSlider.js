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