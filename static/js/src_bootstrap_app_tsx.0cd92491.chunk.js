/*! For license information please see src_bootstrap_app_tsx.0cd92491.chunk.js.LICENSE.txt */
(globalThis.webpackChunkflappy_bird=globalThis.webpackChunkflappy_bird||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return o.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return i.default}});var n=s(r(96369)),a=s(r(18126)),o=s(r(69363)),i=s(r(83272));function s(e){return e&&e.__esModule?e:{default:e}}const c=[n.default,a.default];t.h0=c},26244:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>P,__esModule:()=>x.X$,logo:()=>x.jY,panels:()=>x.h0,readme:()=>x.ng});var n=r(55754),a=r(68275),o=r(45263),i=r(92950),s=r(80754);const c=function(e){var t=e.appId,r=e.src,n=e.title,a=e.wallet,c=e.verbose,l=void 0!==c&&c;return(0,i.useEffect)((function(){return new s.Gateway(a,l).terminate}),[]),(0,o.jsx)("iframe",{id:t+"-iframe",src:r,title:n,style:{height:"calc(100vh - 64px)",margin:-12,marginTop:-24,border:"none",width:"100vw"},loading:"lazy",allowFullScreen:!0})};const l={appId:"flappy_bird",url:"https://tuphan-dn.github.io/flappy-bird-iframe/index.js"},p={devnet:{node:"https://api.devnet.solana.com"},testnet:{node:"https://api.testnet.solana.com"},mainnet:{node:"https://api.mainnet-beta.solana.com"}},u={manifest:{development:{...l},production:{...l}}[a.env],sol:p[a.net]},{manifest:{appId:f}}=u,d=()=>(0,o.jsx)(c,{appId:f,src:"https://playcanv.as/p/2OlkUaxF/",title:"Flappy Bird: A technical demo of games on Senhub",wallet:window.sentre.wallet});var b=r(19289),y=r(71256),m=r(48744),g=r.n(m),h=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const v={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof y.PublicKey||e instanceof g()||h.isBuffer(e)}},O="main",j=(0,b.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:r}=t;const{main:{counter:n}}=r();return{counter:n+1}})),_=(0,b.createSlice)({name:O,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(j.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,w=(0,b.configureStore)({middleware:e=>e(v),devTools:!1,reducer:{main:_}});var x=r(45597);const{manifest:{appId:S}}=u,P=()=>(0,o.jsx)(a.AntdProvider,{appId:S,children:(0,o.jsx)(n.Provider,{store:w,children:(0,o.jsx)(d,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))r.call(i,p)&&(c[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(c[s[u]]=i[s[u]])}}return c}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),a=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:p,props:o,_owner:i.current}}t.jsx=l,t.jsxs=l},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.d5c95708bc916fbf9f66.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.26f95a10f782b20a22f6.png"},96369:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-1.e122128354895727cfd0.png"},18126:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-2.cd03bd4d5863751d193b.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.0cd92491.chunk.js.map