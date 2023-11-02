/*! For license information please see bundle.d84fdb3ddddcc67df05e.js.LICENSE.txt */
(()=>{"use strict";var n={428:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(537),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',"",{version:3,sources:["webpack://./src/styles/meyer.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB",sourcesContent:['/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n'],sourceRoot:""}]);const c=i},890:(n,t,e)=>{e.d(t,{Z:()=>y});var r=e(537),o=e.n(r),a=e(645),i=e.n(a),c=e(667),u=e.n(c),s=new URL(e(817),e.b),l=new URL(e(745),e.b),f=new URL(e(122),e.b),p=i()(o()),d=u()(s),h=u()(l),A=u()(f);p.push([n.id,`@font-face {\n  font-family: 'Montserrat';\n  src:\n    url(${d}) format('woff2'),\n    url(${h}) format('woff');\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100%;\n  background-image: url(${A});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  color: red;\n  font-family: 'Montserrat';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.content h1 {\n  font-weight: 900;\n  color: #fff;\n  font-size: 60px;\n}\n\n.cityInput,\n.citySubmit {\n  padding: 8px 14px;\n  background-color: var(--background-white);\n  outline: 0;\n  border: 0;\n  border-radius: 5px;\n  color: #000000;\n  box-shadow: var(--box-shadow);\n  font-family: var(--font-family);\n  background-color: #fff;\n}\n\n.citySubmit {\n  cursor: pointer;\n}\n\n.city-content {\n  font-weight: 900;\n  padding: 8px 14px;\n  box-shadow: var(--box-shadow);\n  font-family: var(--font-family);\n  color: rgb(83, 70, 165);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n`,"",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB;;0DAEwD;AAC1D;;AAEA;EACE,UAAU;EACV,SAAS;EACT,aAAa;EACb,WAAW;EACX,yDAAiD;EACjD,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,yCAAyC;EACzC,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,cAAc;EACd,6BAA6B;EAC7B,+BAA+B;EAC/B,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,6BAA6B;EAC7B,+BAA+B;EAC/B,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV",sourcesContent:["@font-face {\r\n  font-family: 'Montserrat';\r\n  src:\r\n    url('../fonts/Montserrat-Regular.woff2') format('woff2'),\r\n    url('../fonts/Montserrat-Regular.woff') format('woff');\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-image: url('../images/background.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.content {\r\n  color: red;\r\n  font-family: 'Montserrat';\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.content h1 {\r\n  font-weight: 900;\r\n  color: #fff;\r\n  font-size: 60px;\r\n}\r\n\r\n.cityInput,\r\n.citySubmit {\r\n  padding: 8px 14px;\r\n  background-color: var(--background-white);\r\n  outline: 0;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  color: #000000;\r\n  box-shadow: var(--box-shadow);\r\n  font-family: var(--font-family);\r\n  background-color: #fff;\r\n}\r\n\r\n.citySubmit {\r\n  cursor: pointer;\r\n}\r\n\r\n.city-content {\r\n  font-weight: 900;\r\n  padding: 8px 14px;\r\n  box-shadow: var(--box-shadow);\r\n  font-family: var(--font-family);\r\n  color: rgb(83, 70, 165);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n"],sourceRoot:""}]);const y=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=e(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var h=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var l=e(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},745:(n,t,e)=>{n.exports=e.p+"images/Montserrat-Regular.woff"},817:(n,t,e)=>{n.exports=e.p+"images/Montserrat-Regular.woff2"},122:(n,t,e)=>{n.exports=e.p+"images/background.jpg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),i=e.n(a),c=e(565),u=e.n(c),s=e(216),l=e.n(s),f=e(589),p=e.n(f),d=e(890),h={};h.styleTagTransform=p(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;var A=e(428),y={};function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function v(){v=function(){return t};var n,t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function l(n,t,e,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),c=new O(r||[]);return o(i,"_invoke",{value:j(n,e,c)}),i}function f(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",A="completed",y={};function g(){}function b(){}function w(){}var E={};s(E,i,(function(){return this}));var C=Object.getPrototypeOf,x=C&&C(C(D([])));x&&x!==e&&r.call(x,i)&&(E=x);var B=w.prototype=g.prototype=Object.create(E);function S(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function k(n,t){function e(o,a,i,c){var u=f(n[o],n,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==m(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(n){e("next",n,i,c)}),(function(n){e("throw",n,i,c)})):t.resolve(l).then((function(n){s.value=n,i(s)}),(function(n){return e("throw",n,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return a=a?a.then(o,o):o()}})}function j(t,e,r){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===A){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=L(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=A,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=f(t,e,r);if("normal"===s.type){if(o=r.done?A:d,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=A,r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function T(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function q(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function O(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(T,this),this.reset(!0)}function D(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(m(t)+" is not iterable")}return b.prototype=w,o(B,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,w):(n.__proto__=w,s(n,u,"GeneratorFunction")),n.prototype=Object.create(B),n},t.awrap=function(n){return{__await:n}},S(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new k(l(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},S(B),s(B,u,"Generator"),s(B,i,(function(){return this})),s(B,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),y},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),q(e),y}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;q(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},t}function g(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function b(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){g(a,r,o,i,c,"next",n)}function c(n){g(a,r,o,i,c,"throw",n)}i(void 0)}))}}function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}y.styleTagTransform=p(),y.setAttributes=u(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),t()(A.Z,y),A.Z&&A.Z.locals&&A.Z.locals;var E,C,x,B,S=function(n){var t=document.querySelector(".city-content");t.innerHTML="";var e={location:"Location",localtime:"Date & Time",weatherDesc:"Weather Description",tempC:"Temperature",windSpeed:"Wind Speed",windDegree:"Wind Degree",windDir:"Wind Direction"};Object.entries(n).forEach((function(n){var r,o,a=(o=2,function(n){if(Array.isArray(n))return n}(r=n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a,i,c=[],u=!0,s=!1;try{if(a=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=a.call(e)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(n){s=!0,o=n}finally{try{if(!u&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(r,o)||function(n,t){if(n){if("string"==typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1],u=document.createElement("div"),s=e[i];u.textContent="Wind Degree"===s?"".concat(s,": ").concat(c,"°"):"Temperature"===s?"".concat(s,": ").concat(c,"°C"):"Wind Speed"===s?"".concat(s,": ").concat(c," KM/H"):"".concat(s,": ").concat(c),u.classList.add(i),t.appendChild(u)}))},k=function(){var n=b(v().mark((function n(t){var e,r,o,a;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,o=document.querySelector(".cityInput"),n.prev=7,a=new function(n,t,e,r,o,a,i){return{location:n,localtime:t,weatherDesc:e,tempC:r,windSpeed:o,windDegree:a,windDir:i}}(r.location.name,r.location.localtime,r.current.condition.text,r.current.temp_c,r.current.wind_kph,r.current.wind_degree,r.current.wind_dir),o.value="",o.placeholder=a.location,S(a),n.abrupt("return",a);case 16:return n.prev=16,n.t0=n.catch(7),o.value="",o.placeholder="City name is not valid",console.error("Error fetching weather:",n.t0),n.abrupt("return",null);case 22:case"end":return n.stop()}}),n,null,[[7,16]])})));return function(t){return n.apply(this,arguments)}}();C="Sydney",x="https://api.weatherapi.com/v1/current.json?key=".concat(E="14665755af7243cfbb4105110230211","&q=").concat(C),B=document.querySelector(".citySubmit"),k(x),B.addEventListener("click",function(){var n=b(v().mark((function n(t){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),C=document.querySelector(".cityInput").value,x="https://api.weatherapi.com/v1/current.json?key=".concat(E,"&q=").concat(C),n.prev=3,n.next=6,k(x);case 6:e=n.sent,S(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),console.error("Error fetching weather:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(t){return n.apply(this,arguments)}}())})()})();
//# sourceMappingURL=bundle.d84fdb3ddddcc67df05e.js.map