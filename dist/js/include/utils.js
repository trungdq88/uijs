// Source: src/uijs/core/utils/Topic.js
var Topic = Base.extend({

    _subscribers: null,

    constructor: function () {
        this._subscribers = [];
    },

    subscribe: function () {
        var d = new Deferred();
        this._subscribers.push(d);
        return d;
    },

    publish: function (data) {
        var subs = this._subscribers;
        this.clear();
        for (var i = 0; i < subs.length; i++)
            subs[i].resolve(data);
    },

    clear: function () {
        this._subscribers = [];
    }
});