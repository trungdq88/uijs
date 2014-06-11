/**
 * Created by TrungDQ3 on 6/9/14.
 */
var $coreStartup = new Deferred();

document.addEventListener('DOMContentLoaded', function(){
  if (!DEBUG_MODE) {
    $coreStartup.resolve();
  }
});