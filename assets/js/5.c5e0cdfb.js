(window.webpackJsonp=window.webpackJsonp||[]).push([[5,38,45,47,48,49,50,51,52],{100:function(t,e,i){i(101),t.exports=i(24).Object.keys},101:function(t,e,i){var n=i(89),o=i(88);i(62)("keys",function(){return function(t){return o(n(t))}})},102:function(t,e,i){t.exports=i(103)},103:function(t,e,i){i(104);var n=i(24).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},104:function(t,e,i){var n=i(57);n(n.S+n.F*!i(72),"Object",{defineProperty:i(60).f})},105:function(t,e,i){"use strict";i.d(e,"e",function(){return o}),i.d(e,"b",function(){return r}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return s}),i.d(e,"d",function(){return l});var n=i(14);function o(t,e,i){var o=Object(n.a)({},e.directions);return t.width+o.right<0&&(o.right=-t.width),t.width+o.left<0&&(o.left=-t.width),t.height+o.bottom<0&&(o.bottom=-t.height),t.height+o.top<0&&(o.top=-t.height),i&&(t.width+t.left+o.right>i.width+i.left&&(o.right=i.width+i.left-t.width-t.left),t.height+t.top+o.bottom>i.height+i.top&&(o.bottom=i.height+i.top-t.height-t.top),t.left-o.left<i.left&&(o.left=t.left-i.left),t.top-o.top<i.top&&(o.top=t.top-i.top)),{width:t.width+o.left+o.right,height:t.height+o.top+o.bottom,left:t.left-o.left,top:t.top-o.top}}function r(t,e,i){var o=Object(n.a)({},e.directions);o.left&&(o.right=o.left),o.right&&(o.left=o.right),o.top&&(o.bottom=o.top),o.bottom&&(o.top=o.bottom);var r=Math.min(i.width,Math.max(0,t.width+o.left+o.right)),a=Math.min(i.height,Math.max(0,t.height+o.top+o.bottom));return{width:r,height:a,left:i.width/2-r/2,top:i.height/2-a/2}}function a(t){if(t)return{left:0,top:0,width:t.clientWidth,height:t.clientHeight}}function s(t,e){return e?{width:t.width+"px",height:t.height+"px",left:t.left-e.left+"px",top:t.top-e.top+"px"}:{width:t.width+"px",height:t.height+"px",left:t.left+"px",top:t.top+"px"}}function l(){return{width:0,height:0,left:0,top:0}}},106:function(t,e,i){"use strict";var n=i(40);i.n(n).a},107:function(t,e,i){"use strict";var n=i(41);i.n(n).a},108:function(t,e,i){"use strict";var n=i(42);i.n(n).a},109:function(t,e,i){"use strict";var n=i(43);i.n(n).a},110:function(t,e,i){t.exports=i.p+"assets/img/play.11231c08.svg"},111:function(t,e,i){"use strict";var n=i(44);i.n(n).a},112:function(t,e,i){"use strict";var n=i(45);i.n(n).a},113:function(t,e,i){"use strict";var n=i(46);i.n(n).a},118:function(t,e,i){},121:function(t,e,i){"use strict";var n=i(94),o=i.n(n),r=i(97),a=i.n(r),s=i(99),l=i.n(s),c=i(102),h=i.n(c);function u(t,e,i){return e in t?h()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=l()(i);"function"==typeof a.a&&(n=n.concat(a()(i).filter(function(t){return o()(i,t).enumerable}))),n.forEach(function(e){u(t,e,i[e])})}return t}i.d(e,"a",function(){return p})},127:function(t,e,i){"use strict";i.r(e);i(125);var n=[{name:"area",text:"Area"},{name:"stencil",text:"Stencil"},{name:"cropper",text:"Cropper"},{name:"stretcher",text:"Stretcher"},{name:"visibleArea",text:"Visible area"},{name:"boundaries",text:"Boundaries"}],o={props:n.map(function(t){return t.name}),data:function(){return{types:[].concat(n)}}},r=(i(108),i(1)),a=Object(r.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"legend"},t._l(t.types,function(e){return t.$props[e.name]?i("div",{staticClass:"legend__element"},[i("div",{staticClass:"legend__square",class:"legend__square--"+e.name}),t._v(" "),i("div",{staticClass:"legend__label",class:"legend__label--"+e.name},[t._v("\n\t\t\t"+t._s(e.text||e.name)+"\n\t\t")])]):t._e()}),0)},[],!1,null,null,null);e.default=a.exports},128:function(t,e,i){"use strict";i.r(e);var n={props:["label"]},o=(i(109),i(1)),r=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[this.label?e("div",{staticClass:"group__label"},[this._v("\n\t\t"+this._s(this.label)+"\n\t")]):this._e(),this._v(" "),this._t("default")],2)},[],!1,null,null,null);e.default=r.exports},129:function(t,e,i){"use strict";i.r(e);i(54);var n={model:{event:"change",prop:"value"},props:{label:{type:String},type:{type:String,default:"text"},value:{type:[String,Number]}},methods:{handleFocus:function(){this.$emit("focus")},handleBlur:function(){this.$emit("blur")}},computed:{internalValue:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},o=(i(112),i(1)),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"group-input"},[t.label?i("span",{staticClass:"group-input__label"},[t._v("\n\t\t"+t._s(t.label)+"\n\t")]):t._e(),t._v(" "),"checkbox"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-input__input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.internalValue)?t._i(t.internalValue,null)>-1:t.internalValue},on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){var i=t.internalValue,n=e.target,o=!!n.checked;if(Array.isArray(i)){var r=t._i(i,null);n.checked?r<0&&(t.internalValue=i.concat([null])):r>-1&&(t.internalValue=i.slice(0,r).concat(i.slice(r+1)))}else t.internalValue=o}}}):"radio"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-input__input",attrs:{type:"radio"},domProps:{checked:t._q(t.internalValue,null)},on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){t.internalValue=null}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-input__input",attrs:{type:t.type},domProps:{value:t.internalValue},on:{blur:t.handleBlur,focus:t.handleFocus,input:function(e){e.target.composing||(t.internalValue=e.target.value)}}})])},[],!1,null,null,null);e.default=r.exports},13:function(t,e,i){"use strict";i.d(e,"q",function(){return r}),i.d(e,"d",function(){return a}),i.d(e,"i",function(){return s}),i.d(e,"j",function(){return l}),i.d(e,"a",function(){return c}),i.d(e,"l",function(){return h}),i.d(e,"b",function(){return u}),i.d(e,"c",function(){return p}),i.d(e,"p",function(){return d}),i.d(e,"o",function(){return f}),i.d(e,"e",function(){return m}),i.d(e,"h",function(){return g}),i.d(e,"f",function(){return b}),i.d(e,"g",function(){return v}),i.d(e,"n",function(){return w}),i.d(e,"m",function(){return x}),i.d(e,"k",function(){return _});var n=i(14),o=i(63);function r(t){return{left:t.left,top:t.top,right:t.left+t.width,bottom:t.top+t.height}}function a(t,e){return{left:t.left-e.left,top:t.top-e.top}}function s(t){return{left:t.left+t.width/2,top:t.top+t.height/2}}function l(t,e){var i={left:0,top:0,right:0,bottom:0};return o.a.forEach(function(n){var o=e[n],a=r(t)[n];i[n]=void 0!==o&&void 0!==a?"left"===n||"top"===n?Math.max(0,o-a):Math.max(0,a-o):0}),i}function c(t,e){return{left:t.left-e.left,top:t.top-e.top,width:t.width+e.left+e.right,height:t.height+e.top+e.bottom}}function h(t){return{left:-t.left,top:-t.top}}function u(t,e){return Object(n.a)(Object(n.a)({},t),{left:t.left+e.left,top:t.top+e.top})}function p(t,e,i,n){if(i){var o=s(t);return{width:t.width*e,height:t.height*e,left:t.left+t.width*(1-e)/2+(i.left-o.left)*(n||1-e),top:t.top+t.height*(1-e)/2+(i.top-o.top)*(n||1-e)}}return{width:t.width*e,height:t.height*e,left:t.left+t.width*(1-e)/2,top:t.top+t.height*(1-e)/2}}function d(t){return t.width/t.height}function f(t,e){return Math.min(void 0!==e.right&&void 0!==e.left?(e.right-e.left)/t.width:1/0,void 0!==e.bottom&&void 0!==e.top?(e.bottom-e.top)/t.height:1/0)}function m(t,e){var i={left:0,top:0},n=l(t,e);return n.left&&n.left>0?i.left=n.left:n.right&&n.right>0&&(i.left=-n.right),n.top&&n.top>0?i.top=n.top:n.bottom&&n.bottom>0&&(i.top=-n.bottom),i}function g(t,e){var i;return e.minimum&&t<e.minimum?i=e.minimum:e.maximum&&t>e.maximum&&(i=e.maximum),i}function b(t,e){var i=d(t),n=d(e);return e.width<1/0&&e.height<1/0?i>n?{width:e.width,height:e.width/i}:{width:e.height*i,height:e.height}:e.width<1/0?{width:e.width,height:e.width/i}:e.height<1/0?{width:e.height*i,height:e.height}:t}function v(t,e){return u(t,m(t,e))}function w(t){return{width:void 0!==t.right&&void 0!==t.left?t.right-t.left:1/0,height:void 0!==t.bottom&&void 0!==t.top?t.bottom-t.top:1/0}}function x(t,e,i){void 0===i&&(i=!0);var n={};return o.a.forEach(function(o){var r=t[o],a=e[o];void 0!==r&&void 0!==a?n[o]="left"===o||"top"===o?i?Math.max(r,a):Math.min(r,a):i?Math.min(r,a):Math.max(r,a):void 0!==a?n[o]=a:void 0!==r&&(n[o]=r)}),n}function _(t,e){return x(t,e,!0)}},130:function(t,e,i){"use strict";i.r(e);var n={props:["visible"]},o=(i(113),i(1)),r=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"stretcher",class:{"stretcher--visible":this.visible}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"stretcher__horizontal-line"}),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"stretcher__vertical-line"})])},[],!1,null,null,null);e.default=r.exports},131:function(t,e,i){"use strict";i.r(e);i(106);var n=i(1),o=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"algorithm-wrapper"},[e("div",{staticClass:"algorithm-wrapper__content"},[this._t("content")],2),this._v(" "),e("div",{staticClass:"algorithm-wrapper__panel"},[this._t("panel")],2)])},[],!1,null,null,null);e.default=o.exports},132:function(t,e,i){"use strict";i.r(e);i(107);var n=i(1),o=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"static-cropper"},[this._t("default")],2)},[],!1,null,null,null);e.default=o.exports},133:function(t,e,i){"use strict";i.r(e);i(111);var n=i(1),o=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({staticClass:"run-button",on:{click:function(e){return t.$emit("click",e)}}},"div",t.$attrs,!1),[n("img",{attrs:{src:i(110)}})])},[],!1,null,null,null);e.default=o.exports},14:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(){return(n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},140:function(t,e,i){"use strict";var n=i(64);i.n(n).a},141:function(t,e,i){"use strict";var n=i(65);i.n(n).a},142:function(t,e,i){"use strict";var n=i(66);i.n(n).a},146:function(t,e,i){"use strict";var n=i(14),o=(function(){}(),function(){}(),function(){return function(t){this.type="move",this.directions=t}}()),r=(function(){function t(t,e,i,n,o){this.type="drag",this.nativeEvent=t,this.position=i,this.previousPosition=n,this.element=e,this.anchor=o}t.prototype.shift=function(){var t=this.element,e=this.anchor,i=this.position,n=t.getBoundingClientRect(),o=n.left,r=n.top;return{left:i.left-o-e.left,top:i.top-r-e.top}}}(),i(13));function a(t){var e=t.size,i=t.aspectRatio,n=t.ignoreMinimum,o=t.sizeRestrictions;return Boolean((e.correctRatio||Object(r.p)(e)>=i.minimum&&Object(r.p)(e)<=i.maximum)&&e.height<=o.maxHeight&&e.width<=o.maxWidth&&e.width&&e.height&&(n||e.height>=o.minHeight&&e.width>=o.minWidth))}function s(t,e){return Math.pow(t.width-e.width,2)+Math.pow(t.height-e.height,2)}function l(t){var e=t.width,i=t.height,n=t.sizeRestrictions,o={minimum:t.aspectRatio&&t.aspectRatio.minimum||0,maximum:t.aspectRatio&&t.aspectRatio.maximum||1/0},r={width:Math.max(n.minWidth,Math.min(n.maxWidth,e)),height:Math.max(n.minHeight,Math.min(n.maxHeight,i))};function l(t,r){return void 0===r&&(r=!1),t.reduce(function(t,l){return a({size:l,aspectRatio:o,sizeRestrictions:n,ignoreMinimum:r})&&(!t||s(l,{width:e,height:i})<s(t,{width:e,height:i}))?l:t},null)}var c=[];o&&[o.minimum,o.maximum].forEach(function(t){t&&c.push({width:r.width,height:r.width/t,correctRatio:!0},{width:r.height*t,height:r.height,correctRatio:!0})}),a({size:r,aspectRatio:o,sizeRestrictions:n})&&c.push(r);var h=l(c)||l(c,!0);return h&&{width:h.width,height:h.height}}function c(t){var e=t.event,i=t.coordinates,n=t.positionRestrictions,o=void 0===n?{}:n,a=Object(r.b)(i,e.directions);return Object(r.b)(a,Object(r.e)(a,o))}function h(t){var e=t.cropper,i=t.imageSize,n=e.clientHeight,o=e.clientWidth,r=n,a=i.width*n/i.height;return a>o&&(a=o,r=i.height*o/i.width),{width:a,height:r}}function u(t){var e=t.cropper;return{width:e.clientWidth,height:e.clientHeight}}function p(t){var e=t.stretcher,i=t.imageSize,n=Object(r.p)(i);e.style.width=i.width+"px",e.style.height=e.clientWidth/n+"px",e.style.width=e.clientWidth+"px"}var d=i(63);function f(t){var e=t.sizeRestrictions,i=t.imageSize,o=t.boundaries,a=t.positionRestrictions,s=t.imageRestriction,l=void 0===s?"none":s,c=Object(n.a)(Object(n.a)({},e),{minWidth:void 0!==e.minWidth?e.minWidth:0,minHeight:void 0!==e.minHeight?e.minHeight:0,maxWidth:void 0!==e.maxWidth?e.maxWidth:1/0,maxHeight:void 0!==e.maxHeight?e.maxHeight:1/0});if(void 0!==a.left&&void 0!==a.right&&(c.maxWidth=Math.min(c.maxWidth,a.right-a.left)),void 0!==a.bottom&&void 0!==a.top&&(c.maxHeight=Math.min(c.maxHeight,a.bottom-a.top)),"none"!==l){var h=Object(r.f)(o,i),u="area"===l?h.width:i.width,p="area"===l?h.height:i.height;(!c.maxWidth||c.maxWidth>u)&&(c.maxWidth=u),(!c.maxHeight||c.maxHeight>p)&&(c.maxHeight=p)}return c.minWidth>c.maxWidth&&(c.minWidth=c.maxWidth,c.widthFrozen=!0),c.minHeight>c.maxHeight&&(c.minHeight=c.maxHeight,c.heightFrozen=!0),c}function m(t){var e=t.directions,i=t.coordinates,o=t.positionRestrictions,a=void 0===o?{}:o,s=t.sizeRestrictions,l=t.preserveRatio,c=t.compensate,h=Object(n.a)({},e),u=Object(r.a)(i,h).width,p=Object(r.a)(i,h).height;u<0&&(h.left<0&&h.right<0?(h.left=-(i.width-s.minWidth)/(h.left/h.right),h.right=-(i.width-s.minWidth)/(h.right/h.left)):h.left<0?h.left=-(i.width-s.minWidth):h.right<0&&(h.right=-(i.width-s.minWidth))),p<0&&(h.top<0&&h.bottom<0?(h.top=-(i.height-s.minHeight)/(h.top/h.bottom),h.bottom=-(i.height-s.minHeight)/(h.bottom/h.top)):h.top<0?h.top=-(i.height-s.minHeight):h.bottom<0&&(h.bottom=-(i.height-s.minHeight)));var f=Object(r.j)(Object(r.a)(i,h),a);c&&(f.left&&f.left>0&&0===f.right?(h.right+=f.left,h.left-=f.left):f.right&&f.right>0&&0===f.left&&(h.left+=f.right,h.right-=f.right),f.top&&f.top>0&&0===f.bottom?(h.bottom+=f.top,h.top-=f.top):f.bottom&&f.bottom>0&&0===f.top&&(h.top+=f.bottom,h.bottom-=f.bottom),f=Object(r.j)(Object(r.a)(i,h),a));var m={width:1/0,height:1/0,left:1/0,right:1/0,top:1/0,bottom:1/0};if(d.a.forEach(function(t){var e=f[t];e&&h[t]&&(m[t]=Math.max(0,1-e/h[t]))}),l){var g=Math.min.apply(Math,d.a.map(function(t){return m[t]}));g!==1/0&&d.a.forEach(function(t){h[t]*=g})}else d.a.forEach(function(t){m[t]!==1/0&&(h[t]*=m[t])});if(u=Object(r.a)(i,h).width,p=Object(r.a)(i,h).height,h.right+h.left&&(u>s.maxWidth?m.width=(s.maxWidth-i.width)/(h.right+h.left):u<s.minWidth&&(m.width=(s.minWidth-i.width)/(h.right+h.left))),h.bottom+h.top&&(p>s.maxHeight?m.height=(s.maxHeight-i.height)/(h.bottom+h.top):p<s.minHeight&&(m.height=(s.minHeight-i.height)/(h.bottom+h.top))),l){var b=Math.min(m.width,m.height);b!==1/0&&d.a.forEach(function(t){h[t]*=b})}else m.width!==1/0&&d.b.forEach(function(t){h[t]*=m.width}),m.height!==1/0&&d.d.forEach(function(t){h[t]*=m.height});return h}function g(t,e,i){return 0==e&&0==i?t/2:0==e?0:0==i?t:t*Math.abs(e/(e+i))}function b(t){var e=t.event,i=t.coordinates,a=t.aspectRatio,s=t.positionRestrictions,l=t.sizeRestrictions,h=Object(n.a)(Object(n.a)({},i),{right:i.left+i.width,bottom:i.top+i.height}),u=e.params||{},p=Object(n.a)({},e.directions),f=u.allowedDirections||{left:!0,right:!0,bottom:!0,top:!0};l.widthFrozen&&(p.left=0,p.right=0),l.heightFrozen&&(p.top=0,p.bottom=0),d.a.forEach(function(t){f[t]||(p[t]=0)}),p=m({coordinates:h,directions:p,sizeRestrictions:l,positionRestrictions:s});var b=Object(r.a)(h,p).width,v=Object(r.a)(h,p).height,w=u.preserveRatio?Object(r.p)(h):Object(r.h)(b/v,a);if(w){var x=u.respectDirection;if(x||(x=h.width>=h.height||1===w?"width":"height"),"width"===x){var _=b/w-h.height;if(f.top&&f.bottom){var R=p.top,O=p.bottom;p.bottom=g(_,O,R),p.top=g(_,R,O)}else f.bottom?p.bottom=_:f.top?p.top=_:f.right?p.right=0:f.left&&(p.left=0)}else if("height"===x){var j=h.width-v*w;if(f.left&&f.right){var y=p.left,z=p.right;p.left=-g(j,y,z),p.right=-g(j,z,y)}else f.left?p.left=-j:f.right?p.right=-j:f.top?p.top=0:f.bottom&&(p.bottom=0)}p=m({directions:p,coordinates:h,sizeRestrictions:l,positionRestrictions:s,preserveRatio:!0,compensate:u.compensate})}return b=Object(r.a)(h,p).width,v=Object(r.a)(h,p).height,(w=u.preserveRatio?Object(r.p)(h):Object(r.h)(b/v,a))&&Math.abs(w-b/v)>.001&&d.a.forEach(function(t){f[t]||(p[t]=0)}),c({event:new o({left:-p.left,top:-p.top}),coordinates:{width:i.width+p.right+p.left,height:i.height+p.top+p.bottom,left:i.left,top:i.top},positionRestrictions:s})}i.d(e,"a",function(){return l}),i.d(e,"c",function(){return h}),i.d(e,"b",function(){return u}),i.d(e,"d",function(){return p}),i.d(e,"e",function(){return f}),i.d(e,"f",function(){return b})},151:function(t,e,i){"use strict";i.r(e);var n={components:{BoundingBox:i(12).a}},o=(i(140),i(1)),r=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("bounding-box",this._g(this._b({staticClass:"dynamic-cropper",attrs:{"lines-classes":{default:"dynamic-cropper__line"},"handlers-classes":{default:"dynamic-cropper__handler"}}},"bounding-box",this.$attrs,!1),this.$listeners),[this._t("default")],2)},[],!1,null,null,null);e.default=r.exports},152:function(t,e,i){"use strict";i.r(e);i(54);var n={model:{event:"change",prop:"value"},props:{label:{type:String},value:{type:[String,Number]}},methods:{handleFocus:function(){this.$emit("focus")},handleBlur:function(){this.$emit("blur")}},computed:{internalValue:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},o=(i(142),i(1)),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"group-select"},[t.label?i("span",{staticClass:"group-select__label"},[t._v("\n\t\t"+t._s(t.label)+"\n\t")]):t._e(),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-select__input",on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.internalValue=e.target.multiple?i:i[0]}}},[t._t("default")],2)])},[],!1,null,null,null);e.default=r.exports},155:function(t,e,i){"use strict";i.r(e);i(141);var n=i(1),o=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"static-boundaries"},[this._t("default")],2)},[],!1,null,null,null);e.default=o.exports},221:function(t,e,i){"use strict";var n=i(118);i.n(n).a},222:function(t,e,i){},278:function(t,e,i){"use strict";i.r(e);var n={model:{event:"change",prop:"value"},props:{label:{type:String},value:{type:[Boolean]}},methods:{handleFocus:function(){this.$emit("focus")},handleBlur:function(){this.$emit("blur")}},computed:{internalValue:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},o=(i(221),i(1)),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"group-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-checkbox__input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.internalValue)?t._i(t.internalValue,null)>-1:t.internalValue},on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){var i=t.internalValue,n=e.target,o=!!n.checked;if(Array.isArray(i)){var r=t._i(i,null);n.checked?r<0&&(t.internalValue=i.concat([null])):r>-1&&(t.internalValue=i.slice(0,r).concat(i.slice(r+1)))}else t.internalValue=o}}}),t._v(" "),t.label?i("span",{staticClass:"group-checkbox__label"},[t._v("\n\t\t"+t._s(t.label)+"\n\t")]):t._e()])},[],!1,null,null,null);e.default=r.exports},40:function(t,e,i){},41:function(t,e,i){},413:function(t,e,i){"use strict";var n=i(222);i.n(n).a},42:function(t,e,i){},43:function(t,e,i){},44:function(t,e,i){},45:function(t,e,i){},454:function(t,e,i){"use strict";i.r(e);var n=i(121),o=i(12),r=i(146),a=i(13),s=i(105),l=i(131),c=i(151),h=i(278),u=i(132),p=i(155),d=i(127),f=i(128),m=i(133),g=i(129),b=i(152),v=i(130),w={components:{GroupCheckbox:h.default,DynamicCropper:c.default,Cropper:o.c,AlgorithmWrapper:l.default,BoundingBox:o.a,StaticCropper:u.default,StaticBoundaries:p.default,RunButton:m.default,GroupInput:g.default,GroupSelect:b.default,Group:f.default,ElementsLegend:d.default,Stretcher:v.default},data:function(){return{cropper:Object(s.d)(),algorithm:"fit",stencil:{left:0,top:0,width:100,height:100},stencilResize:{left:0,top:0,width:100,height:100},boundaries:{left:0,top:0,width:0,height:0},aspectRatio:{minimum:null,maximum:null},realTime:!0,minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,params:{allowedDirections:{left:!0,right:!0,top:!0,bottom:!0},respectDirection:null,preserveRatio:!1,compensate:!1}}},mounted:function(){var t=this.$refs.container;t&&(this.boundaries.width=.8*t.clientWidth,this.boundaries.height=.8*t.clientHeight,this.boundaries.left=t.clientWidth/2-this.boundaries.width/2,this.boundaries.top=t.clientHeight/2-this.boundaries.height/2,this.stencil.left=t.clientWidth/2-this.stencil.width/2,this.stencil.top=t.clientHeight/2-this.stencil.height/2,this.stencilResize=Object(n.a)({},this.stencil)),window.addEventListener("resize",this.updateContainer),window.addEventListener("orientationchange",this.updateContainer)},destroyed:function(){window.removeEventListener("resize",this.updateContainer),window.removeEventListener("orientationchange",this.updateContainer)},computed:{boundariesStyle:function(){return Object(s.a)(this.boundaries)},stencilStyle:function(){return Object(s.a)(this.stencil,this.boundaries)},resizeStyle:function(){return Object(s.a)(this.stencilResize,this.boundaries)},sizeRestrictions:function(){return Object(r.e)({sizeRestrictions:{minWidth:this.minWidth,minHeight:this.minHeight,maxWidth:this.maxWidth,maxHeight:this.maxHeight},positionRestrictions:Object(a.q)(this.boundaries),imageSize:this.boundaries,boundaries:this.boundaries,imageRestriction:"area"})}},methods:{updateContainer:function(){var t=this.$refs.container;t&&(this.boundaries.width=.8*t.clientWidth,this.boundaries.height=.8*t.clientHeight,this.boundaries.left=t.clientWidth/2-this.boundaries.width/2,this.boundaries.top=t.clientHeight/2-this.boundaries.height/2,this.refineCoordinates(),this.stencilResize.width=Math.min(this.stencilResize.width,t.clientWidth),this.stencilResize.height=Math.min(this.stencilResize.height,t.clientHeight),this.stencilResize.left-=Math.max(0,this.stencilResize.width+this.stencilResize.left-t.clientWidth))},refineCoordinates:function(){var t=Object(a.i)(this.stencil);this.stencil=Object(n.a)({},this.stencil,Object(r.a)({width:this.stencil.width,height:this.stencil.height,sizeRestrictions:this.sizeRestrictions,aspectRatio:this.aspectRatio})),this.stencil=Object(a.b)(this.stencil,Object(a.d)(t,Object(a.i)(this.stencil))),this.stencil=Object(a.g)(this.stencil,Object(a.q)(this.boundaries)),this.realTime&&this.runAlgorithm()},onResizeStencil:function(t){this.stencilResize=Object(s.e)(this.stencilResize,t,Object(s.c)(this.$refs.container)),this.realTime&&this.runAlgorithm()},runAlgorithm:function(){console.log(Object(n.a)({},this.stencil),Object(n.a)({},this.stencilResize),{top:this.stencil.top-this.stencilResize.top,left:this.stencil.left-this.stencilResize.left,bottom:this.stencilResize.top+this.stencilResize.height-(this.stencil.top+this.stencil.height),right:this.stencilResize.left+this.stencilResize.width-(this.stencil.left+this.stencil.width)}),this.stencil=Object(r.f)({coordinates:this.stencil,sizeRestrictions:this.sizeRestrictions,event:new o.h({top:this.stencil.top-this.stencilResize.top,left:this.stencil.left-this.stencilResize.left,bottom:this.stencilResize.top+this.stencilResize.height-(this.stencil.top+this.stencil.height),right:this.stencilResize.left+this.stencilResize.width-(this.stencil.left+this.stencil.width)},this.params),aspectRatio:this.aspectRatio,positionRestrictions:Object(a.q)(this.boundaries)}),this.stencilResize=Object(n.a)({},this.stencil)}}},x=(i(413),i(1)),_=Object(x.a)(w,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("algorithm-wrapper",{staticClass:"algorithms-resize",scopedSlots:t._u([{key:"content",fn:function(){return[i("div",{ref:"container",staticClass:"algorithms-resize__area"},[i("static-boundaries",{staticClass:"algorithms-resize__boundaries",style:t.boundariesStyle},[i("static-cropper",{staticClass:"algorithms-resize__stencil",style:t.stencilStyle}),t._v(" "),i("dynamic-cropper",{ref:"stencil",staticClass:"algorithms-resize__stencil-resize",style:t.resizeStyle,on:{resize:t.onResizeStencil}})],1)],1),t._v(" "),i("run-button",{on:{click:t.runAlgorithm}})]},proxy:!0},{key:"panel",fn:function(){return[i("group",[i("group-checkbox",{attrs:{label:"Realtime"},on:{change:t.refineCoordinates},model:{value:t.realTime,callback:function(e){t.realTime=e},expression:"realTime"}})],1),t._v(" "),i("group",[i("group-select",{attrs:{label:"Respect Direction"},model:{value:t.params.respectDirection,callback:function(e){t.$set(t.params,"respectDirection",e)},expression:"params.respectDirection"}},[i("option",{attrs:{value:"height"}},[t._v("Height")]),t._v(" "),i("option",{attrs:{value:"width"}},[t._v("Width")]),t._v(" "),i("option",{domProps:{value:null}},[t._v("Not Defined")])]),t._v(" "),i("group-checkbox",{attrs:{label:"Compensate"},model:{value:t.params.compensate,callback:function(e){t.$set(t.params,"compensate",e)},expression:"params.compensate"}}),t._v(" "),i("group-checkbox",{attrs:{label:"Preserve Ratio"},model:{value:t.params.preserveRatio,callback:function(e){t.$set(t.params,"preserveRatio",e)},expression:"params.preserveRatio"}})],1),t._v(" "),i("group",{attrs:{label:"Allowed Directions"}},[i("group-checkbox",{attrs:{label:"Left"},model:{value:t.params.allowedDirections.left,callback:function(e){t.$set(t.params.allowedDirections,"left",e)},expression:"params.allowedDirections.left"}}),t._v(" "),i("group-checkbox",{attrs:{label:"Right"},model:{value:t.params.allowedDirections.right,callback:function(e){t.$set(t.params.allowedDirections,"right",e)},expression:"params.allowedDirections.right"}}),t._v(" "),i("group-checkbox",{attrs:{label:"Top"},model:{value:t.params.allowedDirections.top,callback:function(e){t.$set(t.params.allowedDirections,"top",e)},expression:"params.allowedDirections.top"}}),t._v(" "),i("group-checkbox",{attrs:{label:"Bottom"},model:{value:t.params.allowedDirections.bottom,callback:function(e){t.$set(t.params.allowedDirections,"bottom",e)},expression:"params.allowedDirections.bottom"}})],1),t._v(" "),i("group",{attrs:{label:"Aspect Ratio"}},[i("group-input",{attrs:{type:"number",label:"Minimum"},on:{blur:t.refineCoordinates},model:{value:t.aspectRatio.minimum,callback:function(e){t.$set(t.aspectRatio,"minimum",e)},expression:"aspectRatio.minimum"}}),t._v(" "),i("group-input",{attrs:{type:"number",label:"Maximum"},on:{blur:t.refineCoordinates},model:{value:t.aspectRatio.maximum,callback:function(e){t.$set(t.aspectRatio,"maximum",e)},expression:"aspectRatio.maximum"}})],1),t._v(" "),i("group",{attrs:{label:"Size Restrictions"}},[i("group-input",{attrs:{type:"number",label:"Min Width"},on:{blur:t.refineCoordinates},model:{value:t.minWidth,callback:function(e){t.minWidth=e},expression:"minWidth"}}),t._v(" "),i("group-input",{attrs:{type:"number",label:"Min Height"},on:{blur:t.refineCoordinates},model:{value:t.minHeight,callback:function(e){t.minHeight=e},expression:"minHeight"}}),t._v(" "),i("group-input",{attrs:{type:"number",label:"Max Width"},on:{blur:t.refineCoordinates},model:{value:t.maxWidth,callback:function(e){t.maxWidth=e},expression:"maxWidth"}}),t._v(" "),i("group-input",{attrs:{type:"number",label:"Max Height"},on:{blur:t.refineCoordinates},model:{value:t.maxHeight,callback:function(e){t.maxHeight=e},expression:"maxHeight"}})],1),t._v(" "),i("group",[i("elements-legend",{attrs:{stencil:!0,boundaries:!0}})],1)]},proxy:!0}])})},[],!1,null,null,null);e.default=_.exports},46:function(t,e,i){},62:function(t,e,i){var n=i(57),o=i(24),r=i(81);t.exports=function(t,e){var i=(o.Object||{})[t]||Object[t],a={};a[t]=e(i),n(n.S+n.F*r(function(){i(1)}),"Object",a)}},63:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o}),i.d(e,"d",function(){return r}),i.d(e,"c",function(){return a});var n=["left","right","top","bottom"],o=["left","right"],r=["top","bottom"],a=["left","top"]},64:function(t,e,i){},65:function(t,e,i){},66:function(t,e,i){},94:function(t,e,i){t.exports=i(95)},95:function(t,e,i){i(96);var n=i(24).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},96:function(t,e,i){var n=i(73),o=i(139).f;i(62)("getOwnPropertyDescriptor",function(){return function(t,e){return o(n(t),e)}})},97:function(t,e,i){t.exports=i(98)},98:function(t,e,i){i(138),t.exports=i(24).Object.getOwnPropertySymbols},99:function(t,e,i){t.exports=i(100)}}]);