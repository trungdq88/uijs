// Source: src/uijs/app/modules/frame_manager/FrameEnums.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */
var $frameEnum = {
  layout: {
    vp1: 'vp1',
    vp2: 'vp2',
    vp3: 'vp3',
    hp1: 'hp1',
    hp2: 'hp2',
    hp3: 'hp3',
    hp4: 'hp4'
  },
  item: {
    image: 'image',
    video: 'video'
  },
  effect: {
    slideLeft: 'slideLeft',
    slideRight: 'slideRight'
  }
};

// Source: src/uijs/app/modules/frame_manager/FrameManager.js
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
       case $frameEnum.layout.vp1:
         return {
                left: FRAME_GAP,
                top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3)),
                width: APP_WIDTH - FRAME_GAP*2,
                height: (APP_HEIGHT - FRAME_GAP * 2)
         };
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: APP_WIDTH - FRAME_GAP * 2,
          height: (APP_HEIGHT - FRAME_GAP * 3) / 2
        };
      case $frameEnum.layout.vp3:
        return {
              left: FRAME_GAP,
              top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3) / 3 + FRAME_GAP/2),
              width: APP_WIDTH - FRAME_GAP * 2,
              height: (APP_HEIGHT - FRAME_GAP * 3 - FRAME_GAP) / 3
        };
      case $frameEnum.layout.hp1:
        return {
              left: FRAME_GAP,
              top: FRAME_GAP + index * ((APP_HEIGHT - FRAME_GAP * 3)),
              width: APP_WIDTH - FRAME_GAP*2,
              height: (APP_HEIGHT - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
              left: FRAME_GAP + index * (APP_WIDTH - FRAME_GAP) / 2 ,
              top: FRAME_GAP,
              width: APP_WIDTH / 2 - FRAME_GAP * 1.5,
              height: (APP_HEIGHT - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp3:
        if(index == 1 || index == 2){
            return {
                left: (APP_WIDTH + FRAME_GAP) / 2,
                top: FRAME_GAP + (index - 1)* ((APP_HEIGHT - FRAME_GAP * 3) / 2 + FRAME_GAP),
                width: APP_WIDTH / 2 - FRAME_GAP * 1.5,
                height: (APP_HEIGHT - FRAME_GAP * 3) / 2
            };
        } else {
            return {
                left: FRAME_GAP + index * (APP_WIDTH - FRAME_GAP) / 2 ,
                top: FRAME_GAP,
                width: APP_WIDTH / 2 - FRAME_GAP * 1.5,
                height: (APP_HEIGHT - FRAME_GAP * 2)
            };
        }
      case $frameEnum.layout.hp4:
        if(index == 0 || index == 1){
            return {
                left: FRAME_GAP,
                top: FRAME_GAP + index * (APP_HEIGHT / 2 - FRAME_GAP / 2),
                width: APP_WIDTH / 2 - FRAME_GAP * 2 + FRAME_GAP/2,
                height:  APP_HEIGHT / 2 - FRAME_GAP * 1.5
            };
        } else {
            return {
                left: APP_WIDTH / 2 + FRAME_GAP / 2,
                top: FRAME_GAP + (index - 2) * (APP_HEIGHT / 2 - FRAME_GAP / 2),
                width: APP_WIDTH / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
                height:  APP_HEIGHT / 2 - FRAME_GAP * 1.5
            };
        }
      default:
        return null;
    }
  }
});

// Source: src/uijs/app/modules/frame_manager/BackendService.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Base.extend({
  BACKEND_URL: '',
  getFrameData: function () {
    return {
      templateId: 1,
      masterLayout: 'hp4',
      frames: [
        {
          frameId: 1,
          items: [
            {
              itemId: 1,
              type: 'image',
              url: 'http://abc.com/def1.jpg'
            },
            {
              itemId: 2,
              type: 'image',
              url: 'http://abc.com/def2.jpg'
            },
            {
              itemId: 3,
              type: 'image',
              url: 'http://abc.com/def3.jpg'
            }
          ],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
          frameId: 2,
          items: [
            {
              itemId: 4,
              type: 'image',
              url: 'http://abc.com/def4.jpg'
            },
            {
              itemId: 5,
              type: 'image',
              url: 'http://abc.com/def5.jpg'
            },
            {
              itemId: 6,
              type: 'image',
              url: 'http://abc.com/def6.jpg'
            }
          ],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
            frameId: 3,
            items: [
                {
                    itemId: 4,
                    type: 'image',
                    url: 'http://abc.com/def4.jpg'
                },
                {
                    itemId: 5,
                    type: 'image',
                    url: 'http://abc.com/def5.jpg'
                },
                {
                    itemId: 6,
                    type: 'image',
                    url: 'http://abc.com/def6.jpg'
                }
            ],
            effects: ['slideLeft', 'slideRight'],
            childTemplateId: 3
        },
        {
            frameId: 4,
            items: [
                {
                    itemId: 7,
                    type: 'image',
                    url: 'http://abc.com/def4.jpg'
                },
                {
                    itemId: 8,
                    type: 'image',
                    url: 'http://abc.com/def5.jpg'
                },
                {
                    itemId: 9,
                    type: 'image',
                    url: 'http://abc.com/def6.jpg'
                }
            ],
            effects: ['slideLeft', 'slideRight'],
            childTemplateId: 3
       }
      ]
    }
  }
});