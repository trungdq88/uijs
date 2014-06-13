/**
 * Created by TrungDQ3 on 6/13/14.
 */

var ItemView = BaseView.extend({
    itemSource: '',
    itemReady: null,
    constructor: function (id, src) {
        this.base('ItemView_' + id);

        if (src) {
            this.itemSource = src;
        }

        this.prepareItemNode();
    },
    prepareItemNode: function () {
        // Abstract method
    },
    setItemSource: function (src) {
        this.itemSource = src;
        return this.itemReady;
    },
    enableTransition: function (duration) {
        this.node.style.webkitTransition = '-webkit-transform ' + duration + 's';
    },
    disableTransition: function () {
        this.node.style.webkitTransition = '';
    }
});