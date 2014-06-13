/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Topic.extend({
    BACKEND_SOCKET_URL: 'ws://10.88.66.251:8080/tsb-shareboard-api/websocket',
    BACKEND_API_URL: 'http://10.88.66.251:8080/tsb-shareboard-api/check/',
    socket: null,
    _isListening: false,
    defDisconnect: new Deferred(),
    getTemplate: function (templateId) {
        var d = new Deferred();
        /*
         $.getJSON(this.BACKEND_API_URL + 'template?id=' + templateId, function (data) {
         d.resolve(data);
         });
         */
        d.resolve(JSON.parse('{"id":1,"layout":{"id":7,"name":"hp4"},"account":null,"name":"template1","startTime":1402531200,"endTime":1405123200,"frames":[{"id":11,"name":"frame11","layout":{"id":7,"name":"hp4"},"ref":3,"items":[],"frames":[{"id":12,"name":"frame12","layout":null,"ref":3,"items":[{"id":27,"type":"image","url":"http://cdn.twentytwowords.com/wp-content/uploads/Hot-Lips-Flower-01-634x396.jpg"},{"id":25,"type":"image","url":"http://3.bp.blogspot.com/-kEDW4tNSmpA/UYnb_TbNiqI/AAAAAAAAKlc/MuZ3D0k6xRs/s400/wallpapers-of-Rose-Flower456.jpg"},{"id":26,"type":"image","url":"http://cimages.proflowers.com/is/image/ProvideCommerce/PF_13_T220_MDAY_VA0607_W1_SQ"}],"frames":[],"effects":[{"id":1,"name":"swipeLeft"},{"id":3,"name":"swipeUp"},{"id":4,"name":"swipeDown"},{"id":2,"name":"swipeRight"}]},{"id":13,"name":"frame13","layout":null,"ref":3,"items":[{"id":28,"type":"image","url":"http://www.whats-your-sign.com/images/ChineseFlowerMeanings.jpg"},{"id":29,"type":"image","url":"http://4.bp.blogspot.com/-7YF-17Q2s8c/Uh-WX2tVrHI/AAAAAAAAAoc/lwRlay4pL8s/s640/light-blue-flowers-wallpapers-hd.jpg"},{"id":30,"type":"image","url":"http://1.bp.blogspot.com/-l-ePa0ejM18/UAjHJz63NZI/AAAAAAAAEdU/XErwfKE6JPk/s1600/bird-of-paradise-flower-1.jpg"}],"frames":[],"effects":[{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"},{"id":2,"name":"swipeRight"},{"id":3,"name":"swipeUp"}]},{"id":14,"name":"frame14","layout":null,"ref":3,"items":[{"id":33,"type":"image","url":"http://coverslike.com/thumbs/red_flower-t1.jpg"},{"id":32,"type":"image","url":"http://www.designboom.com/weblog/images/images_2/lara/818_images/robert_buelteman/electrocuted_flowers05.jpg"},{"id":31,"type":"image","url":"http://2.bp.blogspot.com/_mvHl0jIiX-E/S2j1d3skY_I/AAAAAAAAE9Q/ni4g5VuGmk8/s640/blue-violet-flower07.jpg"}],"frames":[],"effects":[{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"},{"id":3,"name":"swipeUp"},{"id":2,"name":"swipeRight"}]},{"id":15,"name":"frame15","layout":null,"ref":3,"items":[{"id":35,"type":"image","url":"http://2.bp.blogspot.com/-2k0vUtH2xZ8/US8aB1Fz1DI/AAAAAAAAHGI/XoxwF_s6Dhs/s400/flower_in_blue_sky-normal5.4.jpg"},{"id":34,"type":"image","url":"http://2.bp.blogspot.com/-EM-G_YNgKJ8/TV38pYHcG2I/AAAAAAAAJCU/GCjizjfOWMg/s400/pink+rose+wallpapers+%252810%2529.jpg"},{"id":36,"type":"image","url":"http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purple-flower-87a.jpg"}],"frames":[],"effects":[{"id":2,"name":"swipeRight"},{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"},{"id":3,"name":"swipeUp"}]}],"effects":[{"id":2,"name":"swipeRight"},{"id":1,"name":"swipeLeft"},{"id":3,"name":"swipeUp"},{"id":4,"name":"swipeDown"}]},{"id":2,"name":"frame2","layout":{"id":6,"name":"hp3"},"ref":3,"items":[],"frames":[{"id":4,"name":"frame4","layout":null,"ref":3,"items":[{"id":7,"type":"image","url":"http://www.graphix1.co.uk/wp-content/uploads/2011/08/08Flowers.jpg"},{"id":8,"type":"image","url":"http://1.bp.blogspot.com/-WS3KVqdQn_Q/T-bU51hQJ3I/AAAAAAAAAFo/zwC4CKr7Xh0/s1600/the-desktop-hd-Flowers-wallpapers+(3).jpg"},{"id":9,"type":"image","url":"http://blog.interflora.co.uk/wp-content/uploads/2012/07/Passion-Flower.jpg"}],"frames":[],"effects":[{"id":1,"name":"swipeLeft"},{"id":2,"name":"swipeRight"},{"id":4,"name":"swipeDown"},{"id":3,"name":"swipeUp"}]},{"id":3,"name":"frame3","layout":null,"ref":3,"items":[{"id":4,"type":"image","url":"http://www.boatshedmarket.com.au/image/data/flowers_img.jpg"},{"id":6,"type":"image","url":"http://4.bp.blogspot.com/_6D_evDvZgNA/SKpsT-ic4DI/AAAAAAAAAD8/fv4lqqI0PRY/s400/fragile-white-flowers.jpg"},{"id":5,"type":"image","url":"http://www.grandpalaceriga.com/images/catalog_full/89ac280cc25173a167f93d4f0e7c1e21.jpg"}],"frames":[],"effects":[{"id":1,"name":"swipeLeft"},{"id":4,"name":"swipeDown"},{"id":2,"name":"swipeRight"},{"id":3,"name":"swipeUp"}]},{"id":5,"name":"frame5","layout":null,"ref":3,"items":[{"id":10,"type":"image","url":"http://1.bp.blogspot.com/-JBzh6ow4OW0/UTM-iRlaiyI/AAAAAAAASec/stu52MBuWnM/s1600/y016-741067.jpg"},{"id":12,"type":"image","url":"http://images2.layoutsparks.com/1/179204/no-idea-t5-flowers.jpg"},{"id":11,"type":"image","url":"http://1.bp.blogspot.com/-DvLpL0NphyU/TpSFQ6WiUOI/AAAAAAAABbg/B-ykNMvWQvU/s1600/happy.jpg"}],"frames":[],"effects":[{"id":3,"name":"swipeUp"},{"id":2,"name":"swipeRight"},{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"}]}],"effects":[{"id":2,"name":"swipeRight"},{"id":3,"name":"swipeUp"},{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"}]},{"id":1,"name":"frame1","layout":null,"ref":3,"items":[{"id":1,"type":"video","url":"http://10.88.66.166:8088/shareboard/video.mp4"}],"frames":[],"effects":[{"id":4,"name":"swipeDown"},{"id":2,"name":"swipeRight"},{"id":1,"name":"swipeLeft"},{"id":3,"name":"swipeUp"}]},{"id":6,"name":"frame6","layout":{"id":7,"name":"hp4"},"ref":3,"items":[],"frames":[{"id":9,"name":"frame9","layout":null,"ref":3,"items":[{"id":20,"type":"image","url":"http://cdn.blogs.sheknows.com/gardening.sheknows.com/2011/02/lotus-flower.jpg"},{"id":21,"type":"image","url":"http://mw2.google.com/mw-panoramio/photos/medium/96447714.jpg"},{"id":19,"type":"image","url":"http://4.bp.blogspot.com/-ik3E8PBBf70/TwaZ9PMNbrI/AAAAAAAAAG0/kNrGnEbZ-WY/s640/flowers2.jpg"}],"frames":[],"effects":[{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"},{"id":2,"name":"swipeRight"},{"id":3,"name":"swipeUp"}]},{"id":8,"name":"frame8","layout":null,"ref":3,"items":[{"id":17,"type":"image","url":"http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purple-flower-87a.jpg"},{"id":18,"type":"image","url":"http://2.bp.blogspot.com/-e9Obk_RFH4I/UYdQPpxggOI/AAAAAAAAKUY/KBVhQxwnB4c/s640/flowers44.jpg"},{"id":16,"type":"image","url":"http://1.bp.blogspot.com/--VqUcuRqS8Q/TYwVmOKir8I/AAAAAAAAAJQ/ZSK5ygALMeU/s1600/red-flowers.jpg"}],"frames":[],"effects":[{"id":3,"name":"swipeUp"},{"id":2,"name":"swipeRight"},{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"}]},{"id":10,"name":"frame10","layout":null,"ref":3,"items":[{"id":24,"type":"image","url":"http://vnfriend.files.wordpress.com/2010/11/flower-4.jpg"},{"id":23,"type":"image","url":"http://flowerinfo.org/wp-content/gallery/lupine-flowers/lupine-flowers-5.jpg"},{"id":22,"type":"image","url":"http://3.bp.blogspot.com/-ui6lvZa8CGA/TlnS2Hv2DkI/AAAAAAAACyM/E34Dab7dWfs/s685/Lily+flower+wallpaper4.jpg"}],"frames":[],"effects":[{"id":3,"name":"swipeUp"},{"id":1,"name":"swipeLeft"},{"id":4,"name":"swipeDown"},{"id":2,"name":"swipeRight"}]},{"id":7,"name":"frame7","layout":null,"ref":3,"items":[{"id":15,"type":"image","url":"http://4.bp.blogspot.com/-QrlW8v6xQos/UYnb7bMSNJI/AAAAAAAAKlI/XcqrCoJsZ68/s1600/vibrant-flowers-248131_1024_768rrr.jpg"},{"id":14,"type":"image","url":"http://www.bhg.com/videos/hosting/media/bhg/1620905/59977667/add-fragrant-flowers-to-your-garden.jpg"},{"id":13,"type":"image","url":"http://3.bp.blogspot.com/-ONEZIRjcjXE/Uh-WjyE3aSI/AAAAAAAAAos/dLqEAVDfggE/s640/blue-flower-wallpaper-.jpg"}],"frames":[],"effects":[{"id":2,"name":"swipeRight"},{"id":4,"name":"swipeDown"},{"id":3,"name":"swipeUp"},{"id":1,"name":"swipeLeft"}]}],"effects":[{"id":3,"name":"swipeUp"},{"id":2,"name":"swipeRight"},{"id":4,"name":"swipeDown"},{"id":1,"name":"swipeLeft"}]}]}'));
        return d;
    },
    connectBackend: function () {
        var self = this;
        this.socket = new SocketClient();
        this.socket.defClose.done(function () {
            self.defDisconnect.resolve();
        });
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
            self.publish(JSON.parse(msgEvent.data));
            if (self._isListening) {
                self.startSubscribe();
            }
        });
    },
    sendMessage: function (method, data) {
        this.socket.send(JSON.stringify({
            method: method,
            data: data
        }));
    }
});