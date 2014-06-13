/**
 * Created by TrungDQ3 on 6/13/14.
 */

/**
 * For apps that run on limited hardware device. This class keep the number of
 * async request at a time is always smaller than 5 so we have more hardware
 * resource to do what we want.
 * @type {*}
 */
var DeferredPool = Base.extend({
    MAX_REQUEST: 5,
    count: 0,
    freeSlot: new Topic(),
    constructor: function() {

    },
    /**
     *
     * @param def Deferred
     * @returns Deferred
     */
    pushDefer: function(def) {
        var self = this;
        if (this.count < this.MAX_REQUEST) {
            this.count++;
            console.log('Request pool: ' + this.count);
            return def.done(function () {
                self.count--;
                console.log('Request pool: ' + self.count);
                // Notify that we have free slot here
                self.freeSlot.publish();
            });
        } else {
            // TODO: When self.count--, try to sendRequest again.
            console.log('Request pool is full! Waiting...');
            var d = new Deferred();
            this.freeSlot.subscribe().done(function() {
                return self.pushDefer(def).done(function() {
                    d.resolve.apply(d, arguments);
                });
            });
            return d;
        }
    }
});