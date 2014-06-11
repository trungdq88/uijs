// Source: src/uijs/app/modules/frame_manager/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
$coreStartup.done(function() {
  window.$backendService = new BackendService();
  window.$frameManager = new FrameManager();
});