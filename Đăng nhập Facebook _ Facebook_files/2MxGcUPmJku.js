/*!CK:3023488900!*//*1451950187,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RsgkT"]); }

__d('XUIAmbientNUXBody.react',['React','XUICloseButton.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'XUIAmbientNUXBody',propTypes:{onCloseButtonClick:l.func},render:function(){var n=k("_21es",this.props.className);return (h.createElement('div',{className:n},h.createElement(i,{shade:'light',className:"_36gl",onClick:this.props.onCloseButtonClick}),h.createElement('div',{className:"_36gn"},this.props.children)));}});f.exports=m;},null);
__d('XUIAmbientNUXTheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i;},null);
__d('XUIAmbientNUX.react',['HasLayerContextMixin','React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=i.PropTypes,o=300,p=380,q=j.createClass(k.createSpec({displayName:'XUIAmbientNUX',theme:l})),r=i.createClass({displayName:'XUIAmbientNUX',mixins:[h],propTypes:{alignment:n.oneOf(['left','center','right']),behaviors:n.object,context:n.object,contextRef:n.func,customwidth:n.number,hasActionableContext:n.bool,offsetX:n.number,offsetY:n.number,onCloseButtonClick:n.func,position:n.oneOf(['above','below','left','right']),shown:n.bool,width:n.oneOf(['wide','normal','auto','custom'])},_getWidth:function(){switch(this.props.width){case 'wide':return p;case 'custom':return this.props.customwidth;case 'auto':return null;default:return o;}},render:function(){return (i.createElement(q,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.getContextNode(),focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,offsetX:this.props.offsetX,offsetY:this.props.offsetY,position:this.props.position,shown:this.props.shown,width:this._getWidth(this.props)},i.createElement(m,{onCloseButtonClick:this.props.onCloseButtonClick},this.props.children)));}});f.exports=r;},null);
__d("ClientServiceWorkerMessage",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k;}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2]);};f.exports=h;},null);
__d('BrowserPushVisibilityChanger',['BrowserPushCommands','ClientServiceWorkerMessage','Visibility'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(){new i(h.WINDOW_VISIBLE,null).sendViaController();}var l={listenForVisibility:function(){if(!j.isHidden())k();j.addListener(j.VISIBLE,k);}};f.exports=l;},null);
__d('Spotlight',['Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','csx','cx','joinClasses','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;v=babelHelpers.inherits(x,q(l,u(i)));w=v&&v.prototype;function x(z,aa){'use strict';w.constructor.call(this,z,aa);this.stageMinSize=new p(0,0);this.stagePadding=new p(0,0);}x.prototype._buildWrapper=function(z,aa){'use strict';var ba=t("_n8 _3qx",z.rootClassName);return (k.div({className:ba},k.div({className:"_n9"},aa)));};x.prototype._getDefaultBehaviors=function(){'use strict';return w._getDefaultBehaviors.call(this).concat([y,m,n,o]);};x.prototype.getContentRoot=function(){'use strict';if(!this._content)this._content=j.find(this.getRoot(),"div._n3");return this._content;};x.prototype.configure=function(z){'use strict';if(z.stageMinSize)this.stageMinSize=z.stageMinSize;if(z.stagePadding)this.stagePadding=z.stagePadding;};x.prototype.onContentLoaded=function(){'use strict';this.inform('content-load');};x.prototype.updatePermalink=function(z){'use strict';this.inform('permalinkchange',z);};Object.assign(x.prototype,{stageMinSize:null,stagePadding:null});function y(z){'use strict';this._layer=z;}y.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(z,aa){if(z==='show'){h.inform('layer_shown',{type:'Spotlight'});}else h.inform('layer_hidden',{type:'Spotlight'});});};y.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};Object.assign(y.prototype,{_subscription:null});f.exports=x;},null);
__d("XBrowserPushDisabledController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/disabled\/",{});},null);