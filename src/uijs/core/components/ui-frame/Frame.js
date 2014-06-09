/**
 * Created by TrungDQ3 on 6/9/14.
 */
var Frame = BaseView.extend({
  constructor: function (id) {
    this.base(id);
    this.node = document.createElement('div');
    this.node.id = 'Frame_' + this.id;
    this.node.style.position = 'absolute';
  }
});