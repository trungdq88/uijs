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