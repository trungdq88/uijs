/**
 * Created by TrungDQ3 on 6/9/14.
 */

var FrameManager = Base.extend({
  templateId: 0,
  masterLayout: '',
  frames: [],
  constructor: function () {
    var data = $backendService.getFrameData();

    for (var i = 0; i < data.frames.length; i++) {
      var frame = new Frame(i + 1);
      var position = this.getFramePosition(data.masterLayout, i);
      frame.setPosition(position.left, position.top, position.width, position.height);
      frame.setBackgroundColor('#ccc');
      /*
       for (var j = 0; j < dataFrame.items.length; j++) {
       switch (dataFrame.items[j].type) {
       case $frameEnum.item.image:

       break;
       case $frameEnum.item.video:
       console.log('Not implement yet');
       break;
       }
       }
       */
      this.frames.push(frame);
    }

    this.show();
  },

  show: function () {
    for (var i = 0; i < this.frames.length; i++) {
      bodyFrame.addChildView(this.frames[i]);
    }
  },

  getFramePosition: function (layout, index) {
    switch (layout) {
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: APP_WIDTH - FRAME_GAP * 2,
          height: (APP_HEIGHT - FRAME_GAP * 3) / 2
        };
      default:
        return null;
    }
  }
});