(window.webpackJsonp=window.webpackJsonp||[]).push([[45,61],{346:function(t,e,r){},383:function(t,e,r){"use strict";r(346)},452:function(t,e,r){},494:function(t,e,r){"use strict";r.r(e);var a={components:{BoundingBox:r(307).a}},i=(r(383),r(41)),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("bounding-box",this._g(this._b({staticClass:"dynamic-area",attrs:{"lines-classes":{default:"dynamic-area__line"},"handlers-classes":{default:"dynamic-area__handler"}}},"bounding-box",this.$attrs,!1),this.$listeners),[this._t("default")],2)}),[],!1,null,null,null);e.default=n.exports},553:function(t,e,r){"use strict";r(452)},627:function(t,e,r){"use strict";r.r(e);var a=r(307),i=r(404),n=r(335),s=r(361),c=r(494),l=r(362),o=r(355),u=r(356),h=r(364),d=r(357),p=r(359),f={components:{Cropper:a.c,AlgorithmWrapper:s.default,BoundingBox:a.a,DynamicArea:c.default,StaticCropper:l.default,RunButton:h.default,GroupInput:d.default,Group:u.default,ElementsLegend:o.default,Stretcher:p.default},data:function(){return{area:Object(n.d)(),displayStretcher:!1,image:{width:100,height:100}}},mounted:function(){var t=this.$refs.container;t&&(this.area.width=t.clientWidth,this.area.height=t.clientHeight)},computed:{areaStyle:function(){return Object(n.a)(this.area)}},methods:{onResizeArea:function(t){this.area=Object(n.e)(this.area,t,Object(n.c)(this.$refs.container))},runAlgorithm:function(){var t=this,e=this.$refs.stretcher;e&&(this.displayStretcher=!0,this.$nextTick((function(){Object(i.d)({stretcher:e.$el,imageSize:t.image})})))}}},g=(r(553),r(41)),m=Object(g.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("algorithm-wrapper",{staticClass:"algorithms-init-stretcher",scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{ref:"container",staticClass:"algorithms-init-stretcher__area"},[r("dynamic-area",{style:t.areaStyle,on:{resize:t.onResizeArea}},[r("static-cropper",{staticClass:"algorithms-init-stretcher__cropper"},[r("stretcher",{ref:"stretcher",attrs:{visible:t.displayStretcher}})],1)],1)],1),t._v(" "),r("run-button",{on:{click:t.runAlgorithm}})]},proxy:!0},{key:"panel",fn:function(){return[r("group",{attrs:{label:"Image"}},[r("group-input",{attrs:{type:"number",label:"Width"},model:{value:t.image.width,callback:function(e){t.$set(t.image,"width",e)},expression:"image.width"}}),t._v(" "),r("group-input",{attrs:{type:"number",label:"Height"},model:{value:t.image.height,callback:function(e){t.$set(t.image,"height",e)},expression:"image.height"}})],1),t._v(" "),r("group",[r("elements-legend",{attrs:{stretcher:!0,cropper:!0,area:!0}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=m.exports}}]);