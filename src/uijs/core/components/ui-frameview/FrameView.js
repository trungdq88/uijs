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