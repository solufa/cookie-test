(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,n,e){"use strict";var o={$url:function(t){return{path:"/",hash:null==t?void 0:t.hash}}},r={favicon_png:"/favicon.png"};n.a=function(t,n){n("pagesPath",o),n("staticPath",r)}},108:function(t,n,e){"use strict";var o=e(75),r=e.n(o),c=e(106),f=e.n(c),h=(e(42),function(t){var n=t.baseURL,e=t.fetch,o=(void 0===n?"https://cookie-test1-production.up.railway.app":n).replace(/\/$/,""),r="/health",c="/session-samesite-none",f="/session-samesite-undefined",h="GET",d="POST";return{health:{get:function(option){return e(o,r,h,option).text()},$get:function(option){return e(o,r,h,option).text().then((function(t){return t.body}))},$path:function(){return"".concat(o).concat(r)}},session_samesite_none:{post:function(option){return e(o,c,d,option).json()},$post:function(option){return e(o,c,d,option).json().then((function(t){return t.body}))},$path:function(){return"".concat(o).concat(c)}},session_samesite_undefined:{post:function(option){return e(o,f,d,option).json()},$post:function(option){return e(o,f,d,option).json().then((function(t){return t.body}))},$path:function(){return"".concat(o).concat(f)}},get:function(option){return e(o,"",h,option).text()},$get:function(option){return e(o,"",h,option).text().then((function(t){return t.body}))},$path:function(){return"".concat(o)}}}),d=function(t){var n=t.baseURL,e=t.fetch,o=(void 0===n?"https://cookie-test2-production.up.railway.app":n).replace(/\/$/,""),r="/health",c="/me",f="GET";return{health:{get:function(option){return e(o,r,f,option).text()},$get:function(option){return e(o,r,f,option).text().then((function(t){return t.body}))},$path:function(){return"".concat(o).concat(r)}},me:{get:function(option){return e(o,c,f,option).json()},$get:function(option){return e(o,c,f,option).json().then((function(t){return t.body}))},$path:function(){return"".concat(o).concat(c)}},get:function(option){return e(o,"",f,option).text()},$get:function(option){return e(o,"",f,option).text().then((function(t){return t.body}))},$path:function(){return"".concat(o)}}};n.a=function(t,n){n("api",h(f()(r.a,{withCredentials:!0}))),n("api2",d(f()(r.a,{withCredentials:!0})))}},151:function(t,n,e){"use strict";var o=e(0),r=e(45);n.a=Object(r.b)({setup:function(){return function(){return Object(o.e)("nuxt")}}})},155:function(t,n,e){t.exports=e(156)},189:function(t,n,e){var content=e(190);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("f36bde76",content,!0,{sourceMap:!1})},190:function(t,n,e){var o=e(78)(!1);o.push([t.i,'html{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before{box-sizing:border-box;margin:0}',""]),t.exports=o}},[[155,3,1,4]]]);