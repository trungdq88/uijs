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