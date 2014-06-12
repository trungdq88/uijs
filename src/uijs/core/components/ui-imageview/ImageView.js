/**
 * Created by TrungDQ3 on 6/10/14.
 */

var ImageView = BaseView.extend({
    imageSource: '',
    imageReady: null,
    constructor: function (id, src) {
        var self = this;
        this.base('ImageView_' + id);

        if (src) {
            this.imageSource = src;
        }

        this.setNode(templates.imageview.image(this));

        this.imageReady = new Deferred();
        this.node.onload = function (e) {
            self.imageReady.resolve(self, e);
        };
    },
    setImageSource: function (src) {
        this.imageSource = src;
        this.node.src = src;
    }
});