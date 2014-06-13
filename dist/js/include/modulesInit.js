// Source: src/uijs/app/modules/backend_service/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
$coreStartup.done(function () {
    window.$backendService = new BackendService();
});

// Source: src/uijs/app/modules/device_auth/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
$coreStartup.done(function () {
    window.$deviceAuth = new DeviceAuth();
});

// Source: src/uijs/app/modules/frame_manager/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
$coreStartup.done(function () {
    window.$frameManager = new FrameManager();
});