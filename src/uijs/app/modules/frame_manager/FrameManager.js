/**
 * Created by TrungDQ3 on 6/9/14.
 */

var FrameManager = Base.extend({
  templateId: 0,
  masterLayout: '',
  frames: [],
  constructor: function () {
    $backendService.subscribe().done(function (data) {
      console.log(data);
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
      var frameData = data.frames[i];
      var frameView = new FrameView(frameData.frameId);
      var _pos1 = $frameUtils.getFramePosition(data.masterLayout, i, APP_HEIGHT, APP_WIDTH);
      frameView.setPosition(_pos1.left, _pos1.top, _pos1.width, _pos1.height);

      if (frameData.subLayout !== null) {
        for(var j = 0; j < frameData.frames.length; j++){
          var subFrameView = new FrameView(frameData.frames[j].frameId);
          var _pos2 = $frameUtils.getSubFramePosition(
            frameData.subLayout, j, _pos1.width, _pos1.height);
          subFrameView.setPosition(_pos2.left, _pos2.top, _pos2.width, _pos2.height);
          subFrameView.setBackgroundColor('#ccc');

          $frameUtils.addSliderToFrame(frameData.frames[j], subFrameView);

          frameView.addChildView(subFrameView);
        }
      } else {
        frameView.setBackgroundColor('#ccc');

        $frameUtils.addSliderToFrame(frameData, frameView);

      }// end if


      this.frames.push(frameView);
    }// end for
  },
  show: function () {
    for (var i = 0; i < this.frames.length; i++) {
      $bodyFrame.addChildView(this.frames[i]);
    }
  }
});