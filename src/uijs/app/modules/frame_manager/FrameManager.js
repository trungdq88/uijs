/**
 * Created by TrungDQ3 on 6/9/14.
 */

var FrameManager = Base.extend({
    templateId: 0,
    masterLayout: '',
    frames: [],
    constructor: function () {
        $backendService.subscribe().done(function (data) {
//            console.log(data);
//            console.log('Got data, now what?');
        });
        $backendService.defDisconnect.done(function () {
            console.log('Socket connection failed');
        });
        this.loadData();
    },
    loadData: function () {
        var self = this;
        $backendService.getTemplate(1).done(function (data) {
            for (var i = 0; i < data.frames.length; i++) {
                var frameData = data.frames[i];
                var frameView = new FrameView(frameData.id);
                var _pos1 = $frameUtils.getFramePosition(data.layout.name, i, APP_HEIGHT, APP_WIDTH);
                frameView.setPosition(_pos1.left, _pos1.top, _pos1.width, _pos1.height);

                if (frameData.layout !== null) {
                    for (var j = 0; j < frameData.frames.length; j++) {
                        var subFrameView = new FrameView(frameData.frames[j].id);
                        var _pos2 = $frameUtils.getSubFramePosition(
                            frameData.layout.name, j, _pos1.width, _pos1.height);
                        subFrameView.setPosition(_pos2.left, _pos2.top, _pos2.width, _pos2.height);
                        subFrameView.setBackgroundColor('#ccc');

                        $frameUtils.addSliderToFrame(frameData.frames[j], subFrameView);

                        frameView.addChildView(subFrameView);
                    }
                } else {
                    frameView.setBackgroundColor('#ccc');

                    $frameUtils.addSliderToFrame(frameData, frameView);

                }// end if


                self.frames.push(frameView);
            }// end for

            self.show();
        });
    },
    show: function () {
        for (var i = 0; i < this.frames.length; i++) {
            $bodyFrame.addChildView(this.frames[i]);
        }
    }
});