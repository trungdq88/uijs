/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Topic.extend({
    BACKEND_SOCKET_URL: 'ws://10.88.66.251:8080/tsb-shareboard-api/websocket',
    BACKEND_API_URL: 'http://10.88.66.251:8080/tsb-shareboard-api/check/',
    socket: null,
    _isListening: false,
    defDisconnect: new Deferred(),
    getTemplate: function (templateId) {
        var d = new Deferred();
        $.getJSON(this.BACKEND_API_URL + 'template?id=' + templateId, function (data) {
            d.resolve(data);
        });
        return d;
    },
    connectBackend: function () {
        var self = this;
        this.socket = new SocketClient();
        this.socket.defClose.done(function() {
            self.defDisconnect.resolve();
        });
        return this.socket.connect(this.BACKEND_SOCKET_URL).done(function () {
            self._isListening = true;
            self.startSubscribe();
        });
    },
    disconnectBackend: function () {
        this._isListening = false;
        this.socket.close();
    },
    startSubscribe: function () {
        var self = this;
        this.socket.subscribe().done(function (msgEvent) {
            self.publish(JSON.parse(msgEvent.data));
            if (self._isListening) {
                self.startSubscribe();
            }
        });
    },
    sendMessage: function (method, data) {
        this.socket.send(JSON.stringify({
            method: method,
            data: data
        }));
    }
});