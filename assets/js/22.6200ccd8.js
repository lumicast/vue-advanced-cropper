(window.webpackJsonp=window.webpackJsonp||[]).push([[22,47],{311:function(t,e,n){},322:function(t,e,n){t.exports=n.p+"assets/img/handler.d2843e4e.svg"},323:function(t,e,n){"use strict";n(311)},326:function(t,e,n){"use strict";n.r(e);var s=n(305),i={name:"CircleStencil",components:{PreviewResult:s.f,DraggableArea:s.d,DraggableElement:s.e},props:{img:{type:Object},resultCoordinates:{type:Object},stencilCoordinates:{type:Object}},computed:{style:function(){var t=this.stencilCoordinates,e=t.height,n=t.width,s=t.left,i=t.top;return{width:"".concat(n,"px"),height:"".concat(e,"px"),left:"".concat(s,"px"),top:"".concat(i,"px")}}},methods:{onMove:function(t){this.$emit("move",t)},onHandlerMove:function(t){var e=t.shift(),n=e.left/2,i=-e.top/2;this.$emit("resize",new s.h({left:n,right:n,top:i,bottom:i},{compensate:!0}))},aspectRatios:function(){return{minimum:1,maximum:1}}}},c=(n(323),n(41)),o=Object(c.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle-stencil",style:this.style},[e("DraggableElement",{staticClass:"circle-stencil__handler",on:{drag:this.onHandlerMove}},[e("img",{staticClass:"circle-stencil__icon",attrs:{src:n(322),alt:""}})]),this._v(" "),e("DraggableArea",{on:{move:this.onMove}},[e("PreviewResult",{staticClass:"circle-stencil__preview",attrs:{img:this.img,"result-coordinates":this.resultCoordinates,"stencil-coordinates":this.stencilCoordinates}})],1)],1)}),[],!1,null,null,null);e.default=o.exports},344:function(t,e,n){},382:function(t,e,n){t.exports=n.p+"assets/img/image.1616fde2.jpg"},383:function(t,e,n){"use strict";n(344)},458:function(t,e,n){"use strict";n.r(e);var s=n(305),i=n(326),c={name:"CircleExample",components:{Cropper:s.c},data:function(){return{stencil:i.default}}},o=(n(383),n(41)),r=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("Cropper",{staticClass:"circle-example",attrs:{src:n(382),"stencil-component":this.stencil}})}),[],!1,null,null,null);e.default=r.exports}}]);