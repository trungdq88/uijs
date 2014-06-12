/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Topic.extend({
  BACKEND_SOCKET_URL: 'ws://10.88.66.251:8080/tsb-shareboard-api/websocket',
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
          frames: [],
          items: [
            {
              itemId: 1,
              type: 'image',
              url: 'http://www.byui.edu/images/agriculture-life-sciences/flower.jpg'
            },
            {
              itemId: 2,
              type: 'image',
              url: 'http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/' +
                'Tropical+Plumeria+Flower.jpg'
            },
            {
              itemId: 3,
              type: 'image',
              url: 'http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/' +
                'flowers333.jpg'
            }
          ],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        },
        {
          frameId: 2,
          subLayout: 'hp3',
          frames: [
            {
              frameId: 3,
              items: [
                {
                  itemId: 4,
                  type: 'image',
                  url: 'http://www.boatshedmarket.com.au/image/data/flowers_img.jpg'
                },
                {
                  itemId: 5,
                  type: 'image',
                  url: 'http://www.grandpalaceriga.com/images/catalog_full/89ac280cc25173a167f93d4f0e7c' +
                    '1e21.jpg'
                },
                {
                  itemId: 6,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/_6D_evDvZgNA/SKpsT-ic4DI/AAAAAAAAAD8/fv4lqqI0PRY/s400/' +
                    'fragile-white-flowers.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 4,
              items: [
                {
                  itemId: 7,
                  type: 'image',
                  url: 'http://www.graphix1.co.uk/wp-content/uploads/2011/08/08Flowers.jpg'
                },
                {
                  itemId: 8,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-WS3KVqdQn_Q/T-bU51hQJ3I/AAAAAAAAAFo/zwC4CKr7Xh0/s1600/' +
                    'the-desktop-hd-Flowers-wallpapers+(3).jpg'
                },
                {
                  itemId: 9,
                  type: 'image',
                  url: 'http://blog.interflora.co.uk/wp-content/uploads/2012/07/Passion-Flower.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 5,
              items: [
                {
                  itemId: 10,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-JBzh6ow4OW0/UTM-iRlaiyI/AAAAAAAASec/stu52MBuWnM/s1600/' +
                    'y016-741067.jpg'
                },
                {
                  itemId: 11,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-DvLpL0NphyU/TpSFQ6WiUOI/AAAAAAAABbg/B-ykNMvWQvU/s1600/' +
                    'happy.jpg'
                },
                {
                  itemId: 12,
                  type: 'image',
                  url: 'http://images2.layoutsparks.com/1/179204/no-idea-t5-flowers.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            }
          ],
          items: [],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        },
        {
          frameId: 6,
          subLayout: 'hp4',
          frames: [
            {
              frameId: 7,
              items: [
                {
                  itemId: 13,
                  type: 'image',
                  url: 'http://3.bp.blogspot.com/-ONEZIRjcjXE/Uh-WjyE3aSI/AAAAAAAAAos/dLqEAVDfggE/s640/' +
                    'blue-flower-wallpaper-.jpg'
                },
                {
                  itemId: 14,
                  type: 'image',
                  url: 'http://www.bhg.com/videos/hosting/media/bhg/1620905/59977667/add-fragrant-flowers-' +
                    'to-your-garden.jpg'
                },
                {
                  itemId: 15,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-QrlW8v6xQos/UYnb7bMSNJI/AAAAAAAAKlI/XcqrCoJsZ68/s1600/vibra' +
                    'nt-flowers-248131_1024_768rrr.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 8,
              items: [
                {
                  itemId: 16,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/--VqUcuRqS8Q/TYwVmOKir8I/AAAAAAAAAJQ/ZSK5ygALMeU/s1600/red-flowers.jpg'
                },
                {
                  itemId: 17,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purple-flower-87a.jpg'
                },
                {
                  itemId: 18,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/-e9Obk_RFH4I/UYdQPpxggOI/AAAAAAAAKUY/KBVhQxwnB4c/s640/flowers44.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 9,
              items: [
                {
                  itemId: 19,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-ik3E8PBBf70/TwaZ9PMNbrI/AAAAAAAAAG0/kNrGnEbZ-WY/s640/flowers2.jpg'
                },
                {
                  itemId: 20,
                  type: 'image',
                  url: 'http://cdn.blogs.sheknows.com/gardening.sheknows.com/2011/02/lotus-flower.jpg'
                },
                {
                  itemId: 21,
                  type: 'image',
                  url: 'http://mw2.google.com/mw-panoramio/photos/medium/96447714.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 10,
              items: [
                {
                  itemId: 22,
                  type: 'image',
                  url: 'http://3.bp.blogspot.com/-ui6lvZa8CGA/TlnS2Hv2DkI/AAAAAAAACyM/E34Dab7dWfs/s685/Lily+flower+wallpaper4.jpg'
                },
                {
                  itemId: 23,
                  type: 'image',
                  url: 'http://flowerinfo.org/wp-content/gallery/lupine-flowers/lupine-flowers-5.jpg'
                },
                {
                  itemId: 24,
                  type: 'image',
                  url: 'http://vnfriend.files.wordpress.com/2010/11/flower-4.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            }
          ],
          items: [],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
          childTemplateId: 3
        },
        {
          frameId: 11,
          subLayout: 'hp4',
          frames: [
            {
              frameId: 12,
              items: [
                {
                  itemId: 25,
                  type: 'image',
                  url: 'http://3.bp.blogspot.com/-kEDW4tNSmpA/UYnb_TbNiqI/AAAAAAAAKlc/MuZ3D0k6xRs/s400/wallpa' +
                    'pers-of-Rose-Flower456.jpg'
                },
                {
                  itemId: 26,
                  type: 'image',
                  url: 'http://cimages.proflowers.com/is/image/ProvideCommerce/PF_13_T220_MDAY_VA0607_W1_SQ'
                },
                {
                  itemId: 27,
                  type: 'image',
                  url: 'http://cdn.twentytwowords.com/wp-content/uploads/Hot-Lips-Flower-01-634x396.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 13,
              items: [
                {
                  itemId: 28,
                  type: 'image',
                  url: 'http://www.whats-your-sign.com/images/ChineseFlowerMeanings.jpg'
                },
                {
                  itemId: 29,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-7YF-17Q2s8c/Uh-WX2tVrHI/AAAAAAAAAoc/lwRlay4pL8s/s640/light' +
                    '-blue-flowers-wallpapers-hd.jpg'
                },
                {
                  itemId: 30,
                  type: 'image',
                  url: 'http://1.bp.blogspot.com/-l-ePa0ejM18/UAjHJz63NZI/AAAAAAAAEdU/XErwfKE6JPk/s1600/bird' +
                    '-of-paradise-flower-1.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 14,
              items: [
                {
                  itemId: 31,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/_mvHl0jIiX-E/S2j1d3skY_I/AAAAAAAAE9Q/ni4g5VuGmk8/s640/blue' +
                    '-violet-flower07.jpg'
                },
                {
                  itemId: 32,
                  type: 'image',
                  url: 'http://www.designboom.com/weblog/images/images_2/lara/818_images/robert_buelteman/' +
                    'electrocuted_flowers05.jpg'
                },
                {
                  itemId: 33,
                  type: 'image',
                  url: 'http://coverslike.com/thumbs/red_flower-t1.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            },
            {
              frameId: 15,
              items: [
                {
                  itemId: 34,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/-EM-G_YNgKJ8/TV38pYHcG2I/AAAAAAAAJCU/GCjizjfOWMg/s400/pin' +
                    'k+rose+wallpapers+%252810%2529.jpg'
                },
                {
                  itemId: 35,
                  type: 'image',
                  url: 'http://2.bp.blogspot.com/-2k0vUtH2xZ8/US8aB1Fz1DI/AAAAAAAAHGI/XoxwF_s6Dhs/s400/flowe' +
                    'r_in_blue_sky-normal5.4.jpg'
                },
                {
                  itemId: 36,
                  type: 'image',
                  url: 'http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purpl' +
                    'e-flower-87a.jpg'
                }
              ],
              effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
              childTemplateId: 3
            }
          ],
          items: [],
          effects: ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'zoomUpDown', 'flipRight', 'flipLeft', 'flipUp', 'flipDown'],
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
    this.socket.subscribe().done(function (msgEvent) {
      self.processData(JSON.parse(msgEvent.data));
      if (self._isListening) {
        self.startSubscribe();
      }
    });
  },
  processData: function (data) {
    var self = this;
    switch (data.method) {
      case $frameEnum.method.require_device_authenticate:
        this.authenticateDevice();
        break;
      default:
        self.publish(data);
    }
  },
  authenticateDevice: function () {
    this.sendMessage($frameEnum.method.device_authenticate, {
      deviceId: DEVICE_ID
    });
  },
  sendMessage: function (method, data) {
    this.socket.send(JSON.stringify({
      method: method,
      data: data
    }));
  }
});