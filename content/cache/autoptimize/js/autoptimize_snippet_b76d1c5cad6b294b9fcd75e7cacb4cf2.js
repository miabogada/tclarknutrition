(function($)
{"use strict";$.AviaSlider=function(options,slider)
{var self=this;this.$win=$(window);this.$slider=$(slider);this.isMobile=$.avia_utilities.isMobile;this._prepareSlides(options);$.avia_utilities.preload({container:this.$slider,single_callback:function(){self._init(options);}});}
$.AviaSlider.defaults={interval:5,autoplay:false,stopinfiniteloop:false,animation:'slide',transitionSpeed:900,easing:'easeInOutQuart',wrapElement:'>ul',slideElement:'>li',hoverpause:false,bg_slider:false,show_slide_delay:0,fullfade:false,carousel:'no',carouselSlidesToShow:3,carouselSlidesToScroll:1,carouselResponsive:new Array(),};$.AviaSlider.prototype={_init:function(options)
{this.options=this._setOptions(options);this.$sliderUl=this.$slider.find(this.options.wrapElement);this.$slides=this.$sliderUl.find(this.options.slideElement);this.gotoButtons=this.$slider.find('.avia-slideshow-dots a');this.permaCaption=this.$slider.find('>.av-slideshow-caption');this.itemsCount=this.$slides.length;this.current=0;this.currentCarousel=0;this.slideWidthCarousel='240';this.loopCount=0;this.isAnimating=false;this.browserPrefix=$.avia_utilities.supports('transition');this.cssActive=this.browserPrefix!==false?true:false;this.css3DActive=document.documentElement.className.indexOf('avia_transform3d')!==-1?true:false;if(this.options.bg_slider==true)
{this.imageUrls=[];this.loader=$.avia_utilities.loading(this.$slider);this._bgPreloadImages();}
else
{this._kickOff();}
if(this.options.carousel==='yes'){this.options.animation='carouselslide';}},_setOptions:function(options)
{var newOptions=$.extend(true,{},$.AviaSlider.defaults,options),htmlData=this.$slider.data(),i="";for(i in htmlData)
{if(htmlData.hasOwnProperty(i))
{if(typeof htmlData[i]==="string"||typeof htmlData[i]==="number"||typeof htmlData[i]==="boolean")
{newOptions[i]=htmlData[i];}}}
return newOptions;},_prepareSlides:function(options)
{if(this.isMobile)
{var alter=this.$slider.find('.av-mobile-fallback-image');alter.each(function()
{var current=$(this).removeClass('av-video-slide').data({'avia_video_events':true,'video-ratio':0}),fallback=current.data('mobile-img'),fallback_link=current.data('fallback-link'),appendTo=current.find('.avia-slide-wrap');current.find('.av-click-overlay, .mejs-mediaelement, .mejs-container').remove();if(!fallback)
{$('<p class="av-fallback-message"><span>Please set a mobile device fallback image for this video in your wordpress backend</span></p>').appendTo(appendTo);}
if(options&&options.bg_slider)
{current.data('img-url',fallback);if(fallback_link!="")
{if(appendTo.is('a'))
{appendTo.attr('href',fallback_link);}
else
{appendTo.find('a').remove();appendTo.replaceWith(function(){var cur_slide=$(this);return $("<a>").attr({'data-rel':cur_slide.data('rel'),'class':cur_slide.attr('class'),'href':fallback_link}).append($(this).contents());});appendTo=current.find('.avia-slide-wrap');}
if($.fn.avia_activate_lightbox)
{current.parents('#main').avia_activate_lightbox();}}}
else
{var image='<img src="'+fallback+'" alt="" title="" />';var lightbox=false;if('string'==typeof fallback_link&&fallback_link.trim()!='')
{if(appendTo.is('a'))
{appendTo.attr('href',fallback_link);}
else
{var rel=fallback_link.match(/\.(jpg|jpeg|gif|png)$/i)!=null?' rel="lightbox" ':'';image='<a href="'+fallback_link.trim()+'"'+rel+'>'+image+'</a>';}
lightbox=true;}
current.find('.avia-slide-wrap').append(image);if(lightbox&&$.fn.avia_activate_lightbox)
{current.parents('#main').avia_activate_lightbox();}}});}},_bgPreloadImages:function(callback)
{this._getImageURLS();this._preloadSingle(0,function()
{this._kickOff();this._preloadNext(1);});},_getImageURLS:function()
{var _self=this;this.$slides.each(function(i)
{_self.imageUrls[i]=[];_self.imageUrls[i]['url']=$(this).data("img-url");if(typeof _self.imageUrls[i]['url']=='string')
{_self.imageUrls[i]['status']=false;}
else
{_self.imageUrls[i]['status']=true;}});},_preloadSingle:function(key,callback)
{var _self=this,objImage=new Image();if(typeof _self.imageUrls[key]['url']=='string')
{$(objImage).bind('load error',function()
{_self.imageUrls[key]['status']=true;_self.$slides.eq(key).css('background-image','url('+_self.imageUrls[key]['url']+')');if(typeof callback=='function')callback.apply(_self,[objImage,key]);});if(_self.imageUrls[key]['url']!="")
{objImage.src=_self.imageUrls[key]['url'];}
else
{$(objImage).trigger('error');}}
else
{if(typeof callback=='function')callback.apply(_self,[objImage,key]);}},_preloadNext:function(key)
{if(typeof this.imageUrls[key]!="undefined")
{this._preloadSingle(key,function()
{this._preloadNext(key+1);});}},_bindEvents:function()
{var self=this,win=$(window);this.$slider.on('click','.next-slide',$.proxy(this.next,this));this.$slider.on('click','.prev-slide',$.proxy(this.previous,this));this.$slider.on('click','.goto-slide',$.proxy(this.go2,this));if(this.options.hoverpause)
{this.$slider.on('mouseenter',$.proxy(this.pause,this));this.$slider.on('mouseleave',$.proxy(this.resume,this));}
if(this.options.stopinfiniteloop&&this.options.autoplay)
{if(this.options.stopinfiniteloop=='last')
{this.$slider.on('avia_slider_last_slide',$.proxy(this._stopSlideshow,this));}
else if(this.options.stopinfiniteloop=='first')
{this.$slider.on('avia_slider_first_slide',$.proxy(this._stopSlideshow,this));}}
if(this.options.carousel==='yes'){win.on('debouncedresize',$.proxy(this._buildCarousel,this));}
else{win.on('debouncedresize.aviaSlider',$.proxy(this._setSize,this));}
if(!this.isMobile)
{this.$slider.avia_keyboard_controls();}
else
{this.$slider.avia_swipe_trigger();}
self._attach_video_events();},_kickOff:function()
{var self=this,first_slide=self.$slides.eq(0),video=first_slide.data('video-ratio');self._bindEvents();this.$slider.removeClass('av-default-height-applied');if(video)
{self._setSize(true);}
else
{if(this.options.keep_pading!=true)
{self.$sliderUl.css('padding',0);self.$win.trigger('av-height-change');}}
self._setCenter();if(this.options.carousel==='no'){first_slide.css({visibility:'visible',opacity:0}).avia_animate({opacity:1},function()
{var current=$(this).addClass('active-slide');if(self.permaCaption.length)
{self.permaCaption.addClass('active-slide');}});}
if(self.options.autoplay)
{self._startSlideshow();}
if(self.options.carousel==='yes'){self._buildCarousel();}
self.$slider.trigger('_kickOff');},_buildCarousel:function(){var self=this,stageWidth=this.$slider.outerWidth(),slidesWidth=parseInt(stageWidth/this.options.carouselSlidesToShow),windowWidth=window.innerWidth||$(window).width();if(this.options.carouselResponsive&&this.options.carouselResponsive.length&&this.options.carouselResponsive!==null){for(var breakpoint in this.options.carouselResponsive){var breakpointValue=this.options.carouselResponsive[breakpoint]['breakpoint'];var newSlidesToShow=this.options.carouselResponsive[breakpoint]['settings']['carouselSlidesToShow'];if(breakpointValue>=windowWidth){slidesWidth=parseInt(stageWidth/newSlidesToShow);this.options.carouselSlidesToShow=newSlidesToShow;}}}
this.slideWidthCarousel=slidesWidth;this.$slides.each(function(i){$(this).width(slidesWidth);});var slideTrackWidth=slidesWidth*this.itemsCount;this.$sliderUl.width(slideTrackWidth).css('transform','translateX(0px)');if(this.options.carouselSlidesToShow>=this.itemsCount){this.$slider.find('.av-timeline-nav').hide();}},_navigate:function(dir,pos){if(this.isAnimating||this.itemsCount<2 ||!this.$slider.is(":visible"))
{return false;}
this.isAnimating=true;this.prev=this.current;if(pos!==undefined)
{this.current=pos;dir=this.current>this.prev?'next':'prev';}
else if(dir==='next')
{this.current=this.current<this.itemsCount-1?this.current+1:0;if(this.current===0&&this.options.autoplay_stopper==1&&this.options.autoplay)
{this.isAnimating=false;this.current=this.prev;this._stopSlideshow();return false;}}
else if(dir==='prev')
{this.current=this.current>0?this.current-1:this.itemsCount-1;}
this.gotoButtons.removeClass('active').eq(this.current).addClass('active');if(this.options.carousel==='no'){this._setSize();}
if(this.options.bg_slider==true)
{if(this.imageUrls[this.current]['status']==true)
{this['_'+this.options.animation].call(this,dir);}
else
{this.loader.show();this._preloadSingle(this.current,function()
{this['_'+this.options.animation].call(this,dir);this.loader.hide();});}}
else
{this['_'+this.options.animation].call(this,dir);}
if(this.current==0)
{this.loopCount++;this.$slider.trigger('avia_slider_first_slide');}
else if(this.current==this.itemsCount-1)
{this.$slider.trigger('avia_slider_last_slide');}
else
{this.$slider.trigger('avia_slider_navigate_slide');}},_setSize:function(instant)
{if(this.options.bg_slider==true)return;var self=this,slide=this.$slides.eq(this.current),img=slide.find('img'),current=Math.floor(this.$sliderUl.height()),ratio=slide.data('video-ratio'),setTo=ratio?this.$sliderUl.width()/ratio:Math.floor(slide.height()),video_height=slide.data('video-height'),video_toppos=slide.data('video-toppos');this.$sliderUl.height(current).css('padding',0);if(setTo!=current)
{if(instant==true)
{this.$sliderUl.css({height:setTo});this.$win.trigger('av-height-change');}
else
{this.$sliderUl.avia_animate({height:setTo},function()
{self.$win.trigger('av-height-change');});}}
this._setCenter();if(video_height&&video_height!="set")
{slide.find('iframe, embed, video, object, .av_youtube_frame').css({height:video_height+'%',top:video_toppos+'%'});slide.data('video-height','set');}},_setCenter:function()
{var slide=this.$slides.eq(this.current),img=slide.find('img'),min_width=parseInt(img.css('min-width'),10),slide_width=slide.width(),caption=slide.find('.av-slideshow-caption'),css_left=((slide_width-min_width)/2);if(caption.length)
{if(caption.is('.caption_left'))
{css_left=((slide_width-min_width)/1.5);}
else if(caption.is('.caption_right'))
{css_left=((slide_width-min_width)/2.5);}}
if(slide_width>=min_width)
{css_left=0;}
img.css({left:css_left});},_carouselmove:function(){var offset=this.slideWidthCarousel*this.currentCarousel;this.$sliderUl.css('transform','translateX(-'+offset+'px)');},_carouselslide:function(dir){if(dir==='next'){if(this.options.carouselSlidesToShow+this.currentCarousel<this.itemsCount){this.currentCarousel++;this._carouselmove();}}
else if(dir==='prev'){if(this.currentCarousel>0){this.currentCarousel--;this._carouselmove();}}
this.isAnimating=false;},_slide:function(dir)
{var dynamic=false,modifier=dynamic==true?2:1,sliderWidth=this.$slider.width(),direction=dir==='next'?-1:1,property=this.browserPrefix+'transform',reset={},transition={},transition2={},trans_val=(sliderWidth*direction*-1),trans_val2=(sliderWidth*direction)/modifier;if(this.cssActive)
{property=this.browserPrefix+'transform';if(this.css3DActive)
{reset[property]="translate3d("+trans_val+"px, 0, 0)";transition[property]="translate3d("+trans_val2+"px, 0, 0)";transition2[property]="translate3d(0,0,0)";}
else
{reset[property]="translate("+trans_val+"px,0)";transition[property]="translate("+trans_val2+"px,0)";transition2[property]="translate(0,0)";}}
else
{reset.left=trans_val;transition.left=trans_val2;transition2.left=0;}
if(dynamic)
{transition['z-index']="1";transition2['z-index']="2";}
this._slide_animate(reset,transition,transition2);},_slide_up:function(dir)
{var dynamic=true,modifier=dynamic==true?2:1,sliderHeight=this.$slider.height(),direction=dir==='next'?-1:1,property=this.browserPrefix+'transform',reset={},transition={},transition2={},trans_val=(sliderHeight*direction*-1),trans_val2=(sliderHeight*direction)/modifier;if(this.cssActive)
{property=this.browserPrefix+'transform';if(this.css3DActive)
{reset[property]="translate3d( 0,"+trans_val+"px, 0)";transition[property]="translate3d( 0,"+trans_val2+"px, 0)";transition2[property]="translate3d(0,0,0)";}
else
{reset[property]="translate( 0,"+trans_val+"px)";transition[property]="translate( 0,"+trans_val2+"px)";transition2[property]="translate(0,0)";}}
else
{reset.top=trans_val;transition.top=trans_val2;transition2.top=0;}
if(dynamic)
{transition['z-index']="1";transition2['z-index']="2";}
this._slide_animate(reset,transition,transition2);},_slide_animate:function(reset,transition,transition2)
{var self=this,displaySlide=this.$slides.eq(this.current),hideSlide=this.$slides.eq(this.prev);hideSlide.trigger('pause');if(!displaySlide.data('disableAutoplay')){if(displaySlide.hasClass('av-video-lazyload')&&!displaySlide.hasClass('av-video-lazyload-complete'))
{displaySlide.find('.av-click-to-play-overlay').trigger('click');}
else
{displaySlide.trigger('play');}}
displaySlide.css({visibility:'visible',zIndex:4,opacity:1,left:0,top:0});displaySlide.css(reset);hideSlide.avia_animate(transition,this.options.transitionSpeed,this.options.easing);var after_slide=function()
{self.isAnimating=false;displaySlide.addClass('active-slide');hideSlide.css({visibility:'hidden'}).removeClass('active-slide');self.$slider.trigger('avia-transition-done');}
if(self.options.show_slide_delay>0)
{setTimeout(function(){displaySlide.avia_animate(transition2,self.options.transitionSpeed,self.options.easing,after_slide);},self.options.show_slide_delay);}
else
{displaySlide.avia_animate(transition2,self.options.transitionSpeed,self.options.easing,after_slide);}},_fade:function()
{var self=this,displaySlide=this.$slides.eq(this.current),hideSlide=this.$slides.eq(this.prev),properties={visibility:'visible',zIndex:3,opacity:0},fadeCallback=function()
{self.isAnimating=false;displaySlide.addClass('active-slide');hideSlide.css({visibility:'hidden',zIndex:2}).removeClass('active-slide');self.$slider.trigger('avia-transition-done');};hideSlide.trigger('pause');if(!displaySlide.data('disableAutoplay')){if(displaySlide.hasClass('av-video-lazyload')&&!displaySlide.hasClass('av-video-lazyload-complete'))
{displaySlide.find('.av-click-to-play-overlay').trigger('click');}
else
{displaySlide.trigger('play');}}
if(self.options.fullfade==true)
{hideSlide.avia_animate({opacity:0},200,'linear',function()
{displaySlide.css(properties).avia_animate({opacity:1},self.options.transitionSpeed,'linear',fadeCallback);});}
else
{displaySlide.css(properties).avia_animate({opacity:1},self.options.transitionSpeed/2,'linear',function()
{hideSlide.avia_animate({opacity:0},200,'linear',fadeCallback);});}},_attach_video_events:function()
{var self=this,$html=$('html');self.$slides.each(function(i)
{var currentSlide=$(this),caption=currentSlide.find('.caption_fullwidth, .av-click-overlay'),mejs=currentSlide.find('.mejs-mediaelement'),lazyload=currentSlide.hasClass('av-video-lazyload')?true:false;if(currentSlide.data('avia_video_events')!=true)
{currentSlide.data('avia_video_events',true);currentSlide.on('av-video-events-bound',{slide:currentSlide,wrap:mejs,iteration:i,self:self,lazyload:lazyload},onReady);currentSlide.on('av-video-ended',{slide:currentSlide,self:self},onFinish);currentSlide.on('av-video-play-executed',function(){setTimeout(function(){self.pause()},100);});caption.on('click',{slide:currentSlide},toggle);if(currentSlide.is('.av-video-events-bound'))currentSlide.trigger('av-video-events-bound');if(lazyload&&i===0&&!currentSlide.data('disableAutoplay'))
{currentSlide.find('.av-click-to-play-overlay').trigger('click');}}});function onReady(event)
{if(event.data.iteration===0)
{event.data.wrap.css('opacity',0);if(!event.data.self.isMobile&&!event.data.slide.data('disableAutoplay'))
{event.data.slide.trigger('play');} 
setTimeout(function(){event.data.wrap.avia_animate({opacity:1},400);},50);}
else if($html.is('.avia-msie')&&!event.data.slide.is('.av-video-service-html5'))
{if(!event.data.slide.data('disableAutoplay'))event.data.slide.trigger('play');}
if(event.data.slide.is('.av-video-service-html5')&&event.data.iteration!==0)
{event.data.slide.trigger('pause');}
if(event.data.lazyload)
{event.data.slide.addClass('av-video-lazyload-complete');event.data.slide.trigger('play');}}
function onFinish(event)
{if(!event.data.slide.is('.av-single-slide')&&!event.data.slide.is('.av-loop-video'))
{event.data.slide.trigger('reset');self._navigate('next');self.resume();}
if(event.data.slide.is('.av-loop-video')&&event.data.slide.is('.av-video-service-html5'))
{if($html.is('.avia-safari-8'))
{setTimeout(function(){event.data.slide.trigger('play');},1);}}}
function toggle(event)
{if(event.target.tagName!="A")
{event.data.slide.trigger('toggle');}}},_timer:function(callback,delay,first)
{var self=this,start,remaining=delay;self.timerId=0;this.pause=function(){window.clearTimeout(self.timerId);remaining-=new Date()-start;};this.resume=function(){start=new Date();self.timerId=window.setTimeout(callback,remaining);};this.destroy=function()
{window.clearTimeout(self.timerId);};this.resume(true);},_startSlideshow:function()
{var self=this;this.isPlaying=true;this.slideshow=new this._timer(function()
{self._navigate('next');if(self.options.autoplay)
{self._startSlideshow();}},(this.options.interval*1000));},_stopSlideshow:function()
{if(this.options.autoplay){this.slideshow.destroy();this.isPlaying=false;this.options.autoplay=false;}},next:function(e)
{e.preventDefault();this._stopSlideshow();this._navigate('next');},previous:function(e)
{e.preventDefault();this._stopSlideshow();this._navigate('prev');},go2:function(pos)
{if(isNaN(pos))
{pos.preventDefault();pos=pos.currentTarget.hash.replace('#','');}
pos-=1;if(pos===this.current||pos>=this.itemsCount||pos<0)
{return false;}
this._stopSlideshow();this._navigate(false,pos);},play:function()
{if(!this.isPlaying)
{this.isPlaying=true;this._navigate('next');this.options.autoplay=true;this._startSlideshow();}},pause:function()
{if(this.isPlaying)
{this.slideshow.pause();}},resume:function()
{if(this.isPlaying)
{this.slideshow.resume();}},destroy:function(callback)
{this.slideshow.destroy(callback);}}
$.fn.aviaSlider=function(options)
{return this.each(function()
{var self=$.data(this,'aviaSlider');if(!self)
{self=$.data(this,'aviaSlider',new $.AviaSlider(options,this));}});}})(jQuery);