(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{310:function(t,e,i){"use strict";var n=i(8),r=i(4),o=i(95),s=i(14),a=i(7),c=i(26),u=i(315),v=i(43),l=i(2),f=i(44),p=i(68).f,d=i(24).f,h=i(9).f,w=i(316).trim,g=r.Number,m=g.prototype,_="Number"==c(f(m)),N=function(t){var e,i,n,r,o,s,a,c,u=v(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=w(u)).charCodeAt(0))||45===e){if(88===(i=u.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(s=(o=u.slice(2)).length,a=0;a<s;a++)if((c=o.charCodeAt(a))<48||c>r)return NaN;return parseInt(o,n)}return+u};if(o("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,I=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof I&&(_?l((function(){m.valueOf.call(i)})):"Number"!=c(i))?u(new g(N(e)),i,I):N(e)},y=n?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;y.length>C;C++)a(g,E=y[C])&&!a(I,E)&&h(I,E,d(g,E));I.prototype=m,m.constructor=I,s(r,"Number",I)}},314:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},315:function(t,e,i){var n=i(5),r=i(163);t.exports=function(t,e,i){var o,s;return r&&"function"==typeof(o=e.constructor)&&o!==i&&n(s=o.prototype)&&s!==i.prototype&&r(t,s),t}},316:function(t,e,i){var n=i(23),r="["+i(314)+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),a=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:a(1),end:a(2),trim:a(3)}},348:function(t,e,i){},395:function(t,e,i){"use strict";i(348)},462:function(t,e,i){"use strict";i.r(e);i(310);var n={props:{zoom:{type:Number,default:0}},data:function(){return{focus:!1}},mounted:function(){window.addEventListener("mouseup",this.onStop,{passive:!1}),window.addEventListener("mousemove",this.onDrag,{passive:!1}),window.addEventListener("touchmove",this.onDrag,{passive:!1}),window.addEventListener("touchend",this.onStop,{passive:!1})},destroyed:function(){window.removeEventListener("mouseup",this.onStop),window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("touchmove",this.onDrag),window.removeEventListener("touchend",this.onStop)},methods:{onDrag:function(t){if(this.focus){var e=t.touches?t.touches[0].clientX:t.clientX,i=this.$refs.line;if(i){var n=i.getBoundingClientRect(),r=n.left,o=n.width;this.$emit("change",Math.min(1,Math.max(0,e-r)/o))}t.preventDefault&&t.preventDefault()}},onStop:function(){this.focus=!1},onStart:function(t){this.focus=!0,this.onDrag(t)}}},r=(i(395),i(41)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"twitter-navigation"},[i("div",{staticClass:"twitter-navigation__wrapper"},[i("div",{staticClass:"twitter-navigation__zoom-icon twitter-navigation__zoom-icon--left"},[i("svg",{staticClass:"r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",attrs:{viewBox:"0 0 24 24"}},[i("g",[i("path",{attrs:{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"}}),i("path",{attrs:{d:"M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z"}})])])]),t._v(" "),i("div",{ref:"line",staticClass:"twitter-navigation__line-wrapper",on:{mousedown:t.onStart,touchstart:t.onStart}},[i("div",{staticClass:"twitter-navigation__line"},[i("div",{staticClass:"twitter-navigation__fill",style:{flexGrow:t.zoom}}),t._v(" "),i("div",{staticClass:"twitter-navigation__circle",class:{"twitter-navigation__circle--focus":t.focus},style:{left:100*t.zoom+"%"}},[i("div",{staticClass:"twitter-navigation__inner-circle",class:{"twitter-navigation__inner-circle--focus":t.focus}})])])]),t._v(" "),i("div",{staticClass:"twitter-navigation__zoom-icon twitter-navigation__zoom-icon--right"},[i("svg",{staticClass:"r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",attrs:{viewBox:"0 0 24 24"}},[i("g",[i("path",{attrs:{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"}}),i("path",{attrs:{d:"M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z"}})])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);