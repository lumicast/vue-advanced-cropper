(window.webpackJsonp=window.webpackJsonp||[]).push([[9,45,61,62],{302:function(t,e,r){},303:function(t,e,r){t.exports=r.p+"assets/img/link.03ea4d17.svg"},304:function(t,e,r){"use strict";r(302)},306:function(t,e,r){"use strict";r.r(e);var s={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},n=(r(304),r(41)),o=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?e("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[e("img",{attrs:{src:r(303)}})]):this._e()],2)}),[],!1,null,null,null);e.default=o.exports},312:function(t,e,r){},313:function(t,e,r){},324:function(t,e,r){"use strict";r(312)},325:function(t,e,r){"use strict";r(313)},327:function(t,e,r){"use strict";r.r(e);r(324);var s=r(41),n=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vertical-buttons"},[this._t("default")],2)}),[],!1,null,null,null);e.default=n.exports},328:function(t,e,r){"use strict";r.r(e);r(325);var s=r(41),n=Object(s.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",t._b({staticClass:"square-button",on:{click:function(e){return t.$emit("click",e)}}},"div",t.$attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=n.exports},440:function(t,e,r){},570:function(t,e,r){t.exports=r.p+"assets/img/flip-horizontal.c757c98c.svg"},571:function(t,e,r){t.exports=r.p+"assets/img/flip-vertical.0f1de4d1.svg"},572:function(t,e,r){t.exports=r.p+"assets/img/rotate-clockwise.2bb96603.svg"},573:function(t,e,r){t.exports=r.p+"assets/img/rotate-counter-clockwise.1427cf6a.svg"},574:function(t,e,r){t.exports=r.p+"assets/img/download.a1f3eed3.svg"},575:function(t,e,r){"use strict";r(440)},626:function(t,e,r){"use strict";r.r(e);var s=r(305),n=r(306),o=r(327),i=r(328),a={components:{Cropper:s.c,ExampleWrapper:n.default,VerticalButtons:o.default,SquareButton:i.default},data:function(){return{image:"https://images.unsplash.com/photo-1600353068867-5b4de71e3afb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",size:{width:null,height:null}}},methods:{flip:function(t,e){this.$refs.cropper.customImageTransforms.rotate%180!=0?this.$refs.cropper.flip(!t,!e):this.$refs.cropper.flip(t,e)},rotate:function(t){this.$refs.cropper.rotate(t)},download:function(){var t=this.$refs.cropper.getResult().canvas.toDataURL();window.open().document.body.innerHTML='<img src="'.concat(t,'"></img>')},change:function(t){console.log(t)}}},c=(r(575),r(41)),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("example-wrapper",{staticClass:"rotate-image-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/rotate-image-example.vue"}},[s("cropper",{ref:"cropper",staticClass:"cropper",attrs:{src:t.image,transitions:!0,"default-boundaries":"fill","image-restriction":"fit-area"},on:{change:t.change}}),t._v(" "),s("vertical-buttons",[s("square-button",{attrs:{title:"Flip Horizontal"},on:{click:function(e){return t.flip(!0,!1)}}},[s("img",{attrs:{src:r(570)}})]),t._v(" "),s("square-button",{attrs:{title:"Flip Vertical"},on:{click:function(e){return t.flip(!1,!0)}}},[s("img",{attrs:{src:r(571)}})]),t._v(" "),s("square-button",{attrs:{title:"Rotate Clockwise"},on:{click:function(e){return t.rotate(90)}}},[s("img",{attrs:{src:r(572)}})]),t._v(" "),s("square-button",{attrs:{title:"Rotate Counter-Clockwise"},on:{click:function(e){return t.rotate(-90)}}},[s("img",{attrs:{src:r(573)}})]),t._v(" "),s("square-button",{attrs:{title:"Download"},on:{click:function(e){return t.download()}}},[s("img",{attrs:{src:r(574)}})])],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);