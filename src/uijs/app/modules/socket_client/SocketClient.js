/**
 * Created by TrungDQ3 on 6/11/14.
 */

var SocketClient = Topic.extend({
    _ws: null,
    url: '',
    defClose: new Deferred(),
    constructor: function (url) {
        if (url) {
            this.connect(url);
        }
        this.base();
    },
    connect: function (url) {
        var d = new Deferred();
        var self = this;

        if (!this.isSupported()) {
            d.reject('Your browser does not support WebSocket');
            return d;
        }

        this.url = url;
        this._ws = new WebSocket(url);

        this._ws.onopen = function () {
            d.resolve();
        };
        this._ws.onmessage = function (evt) {
            self.publish(evt);
        };
        this._ws.onclose = function () {
            self.defClose.resolve();
        };
        return d;
    },
    send: function (msg) {
        this._ws.send(msg);
    },
    close: function () {
        this._ws.close();
    },
    isSupported: function () {
        return "WebSocket" in window;
    }
});