(window.webpackJsonp=window.webpackJsonp||[]).push([[18,39,53],{11:function(t,e,s){},143:function(t,e,s){"use strict";var a=s(67);s.n(a).a},153:function(t,e,s){"use strict";s.r(e);var a={props:{coordinates:{type:Object,default:function(){return{}}},image:{type:String}}},r=(s(143),s(1)),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"results"},[t.image?s("div",{staticClass:"results__wrapper"},[s("div",{staticClass:"results__coordinates"},[s("p",{staticClass:"results__coordinates-title"},[t._v("Results:")]),t._v(" "),s("p",{staticClass:"results__coordinates-value"},[t._v("Width: "+t._s(t.coordinates.width))]),t._v(" "),s("p",{staticClass:"results__coordinates-value"},[t._v("Height: "+t._s(t.coordinates.height))]),t._v(" "),s("p",{staticClass:"results__coordinates-value"},[t._v("Left: "+t._s(t.coordinates.left))]),t._v(" "),s("p",{staticClass:"results__coordinates-value"},[t._v("Top: "+t._s(t.coordinates.top))])]),t._v(" "),s("div",{staticClass:"results__preview"},[s("img",{attrs:{src:t.image,alt:""}})])]):t._e()])},[],!1,null,null,null);e.default=i.exports},17:function(t,e,s){t.exports=s.p+"assets/img/link.0df99106.svg"},18:function(t,e,s){"use strict";var a=s(11);s.n(a).a},19:function(t,e,s){"use strict";s.r(e);var a={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},r=(s(18),s(1)),i=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?e("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[e("img",{attrs:{src:s(17)}})]):this._e()],2)},[],!1,null,null,null);e.default=i.exports},197:function(t,e,s){},390:function(t,e,s){"use strict";var a=s(197);s.n(a).a},444:function(t,e,s){"use strict";s.r(e);var a=s(12),r=s(19),i={components:{Results:s(153).default,Cropper:a.c,ExampleWrapper:r.default},data:function(){return{img:"https://images.unsplash.com/photo-1586083718719-019f9dc6ca94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",coordinates:{width:0,height:0,left:0,top:0},image:null}},methods:{onChange:function(t){var e=t.coordinates,s=t.canvas;this.coordinates=e,this.image=s.toDataURL()}}},n=(s(390),s(1)),o=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("example-wrapper",{staticClass:"getting-result-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/getting-result-example.vue"}},[e("cropper",{attrs:{src:this.img,"stencil-props":{aspectRatio:1}},on:{change:this.onChange}}),this._v(" "),e("results",{attrs:{coordinates:this.coordinates,image:this.image}})],1)},[],!1,null,null,null);e.default=o.exports},67:function(t,e,s){}}]);