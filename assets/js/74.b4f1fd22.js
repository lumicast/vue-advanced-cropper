(window.webpackJsonp=window.webpackJsonp||[]).push([[74,84],{359:function(t,e,i){"use strict";i.r(e);i(163);var n=i(307),o={components:{StencilPreview:n.i,BoundingBox:n.a,DraggableArea:n.d},props:["image","coordinates","stencilCoordinates","aspectRatio","minAspectRatio","maxAspectRatio"],computed:{style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,n=t.left,o=t.top;return{position:"absolute",width:"".concat(i,"px"),height:"".concat(e,"px"),transform:"translate(".concat(n,"px, ").concat(o,"px)")}}},methods:{onMove:function(t){this.$emit("move",t)},onMoveEnd:function(){this.$emit("moveEnd")},onResize:function(t){this.$emit("resize",t)},onResizeEnd:function(){this.$emit("resizeEnd")},aspectRatios:function(){return{minimum:this.aspectRatio||this.minAspectRatio,maximum:this.aspectRatio||this.maxAspectRatio}}}},s=i(41),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.style},[i("bounding-box",{on:{resize:t.onResize,"resize-end":t.onMoveEnd}},[i("draggable-area",{on:{move:t.onMove,"move-end":t.onMoveEnd}},[i("stencil-preview",{attrs:{image:t.image,width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,coordinates:t.coordinates}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},640:function(t,e,i){"use strict";i.r(e);var n=i(307),o=i(359),s={components:{Cropper:n.c,SimplestStencil:o.default},data:function(){return{img:"https://images.unsplash.com/photo-1571040895662-2daba5bb466f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}}},a=i(41),c=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("cropper",{attrs:{src:this.img,"stencil-component":this.$options.components.SimplestStencil}})}),[],!1,null,null,null);e.default=c.exports}}]);