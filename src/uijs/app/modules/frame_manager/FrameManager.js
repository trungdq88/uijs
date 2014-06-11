/**
 * Created by TrungDQ3 on 6/9/14.
 */

var FrameManager = Base.extend({
  templateId: 0,
  masterLayout: '',
  frames: [],
  constructor: function () {
    $backendService.subscribe().done(function (data) {
      console.log('Got data, now what?');
    });
    $backendService.connectBackend().done(function () {
      console.log('Connect to backend success');
    }).fail(function () {
      console.log('Connect to backend failed');
    });

    this.loadData();
    this.show();
  },
  loadData: function () {
    var data = $backendService.getFrameData();

    for (var i = 0; i < data.frames.length; i++) {
      var frame = new Frame(i + 1);
      var frameTmp = data.frames[i];
      var position = $frameUtils.getFramePosition(data.masterLayout, i, APP_HEIGHT, APP_WIDTH);
      frame.setPosition(position.left, position.top, position.width, position.height);

      if (frameTmp.subLayout !== null) {
        for(var j = 0; j < frameTmp.frames.length; j++){
          var childFrameTmp = frameTmp.frames[j];
          var subFrame = new Frame('Sub_' + (j + 1));
          var positionOfSubFrame = $frameUtils.getSubFramePosition(frameTmp.subLayout, j, position.width, position.height);
          subFrame.setPosition(positionOfSubFrame.left, positionOfSubFrame.top, positionOfSubFrame.width, positionOfSubFrame.height);
          subFrame.setBackgroundColor('#ccc');

          // Add slider

          frame.addChildView(subFrame);
        }
      } else {
        frame.setBackgroundColor('#ccc');

        // Add slider

      }// end if


//      for (var j = 0; j < data.frames.items.length; j++) {
//        switch (data.frames.items[j].type) {
//          case $frameEnum.item.image:
//              console.log('aaa');
//            break;
//          case $frameEnum.item.video:
//            console.log('Not implement yet');
//            break;
//        }
//      }

      this.frames.push(frame);
    }// end for
  },
  show: function () {
    for (var i = 0; i < this.frames.length; i++) {
      bodyFrame.addChildView(this.frames[i]);
    }
  }
});