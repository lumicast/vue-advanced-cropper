(window.webpackJsonp=window.webpackJsonp||[]).push([[19,45],{302:function(e,t,r){},303:function(e,t,r){e.exports=r.p+"assets/img/link.03ea4d17.svg"},304:function(e,t,r){"use strict";r(302)},306:function(e,t,r){"use strict";r.r(t);var s={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},o=(r(304),r(41)),a=Object(o.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?t("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[t("img",{attrs:{src:r(303)}})]):this._e()],2)}),[],!1,null,null,null);t.default=a.exports},427:function(e,t,r){},543:function(e,t,r){e.exports=r.p+"assets/img/loading.578309cf.svg"},544:function(e,t,r){"use strict";r(427)},613:function(e,t,r){"use strict";r.r(t);var s=r(305),o=r(306),a={components:{Cropper:s.c,ExampleWrapper:o.default},data:function(){return{img:{src:"https://images.pexels.com/photos/2890387/pexels-photo-2890387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",loading:!1}}},watch:{"img.src":function(e){e&&(this.img.loading=!0)}},methods:{change:function(e){var t=e.coordinates,r=e.canvas;console.log("Coordinates was changed",t,r)},error:function(){console.log("There is error during image loading"),this.img.loading=!1},ready:function(){console.log("Image is successfully loaded"),this.img.loading=!1}}},n=(r(544),r(41)),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example-wrapper",{staticClass:"events-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/events-example.vue"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.img.src,expression:"img.src"}],domProps:{value:e.img.src},on:{input:function(t){t.target.composing||e.$set(e.img,"src",t.target.value)}}}),e._v(" "),s("div",{staticClass:"cropper-wrapper"},[e.img.loading?s("img",{staticClass:"cropper-wrapper__loading",attrs:{src:r(543)}}):e._e(),e._v(" "),s("cropper",{attrs:{src:e.img.src},on:{ready:e.ready,error:e.error,change:e.change}})],1)])}),[],!1,null,null,null);t.default=i.exports}}]);