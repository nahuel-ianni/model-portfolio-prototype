(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1036:function(t,e,n){t.exports=n.p+"img/img-1.524f7968.jpeg"},"1a0f":function(t,e,n){},"1f71":function(t,e,n){t.exports=n.p+"img/img-6.27028a0c.jpeg"},2276:function(t,e,n){},"253f":function(t,e,n){},2545:function(t,e,n){t.exports=n.p+"img/img-4.7d8c1047.jpeg"},"3ee7":function(t,e,n){t.exports=n.p+"img/img-2.18faec89.jpeg"},"3fca":function(t,e,n){"use strict";var a=n("1a0f"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("SiteNavigation")],1),n("main",{staticClass:"container"},[n("Banner"),n("router-view",{staticClass:"content"})],1)])},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"title"},[n("h1",[t._v("Anastasia Arbos")]),n("p",[t._v("Fashion model photographer")])]),n("p",{staticClass:"legend"},[t._v(" I've moved to Milan "),n("br"),t._v("and want to shoot. "),n("br"),n("br"),t._v("Get in touch, "),n("br"),t._v("let's work together. ")])])}],c={name:"Banner"},u=c,l=(n("a182"),n("2877")),f=Object(l["a"])(u,o,s,!1,null,"ba647726",null),p=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel"},[a("Flickity",{ref:"flickity",staticClass:"slider",attrs:{options:t.settings}},t._l(4,(function(t){return a("img",{key:t,staticClass:"img",attrs:{src:n("fc00")("./img-"+t+".jpeg"),alt:"Picture from a set."}})})),0),a("div",{staticClass:"controls"},[a("svg",{staticClass:"svg",attrs:{viewBox:"0 0 320 512"},on:{click:function(e){return t.previous()}}},[a("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})]),a("svg",{staticClass:"svg",attrs:{viewBox:"0 0 320 512"},on:{click:function(e){return t.next()}}},[a("path",{attrs:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])])],1)},m=[],v=n("b394"),d={name:"Carousel",components:{Flickity:v["a"]},data:function(){return{settings:{autoPlay:5e3,cellAlign:"left",initialIndex:Math.floor(Math.random()*Math.floor(4)),pageDots:!1,pauseAutoPlayOnHover:!0,prevNextButtons:!1,setGallerySize:!1,wrapAround:!0}}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()}}},h=d,b=(n("a7c6"),Object(l["a"])(h,g,m,!1,null,"0037fbdc",null)),_=b.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav",on:{click:t.toggleMenu}},[n("svg",{staticClass:"mobile nav-menu svg",attrs:{viewBox:"0 0 384 384"}},[n("rect",{staticClass:"nav-menu",attrs:{x:"0",y:"277.333",width:"384",height:"42.667"}}),n("rect",{staticClass:"nav-menu",attrs:{x:"0",y:"170.667",width:"384",height:"42.667"}}),n("rect",{staticClass:"nav-menu",attrs:{x:"0",y:"64",width:"384",height:"42.667"}})]),n("ul",{staticClass:"ul",class:{"expanded-menu":t.expandMenu}},[n("li",[n("router-link",{staticClass:"a",attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{staticClass:"a",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),n("li",[n("router-link",{staticClass:"a",attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{staticClass:"a mobile",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])},x=[],y={name:"SiteNavigation",data:function(){return{expandMenu:!1}},methods:{toggleMenu:function(t){(this.expandMenu||t.target.classList.contains("nav-menu"))&&(this.expandMenu=!this.expandMenu)}}},C=y,w=(n("3fca"),Object(l["a"])(C,j,x,!1,null,"6f3ffb45",null)),k=w.exports,O={name:"App",components:{Banner:p,SiteNavigation:k}},M=O,P=(n("83ea"),n("6948"),Object(l["a"])(M,r,i,!1,null,"5db2e8d0",null)),$=P.exports,E=n("8c4f"),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("article",[a("h2",[t._v("Welcome!")]),a("p",[a("br"),t._v("I'm Anastasia, a passionate photographer. "),a("br"),a("br"),t._v("I've been part of the fashion industry for over 20 years now, as well as a hobbist landscape lover. "),a("br"),t._v("I try to find beauty wherever I go and immortalize it through the lens of my camera, a faithful companion always at my side. ")])]),a("img",{staticClass:"img",attrs:{src:n("9696"),alt:"Myself, looking at you through the lens of a camera"}})])}],L={name:"About"},B=L,N=(n("7fbe"),Object(l["a"])(B,A,S,!1,null,"7bb39af6",null)),I=N.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Carousel")},z=[],T={name:"Home",components:{Carousel:_}},D=T,H=Object(l["a"])(D,F,z,!1,null,null,null),G=H.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("h2",{staticClass:"h2"},[t._v("We couldn't find the page you were looking for!")]),n("p",[t._v(" Click "),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("here to go back home")]),t._v(". ")],1)])},U=[],W={name:"PageNotFound"},q=W,K=(n("9539"),Object(l["a"])(q,J,U,!1,null,"b7cea0d4",null)),Q=K.exports;a["a"].use(E["a"]);var R=new E["a"]({routes:[{path:"/",component:G},{path:"/about",component:I},{path:"*",component:Q}]});a["a"].config.productionTip=!1,new a["a"]({router:R,render:function(t){return t($)}}).$mount("#app")},"5f19":function(t,e,n){t.exports=n.p+"img/img-3.b03a14bb.jpeg"},6948:function(t,e,n){"use strict";var a=n("253f"),r=n.n(a);r.a},7524:function(t,e,n){},"7fbe":function(t,e,n){"use strict";var a=n("2276"),r=n.n(a);r.a},"83ea":function(t,e,n){"use strict";var a=n("d1a3"),r=n.n(a);r.a},8889:function(t,e,n){t.exports=n.p+"img/img-5.23bab305.jpeg"},9539:function(t,e,n){"use strict";var a=n("ab53"),r=n.n(a);r.a},9696:function(t,e,n){t.exports=n.p+"img/img-about.7e726249.jpeg"},"97c0":function(t,e,n){t.exports=n.p+"img/img-8.47c7b813.jpeg"},a182:function(t,e,n){"use strict";var a=n("7524"),r=n.n(a);r.a},a6c0:function(t,e,n){t.exports=n.p+"img/img-12.eae96f76.jpeg"},a7c6:function(t,e,n){"use strict";var a=n("ee1f"),r=n.n(a);r.a},ab53:function(t,e,n){},d1a3:function(t,e,n){},d8df:function(t,e,n){t.exports=n.p+"img/img-11.0d0389ae.jpeg"},ee1f:function(t,e,n){},f432:function(t,e,n){t.exports=n.p+"img/img-10.c12e36cc.jpeg"},fc00:function(t,e,n){var a={"./img-1.jpeg":"1036","./img-10.jpeg":"f432","./img-11.jpeg":"d8df","./img-12.jpeg":"a6c0","./img-2.jpeg":"3ee7","./img-3.jpeg":"5f19","./img-4.jpeg":"2545","./img-5.jpeg":"8889","./img-6.jpeg":"1f71","./img-7.jpeg":"fe68","./img-8.jpeg":"97c0","./img-9.jpeg":"fd1b","./img-about.jpeg":"9696"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="fc00"},fd1b:function(t,e,n){t.exports=n.p+"img/img-9.bf7860fa.jpeg"},fe68:function(t,e,n){t.exports=n.p+"img/img-7.b0c47d78.jpeg"}});
//# sourceMappingURL=app.a63c6fb2.js.map