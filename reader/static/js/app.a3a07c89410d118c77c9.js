webpackJsonp([1],{0:function(t,e){},1:function(t,e){},C6v4:function(t,e){},G1q7:function(t,e){},LnzI:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW");document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},s,!1,function(t){i("C6v4")},null,null).exports,a=i("/ocq"),r=i("VXRH"),c={name:"",data:function(){return{}},props:{ifTitleAddMenuShow:{type:Boolean,default:!1}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"silde-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAddMenuShow,expression:"ifTitleAddMenuShow"}],staticClass:"title-wrapper"},[i("div",{staticClass:"left"},[i("span",{staticClass:"iconfont icon"},[t._v("")])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon"},[t._v("")])]),t._v(" "),i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon"},[t._v("")])]),t._v(" "),i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon"},[t._v("")])])])])])},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(t){i("Q13y")},"data-v-43df4688",null).exports,h={name:"",data:function(){return{}},props:{ifShowContent:Boolean,navigation:Object,bookAvailable:Boolean},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"silde-right"}},[i("div",{staticClass:"content"},[t.bookAvailable?i("div",{staticClass:"content-wrapper"},t._l(t.navigation.toc,function(e,n){return i("div",{key:n,staticClass:"content-wrapper-item",on:{click:function(i){t.jumpTo(e.href)}}},[i("span",{staticClass:"text"},[t._v(t._s(e.label))])])})):i("div",{staticClass:"empty"},[t._v("加载中...")])])])},staticRenderFns:[]};var u=i("VU/8")(h,f,!1,function(t){i("UAAE")},"data-v-1cd81911",null).exports,v={name:"",data:function(){return{ifSettingShow:!1,showTag:0,progress:0,ifShowContent:!1}},props:{ifTitleAddMenuShow:{type:Boolean,default:!1},fontSizeList:Array,defaultFontSize:Number,themeList:Array,defaultTheme:Number,bookAvailable:Boolean,navigation:Object},components:{contentView:u},methods:{jumpTo:function(t){this.$emit("jumpTo",t)},hideContent:function(){this.ifShowContent=!1},onProgressChange:function(t){this.$emit("onProgressChange",t)},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize=this.progress+"% 100%"},showSetting:function(t){t>0?(this.ifSettingShow=!0,this.showTag=t):(this.ifShowContent=!0,this.ifSettingShow=!1)},setTheme:function(t){this.$emit("setTheme",t)},setFontSize:function(t){this.$emit("setFontSize",t)},hideSetting:function(){this.ifSettingShow=!1}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-bar"},[i("transition",{attrs:{name:"silde-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAddMenuShow,expression:"ifTitleAddMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.ifSettingShow||!t.ifTitleAddMenuShow}},[i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon",on:{click:function(e){t.showSetting(0)}}},[t._v("")])]),t._v(" "),i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon",on:{click:function(e){t.showSetting(1)}}},[t._v("")])]),t._v(" "),i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon",on:{click:function(e){t.showSetting(2)}}},[t._v("")])]),t._v(" "),i("div",{staticClass:"iconfont-wrapper"},[i("span",{staticClass:"iconfont icon",on:{click:function(e){t.showSetting(3)}}},[t._v("")])])])]),t._v(" "),i("transition",{attrs:{name:"silde-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSettingShow,expression:"ifSettingShow"}],staticClass:"setting-wrapper"},[1===t.showTag?i("div",{staticClass:"setting-progress"},[i("div",{staticClass:"progress-wrapper"},[i("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){t.onProgressChange(e.target.value)},input:function(e){t.onProgressInput(e.target.value)}}})]),t._v(" "),i("div",{staticClass:"text-wrapper"},[i("span",[t._v(t._s(t.bookAvailable?t.progress+"%":"加载中..."))])])]):2===t.showTag?i("div",{staticClass:"setting-theme"},t._l(t.themeList,function(e,n){return i("div",{key:n,staticClass:"setting-theme-item",on:{click:function(e){t.setTheme(n)}}},[i("div",{staticClass:"preview",class:{noBoder:"#fff"!==e.style.body.background},style:{background:e.style.body.background}}),t._v(" "),i("div",{staticClass:"text",class:{selected:n===t.defaultTheme}},[t._v(t._s(e.name))])])})):3===t.showTag?i("div",{staticClass:"setting-font-size"},[i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),t._v(" "),i("div",{staticClass:"select"},t._l(t.fontSizeList,function(e,n){return i("div",{key:n,staticClass:"select-wrapper",on:{click:function(i){t.setFontSize(e.fontSize)}}},[i("div",{staticClass:"line"}),t._v(" "),e.fontSize===t.defaultFontSize?i("div",{staticClass:"point-wrapper"},[i("div",{staticClass:"point"},[i("div",{staticClass:"small-point"})])]):t._e(),t._v(" "),i("div",{staticClass:"line"})])})),t._v(" "),i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]):t._e()])]),t._v(" "),i("content-view",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{ifShowContent:t.ifShowContent,navigation:t.navigation,bookAvailable:t.bookAvailable},on:{jumpTo:t.jumpTo}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideContent}})])],1)},staticRenderFns:[]};var m={name:"",data:function(){return{ifTitleAddMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themeList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"rgb(241, 236, 226)"}}}],defaultTheme:0,bookAvailable:!1,navigation:null}},components:{titleBar:d,menuBar:i("VU/8")(v,p,!1,function(t){i("k8oS")},"data-v-7c202058",null).exports},methods:{jumpTo:function(t){this.rendition.display(t),this.hideTitleAndMenu()},hideTitleAndMenu:function(){this.ifTitleAddMenuShow=!1,this.$refs.menuBar.hideSetting(),this.$refs.menuBar.hideContent()},onProgressChange:function(t){var e=t/100,i=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(i)},setTheme:function(t){this.themes.select(this.themeList[t].name),this.defaultTheme=t},registerTheme:function(){var t=this;this.themeList.forEach(function(e){t.themes.register(e.name,e.style)})},setFontSize:function(t){this.themes&&(this.defaultFontSize=t,this.themes.fontSize(t+"px"))},toggleTitleAndMenu:function(){this.ifTitleAddMenuShow=!this.ifTitleAddMenuShow,this.ifTitleAddMenuShow||this.$refs.menuBar.hideSetting()},prevPage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition&&this.rendition.next()},showEpub:function(){var t=this;this.book=new r.a("./static/ebook.epub"),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,t.book.locations.generate()}).then(function(e){t.locations=t.book.locations,t.bookAvailable=!0})}},mounted:function(){this.showEpub()}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook"},[i("title-bar",{attrs:{ifTitleAddMenuShow:t.ifTitleAddMenuShow}}),t._v(" "),i("div",{staticClass:"read-wrapper"},[i("div",{attrs:{id:"read"}}),t._v(" "),i("div",{staticClass:"mask"},[i("div",{staticClass:"left",on:{click:t.prevPage}}),t._v(" "),i("div",{staticClass:"center",on:{click:t.toggleTitleAndMenu}}),t._v(" "),i("div",{staticClass:"right",on:{click:t.nextPage}})])]),t._v(" "),i("menu-bar",{ref:"menuBar",attrs:{ifTitleAddMenuShow:t.ifTitleAddMenuShow,fontSizeList:t.fontSizeList,defaultFontSize:t.defaultFontSize,themeList:t.themeList,defaultTheme:t.defaultTheme,bookAvailable:t.bookAvailable,navigation:t.navigation},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,jumpTo:t.jumpTo}})],1)},staticRenderFns:[]};var g=i("VU/8")(m,w,!1,function(t){i("LnzI")},"data-v-5e246e3e",null).exports;n.a.use(a.a);var S=new a.a({routes:[{path:"/",redirect:"/ebook"},{path:"/ebook",component:g}]});i("ZE75"),i("G1q7");n.a.config.productionTip=!1,new n.a({el:"#app",router:S,components:{App:o},template:"<App/>"})},Q13y:function(t,e){},UAAE:function(t,e){},ZE75:function(t,e){},k8oS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a3a07c89410d118c77c9.js.map