/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Topic.extend({
  BACKEND_SOCKET_URL: 'ws://localhost:9998/echo',
  socket: null,
  _isListening: false,
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
  },
  connectBackend: function () {
    var self = this;
    this.socket = new SocketClient();
    return this.socket.connect(this.BACKEND_SOCKET_URL).done(function () {
      self._isListening = true;
      self.startSubscribe();
    });
  },
  disconnectBackend: function () {
    this._isListening = false;
    this.socket.close();
  },
  startSubscribe: function () {
    var self = this;
    this.socket.subscribe().done(function (data) {
      self.publish(data);
      if (self._isListening) {
        self.startSubscribe();
      }
    });
  }
});