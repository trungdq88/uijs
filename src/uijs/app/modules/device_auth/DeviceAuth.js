/**
 * Created by TrungDQ3 on 6/12/14.
 */
var DeviceAuth = Base.extend({
    authenticated: new Deferred(),
    constructor: function () {
        var self = this;
        $backendService.connectBackend().done(function () {
            console.log('Connect to backend success');
            self.startSubscribe();
        });
        this.authenticated.done(function (data) {
            console.log('Authenticated success: ' + data.message);
        }).fail(function (msg) {
            console.log('Authenticated failed: ' + msg);
        })
    },
    startSubscribe: function () {
        var self = this;
        $backendService.subscribe().done(function (data) {
            self.processData(data);
            self.startSubscribe();
        });
    },
    processData: function (data) {
        switch (data.method) {
            case $frameEnum.method.require_device_authenticate:
                this.authenticateDevice();
                break;
            case $frameEnum.method.device_authenticate:
                if (data.data.code == "002") {
                    this.authenticated.resolve(data.data);
                } else if (data.data.code == "001") {
                    this.authenticated.reject(data.data.message);
                }
                break;
            default:
        }
    },
    authenticateDevice: function () {
        $backendService.sendMessage($frameEnum.method.device_authenticate, {
            deviceId: DEVICE_ID
        });
    }
});