(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)o=i[l],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var f=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16b4":function(t,e,n){},"1e92":function(t,e,n){"use strict";var r=n("b6bf"),a=n.n(r);a.a},"35ee":function(t,e,n){"use strict";var r=n("16b4"),a=n.n(r);a.a},"564a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var r=n("2b0e"),a=n("ce5b"),s=n.n(a);n("bf40");r["default"].use(s.a,{});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"",clipped:"","disable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,r){return n("v-list-tile",{key:r,attrs:{to:e.route}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{app:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),t._l(t.items,function(e,r){return n("v-toolbar-items",{key:r,staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{to:e.route,flat:""}},[t._v("Home")])],1)})],2),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{fixed:"",app:""}},[n("span",[t._v("© 2017")])])],1)},i=[],c={name:"App",data:function(){return{drawer:!1,items:[{icon:"home",title:"Home",route:"/"}],title:"Anova"}}},u=c,f=n("2877"),l=Object(f["a"])(u,o,i,!1,null,null,null);l.options.__file="App.vue";var p=l.exports,d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[t.loading?n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:250,width:10}})],1):n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",[t.isTimerRunning?n("Timer",{attrs:{duration:3600,"timer-length":3e3}},[n("p",[t._v(t._s(1))])]):t._e(),n("Preheating",[n("p",[t._v("\n          Target Temp: "+t._s(t.targetTemp)+"\n        ")]),n("p",[t._v("\n          Current Temp: "+t._s(t.currentTemp)+"\n        ")])])],1),n("v-flex",[t.status.is_running?n("v-btn",{attrs:{color:"error"},on:{click:t.stop}},[t._v("Stop")]):n("v-btn",{attrs:{color:"success"},on:{click:t.start}},[t._v("Start")])],1),n("v-flex",[n("v-subheader",{staticClass:"pl-0"},[t._v("Temp")]),n("v-slider",{attrs:{"append-icon":"whatshot","thumb-label":"always","always-dirty":"",min:"32",max:"211",step:"1",ticks:""},model:{value:t.targetTemp,callback:function(e){t.targetTemp=e},expression:"targetTemp"}})],1),n("v-flex",[n("pre",[t._v("        "+t._s(t.status)+"\n      ")])])],1)],1)},m=[],b=n("a34a"),g=n.n(b),h=n("3040"),_=n("c93e"),T=n("2f62"),w=n("bc3a"),x=n.n(w),y=function(){return x.a.create({baseURL:"https://api.anovaculinary.com/cookers/"})};r["default"].use(T["a"]);var j=new T["a"].Store({state:{id:"anova f56-a83cf3cd7b0",secret:"np1ht2mjkf",status:{},loading:!1},getters:{id:function(t){return t.id},secret:function(t){return t.secret},status:function(t){return t.status},currentJob:function(t){return t.status.current_job},targetTemp:function(t){return t.status.target_temp},currentTemp:function(t){return t.status.current_temp},isTimerRunning:function(t){return t.status.is_timer_running},loading:function(t){return t.loading}},mutations:{setId:function(t,e){t.id=e},setSecret:function(t,e){t.secret=e},setStatus:function(t,e){t.status=e},setTargetTemp:function(t,e){t.status.target_temp=e},setLoading:function(t,e){t.loading=e}},actions:{setId:function(t,e){var n=t.commit;n("setId",e)},setSecret:function(t,e){var n=t.commit;n("setSecret",e)},setStatus:function(t,e){var n=t.commit;n("setStatus",e)},setTargetTemp:function(t,e){var n=t.commit;n("setTargetTemp",e)},setLoading:function(t,e){var n=t.commit;n("setLoading",e)}}}),O=j.getters.id,k=j.getters.secret,S={index:function(){return y().get("".concat(O,"?secret=").concat(k))},post:function(t){return y().post("".concat(O,"?secret=").concat(k),Object(_["a"])({},t))}},P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-progress-circular",{attrs:{value:t.timeProgress,rotate:270,size:250,width:15,color:"green"}},[t._t("default")],2)},L=[],$={props:["duration","timerLength"],data:function(){return{time:this.timerLength}},computed:{timeProgress:function(){return 100*(1-this.timerLength/this.duration)}},mounted:function(){var t=this;setInterval(function(){t.time-=1},1e3)}},C=$,M=(n("1e92"),Object(f["a"])(C,P,L,!1,null,null,null));M.options.__file="Timer.vue";var z=M.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-progress-circular",{attrs:{value:t.progress,rotate:270,size:250,width:15,color:"green"}},[t._t("default")],2)},H=[],I={computed:Object(_["a"])({},Object(T["c"])(["currentTemp","targetTemp"]),{progress:function(){return this.currentTemp/this.targetTemp*100}})},R=I,A=(n("bbf2"),Object(f["a"])(R,E,H,!1,null,null,null));A.options.__file="Preheating.vue";var J=A.exports,U={components:{Timer:z,Preheating:J},methods:Object(_["a"])({},Object(T["b"])(["setStatus","setLoading","setTargetTemp"]),{start:function(){var t=Object(h["a"])(g.a.mark(function t(){var e,n;return g.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={target_temp:this.targetTemp,is_running:!0},t.prev=1,t.next=4,S.post(e);case 4:n=t.sent.data.status,console.log(n),this.setStatus(n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error(t.t0);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(){return t.apply(this,arguments)}}(),stop:function(){var t=Object(h["a"])(g.a.mark(function t(){var e,n;return g.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={is_running:!1},t.prev=1,t.next=4,S.post(e);case 4:n=t.sent.data.status,this.setStatus(n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}()}),computed:Object(_["a"])({},Object(T["c"])(["status","currentTemp","loading","isTimerRunning"]),{targetTemp:{get:function(){return this.$store.getters.targetTemp},set:function(t){this.setTargetTemp(t)}}}),mounted:function(){var t=Object(h["a"])(g.a.mark(function t(){var e;return g.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.setLoading(!0),t.prev=1,t.next=4,S.index();case 4:e=t.sent.data.status,this.setStatus(e),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:return t.prev=11,this.setLoading(!1),t.finish(11);case 14:case"end":return t.stop()}},t,this,[[1,8,11,14]])}));return function(){return t.apply(this,arguments)}}()},q=U,B=(n("35ee"),Object(f["a"])(q,v,m,!1,null,"58709d9e",null));B.options.__file="Home.vue";var D=B.exports;r["default"].use(d["a"]);var F=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:D}]});r["default"].config.productionTip=!1,new r["default"]({router:F,store:j,render:function(t){return t(p)}}).$mount("#app")},b6bf:function(t,e,n){},bbf2:function(t,e,n){"use strict";var r=n("564a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.88c4605b.js.map