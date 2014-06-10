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