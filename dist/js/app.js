'use strict';if("undefined"==typeof templates)var templates={};"undefined"==typeof templates.frame&&(templates.frame={});templates.frame.frame=function(a,b){return'<div id="'+soy.$$escapeHtml(a.id)+'"></div>'};"undefined"==typeof templates&&(templates={});"undefined"==typeof templates.frameslider&&(templates.frameslider={});templates.frameslider.slider=function(a,b){return'<div id="'+soy.$$escapeHtml(a.id)+'"></div>'};"undefined"==typeof templates&&(templates={});
"undefined"==typeof templates.imageview&&(templates.imageview={});templates.imageview.image=function(a,b){return'<img id="'+soy.$$escapeHtml(a.id)+'" src="'+soy.$$escapeHtml(a.imageSource)+'"/>'};
var BaseView=Base.extend({id:null,node:null,childViews:{},constructor:function(a){this.id=a||""},setNode:function(a){var b=document.createElement("div");b.innerHTML=a;1<b.childNodes.length?console.log("Cannot set node: the template contains multiple root node"):(this.node=b.childNodes[0],this.node.style.position="absolute")},setPosition:function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d;this.node.style.left=a?a+"px":"";this.node.style.top=b?b+"px":"";this.node.style.width=c?c+"px":
"";this.node.style.height=d?d+"px":""},setBackgroundColor:function(a){this.node.style.backgroundColor=a},addChildView:function(a){a&&a.id&&!this.childViews[a.id]?(a.parentView=this,this.childViews[a.id]=a,this.node.appendChild(a.node)):console.log("View ID ("+a.id+") is not defined or already exist in parent View")},getParentView:function(){return this.parentView}}),Frame=BaseView.extend({constructor:function(a){this.base("Frame_"+a);this.childViews={};this.setNode(templates.frame.frame(this))}}),
FrameSlider=BaseView.extend({currentIndex:0,timeOut:3,duration:1,images:[],constructor:function(a,b){this.base("FrameSlider_"+a);this.setNode(templates.frameslider.slider(this));b&&this.setImages(b)},setImages:function(a){var b=this;this.images=a;var c=[];this.hide();for(var d=0;d<a.length;d++){var e=a[d];e.setPosition(0,0,this.width,this.height);e.node.style.webkitTransform="translate3d(0px, 0px, 0px)";e.node.style.webkitTransition="-webkit-transform "+this.duration+"s";c.push(e.imageReady)}Deferred.when(Deferred,
c).done(function(){for(var a=1;a<arguments.length;a++)b.addChildView(arguments[a][0]);b.show();b.startSlideShow()})},hide:function(){this.node.style.webkitTransition="opacity 0.5s";this.node.style.opacity=0},show:function(){this.node.style.opacity=0.99},startSlideShow:function(){var a=this;this.currentIndex=this.images.length-1;for(var b=0;b<this.images.length;b++)this.images[b].node.style.zIndex=b+1;var c=function(){0>a.currentIndex&&(a.currentIndex=a.images.length-1);a.images[a.currentIndex].node.style.webkitTransform=
"translate3d("+-a.width+"px, 0px, 0px)";a.currentIndex--;setTimeout(function(){var b=a.currentIndex+1;a.images[b].node.style.zIndex=1;a.images[b].node.style.webkitTransform="translate3d(0px, 0px, 0px)";for(var c=0;c<a.images.length;c++)c!=b&&(a.images[c].node.style.zIndex=+a.images[c].node.style.zIndex+1)},1E3*a.duration);setTimeout(c,1E3*a.timeOut)};setTimeout(c,1E3*this.timeOut)},setTimeout:function(a){this.timeOut=a},setDuration:function(a){this.duration=a;for(a=0;a<this.images.length;a++)this.images[a].node.style.webkitTransition=
"-webkit-transform "+this.duration+"s"}}),ImageView=BaseView.extend({imageSource:"",imageReady:null,constructor:function(a,b){var c=this;this.base("ImageView_"+a);b&&(this.imageSource=b);this.setNode(templates.imageview.image(this));this.imageReady=new Deferred;this.node.onload=function(a){c.imageReady.resolve(c,a)}},setImageSource:function(a){this.imageSource=a;this.node.src=a}}),$frameEnum={layout:{vp1:"vp1",vp2:"vp2",vp3:"vp3",hp1:"hp1",hp2:"hp2",hp3:"hp3",hp4:"hp4"},item:{image:"image",video:"video"},
effect:{slideLeft:"slideLeft",slideRight:"slideRight"}},FrameManager=Base.extend({templateId:0,masterLayout:"",frames:[],constructor:function(){for(var a=$backendService.getFrameData(),b=0;b<a.frames.length;b++){var c=new Frame(b+1),d=this.getFramePosition(a.masterLayout,b);c.setPosition(d.left,d.top,d.width,d.height);c.setBackgroundColor("#ccc");this.frames.push(c)}this.show()},show:function(){for(var a=0;a<this.frames.length;a++)bodyFrame.addChildView(this.frames[a])},getFramePosition:function(a,
b){switch(a){case $frameEnum.layout.vp1:return{left:FRAME_GAP,top:FRAME_GAP+b*(APP_HEIGHT-3*FRAME_GAP),width:APP_WIDTH-2*FRAME_GAP,height:APP_HEIGHT-2*FRAME_GAP};case $frameEnum.layout.vp2:return{left:FRAME_GAP,top:FRAME_GAP+b*((APP_HEIGHT-3*FRAME_GAP)/2+FRAME_GAP),width:APP_WIDTH-2*FRAME_GAP,height:(APP_HEIGHT-3*FRAME_GAP)/2};case $frameEnum.layout.vp3:return{left:FRAME_GAP,top:FRAME_GAP+b*((APP_HEIGHT-3*FRAME_GAP)/3+FRAME_GAP/2),width:APP_WIDTH-2*FRAME_GAP,height:(APP_HEIGHT-3*FRAME_GAP-FRAME_GAP)/
3};case $frameEnum.layout.hp1:return{left:FRAME_GAP,top:FRAME_GAP+b*(APP_HEIGHT-3*FRAME_GAP),width:APP_WIDTH-2*FRAME_GAP,height:APP_HEIGHT-2*FRAME_GAP};case $frameEnum.layout.hp2:return{left:FRAME_GAP+b*(APP_WIDTH-FRAME_GAP)/2,top:FRAME_GAP,width:APP_WIDTH/2-1.5*FRAME_GAP,height:APP_HEIGHT-2*FRAME_GAP};case $frameEnum.layout.hp3:return 1==b||2==b?{left:(APP_WIDTH+FRAME_GAP)/2,top:FRAME_GAP+(b-1)*((APP_HEIGHT-3*FRAME_GAP)/2+FRAME_GAP),width:APP_WIDTH/2-1.5*FRAME_GAP,height:(APP_HEIGHT-3*FRAME_GAP)/
2}:{left:FRAME_GAP+b*(APP_WIDTH-FRAME_GAP)/2,top:FRAME_GAP,width:APP_WIDTH/2-1.5*FRAME_GAP,height:APP_HEIGHT-2*FRAME_GAP};case $frameEnum.layout.hp4:return 0==b||1==b?{left:FRAME_GAP,top:FRAME_GAP+b*(APP_HEIGHT/2-FRAME_GAP/2),width:APP_WIDTH/2-2*FRAME_GAP+FRAME_GAP/2,height:APP_HEIGHT/2-1.5*FRAME_GAP}:{left:APP_WIDTH/2+FRAME_GAP/2,top:FRAME_GAP+(b-2)*(APP_HEIGHT/2-FRAME_GAP/2),width:APP_WIDTH/2-2*FRAME_GAP+FRAME_GAP/2,height:APP_HEIGHT/2-1.5*FRAME_GAP};default:return null}}}),BackendService=Base.extend({BACKEND_URL:"",
getFrameData:function(){return{templateId:1,masterLayout:"hp4",frames:[{frameId:1,items:[{itemId:1,type:"image",url:"http://abc.com/def1.jpg"},{itemId:2,type:"image",url:"http://abc.com/def2.jpg"},{itemId:3,type:"image",url:"http://abc.com/def3.jpg"}],effects:["slideLeft","slideRight"],childTemplateId:3},{frameId:2,items:[{itemId:4,type:"image",url:"http://abc.com/def4.jpg"},{itemId:5,type:"image",url:"http://abc.com/def5.jpg"},{itemId:6,type:"image",url:"http://abc.com/def6.jpg"}],effects:["slideLeft",
"slideRight"],childTemplateId:3},{frameId:3,items:[{itemId:4,type:"image",url:"http://abc.com/def4.jpg"},{itemId:5,type:"image",url:"http://abc.com/def5.jpg"},{itemId:6,type:"image",url:"http://abc.com/def6.jpg"}],effects:["slideLeft","slideRight"],childTemplateId:3},{frameId:4,items:[{itemId:7,type:"image",url:"http://abc.com/def4.jpg"},{itemId:8,type:"image",url:"http://abc.com/def5.jpg"},{itemId:9,type:"image",url:"http://abc.com/def6.jpg"}],effects:["slideLeft","slideRight"],childTemplateId:3}]}}}),
APP_WIDTH=1E3,APP_HEIGHT=800,FRAME_GAP=10,bodyFrame=new Frame("bodyFrame");bodyFrame.setPosition(0,0,APP_WIDTH,APP_HEIGHT);bodyFrame.setBackgroundColor("#eee");var initUIJS=function(){document.body.style.position="absolute";document.body.style.width=APP_WIDTH+"px";document.body.style.height=APP_HEIGHT+"px";document.body.style.top="0px";document.body.style.left="0px";document.body.appendChild(bodyFrame.node);main()};document.addEventListener("DOMContentLoaded",function(){initUIJS()});
var main=function(){var a=new ImageView("image1","http://www.byui.edu/images/agriculture-life-sciences/flower.jpg"),b=new ImageView("image2","http://4.bp.blogspot.com/_89oxiIwvtak/STczHGkOYTI/AAAAAAAAFNg/lEcEBLdlToo/s400/Tropical+Plumeria+Flower.jpg"),c=new ImageView("image3","http://1.bp.blogspot.com/-GVDcl1JUO8I/UYdQH9LFk5I/AAAAAAAAKUA/IWJ1vDPZdto/s640/flowers333.jpg"),d=new FrameSlider("slider"),e=bodyFrame.childViews.Frame_1;d.setPosition(0,0,e.width,e.height);d.setImages([a,b,c]);e.addChildView(d);
$(e.node).addClass("frame_slider")},$backendService=new BackendService,$frameManager=new FrameManager;
