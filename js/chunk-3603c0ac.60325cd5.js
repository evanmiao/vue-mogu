(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3603c0ac"],{"1ca2":function(t,e,n){},"1ed3":function(t,e,n){},"1ef4":function(t,e,n){},"2adb":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.getTabs,(function(e,r){return n("div",{key:r,staticClass:"tab-control-item",class:{active:t.getCurrent===r},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},i=[],s=(n("a9e3"),{name:"TabControl",props:{tabs:{type:Array,default:function(){return[]}},current:{type:Number,default:0}},computed:{getTabs:function(){return this.tabs},getCurrent:function(){var t=Number(this.current);return t>this.getTabs.length-1?this.getTabs.length-1:t}},methods:{itemClick:function(t){this.$emit("itemClick",t)}}}),a=s,o=(n("ad6f"),n("2877")),c=Object(o["a"])(a,r,i,!1,null,"0d60ee94",null);e["a"]=c.exports},"3c39":function(t,e,n){"use strict";var r=n("7c7e"),i=n.n(r);i.a},5421:function(t,e,n){"use strict";var r=n("1ed3"),i=n.n(r);i.a},5474:function(t,e,n){},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"684a":function(t,e){t.exports="data:image/png;base64,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"},"74d2":function(t,e,n){"use strict";var r=n("1ef4"),i=n.n(r);i.a},"7c7e":function(t,e,n){},"866a":function(t,e,n){},"8a02":function(t,e,n){"use strict";var r=n("1ca2"),i=n.n(r);i.a},"8a08":function(t,e,n){"use strict";var r=n("5474"),i=n.n(r);i.a},a9c0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-top",on:{click:t.topClick}},[t._t("default")],2)},i=[],s={name:"BackTop",methods:{topClick:function(){this.$emit("backTop")}}},a=s,o=(n("8a02"),n("2877")),c=Object(o["a"])(a,r,i,!1,null,"30667213",null);e["a"]=c.exports},ad6f:function(t,e,n){"use strict";var r=n("dc6c"),i=n.n(r);i.a},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",{staticClass:"nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("首页")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],staticClass:"fixed-tab",attrs:{tabs:t.tabs,current:t.current},on:{itemClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{data:t.showGoodsList,"pull-up-load":!0,"probe-type":3},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("div",[r("home-swiper",{ref:"homeSwiper",attrs:{banner:t.banner}}),r("feature-view",{attrs:{feature:t.feature}}),r("recommend-view"),r("tab-control",{ref:"tabControl",attrs:{tabs:t.tabs,current:t.current},on:{itemClick:t.tabClick}}),r("goods-list",{attrs:{"goods-list":t.showGoodsList}})],1)]),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.showBackTop,expression:"showBackTop"}],staticClass:"back-top",on:{backTop:t.backTop}},[r("img",{attrs:{src:n("684a")}})])],1)},i=[],s=n("6b75");function a(t){if(Array.isArray(t))return Object(s["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||o(t)||Object(c["a"])(t)||u()}var d=n("61b0"),f=n("e3c8"),h=n("2adb"),m=n("a9c0"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.banner.length?n("swiper",{ref:"swiper"},t._l(t.banner,(function(t,e){return n("swiper-item",{key:e},[n("a",{attrs:{href:t.link}},[n("img",{attrs:{src:t.img}})])])})),1):t._e()},v=[],A=n("f1cd"),b={name:"HomeSwiper",components:{Swiper:A["a"],SwiperItem:A["b"]},props:{banner:{type:Array,default:function(){return[]}}},methods:{stopTimer:function(){this.$refs.swiper.stopTimer()},startTimer:function(){this.$refs.swiper&&this.$refs.swiper.startTimer()}}},w=b,g=n("2877"),T=Object(g["a"])(w,p,v,!1,null,"5246dfc4",null),C=T.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},t._l(t.feature,(function(e,r){return n("div",{key:r,staticClass:"feature-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.img}}),n("div",[t._v(t._s(e.title))])])])})),0)},D=[],k={name:"FeatureView",props:{feature:{type:Array,default:function(){return[]}}}},x=k,P=(n("3c39"),Object(g["a"])(x,y,D,!1,null,"671fa4c4",null)),I=P.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("5cbe")}})])])}],H={name:"RecommendView"},E=H,W=(n("74d2"),Object(g["a"])(E,z,j,!1,null,"6e56515a",null)),L=W.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("grid-view",t._l(t.goodsList,(function(t,e){return n("goods-list-item",{key:e,attrs:{goods:t}})})),1)},q=[],O=n("4660"),G=n("d008"),F={name:"GoodsList",components:{GridView:O["a"],GoodsListItem:G["a"]},props:{goodsList:{type:Array,default:function(){return[]}}}},N=F,X=Object(g["a"])(N,S,q,!1,null,"aaae76ea",null),B=X.exports,V=n("b775");function M(){return Object(V["a"])({url:"/home/multidata"})}function U(t,e){return Object(V["a"])({url:"/home/goodsdata",params:{type:t,page:e}})}var R=n("ac0d"),Z={name:"Home",components:{NavBar:d["a"],Scroll:f["a"],TabControl:h["a"],BackTop:m["a"],HomeSwiper:C,FeatureView:I,RecommendView:L,GoodsList:B},mixins:[R["a"],R["b"]],data:function(){return{banner:[],feature:[],goodsList:{pop:{page:1,list:[]},new:{page:1,list:[]},sell:{page:1,list:[]}},tabs:["流行","新款","精选"],isTabFixed:!1,tabOffsetTop:0}},computed:{showGoodsList:function(){return this.goodsList[this.currentType].list}},created:function(){this.getMultiData(),this.getGoods("pop"),this.getGoods("new"),this.getGoods("sell")},activated:function(){this.$refs.homeSwiper.startTimer()},deactivated:function(){this.$refs.homeSwiper.stopTimer()},updated:function(){this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop},methods:{getMultiData:function(){var t=this;M().then((function(e){t.banner=e.data.data.banner,t.feature=e.data.data.feature}))},getGoods:function(t){var e=this;U(t,this.goodsList[t].page).then((function(n){var r,i=n.data.data.list;(r=e.goodsList[t].list).push.apply(r,l(i)),e.goodsList[t].page+=1,e.$refs.scroll.finishPullUp()}))},contentScroll:function(t){this.isTabFixed=t.y<-this.tabOffsetTop,this.showBackTop=t.y<-1e3},loadMore:function(){this.getGoods(this.currentType)}}},J=Z,Y=(n("5421"),Object(g["a"])(J,r,i,!1,null,"9032dcc6",null));e["default"]=Y.exports},c336:function(t,e,n){"use strict";var r=n("866a"),i=n.n(r);i.a},dc6c:function(t,e,n){},f1cd:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"swiper"}},[n("div",{staticClass:"swiper-wrap",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.itemCount>1?t._t("indicator",t._l(t.itemCount,(function(e,r){return n("div",{key:r,staticClass:"indicator-item",class:{active:r===t.currentIndex-1}})}))):t._e()],2)],2)},i=[],s=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{itemCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.itemCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.itemCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper-wrap"),e=t.getElementsByClassName("swiper-item");if(this.itemCount=e.length,this.itemCount>1){var n=e[0].cloneNode(!0),r=e[this.itemCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(){var t=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&t>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&t>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),a=s,o=(n("8a08"),n("2877")),c=Object(o["a"])(a,r,i,!1,null,"4d2809a7",null),u=c.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-item"},[t._t("default")],2)},d=[],f={name:"SwiperItem"},h=f,m=(n("c336"),Object(o["a"])(h,l,d,!1,null,"5d267d2e",null)),p=m.exports}}]);
//# sourceMappingURL=chunk-3603c0ac.60325cd5.js.map