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

// Source: src/uijs/app/modules/frame_manager/FrameUtils.js
/**
 * Created by DuyPT1 on 6/11/14.
 */

var $frameUtils = {
  getSubFramePosition: function(layout, index, width, height){
    switch (layout) {
      case $frameEnum.layout.vp2:
        return {
          left: 0,
          top: (FRAME_GAP + height) * index / 2,
          width: width,
          height: height/2 - FRAME_GAP/2
        };
      case $frameEnum.layout.vp3:
        return {
          left: 0,
          top: (height / 3 + FRAME_GAP / 3) * index ,
          width: width,
          height: (height - FRAME_GAP * 3 - FRAME_GAP) / 3 + FRAME_GAP/1.5
        };
      case $frameEnum.layout.hp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
          left:  (FRAME_GAP + width) * index / 2,
          top: 0,
          width: (width - FRAME_GAP) / 2 ,
          height: height
        };
      case $frameEnum.layout.hp3:
        if (index == 1 || index == 2) {
          return {
            left: (width + FRAME_GAP) / 2,
            top: (index - 1) * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP*2),
            width: width / 2 - FRAME_GAP * 1.5 + FRAME_GAP,
            height: (height - FRAME_GAP ) / 2
          };
        } else {
          return {
            left: 0,
            top: 0,
            width: width / 2 - FRAME_GAP * 1.5 + FRAME_GAP,
            height: height
          };
        }
        break;
      case $frameEnum.layout.hp4:
        if (index === 0 || index == 1) {
          return {
            left: 0,
            top: index * (height / 2 + FRAME_GAP/2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP * 1.5,
            height: (height - FRAME_GAP) / 2
          };
        } else {
          return {
            left: width / 2 + FRAME_GAP / 2,
            top:  (index - 2) * (height + FRAME_GAP) / 2,
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP * 1.5,
            height: (height - FRAME_GAP) / 2
          };
        }
        break;
      default:
        return null;
    }
  },
  getFramePosition: function (layout, index, height, width) {
    switch (layout) {
      case $frameEnum.layout.vp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 3) / 2
        };
      case $frameEnum.layout.vp3:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3) / 3 + FRAME_GAP / 2),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 3 - FRAME_GAP) / 3
        };
      case $frameEnum.layout.hp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
          left: FRAME_GAP + index * (width - FRAME_GAP) / 2,
          top: FRAME_GAP,
          width: width / 2 - FRAME_GAP * 1.5,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp3:
        if (index == 1 || index == 2) {
          return {
            left: (width + FRAME_GAP) / 2,
            top: FRAME_GAP + (index - 1) * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP),
            width: width / 2 - FRAME_GAP * 1.5,
            height: (height - FRAME_GAP * 3) / 2
          };
        } else {
          return {
            left: FRAME_GAP + index * (width - FRAME_GAP) / 2,
            top: FRAME_GAP,
            width: width / 2 - FRAME_GAP * 1.5,
            height: (height - FRAME_GAP * 2)
          };
        }
        break;
      case $frameEnum.layout.hp4:
        if (index === 0 || index == 1) {
          return {
            left: FRAME_GAP,
            top: FRAME_GAP + index * (height / 2 - FRAME_GAP / 2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
            height: height / 2 - FRAME_GAP * 1.5
          };
        } else {
          return {
            left: width / 2 + FRAME_GAP / 2,
            top: FRAME_GAP + (index - 2) * (height / 2 - FRAME_GAP / 2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
            height: height / 2 - FRAME_GAP * 1.5
          };
        }
        break;
      default:
        return null;
    }
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

    this.show();
  },

  show: function () {
    for (var i = 0; i < this.frames.length; i++) {
      bodyFrame.addChildView(this.frames[i]);
    }
  }
});

// Source: src/uijs/app/modules/frame_manager/BackendService.js
/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Base.extend({
  BACKEND_SOCKET_URL: '',
  getFrameData: function () {
    return {
      templateId: 1,
      masterLayout: 'hp4',
      frames: [
        {
          frameId: 1,
          subLayout: null,
          frames: [
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
              frameId: 1,
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
            }
          ],
          items: [],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
          frameId: 2,
          subLayout: 'hp3',
          frames: [
            {
              frameId: 1,
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
            }
          ],
          items: [],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
          frameId: 3,
          subLayout: 'hp4',
          frames: [
            {
              frameId: 1,
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
            }
          ],
          items: [],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
          frameId: 4,
          subLayout: 'vp3',
          frames: [
            {
              frameId: 1,
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
            }
          ],
          items: [],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        }
      ]
    };
  }
});

// Source: src/uijs/app/modules/socket_client/SocketClient.js
/**
 * Created by TrungDQ3 on 6/11/14.
 */

var SocketClient = Base.extend({
  ws: null,
  url: '',
  defOnOpen: new Deferred(),
  defOnMessage: new Deferred(),
  defOnClose: new Deferred(),
  constructor: function (url) {
    if (url) {
      this.connect(url);
    }
  },
  connect: function (url) {
    var self = this;
    this.url = url;
    this.ws = new WebSocket(url);

    this.ws.onopen = function() {
      self.defOnOpen.resolve();
    };
    this.ws.onmessage = function (evt) {
      self.defOnMessage.resolve(evt);
    };
    this.ws.onclose = function() {
      self.defOnClose.resolve();
    };
    return this.defOnOpen;
  },
  send: function (msg) {
    this.ws.send(msg);
  }
}, {
  isSupported: function () {
    return "WebSocket" in window;
  }
});