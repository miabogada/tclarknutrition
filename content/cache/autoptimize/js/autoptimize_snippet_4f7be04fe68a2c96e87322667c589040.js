(function($)
{"use strict";$.AviaFullscreenSlider=function(options,slider)
{this.$slider=$(slider);this.$inner=this.$slider.find('.avia-slideshow-inner');this.$innerLi=this.$inner.find('>li');this.$caption=this.$inner.find('.avia-slide-wrap .caption_container');this.$win=$(window);this.isMobile=$.avia_utilities.isMobile;this.property={};this.scrollPos="0";this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1?true:false;this.ticking=false;if($.avia_utilities.supported.transition===undefined)
{$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');}
this._init(options);}
$.AviaFullscreenSlider.defaults={height:100,subtract:'#wpadminbar, #header, #main>.title_container'};$.AviaFullscreenSlider.prototype={_init:function(options)
{var _self=this;this.options=$.extend(true,{},$.AviaFullscreenSlider.defaults,options);if(this.$slider.data('slide_height'))this.options.height=this.$slider.data('slide_height');this.options.parallax_enabled=this.$slider.data('image_attachment')==""?true:false;this.$subtract=$(this.options.subtract);this._setSize();this.$win.on('debouncedresize',$.proxy(this._setSize,this));setTimeout(function()
{if(!_self.isMobile&&_self.options.parallax_enabled)
{_self.$win.on('scroll',$.proxy(_self._on_scroll,_self));}},100);this.$slider.aviaSlider({bg_slider:true});},_on_scroll:function(e)
{var _self=this;if(!_self.ticking){_self.ticking=true;window.requestAnimationFrame($.proxy(_self._parallax_scroll,_self));}},_fetch_properties:function(slide_height)
{this.property.offset=this.$slider.offset().top;this.property.wh=this.$win.height();this.property.height=slide_height||this.$slider.outerHeight();this._parallax_scroll();},_setSize:function()
{if(!$.fn.avia_browser_height)
{var viewport=this.$win.height(),slide_height=Math.ceil((viewport/100)*this.options.height);if(this.$subtract.length&&this.options.height==100)
{this.$subtract.each(function()
{slide_height-=this.offsetHeight-0.5;});}
else
{slide_height-=1;}
this.$slider.height(slide_height).removeClass('av-default-height-applied');this.$inner.css('padding',0);}
this._fetch_properties(slide_height);},_parallax_scroll:function(e)
{if(this.isMobile||!this.options.parallax_enabled)return;var winTop=this.$win.scrollTop(),winBottom=winTop+this.property.wh,scrollPos="0",prop={},prop2={};if(this.property.offset<winTop&&winTop<=this.property.offset+this.property.height)
{scrollPos=Math.round((winTop-this.property.offset)*0.3);}
if(this.scrollPos!=scrollPos)
{this.scrollPos=scrollPos;if(this.transform3d)
{prop[$.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+scrollPos+"px,0px)";}
else
{prop[$.avia_utilities.supported.transition+"transform"]="translate(0px,"+scrollPos+"px)";}
this.$inner.css(prop);}
this.ticking=false;}};$.fn.aviaFullscreenSlider=function(options)
{return this.each(function()
{var active=$.data(this,'aviaFullscreenSlider');if(!active)
{$.data(this,'aviaFullscreenSlider',1);new $.AviaFullscreenSlider(options,this);}});}})(jQuery);