// This file was automatically generated from frame.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.frame == 'undefined') { templates.frame = {}; }


templates.frame.frame = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '"></div>';
};

;
// This file was automatically generated from frame_slider.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.frameslider == 'undefined') { templates.frameslider = {}; }


templates.frameslider.slider = function(opt_data, opt_ignored) {
  var output = '<div id="' + soy.$$escapeHtml(opt_data.id) + '">';
  var imageList11 = opt_data.images;
  var imageListLen11 = imageList11.length;
  for (var imageIndex11 = 0; imageIndex11 < imageListLen11; imageIndex11++) {
    var imageData11 = imageList11[imageIndex11];
    output += templates.imageview.image(soy.$$augmentMap(opt_data, {id: imageData11.id, imageSource: imageData11.imageSource}));
  }
  output += '</div>';
  return output;
};

;
// This file was automatically generated from image_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.imageview == 'undefined') { templates.imageview = {}; }


templates.imageview.image = function(opt_data, opt_ignored) {
  return '<img id="' + soy.$$escapeHtml(opt_data.id) + '" src="' + soy.$$escapeHtml(opt_data.imageSource) + '"/>';
};
