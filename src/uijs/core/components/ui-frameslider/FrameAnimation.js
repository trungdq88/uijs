/**
 * Created by TrungDQ3 on 6/11/14.
 */

var $frameAnimation = {
  swipeLeft: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(-100%, 0, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  swipeRight: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(100%, 0, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  swipeUp: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(0, -100%, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  swipeDown: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'translate3d(0, 100%, 0)';
    } else {
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
    }
  },
  zoomUpDown: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'scale(0)';
    } else {
      node.style.webkitTransform = 'scale(1)';
    }
  },
  flipRight: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateY(90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateY(0deg)';
    }
  },
  flipLeft: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateY(-90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateY(0deg)';
    }
  },
  flipUp: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateX(90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateX(0deg)';
    }
  },
  flipDown: function (node, revert) {
    if (!revert) {
      node.style.webkitTransform = 'perspective(700px) rotateX(-90deg)';
    } else {
      node.style.webkitTransform = 'perspective(700px) rotateX(0deg)';
    }
  }
};