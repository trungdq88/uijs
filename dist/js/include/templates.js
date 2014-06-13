// This file was automatically generated from frame_view.soy.
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
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="frame_slider"><div id="' + soy.$$escapeHtml(opt_data.id) + '_loading" class="frame_slider_loading"></div><div id="' + soy.$$escapeHtml(opt_data.id) + '_content" class="frame_slider_content"></div></div>';
};

;
// This file was automatically generated from image_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.imageview == 'undefined') { templates.imageview = {}; }


templates.imageview.image = function(opt_data, opt_ignored) {
  return '<img id="' + soy.$$escapeHtml(opt_data.id) + '" src="' + soy.$$escapeHtml(opt_data.itemSource) + '"/>';
};

;
// This file was automatically generated from video_view.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.videoview == 'undefined') { templates.videoview = {}; }


templates.videoview.video = function(opt_data, opt_ignored) {
  return '<video id="' + soy.$$escapeHtml(opt_data.id) + '" loop><source id="' + soy.$$escapeHtml(opt_data.id) + '_source" src="' + soy.$$escapeHtml(opt_data.itemSource) + '"></video>';
};
