// Source: src/uijs/app/conf/conf.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var APP_WIDTH = 1000;
var APP_HEIGHT = 800;
var FRAME_GAP = 10;

// Source: src/uijs/core/init.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var bodyFrame = new Frame('bodyFrame');
bodyFrame.setPosition(0, 0, APP_WIDTH, APP_HEIGHT);
bodyFrame.setBackgroundColor('#eee');

var initUIJS = function() {
  document.body.style.position = 'absolute';
  document.body.style.width = APP_WIDTH + 'px';
  document.body.style.height = APP_HEIGHT + 'px';
  document.body.style.top = '0px';
  document.body.style.left = '0px';
  document.body.appendChild(bodyFrame.node);
  main();
};

document.addEventListener('DOMContentLoaded', function(){
  initUIJS();
});

// Source: src/uijs/app/main.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var main = function() {
  var a = new ImageView('image1', 'http://www.byui.edu/images/agriculture-life-sciences/flower.jpg');
  var b = new ImageView('image2', 'http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/Tropical+Plumeria+Flower.jpg');
  var c = new ImageView('image3', 'http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/flowers333.jpg');

  var slider = new FrameSlider('slider');
  var target = bodyFrame.childViews.Frame_1;
  slider.setPosition(0,0,target.width, target.height);
  slider.setImages([a,b,c]);
  target.addChildView(slider);
  $(target.node).addClass('frame_slider');
};