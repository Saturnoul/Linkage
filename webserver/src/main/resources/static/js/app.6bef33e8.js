(function(e){function n(n){for(var c,u,a=n[0],i=n[1],s=n[2],h=0,d=[];h<a.length;h++)u=a[h],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,u=1;u<t.length;u++){var a=t[u];0!==r[a]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},u={app:0},r={app:0},o=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-258331b6":"82bd7c2f","chunk-2d0b2586":"92497fbc","chunk-2d0e6170":"09bb043d","chunk-041afebc":"4a1fb29c","chunk-1681a669":"ba1df903","chunk-299a6dfd":"dfe338c8","chunk-2f5cb18a":"8256e7a8","chunk-54831f34":"49cf7eb3","chunk-57a7fd45":"c6413461","chunk-5a7c425e":"34fe289f","chunk-6eeb9c7b":"49ecb716","chunk-d566c6c2":"18a743ac","chunk-f1061854":"c4180a41","chunk-2d22456d":"fb030b88","chunk-4d667fe2":"77dc6e78","chunk-8d8571b8":"2ec3d22e","chunk-8ee8e208":"1ff14b92"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-258331b6":1,"chunk-041afebc":1,"chunk-1681a669":1,"chunk-299a6dfd":1,"chunk-2f5cb18a":1,"chunk-54831f34":1,"chunk-57a7fd45":1,"chunk-5a7c425e":1,"chunk-6eeb9c7b":1,"chunk-d566c6c2":1,"chunk-f1061854":1,"chunk-4d667fe2":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-258331b6":"56ee9bb7","chunk-2d0b2586":"31d6cfe0","chunk-2d0e6170":"31d6cfe0","chunk-041afebc":"dc593cac","chunk-1681a669":"22cdbcd4","chunk-299a6dfd":"22cdbcd4","chunk-2f5cb18a":"8bef473c","chunk-54831f34":"1849adee","chunk-57a7fd45":"4923609a","chunk-5a7c425e":"22cdbcd4","chunk-6eeb9c7b":"b7751d75","chunk-d566c6c2":"22cdbcd4","chunk-f1061854":"dc593cac","chunk-2d22456d":"31d6cfe0","chunk-4d667fe2":"6fb1cecb","chunk-8d8571b8":"31d6cfe0","chunk-8ee8e208":"31d6cfe0"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var s=o[a],h=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(h===c||h===r))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],h=s.getAttribute("data-href");if(h===c||h===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete u[e],l.parentNode.removeChild(l),t(o)},l.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){u[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var s,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=a(e);var d=new Error;s=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+u+")",d.name="ChunkLoadError",d.type=c,d.request=u,t[1](d)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:h})}),12e4);h.onerror=h.onload=s,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"42d0":function(e,n,t){"use strict";var c=t("8589"),u=t.n(c);u.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"layout"},[t("Layout",[t("Header",[t("div",[t("font",{attrs:{color:"#FFFFFF",size:"5"}},[e._v("Linkage")])],1)]),t("Layout",[t("Sider",{style:{background:"#fff"},attrs:{"hide-trigger":""}},[e.islog?t("Menu",{ref:"menu",attrs:{"active-name":e.activeName,theme:"light",width:"auto","open-names":["1","2","3","4"]},on:{"on-select":e.select}},[t("Submenu",{attrs:{name:"1"}},[t("template",{slot:"title"},[t("Icon",{attrs:{type:"md-cafe"}}),e._v(" Moments ")],1),t("MenuItem",{attrs:{name:"1-1"},nativeOn:{click:function(n){return e.shareMoments()}}},[e._v("Share Your Moment")]),t("MenuItem",{attrs:{name:"1-2"},nativeOn:{click:function(n){return e.browseMoments()}}},[e._v("Browse Others")])],2),t("Submenu",{attrs:{name:"4"}},[t("template",{slot:"title"},[t("Icon",{attrs:{type:"logo-chrome"}}),e._v(" Posts ")],1),t("MenuItem",{attrs:{name:"4-1"}},[e._v("Post Article")]),t("MenuItem",{attrs:{name:"4-2"}},[e._v("Browse Others")])],2),t("Submenu",{attrs:{name:"2"}},[t("template",{slot:"title"},[t("Icon",{attrs:{type:"md-notifications"}}),e._v(" Message ")],1),t("MenuItem",{attrs:{name:"2-1"},nativeOn:{click:function(n){return e.invitation()}}},[e._v("Invitation")]),t("MenuItem",{attrs:{name:"2-2"},nativeOn:{click:function(n){return e.chat()}}},[e._v("Chat")])],2),t("Submenu",{attrs:{name:"3"}},[t("template",{slot:"title"},[t("Icon",{attrs:{type:"md-contact"}}),e._v(" Me ")],1),t("MenuItem",{attrs:{name:"3-1"},nativeOn:{click:function(n){return e.showAccount()}}},[e._v(" Account ")]),t("MenuItem",{attrs:{name:"3-2"},nativeOn:{click:function(n){return e.showFriends()}}},[e._v(" Friends ")]),t("MenuItem",{attrs:{name:"3-3"},nativeOn:{click:function(n){return e.showSubscription()}}},[e._v(" Subscription ")])],2)],1):e._e()],1),t("Layout",{style:{padding:"0 24px 24px"}},[t("router-view",{on:{"child-event":e.parentEvent,changeActiveName:e.changeActiveName}})],1)],1)],1)],1)},r=[],o={data:function(){return{islog:!0,activeName:"3-1"}},mounted:function(){},methods:{select:function(e){this.activeName=e},changeActiveName:function(e){var n=this;console.log("App is accepting emit ..."),this.activeName=e,console.log(this.activeName),this.$nextTick((function(){console.log("executin nextTick ..."),n.$refs.menu.updateOpened(),n.$refs.menu.updateActiveName()}))},parentEvent:function(e){"LogSuccess"==e&&(this.islog=!0)},shareMoments:function(){this.$router.push("shareMoments")},browseMoments:function(){this.$router.push("browseMoments")},showAccount:function(){this.$router.push("account")},showFriends:function(){this.$router.push("friends")},showHome:function(){this.$router.push("home")},showMessage:function(){this.$router.push("message")},chat:function(){this.$router.push("chat")},invitation:function(){this.$router.push("invitation")},showSubscription:function(){this.$router.push("subscription")}}},a=o,i=(t("42d0"),t("2877")),s=Object(i["a"])(a,u,r,!1,null,"7bdaea68",null),h=s.exports,d=(t("d3b7"),t("8c4f"));c["default"].use(d["a"]);var l=[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-2f5cb18a")]).then(t.bind(null,"bb51"))}},{path:"/log",name:"log",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-54831f34")]).then(t.bind(null,"1ad4"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-2d22456d").then(t.bind(null,"e05a"))}},{path:"/forgetPassword",name:"forgetPassword",component:function(){return t.e("chunk-2d0b2586").then(t.bind(null,"245c"))}},{path:"/account",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-57a7fd45")]).then(t.bind(null,"d4d7"))}},{path:"/friends",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-5a7c425e")]).then(t.bind(null,"aac2"))}},{path:"/addFriend",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-1681a669")]).then(t.bind(null,"74c4"))}},{path:"/message",name:"message",component:function(){return t.e("chunk-258331b6").then(t.bind(null,"4c74"))}},{path:"/browseMoments",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-f1061854")]).then(t.bind(null,"3968"))}},{path:"/shareMoments",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-6eeb9c7b")]).then(t.bind(null,"53b4"))}},{path:"/chat",component:function(){return t.e("chunk-4d667fe2").then(t.bind(null,"c02a"))}},{path:"/invitation",component:function(){return t.e("chunk-8d8571b8").then(t.bind(null,"d4de"))}},{path:"/subscription",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-299a6dfd")]).then(t.bind(null,"218e"))}},{path:"/addSubscription",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-d566c6c2")]).then(t.bind(null,"8ed6"))}},{path:"/myMoments",component:function(){return Promise.all([t.e("chunk-2d0e6170"),t.e("chunk-041afebc")]).then(t.bind(null,"ad95"))}},{path:"/myPosts",component:function(){return t.e("chunk-8ee8e208").then(t.bind(null,"52d5"))}}],f=new d["a"]({routes:l}),p=f,m=t("f825"),b=t.n(m),k=(t("f8ce"),t("bc3a")),v=t.n(k),g=t("4328"),y=t.n(g);c["default"].prototype.$qs=y.a,c["default"].prototype.$axios=v.a,c["default"].use(b.a),c["default"].config.productionTip=!1;var w=d["a"].prototype.push;d["a"].prototype.push=function(e){return w.call(this,e).catch((function(e){return e}))},new c["default"]({router:p,render:function(e){return e(h)}}).$mount("#app")},8589:function(e,n,t){}});
//# sourceMappingURL=app.6bef33e8.js.map