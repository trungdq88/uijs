/**
 * Created by TrungDQ3 on 6/9/14.
 */

var bodyFrame = new Frame('bodyFrame');
bodyFrame.setPosition(0, 0, APP_WIDTH, APP_HEIGHT);
bodyFrame.setBackgroundColor('#eee');

var initUIJS = function() {
  document.body.style.position = 'absolute';
  document.body.style.width = APP_WIDTH;
  document.body.style.height = APP_HEIGHT;
  document.body.style.top = '0px';
  document.body.style.left = '0px';
  document.body.style.padding = '0px';
  document.body.style.margin = '0px';
  document.body.appendChild(bodyFrame.node);
  main();
};

document.addEventListener('DOMContentLoaded', function(){
  initUIJS();
});