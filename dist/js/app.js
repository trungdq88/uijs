'use strict';if("undefined"==typeof templates)var templates={};"undefined"==typeof templates.frame&&(templates.frame={});templates.frame.frame=function(a,b){return'<div id="'+soy.$$escapeHtml(a.id)+'"></div>'};"undefined"==typeof templates&&(templates={});"undefined"==typeof templates.frameslider&&(templates.frameslider={});templates.frameslider.slider=function(a,b){return'<div id="'+soy.$$escapeHtml(a.id)+'"></div>'};"undefined"==typeof templates&&(templates={});
"undefined"==typeof templates.imageview&&(templates.imageview={});templates.imageview.image=function(a,b){return'<img id="'+soy.$$escapeHtml(a.id)+'" src="'+soy.$$escapeHtml(a.imageSource)+'"/>'};
var Topic=Base.extend({_subscribers:null,constructor:function(){this._subscribers=[]},subscribe:function(){var a=new Deferred;this._subscribers.push(a);return a},publish:function(a){var b=this._subscribers;this.clear();for(var c=0;c<b.length;c++)b[c].resolve(a)},clear:function(){this._subscribers=[]}}),$coreStartup=new Deferred;document.addEventListener("DOMContentLoaded",function(){DEBUG_MODE||$coreStartup.resolve()});$coreStartup.done(function(){});
var BaseView=Base.extend({id:null,node:null,childViews:{},constructor:function(a){this.id=a||""},setNode:function(a){var b=document.createElement("div");b.innerHTML=a;1<b.childNodes.length?console.log("Cannot set node: the template contains multiple root node"):(this.node=b.childNodes[0],this.node.style.position="absolute")},setPosition:function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d;this.node.style.left=a?a+"px":"";this.node.style.top=b?b+"px":"";this.node.style.width=c?c+"px":
"";this.node.style.height=d?d+"px":""},setBackgroundColor:function(a){this.node.style.backgroundColor=a},addChildView:function(a){a&&a.id&&!this.childViews[a.id]?(a.parentView=this,this.childViews[a.id]=a,this.node.appendChild(a.node)):console.log("View ID ("+a.id+") is not defined or already exist in parent View ("+this.id+")")},getParentView:function(){return this.parentView}}),FrameView=BaseView.extend({constructor:function(a){this.base("FrameView_"+a);this.childViews={};this.setNode(templates.frame.frame(this))}}),
$frameAnimation={swipeLeft:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},swipeRight:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(100%, 0, 0)"},swipeUp:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(0, -100%, 0)"},swipeDown:function(a,b){a.style.webkitTransform=b?"translate3d(0, 0, 0)":"translate3d(0, 100%, 0)"},zoomUpDown:function(a,b){a.style.webkitTransform=b?"scale(1)":"scale(0)"},flipRight:function(a,
b){a.style.webkitTransform=b?"perspective(700px) rotateY(0deg)":"perspective(700px) rotateY(90deg)"},flipLeft:function(a,b){a.style.webkitTransform=b?"perspective(700px) rotateY(0deg)":"perspective(700px) rotateY(-90deg)"},flipUp:function(a,b){a.style.webkitTransform=b?"perspective(700px) rotateX(0deg)":"perspective(700px) rotateX(90deg)"},flipDown:function(a,b){a.style.webkitTransform=b?"perspective(700px) rotateX(0deg)":"perspective(700px) rotateX(-90deg)"}},FrameSlider=BaseView.extend({currentIndex:0,
timeOut:3,duration:1,images:[],effects:[],constructor:function(a,b,c){this.base("FrameSlider_"+a);this.childViews={};this.setNode(templates.frameslider.slider(this));b&&this.setImages(b);c&&this.setEffects(c)},setImages:function(a){var b=this,c=[];this.images=a;this.hide();for(var d=0;d<a.length;d++){var e=a[d];e.setPosition(0,0,this.width,this.height);e.node.style.webkitTransform="translate3d(0px, 0px, 0px)";e.node.style.webkitTransition="-webkit-transform "+this.duration+"s";c.push(e.imageReady)}Deferred.when(Deferred,
c).done(function(){for(var a=1;a<arguments.length;a++)b.addChildView(arguments[a][0]);b.show();b.startSlideShow()})},setEffects:function(a){this.effects=a},hide:function(){this.node.style.webkitTransition="opacity 0.5s";this.node.style.opacity=0},show:function(){this.node.style.opacity=0.99},startSlideShow:function(){var a=this;this.currentIndex=this.images.length-1;for(var b=0;b<this.images.length;b++)this.images[b].node.style.zIndex=b+1;var c=function(b){a.images[b].node.style.zIndex=1;for(var c=
0;c<a.images.length;c++)c!=b&&(a.images[c].node.style.zIndex=+a.images[c].node.style.zIndex+1)},d=function(){0>a.currentIndex&&(a.currentIndex=a.images.length-1);var b=$frameAnimation[a.getRandomEffect()];b?(b(a.images[a.currentIndex].node),a.currentIndex--,setTimeout(function(){var d=a.currentIndex+1;b(a.images[d].node,!0);c(d)},1E3*a.duration)):c(a.currentIndex--);setTimeout(d,1E3*a.timeOut)};setTimeout(d,1E3*this.timeOut)},setTimeout:function(a){this.timeOut=a},setDuration:function(a){this.duration=
a;for(a=0;a<this.images.length;a++)this.images[a].node.style.webkitTransition="-webkit-transform "+this.duration+"s"},getRandomEffect:function(){return this.effects[Math.floor(Math.random()*this.effects.length)]||""}}),ImageView=BaseView.extend({imageSource:"",imageReady:null,constructor:function(a,b){var c=this;this.base("ImageView_"+a);b&&(this.imageSource=b);this.setNode(templates.imageview.image(this));this.imageReady=new Deferred;this.node.onload=function(a){c.imageReady.resolve(c,a)}},setImageSource:function(a){this.imageSource=
a;this.node.src=a}});
