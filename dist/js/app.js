'use strict';if("undefined"==typeof templates)var templates={};"undefined"==typeof templates.frame&&(templates.frame={});templates.frame.frame=function(a,b){return'<div id="'+soy.$$escapeHtml(a.id)+'"></div>'};"undefined"==typeof templates&&(templates={});"undefined"==typeof templates.frameslider&&(templates.frameslider={});templates.frameslider.slider=function(a,b){return'<div id="'+soy.$$escapeHtml(a.id)+'" class="frame_slider"></div>'};"undefined"==typeof templates&&(templates={});
"undefined"==typeof templates.imageview&&(templates.imageview={});templates.imageview.image=function(a,b){return'<img id="'+soy.$$escapeHtml(a.id)+'" src="'+soy.$$escapeHtml(a.imageSource)+'"/>'};
var Topic=Base.extend({_subscribers:null,constructor:function(){this._subscribers=[]},subscribe:function(){var a=new Deferred;this._subscribers.push(a);return a},publish:function(a){var b=this._subscribers;this.clear();for(var c=0;c<b.length;c++)b[c].resolve(a)},clear:function(){this._subscribers=[]}}),$coreStartup=new Deferred;document.addEventListener("DOMContentLoaded",function(){DEBUG_MODE||$coreStartup.resolve()});
$coreStartup.done(function(){document.body.style.position="absolute";document.body.style.width=APP_WIDTH+"px";document.body.style.height=APP_HEIGHT+"px";document.body.style.top="0px";document.body.style.left="0px";window.$bodyFrame=new FrameView("bodyFrame");window.$bodyFrame.setPosition(0,0,APP_WIDTH,APP_HEIGHT);window.$bodyFrame.setBackgroundColor("#eee");document.body.appendChild(window.$bodyFrame.node)});
var BaseView=Base.extend({id:null,node:null,childViews:{},constructor:function(a){this.id=a||""},setNode:function(a){var b=document.createElement("div");b.innerHTML=a;1<b.childNodes.length?console.log("Cannot set node: the template contains multiple root node"):(this.node=b.childNodes[0],this.node.style.position="absolute")},setPosition:function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d;this.node.style.left=a?a+"px":"";this.node.style.top=b?b+"px":"";this.node.style.width=c?c+"px":
"";this.node.style.height=d?d+"px":""},setBackgroundColor:function(a){this.node.style.backgroundColor=a},addChildView:function(a){a&&a.id&&!this.childViews[a.id]?(a.parentView=this,this.childViews[a.id]=a,this.node.appendChild(a.node)):console.log("View ID ("+a.id+") is not defined or already exist in parent View ("+this.id+")")},getParentView:function(){return this.parentView}}),FrameView=BaseView.extend({constructor:function(a){this.base("FrameView_"+a);this.childViews={};this.setNode(templates.frame.frame(this))}}),
$frameAnimation={swipeLeft:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},swipeRight:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(100%, 0, 0)"},swipeUp:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(0, -100%, 0)"},swipeDown:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(0, 100%, 0)"},zoomUpDown:function(a,b){a.style.webkitTransform=b?"scale(1)":"scale(0)"},flipRight:function(a,
b){a.style.webkitTransform=b?"perspective(700px) rotateY(0deg)":"perspective(700px) rotateY(90deg)"},flipLeft:function(a,b){a.style.webkitTransform=b?"perspective(700px) rotateY(0deg)":"perspective(700px) rotateY(-90deg)"},flipUp:function(a,b){a.style.webkitTransform=b?"perspective(700px) rotateX(0deg)":"perspective(700px) rotateX(90deg)"},flipDown:function(a,b){a.style.webkitTransform=b?"perspective(700px) rotateX(0deg)":"perspective(700px) rotateX(-90deg)"}},FrameSlider=BaseView.extend({currentIndex:0,
timeOut:3,duration:1,images:[],effects:[],constructor:function(a,b,c){this.base("FrameSlider_"+a);this.childViews={};this.setNode(templates.frameslider.slider(this));b&&this.setImages(b);c&&this.setEffects(c)},setImages:function(a){var b=this,c=[];this.images=a;this.hide();for(var d=0;d<a.length;d++){var e=a[d];e.setPosition(0,0,this.width,this.height);e.node.style.webkitTransform="translate3d(0px, 0px, 0px)";e.node.style.webkitTransition="-webkit-transform "+this.duration+"s";c.push(e.imageReady)}Deferred.when(Deferred,
c).done(function(){for(var a=1;a<arguments.length;a++)b.addChildView(arguments[a][0]);b.show();b.startSlideShow()})},setEffects:function(a){this.effects=a},hide:function(){this.node.style.webkitTransition="opacity 0.5s";this.node.style.opacity=0},show:function(){this.node.style.opacity=0.99},startSlideShow:function(){var a=this;this.currentIndex=this.images.length-1;for(var b=0;b<this.images.length;b++)this.images[b].node.style.zIndex=b+1;var c=function(b){a.images[b].node.style.zIndex=1;for(var c=
0;c<a.images.length;c++)c!=b&&(a.images[c].node.style.zIndex=+a.images[c].node.style.zIndex+1)},d=function(){0>a.currentIndex&&(a.currentIndex=a.images.length-1);var b=$frameAnimation[a.getRandomEffect()];b?(b(a.images[a.currentIndex].node),a.currentIndex--,setTimeout(function(){var d=a.currentIndex+1;b(a.images[d].node,!0);c(d)},1E3*a.duration)):c(a.currentIndex--);setTimeout(d,1E3*a.timeOut)};setTimeout(d,1E3*this.timeOut)},setTimeout:function(a){this.timeOut=a},setDuration:function(a){this.duration=
a;for(a=0;a<this.images.length;a++)this.images[a].node.style.webkitTransition="-webkit-transform "+this.duration+"s"},getRandomEffect:function(){return this.effects[Math.floor(Math.random()*this.effects.length)]||""}}),ImageView=BaseView.extend({imageSource:"",imageReady:null,constructor:function(a,b){var c=this;this.base("ImageView_"+a);b&&(this.imageSource=b);this.setNode(templates.imageview.image(this));this.imageReady=new Deferred;this.node.onload=function(a){c.imageReady.resolve(c,a)}},setImageSource:function(a){this.imageSource=
a;this.node.src=a}}),DEVICE_ID="311TRUNGDQ3-W7",APP_WIDTH=1280,APP_HEIGHT=720,FRAME_GAP=3,$frameEnum={layout:{vp1:"vp1",vp2:"vp2",vp3:"vp3",hp1:"hp1",hp2:"hp2",hp3:"hp3",hp4:"hp4"},item:{image:"image",video:"video"},effect:{swipeLeft:"swipeLeft",swipeRight:"swipeRight",swipeUp:"swipeUp",swipeDown:"swipeUp",zoomUpDown:"zoomUpDown",flipRight:"flipRight",flipLeft:"flipLeft",flipUp:"flipUp",flipDown:"flipDown"},method:{require_device_authenticate:"require_device_authenticate",device_authenticate:"device_authenticate"}},
$frameUtils={getSubFramePosition:function(a,b,c,d){switch(a){case $frameEnum.layout.vp2:return{left:0,top:(FRAME_GAP+d)*b/2,width:c,height:d/2-FRAME_GAP/2};case $frameEnum.layout.vp3:return{left:0,top:(d/3+FRAME_GAP/3)*b,width:c,height:(d-3*FRAME_GAP-FRAME_GAP)/3+FRAME_GAP/1.5};case $frameEnum.layout.hp1:return{left:FRAME_GAP,top:FRAME_GAP+b*(d-3*FRAME_GAP),width:c-2*FRAME_GAP,height:d-2*FRAME_GAP};case $frameEnum.layout.hp2:return{left:(FRAME_GAP+c)*b/2,top:0,width:(c-FRAME_GAP)/2,height:d};case $frameEnum.layout.hp3:return 1==
b||2==b?{left:(c+FRAME_GAP)/2,top:(b-1)*((d-3*FRAME_GAP)/2+2*FRAME_GAP),width:c/2-1.5*FRAME_GAP+FRAME_GAP,height:(d-FRAME_GAP)/2}:{left:0,top:0,width:c/2-1.5*FRAME_GAP+FRAME_GAP,height:d};case $frameEnum.layout.hp4:return 0===b||1==b?{left:0,top:b*(d/2+FRAME_GAP/2),width:c/2-2*FRAME_GAP+1.5*FRAME_GAP,height:(d-FRAME_GAP)/2}:{left:c/2+FRAME_GAP/2,top:(b-2)*(d+FRAME_GAP)/2,width:c/2-2*FRAME_GAP+1.5*FRAME_GAP,height:(d-FRAME_GAP)/2};default:return null}},getFramePosition:function(a,b,c,d){switch(a){case $frameEnum.layout.vp1:return{left:FRAME_GAP,
top:FRAME_GAP+b*(c-3*FRAME_GAP),width:d-2*FRAME_GAP,height:c-2*FRAME_GAP};case $frameEnum.layout.vp2:return{left:FRAME_GAP,top:FRAME_GAP+b*((c-3*FRAME_GAP)/2+FRAME_GAP),width:d-2*FRAME_GAP,height:(c-3*FRAME_GAP)/2};case $frameEnum.layout.vp3:return{left:FRAME_GAP,top:FRAME_GAP+b*((c-3*FRAME_GAP)/3+FRAME_GAP/2),width:d-2*FRAME_GAP,height:(c-3*FRAME_GAP-FRAME_GAP)/3};case $frameEnum.layout.hp1:return{left:FRAME_GAP,top:FRAME_GAP+b*(c-3*FRAME_GAP),width:d-2*FRAME_GAP,height:c-2*FRAME_GAP};case $frameEnum.layout.hp2:return{left:FRAME_GAP+
b*(d-FRAME_GAP)/2,top:FRAME_GAP,width:d/2-1.5*FRAME_GAP,height:c-2*FRAME_GAP};case $frameEnum.layout.hp3:return 1==b||2==b?{left:(d+FRAME_GAP)/2,top:FRAME_GAP+(b-1)*((c-3*FRAME_GAP)/2+FRAME_GAP),width:d/2-1.5*FRAME_GAP,height:(c-3*FRAME_GAP)/2}:{left:FRAME_GAP+b*(d-FRAME_GAP)/2,top:FRAME_GAP,width:d/2-1.5*FRAME_GAP,height:c-2*FRAME_GAP};case $frameEnum.layout.hp4:return 0===b||1==b?{left:FRAME_GAP,top:FRAME_GAP+b*(c/2-FRAME_GAP/2),width:d/2-2*FRAME_GAP+FRAME_GAP/2,height:c/2-1.5*FRAME_GAP}:{left:d/
2+FRAME_GAP/2,top:FRAME_GAP+(b-2)*(c/2-FRAME_GAP/2),width:d/2-2*FRAME_GAP+FRAME_GAP/2,height:c/2-1.5*FRAME_GAP};default:return null}},addSliderToFrame:function(a,b){var c=a.items;if(c&&0<c.length){var d=new FrameSlider(a.frameId);d.setPosition(0,0,b.width,b.height);for(var e=[],f=0;f<c.length;f++)c[f].type==$frameEnum.item.image&&e.push(new ImageView(f,c[f].url));d.setImages(e);d.setEffects(a.effects);d.setTimeout(6+6*Math.random());b.addChildView(d);$(b.node).addClass("frame_slider_container")}}},
FrameManager=Base.extend({templateId:0,masterLayout:"",frames:[],constructor:function(){$backendService.subscribe().done(function(a){console.log(a);console.log("Got data, now what?")});$backendService.connectBackend().done(function(){console.log("Connect to backend success")}).fail(function(){console.log("Connect to backend failed")});this.loadData();this.show()},loadData:function(){for(var a=$backendService.getFrameData(),b=0;b<a.frames.length;b++){var c=a.frames[b],d=new FrameView(c.frameId),e=
$frameUtils.getFramePosition(a.masterLayout,b,APP_HEIGHT,APP_WIDTH);d.setPosition(e.left,e.top,e.width,e.height);if(null!==c.subLayout)for(var f=0;f<c.frames.length;f++){var g=new FrameView(c.frames[f].frameId),h=$frameUtils.getSubFramePosition(c.subLayout,f,e.width,e.height);g.setPosition(h.left,h.top,h.width,h.height);g.setBackgroundColor("#ccc");$frameUtils.addSliderToFrame(c.frames[f],g);d.addChildView(g)}else d.setBackgroundColor("#ccc"),$frameUtils.addSliderToFrame(c,d);this.frames.push(d)}},
show:function(){for(var a=0;a<this.frames.length;a++)$bodyFrame.addChildView(this.frames[a])}}),BackendService=Topic.extend({BACKEND_SOCKET_URL:"ws://10.88.66.251:8080/tsb-shareboard-api/websocket",socket:null,_isListening:!1,getFrameData:function(){return{templateId:1,masterLayout:"hp4",frames:[{frameId:1,subLayout:null,frames:[],items:[{itemId:1,type:"image",url:"http://www.byui.edu/images/agriculture-life-sciences/flower.jpg"},{itemId:2,type:"image",url:"http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/Tropical+Plumeria+Flower.jpg"},
{itemId:3,type:"image",url:"http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/flowers333.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:2,subLayout:"hp3",frames:[{frameId:3,items:[{itemId:4,type:"image",url:"http://www.boatshedmarket.com.au/image/data/flowers_img.jpg"},{itemId:5,type:"image",url:"http://www.grandpalaceriga.com/images/catalog_full/89ac280cc25173a167f93d4f0e7c1e21.jpg"},
{itemId:6,type:"image",url:"http://4.bp.blogspot.com/_6D_evDvZgNA/SKpsT-ic4DI/AAAAAAAAAD8/fv4lqqI0PRY/s400/fragile-white-flowers.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:4,items:[{itemId:7,type:"image",url:"http://www.graphix1.co.uk/wp-content/uploads/2011/08/08Flowers.jpg"},{itemId:8,type:"image",url:"http://1.bp.blogspot.com/-WS3KVqdQn_Q/T-bU51hQJ3I/AAAAAAAAAFo/zwC4CKr7Xh0/s1600/the-desktop-hd-Flowers-wallpapers+(3).jpg"},
{itemId:9,type:"image",url:"http://blog.interflora.co.uk/wp-content/uploads/2012/07/Passion-Flower.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:5,items:[{itemId:10,type:"image",url:"http://1.bp.blogspot.com/-JBzh6ow4OW0/UTM-iRlaiyI/AAAAAAAASec/stu52MBuWnM/s1600/y016-741067.jpg"},{itemId:11,type:"image",url:"http://1.bp.blogspot.com/-DvLpL0NphyU/TpSFQ6WiUOI/AAAAAAAABbg/B-ykNMvWQvU/s1600/happy.jpg"},{itemId:12,
type:"image",url:"http://images2.layoutsparks.com/1/179204/no-idea-t5-flowers.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3}],items:[],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:6,subLayout:"hp4",frames:[{frameId:7,items:[{itemId:13,type:"image",url:"http://3.bp.blogspot.com/-ONEZIRjcjXE/Uh-WjyE3aSI/AAAAAAAAAos/dLqEAVDfggE/s640/blue-flower-wallpaper-.jpg"},
{itemId:14,type:"image",url:"http://www.bhg.com/videos/hosting/media/bhg/1620905/59977667/add-fragrant-flowers-to-your-garden.jpg"},{itemId:15,type:"image",url:"http://4.bp.blogspot.com/-QrlW8v6xQos/UYnb7bMSNJI/AAAAAAAAKlI/XcqrCoJsZ68/s1600/vibrant-flowers-248131_1024_768rrr.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:8,items:[{itemId:16,type:"image",url:"http://1.bp.blogspot.com/--VqUcuRqS8Q/TYwVmOKir8I/AAAAAAAAAJQ/ZSK5ygALMeU/s1600/red-flowers.jpg"},
{itemId:17,type:"image",url:"http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purple-flower-87a.jpg"},{itemId:18,type:"image",url:"http://2.bp.blogspot.com/-e9Obk_RFH4I/UYdQPpxggOI/AAAAAAAAKUY/KBVhQxwnB4c/s640/flowers44.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:9,items:[{itemId:19,type:"image",url:"http://4.bp.blogspot.com/-ik3E8PBBf70/TwaZ9PMNbrI/AAAAAAAAAG0/kNrGnEbZ-WY/s640/flowers2.jpg"},
{itemId:20,type:"image",url:"http://cdn.blogs.sheknows.com/gardening.sheknows.com/2011/02/lotus-flower.jpg"},{itemId:21,type:"image",url:"http://mw2.google.com/mw-panoramio/photos/medium/96447714.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:10,items:[{itemId:22,type:"image",url:"http://3.bp.blogspot.com/-ui6lvZa8CGA/TlnS2Hv2DkI/AAAAAAAACyM/E34Dab7dWfs/s685/Lily+flower+wallpaper4.jpg"},{itemId:23,type:"image",
url:"http://flowerinfo.org/wp-content/gallery/lupine-flowers/lupine-flowers-5.jpg"},{itemId:24,type:"image",url:"http://vnfriend.files.wordpress.com/2010/11/flower-4.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3}],items:[],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:11,subLayout:"hp4",frames:[{frameId:12,items:[{itemId:25,type:"image",
url:"http://3.bp.blogspot.com/-kEDW4tNSmpA/UYnb_TbNiqI/AAAAAAAAKlc/MuZ3D0k6xRs/s400/wallpapers-of-Rose-Flower456.jpg"},{itemId:26,type:"image",url:"http://cimages.proflowers.com/is/image/ProvideCommerce/PF_13_T220_MDAY_VA0607_W1_SQ"},{itemId:27,type:"image",url:"http://cdn.twentytwowords.com/wp-content/uploads/Hot-Lips-Flower-01-634x396.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:13,items:[{itemId:28,
type:"image",url:"http://www.whats-your-sign.com/images/ChineseFlowerMeanings.jpg"},{itemId:29,type:"image",url:"http://4.bp.blogspot.com/-7YF-17Q2s8c/Uh-WX2tVrHI/AAAAAAAAAoc/lwRlay4pL8s/s640/light-blue-flowers-wallpapers-hd.jpg"},{itemId:30,type:"image",url:"http://1.bp.blogspot.com/-l-ePa0ejM18/UAjHJz63NZI/AAAAAAAAEdU/XErwfKE6JPk/s1600/bird-of-paradise-flower-1.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:14,
items:[{itemId:31,type:"image",url:"http://2.bp.blogspot.com/_mvHl0jIiX-E/S2j1d3skY_I/AAAAAAAAE9Q/ni4g5VuGmk8/s640/blue-violet-flower07.jpg"},{itemId:32,type:"image",url:"http://www.designboom.com/weblog/images/images_2/lara/818_images/robert_buelteman/electrocuted_flowers05.jpg"},{itemId:33,type:"image",url:"http://coverslike.com/thumbs/red_flower-t1.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3},{frameId:15,items:[{itemId:34,
type:"image",url:"http://2.bp.blogspot.com/-EM-G_YNgKJ8/TV38pYHcG2I/AAAAAAAAJCU/GCjizjfOWMg/s400/pink+rose+wallpapers+%252810%2529.jpg"},{itemId:35,type:"image",url:"http://2.bp.blogspot.com/-2k0vUtH2xZ8/US8aB1Fz1DI/AAAAAAAAHGI/XoxwF_s6Dhs/s400/flower_in_blue_sky-normal5.4.jpg"},{itemId:36,type:"image",url:"http://4.bp.blogspot.com/-NAVTPHuKF6s/UayIsar0MqI/AAAAAAAAAQg/XhVidOZshqI/s1600/purple-flower-87a.jpg"}],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),
childTemplateId:3}],items:[],effects:"swipeLeft swipeRight swipeUp swipeDown zoomUpDown flipRight flipLeft flipUp flipDown".split(" "),childTemplateId:3}]}},connectBackend:function(){var a=this;this.socket=new SocketClient;return this.socket.connect(this.BACKEND_SOCKET_URL).done(function(){a._isListening=!0;a.startSubscribe()})},disconnectBackend:function(){this._isListening=!1;this.socket.close()},startSubscribe:function(){var a=this;this.socket.subscribe().done(function(b){a.processData(JSON.parse(b.data));
a._isListening&&a.startSubscribe()})},processData:function(a){switch(a.method){case $frameEnum.method.require_device_authenticate:this.authenticateDevice();break;default:this.publish(a)}},authenticateDevice:function(){this.sendMessage($frameEnum.method.device_authenticate,{deviceId:DEVICE_ID})},sendMessage:function(a,b){this.socket.send(JSON.stringify({method:a,data:b}))}});$coreStartup.done(function(){window.$backendService=new BackendService;window.$frameManager=new FrameManager});
var SocketClient=Topic.extend({_ws:null,url:"",constructor:function(a){a&&this.connect(a);this.base()},connect:function(a){var b=new Deferred,c=this;this.url=a;this._ws=new WebSocket(a);this._ws.onopen=function(){b.resolve()};this._ws.onmessage=function(a){c.publish(a)};this._ws.onclose=function(){b.reject()};return b},send:function(a){this._ws.send(a)},close:function(){this._ws.close()}},{isSupported:function(){return"WebSocket"in window}});
