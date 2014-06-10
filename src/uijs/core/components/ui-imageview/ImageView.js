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