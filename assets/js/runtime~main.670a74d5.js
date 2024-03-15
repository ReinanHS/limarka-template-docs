(()=>{"use strict";var e,t,r,a,o,f={},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=f,i.c=n,e=[],i.O=(t,r,a,o)=>{if(!r){var f=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||f>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(n=!1,o<f&&(f=o));if(n){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,i.d(o,f),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({32:"eeb1a351",48:"a94703ab",61:"1f391b9e",98:"a7bd4aaa",134:"393be207",210:"abe2efc1",291:"9ef6a849",401:"17896441",448:"767f5fdf",485:"97746d0e",487:"6fa883ce",647:"5e95c892",762:"5fc0f6e6",802:"055b225f",848:"27ab8a5e",882:"f49bf4d0",969:"14eb3368"}[e]||e)+"."+{32:"abea1407",48:"c6ccb41c",61:"64b05ae9",98:"c5eab96c",134:"3634d339",210:"19b2e614",237:"e9d38ff3",291:"caeafc06",401:"f8f82155",448:"87843faf",485:"9f2a791c",487:"90d77583",647:"f21c9bb9",674:"d6da9970",762:"d3a04c73",802:"3ff5b8fc",848:"619267e2",882:"669c24d7",969:"5fee1310"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docusaurus-example-poc:",i.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){n=l;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var b=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),c&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/limarka-template-docs/",i.gca=function(e){return e={17896441:"401",eeb1a351:"32",a94703ab:"48","1f391b9e":"61",a7bd4aaa:"98","393be207":"134",abe2efc1:"210","9ef6a849":"291","767f5fdf":"448","97746d0e":"485","6fa883ce":"487","5e95c892":"647","5fc0f6e6":"762","055b225f":"802","27ab8a5e":"848",f49bf4d0:"882","14eb3368":"969"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=i.p+i.u(t),n=new Error;i.l(f,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],c=r[2],u=0;if(f.some((t=>0!==e[t]))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(c)var d=c(i)}for(t&&t(r);u<f.length;u++)o=f[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},r=self.webpackChunkdocusaurus_example_poc=self.webpackChunkdocusaurus_example_poc||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();