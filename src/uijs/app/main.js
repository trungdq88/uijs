/**
 * Created by TrungDQ3 on 6/9/14.
 */

$coreStartup.done(function () {
  document.body.style.position = 'absolute';
  document.body.style.width = APP_WIDTH + 'px';
  document.body.style.height = APP_HEIGHT + 'px';
  document.body.style.top = '0px';
  document.body.style.left = '0px';

  window.$bodyFrame = new FrameView('bodyFrame');
  window.$bodyFrame.setPosition(0, 0, APP_WIDTH, APP_HEIGHT);
  window.$bodyFrame.setBackgroundColor('#eee');
  document.body.appendChild(window.$bodyFrame.node);
});

/*
var main = function () {
  var a = new ImageView('image1', 'http://www.byui.edu/images/agriculture-life-sciences/flower.jpg'),
    b = new ImageView('image2', 'http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/' +
      'Tropical+Plumeria+Flower.jpg'),
    c = new ImageView('image3', 'http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/' +
      'flowers333.jpg'),
    d = new ImageView('image4', 'http://2.bp.blogspot.com/-WuasmTMjMA4/TY0SS4TzIMI/AAAAAAAAFB4/6alyfOzWsqM/s640/' +
      'flowers-wallpapers-love-blooms-roses-bunch-of-flowers.jpg'),
    e = new ImageView('image5', 'http://www.boatshedmarket.com.au/image/data/flowers_img.jpg'),
    f = new ImageView('image6', 'http://www.grandpalaceriga.com/images/catalog_full/89ac280cc25173a167f93d4f0e7c' +
      '1e21.jpg'),
    g = new ImageView('image7', 'http://4.bp.blogspot.com/_6D_evDvZgNA/SKpsT-ic4DI/AAAAAAAAAD8/fv4lqqI0PRY/s400/' +
      'fragile-white-flowers.jpg'),
    h = new ImageView('image8', 'http://www.graphix1.co.uk/wp-content/uploads/2011/08/08Flowers.jpg'),
    i = new ImageView('image9', 'http://1.bp.blogspot.com/-WS3KVqdQn_Q/T-bU51hQJ3I/AAAAAAAAAFo/zwC4CKr7Xh0/s1600/' +
      'the-desktop-hd-Flowers-wallpapers+(3).jpg'),
    j = new ImageView('image10', 'http://blog.interflora.co.uk/wp-content/uploads/2012/07/Passion-Flower.jpg'),
    k = new ImageView('image11', 'http://1.bp.blogspot.com/-JBzh6ow4OW0/UTM-iRlaiyI/AAAAAAAASec/stu52MBuWnM/s1600/' +
      'y016-741067.jpg'),
    l = new ImageView('image12', 'http://1.bp.blogspot.com/-DvLpL0NphyU/TpSFQ6WiUOI/AAAAAAAABbg/B-ykNMvWQvU/s1600/' +
      'happy.jpg'),
    slider1 = new FrameSlider('slider1'),
    slider2 = new FrameSlider('slider2'),
    slider3 = new FrameSlider('slider3'),
    slider4 = new FrameSlider('slider4'),
    target1 = $bodyFrame.childViews.Frame_1,
    target2 = $bodyFrame.childViews.Frame_2,
    target3 = $bodyFrame.childViews.Frame_3,
    target4 = $bodyFrame.childViews.Frame_4;

  slider1.setPosition(0, 0, target1.width, target1.height);
  slider1.setImages([a, b, c]);
  slider1.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target1.addChildView(slider1);

  slider2.setPosition(0, 0, target2.width, target2.height);
  slider2.setImages([d, e, f]);
  slider2.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target2.addChildView(slider2);

  slider3.setPosition(0, 0, target3.width, target3.height);
  slider3.setImages([g, h, i]);
  slider3.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target3.addChildView(slider3);

  slider4.setPosition(0, 0, target4.width, target4.height);
  slider4.setImages([j, k, l]);
  slider4.setEffects(['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown']);
  target4.addChildView(slider4);

  $(target1.node).addClass('frame_slider');
  $(target2.node).addClass('frame_slider');
  $(target3.node).addClass('frame_slider');
  $(target4.node).addClass('frame_slider');
};
 */
