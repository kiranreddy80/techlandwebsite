const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HomeLayout-n3yLC3yI.js","assets/js/icons-vendor-DWk9LYok.js","assets/js/react-vendor-iesUOuYh.js","assets/js/seoConfig-ScsCPm3p.js","assets/js/HomeContactUs-DH09P3L1.js","assets/js/utils-D_wzFjLH.js","assets/css/HomeContactUs-BAKPC05D.css","assets/js/swiper-vendor-ubC_Fhtt.js","assets/js/projectsData-CrCvCROv.js","assets/js/animation-vendor-lhfjd4vI.js","assets/css/HomeLayout-BsMXsGc9.css","assets/js/About-D5LjXFKz.js","assets/css/About-CXRI853Y.css","assets/js/Services-BkcDheDK.js","assets/js/servicesData-jbPba5FO.js","assets/css/Services-C-Qqvouu.css","assets/js/ServiceDetails-w5RBQ02R.js","assets/css/ServiceDetails-fWqNz1mS.css","assets/js/Portfolio-fo9VtxpL.js","assets/js/ProjectDetail-DqKqB-j5.js","assets/js/Blogs-D-zrtOB3.js","assets/js/blogData-nyk7lrJy.js","assets/css/Blogs-CCtv_z_w.css","assets/js/BlogDetails-Br-rIjJW.js","assets/js/Contact-Bm0sX-TV.js","assets/css/Contact-B1Lz-xee.css","assets/js/OurTeam-DF0-nVV5.js","assets/css/OurTeam-BQvYFN9O.css"])))=>i.map(i=>d[i]);
var $e=Object.defineProperty;var Pe=(t,s,a)=>s in t?$e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var S=(t,s,a)=>Pe(t,typeof s!="symbol"?s+"":s,a);import{j as e}from"./icons-vendor-DWk9LYok.js";import{a as we,g as ae,r as m,R as E,u as B,L as v,N as k,O as Le,b as ze,d as C,B as Re}from"./react-vendor-iesUOuYh.js";import{A as He}from"./animation-vendor-lhfjd4vI.js";import{a as Ue,y as V,L as qe}from"./utils-D_wzFjLH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();var Z={},re=we;Z.createRoot=re.createRoot,Z.hydrateRoot=re.hydrateRoot;var Fe=typeof Element<"u",Be=typeof Map=="function",We=typeof Set=="function",Ve=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function q(t,s){if(t===s)return!0;if(t&&s&&typeof t=="object"&&typeof s=="object"){if(t.constructor!==s.constructor)return!1;var a,n,r;if(Array.isArray(t)){if(a=t.length,a!=s.length)return!1;for(n=a;n--!==0;)if(!q(t[n],s[n]))return!1;return!0}var i;if(Be&&t instanceof Map&&s instanceof Map){if(t.size!==s.size)return!1;for(i=t.entries();!(n=i.next()).done;)if(!s.has(n.value[0]))return!1;for(i=t.entries();!(n=i.next()).done;)if(!q(n.value[1],s.get(n.value[0])))return!1;return!0}if(We&&t instanceof Set&&s instanceof Set){if(t.size!==s.size)return!1;for(i=t.entries();!(n=i.next()).done;)if(!s.has(n.value[0]))return!1;return!0}if(Ve&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(s)){if(a=t.length,a!=s.length)return!1;for(n=a;n--!==0;)if(t[n]!==s[n])return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof s.valueOf=="function")return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof s.toString=="function")return t.toString()===s.toString();if(r=Object.keys(t),a=r.length,a!==Object.keys(s).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(s,r[n]))return!1;if(Fe&&t instanceof Element)return!1;for(n=a;n--!==0;)if(!((r[n]==="_owner"||r[n]==="__v"||r[n]==="__o")&&t.$$typeof)&&!q(t[r[n]],s[r[n]]))return!1;return!0}return t!==t&&s!==s}var Ge=function(s,a){try{return q(s,a)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Ye=ae(Ge);var Ke=function(t,s,a,n,r,i,l,o){if(!t){var c;if(s===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[a,n,r,i,l,o],h=0;c=new Error(s.replace(/%s/g,function(){return d[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Xe=Ke;const ie=ae(Xe);var Ze=function(s,a,n,r){var i=n?n.call(r,s,a):void 0;if(i!==void 0)return!!i;if(s===a)return!0;if(typeof s!="object"||!s||typeof a!="object"||!a)return!1;var l=Object.keys(s),o=Object.keys(a);if(l.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(a),d=0;d<l.length;d++){var h=l[d];if(!c(h))return!1;var p=s[h],f=a[h];if(i=n?n.call(r,p,f,h):void 0,i===!1||i===void 0&&p!==f)return!1}return!0};const Qe=ae(Ze);var ke=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(ke||{}),G={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},oe=Object.values(ke),ne={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Je=Object.entries(ne).reduce((t,[s,a])=>(t[a]=s,t),{}),_="data-rh",D={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},$=(t,s)=>{for(let a=t.length-1;a>=0;a-=1){const n=t[a];if(Object.prototype.hasOwnProperty.call(n,s))return n[s]}return null},et=t=>{let s=$(t,"title");const a=$(t,D.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),a&&s)return a.replace(/%s/g,()=>s);const n=$(t,D.DEFAULT_TITLE);return s||n||void 0},tt=t=>$(t,D.ON_CHANGE_CLIENT_STATE)||(()=>{}),Y=(t,s)=>s.filter(a=>typeof a[t]<"u").map(a=>a[t]).reduce((a,n)=>({...a,...n}),{}),st=(t,s)=>s.filter(a=>typeof a.base<"u").map(a=>a.base).reverse().reduce((a,n)=>{if(!a.length){const r=Object.keys(n);for(let i=0;i<r.length;i+=1){const o=r[i].toLowerCase();if(t.indexOf(o)!==-1&&n[o])return a.concat(n)}}return a},[]),at=t=>console&&typeof console.warn=="function"&&console.warn(t),P=(t,s,a)=>{const n={};return a.filter(r=>Array.isArray(r[t])?!0:(typeof r[t]<"u"&&at(`Helmet: ${t} should be of type "Array". Instead found type "${typeof r[t]}"`),!1)).map(r=>r[t]).reverse().reduce((r,i)=>{const l={};i.filter(c=>{let d;const h=Object.keys(c);for(let f=0;f<h.length;f+=1){const u=h[f],b=u.toLowerCase();s.indexOf(b)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(b==="rel"&&c[b].toLowerCase()==="stylesheet")&&(d=b),s.indexOf(u)!==-1&&(u==="innerHTML"||u==="cssText"||u==="itemprop")&&(d=u)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return n[d]||(n[d]={}),l[d]||(l[d]={}),n[d][p]?!1:(l[d][p]=!0,!0)}).reverse().forEach(c=>r.push(c));const o=Object.keys(l);for(let c=0;c<o.length;c+=1){const d=o[c],h={...n[d],...l[d]};n[d]=h}return r},[]).reverse()},nt=(t,s)=>{if(Array.isArray(t)&&t.length){for(let a=0;a<t.length;a+=1)if(t[a][s])return!0}return!1},rt=t=>({baseTag:st(["href"],t),bodyAttributes:Y("bodyAttributes",t),defer:$(t,D.DEFER),encode:$(t,D.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Y("htmlAttributes",t),linkTags:P("link",["rel","href"],t),metaTags:P("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:P("noscript",["innerHTML"],t),onChangeClientState:tt(t),scriptTags:P("script",["src","innerHTML"],t),styleTags:P("style",["cssText"],t),title:et(t),titleAttributes:Y("titleAttributes",t),prioritizeSeoTags:nt(t,D.PRIORITIZE_SEO_TAGS)}),Ne=t=>Array.isArray(t)?t.join(""):t,it=(t,s)=>{const a=Object.keys(t);for(let n=0;n<a.length;n+=1)if(s[a[n]]&&s[a[n]].includes(t[a[n]]))return!0;return!1},K=(t,s)=>Array.isArray(t)?t.reduce((a,n)=>(it(n,s)?a.priority.push(n):a.default.push(n),a),{priority:[],default:[]}):{default:t,priority:[]},le=(t,s)=>({...t,[s]:void 0}),ot=["noscript","script","style"],Q=(t,s=!0)=>s===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Te=t=>Object.keys(t).reduce((s,a)=>{const n=typeof t[a]<"u"?`${a}="${t[a]}"`:`${a}`;return s?`${s} ${n}`:n},""),lt=(t,s,a,n)=>{const r=Te(a),i=Ne(s);return r?`<${t} ${_}="true" ${r}>${Q(i,n)}</${t}>`:`<${t} ${_}="true">${Q(i,n)}</${t}>`},ct=(t,s,a=!0)=>s.reduce((n,r)=>{const i=r,l=Object.keys(i).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,h)=>{const p=typeof i[h]>"u"?h:`${h}="${Q(i[h],a)}"`;return d?`${d} ${p}`:p},""),o=i.innerHTML||i.cssText||"",c=ot.indexOf(t)===-1;return`${n}<${t} ${_}="true" ${l}${c?"/>":`>${o}</${t}>`}`},""),Ce=(t,s={})=>Object.keys(t).reduce((a,n)=>{const r=ne[n];return a[r||n]=t[n],a},s),dt=(t,s,a)=>{const n={key:s,[_]:!0},r=Ce(a,n);return[E.createElement("title",r,s)]},F=(t,s)=>s.map((a,n)=>{const r={key:n,[_]:!0};return Object.keys(a).forEach(i=>{const o=ne[i]||i;if(o==="innerHTML"||o==="cssText"){const c=a.innerHTML||a.cssText;r.dangerouslySetInnerHTML={__html:c}}else r[o]=a[i]}),E.createElement(t,r)}),N=(t,s,a=!0)=>{switch(t){case"title":return{toComponent:()=>dt(t,s.title,s.titleAttributes),toString:()=>lt(t,s.title,s.titleAttributes,a)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Ce(s),toString:()=>Te(s)};default:return{toComponent:()=>F(t,s),toString:()=>ct(t,s,a)}}},mt=({metaTags:t,linkTags:s,scriptTags:a,encode:n})=>{const r=K(t,G.meta),i=K(s,G.link),l=K(a,G.script);return{priorityMethods:{toComponent:()=>[...F("meta",r.priority),...F("link",i.priority),...F("script",l.priority)],toString:()=>`${N("meta",r.priority,n)} ${N("link",i.priority,n)} ${N("script",l.priority,n)}`},metaTags:r.default,linkTags:i.default,scriptTags:l.default}},ut=t=>{const{baseTag:s,bodyAttributes:a,encode:n=!0,htmlAttributes:r,noscriptTags:i,styleTags:l,title:o="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:h,metaTags:p,scriptTags:f}=t,u={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:u,linkTags:h,metaTags:p,scriptTags:f}=mt(t)),{priority:u,base:N("base",s,n),bodyAttributes:N("bodyAttributes",a,n),htmlAttributes:N("htmlAttributes",r,n),link:N("link",h,n),meta:N("meta",p,n),noscript:N("noscript",i,n),script:N("script",f,n),style:N("style",l,n),title:N("title",{title:o,titleAttributes:c},n)}},J=ut,H=[],_e=!!(typeof window<"u"&&window.document&&window.document.createElement),ee=class{constructor(t,s){S(this,"instances",[]);S(this,"canUseDOM",_e);S(this,"context");S(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?H:this.instances,add:t=>{(this.canUseDOM?H:this.instances).push(t)},remove:t=>{const s=(this.canUseDOM?H:this.instances).indexOf(t);(this.canUseDOM?H:this.instances).splice(s,1)}}});this.context=t,this.canUseDOM=s||!1,s||(t.helmet=J({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},pt={},Ae=E.createContext(pt),M,Se=(M=class extends m.Component{constructor(a){super(a);S(this,"helmetData");this.helmetData=new ee(this.props.context||{},M.canUseDOM)}render(){return E.createElement(Ae.Provider,{value:this.helmetData.value},this.props.children)}},S(M,"canUseDOM",_e),M),O=(t,s)=>{const a=document.head||document.querySelector("head"),n=a.querySelectorAll(`${t}[${_}]`),r=[].slice.call(n),i=[];let l;return s&&s.length&&s.forEach(o=>{const c=document.createElement(t);for(const d in o)if(Object.prototype.hasOwnProperty.call(o,d))if(d==="innerHTML")c.innerHTML=o.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=o.cssText:c.appendChild(document.createTextNode(o.cssText));else{const h=d,p=typeof o[h]>"u"?"":o[h];c.setAttribute(d,p)}c.setAttribute(_,"true"),r.some((d,h)=>(l=h,c.isEqualNode(d)))?r.splice(l,1):i.push(c)}),r.forEach(o=>{var c;return(c=o.parentNode)==null?void 0:c.removeChild(o)}),i.forEach(o=>a.appendChild(o)),{oldTags:r,newTags:i}},te=(t,s)=>{const a=document.getElementsByTagName(t)[0];if(!a)return;const n=a.getAttribute(_),r=n?n.split(","):[],i=[...r],l=Object.keys(s);for(const o of l){const c=s[o]||"";a.getAttribute(o)!==c&&a.setAttribute(o,c),r.indexOf(o)===-1&&r.push(o);const d=i.indexOf(o);d!==-1&&i.splice(d,1)}for(let o=i.length-1;o>=0;o-=1)a.removeAttribute(i[o]);r.length===i.length?a.removeAttribute(_):a.getAttribute(_)!==l.join(",")&&a.setAttribute(_,l.join(","))},ht=(t,s)=>{typeof t<"u"&&document.title!==t&&(document.title=Ne(t)),te("title",s)},ce=(t,s)=>{const{baseTag:a,bodyAttributes:n,htmlAttributes:r,linkTags:i,metaTags:l,noscriptTags:o,onChangeClientState:c,scriptTags:d,styleTags:h,title:p,titleAttributes:f}=t;te("body",n),te("html",r),ht(p,f);const u={baseTag:O("base",a),linkTags:O("link",i),metaTags:O("meta",l),noscriptTags:O("noscript",o),scriptTags:O("script",d),styleTags:O("style",h)},b={},x={};Object.keys(u).forEach(T=>{const{newTags:I,oldTags:W}=u[T];I.length&&(b[T]=I),W.length&&(x[T]=u[T].oldTags)}),s&&s(),c(t,b,x)},L=null,ft=t=>{L&&cancelAnimationFrame(L),t.defer?L=requestAnimationFrame(()=>{ce(t,()=>{L=null})}):(ce(t),L=null)},gt=ft,de=class extends m.Component{constructor(){super(...arguments);S(this,"rendered",!1)}shouldComponentUpdate(s){return!Qe(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:a}=this.props.context;let n=null;const r=rt(s.get().map(i=>{const l={...i.props};return delete l.context,l}));Se.canUseDOM?gt(r):J&&(n=J(r)),a(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},X,Ns=(X=class extends m.Component{shouldComponentUpdate(t){return!Ye(le(this.props,"helmetData"),le(t,"helmetData"))}mapNestedChildrenToProps(t,s){if(!s)return null;switch(t.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,s,a,n){return{...s,[t.type]:[...s[t.type]||[],{...a,...this.mapNestedChildrenToProps(t,n)}]}}mapObjectTypeChildren(t,s,a,n){switch(t.type){case"title":return{...s,[t.type]:n,titleAttributes:{...a}};case"body":return{...s,bodyAttributes:{...a}};case"html":return{...s,htmlAttributes:{...a}};default:return{...s,[t.type]:{...a}}}}mapArrayTypeChildrenToProps(t,s){let a={...s};return Object.keys(t).forEach(n=>{a={...a,[n]:t[n]}}),a}warnOnInvalidChildren(t,s){return ie(oe.some(a=>t.type===a),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${oe.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),ie(!s||typeof s=="string"||Array.isArray(s)&&!s.some(a=>typeof a!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,s){let a={};return E.Children.forEach(t,n=>{if(!n||!n.props)return;const{children:r,...i}=n.props,l=Object.keys(i).reduce((c,d)=>(c[Je[d]||d]=i[d],c),{});let{type:o}=n;switch(typeof o=="symbol"?o=o.toString():this.warnOnInvalidChildren(n,r),o){case"Symbol(react.fragment)":s=this.mapChildrenToProps(r,s);break;case"link":case"meta":case"noscript":case"script":case"style":a=this.flattenArrayTypeChildren(n,a,l,r);break;default:s=this.mapObjectTypeChildren(n,s,l,r);break}}),this.mapArrayTypeChildrenToProps(a,s)}render(){const{children:t,...s}=this.props;let a={...s},{helmetData:n}=s;if(t&&(a=this.mapChildrenToProps(t,a)),n&&!(n instanceof ee)){const r=n;n=new ee(r.context,!0),delete a.helmetData}return n?E.createElement(de,{...a,context:n.value}):E.createElement(Ae.Consumer,null,r=>E.createElement(de,{...a,context:r}))}},S(X,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),X);const xt="modulepreload",bt=function(t){return"/"+t},me={},A=function(s,a,n){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=Promise.allSettled(a.map(c=>{if(c=bt(c),c in me)return;me[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":xt,d||(p.as="script"),p.crossOrigin="",p.href=c,o&&p.setAttribute("nonce",o),document.head.appendChild(p),d)return new Promise((f,u)=>{p.addEventListener("load",f),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return r.then(l=>{for(const o of l||[])o.status==="rejected"&&i(o.reason);return s().catch(i)})};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(...t)=>t.filter((s,a,n)=>!!s&&s.trim()!==""&&n.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,n)=>n?n.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=t=>{const s=yt(t);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=m.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:r="",children:i,iconNode:l,...o},c)=>m.createElement("svg",{ref:c,...jt,width:s,height:s,stroke:t,strokeWidth:n?Number(a)*24/Number(s):a,className:Ee("lucide",r),...!i&&!wt(o)&&{"aria-hidden":"true"},...o},[...l.map(([d,h])=>m.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(t,s)=>{const a=m.forwardRef(({className:n,...r},i)=>m.createElement(kt,{ref:i,iconNode:s,className:Ee(`lucide-${vt(ue(t))}`,`lucide-${t}`,n),...r}));return a.displayName=ue(t),a};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pe=j("arrow-right",Nt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Ct=j("arrow-up-right",Tt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],he=j("book-open",_t);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],St=j("chevron-down",At);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],fe=j("house",Et);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ge=j("info",It);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],xe=j("layers",Mt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],be=j("layout-grid",Ot);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$t=j("mail",Dt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Lt=j("map-pin",Pt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Rt=j("menu",zt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],se=j("phone",Ht);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],qt=j("sparkles",Ut);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ve=j("users",Ft);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ie=j("x",Bt),Wt=({setOpenContactModal:t})=>{const[s,a]=m.useState(!1),[n,r]=m.useState(null),[i,l]=m.useState(!1),o=B(),c=u=>{u.preventDefault(),t&&t(!0)};m.useEffect(()=>{a(!1),r(null)},[o.pathname]),m.useEffect(()=>{const u=()=>l(window.scrollY>12);return window.addEventListener("scroll",u,{passive:!0}),u(),()=>window.removeEventListener("scroll",u)},[]);const d=()=>a(u=>!u),h=(u,b)=>{b&&(b.preventDefault(),b.stopPropagation()),r(n===u?null:u)},p=()=>{a(!1),r(null)},f=o.pathname.startsWith("/services");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`th-menu-wrapper onepage-nav ${s?"th-body-visible menu-open":""}`,children:e.jsxs("div",{className:"th-menu-area text-center",children:[e.jsx("button",{type:"button",className:"th-menu-toggle",onClick:d,"aria-label":"Close menu",children:e.jsx(Ie,{size:22})}),e.jsx("div",{className:"mobile-logo",children:e.jsx(v,{to:"/",onClick:p,children:e.jsx("img",{src:"/assets/media/logo.png",alt:"Techland",loading:"lazy"})})}),e.jsxs("div",{className:"th-mobile-menu allow-natural-scroll",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(k,{to:"/",onClick:p,children:[e.jsx(fe,{size:15,className:"ck-nav-ico"})," Home"]})}),e.jsx("li",{children:e.jsxs(k,{to:"/about",onClick:p,children:[e.jsx(ge,{size:15,className:"ck-nav-ico"})," About Us"]})}),e.jsxs("li",{className:`menu-item-has-children ${n==="services"?"open":""}`,children:[e.jsxs(v,{to:"#",onClick:u=>h("services",u),className:f?"active":"",children:[e.jsx(xe,{size:15,className:"ck-nav-ico"})," Our Services"]}),e.jsxs("ul",{className:`sub-menu ${n==="services"?"open":""}`,children:[e.jsx("li",{children:e.jsx(v,{to:"/services/mobile-app-development",onClick:p,children:"Mobile App Development"})}),e.jsx("li",{children:e.jsx(v,{to:"/services/web-development",onClick:p,children:"Web Development"})}),e.jsx("li",{children:e.jsx(v,{to:"/services/digital-marketing",onClick:p,children:"Digital Marketing"})}),e.jsx("li",{children:e.jsx(v,{to:"/services/custom-software-development",onClick:p,children:"Custom Software Development"})}),e.jsx("li",{children:e.jsx(v,{to:"/services/ui-ux-design",onClick:p,children:"UI/UX Design"})})]})]}),e.jsx("li",{children:e.jsxs(k,{to:"/portfolio",onClick:p,children:[e.jsx(be,{size:15,className:"ck-nav-ico"})," Portfolio"]})}),e.jsx("li",{children:e.jsxs(k,{to:"/our-team",onClick:p,children:[e.jsx(ve,{size:15,className:"ck-nav-ico"})," Our Team"]})}),e.jsx("li",{children:e.jsxs(k,{to:"/blogs",onClick:p,children:[e.jsx(he,{size:15,className:"ck-nav-ico"})," Blog"]})}),e.jsx("li",{children:e.jsxs(k,{to:"/contact",onClick:p,children:[e.jsx(se,{size:15,className:"ck-nav-ico"})," Contact us"]})})]}),e.jsx("div",{className:"ck-mobile-cta-wrap",children:e.jsxs("button",{type:"button",onClick:u=>{p(),c(u)},className:"ck-cta-btn",children:["Free Quote ",e.jsx(pe,{size:15})]})})]})]})}),e.jsx("nav",{className:`ck-nav ${i?"ck-nav--scrolled":""}`,children:e.jsxs("div",{className:"ck-nav-inner",children:[e.jsx(v,{to:"/",className:"ck-logo","aria-label":"Techland home",children:e.jsx("img",{src:"/assets/media/logo.png",alt:"Techland",loading:"eager"})}),e.jsxs("div",{className:"ck-nav-links",children:[e.jsxs(k,{to:"/",end:!0,className:({isActive:u})=>`ck-nav-link ${u?"is-active":""}`,children:[e.jsx(fe,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Home"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(k,{to:"/about",className:({isActive:u})=>`ck-nav-link ${u?"is-active":""}`,children:[e.jsx(ge,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"About"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs("div",{className:"ck-nav-dd",children:[e.jsxs("button",{type:"button",className:`ck-nav-link ck-nav-link--btn ${f?"is-active":""}`,children:[e.jsx(xe,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Services"}),e.jsx(St,{size:14,className:"ck-nav-chev"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs("div",{className:"ck-nav-dd-panel",role:"menu",children:[e.jsx(v,{to:"/services/mobile-app-development",role:"menuitem",children:"Mobile App Development"}),e.jsx(v,{to:"/services/web-development",role:"menuitem",children:"Web Development"}),e.jsx(v,{to:"/services/digital-marketing",role:"menuitem",children:"Digital Marketing"}),e.jsx(v,{to:"/services/custom-software-development",role:"menuitem",children:"Custom Software Development"}),e.jsx(v,{to:"/services/ui-ux-design",role:"menuitem",children:"UI/UX Design"})]})]}),e.jsxs(k,{to:"/portfolio",className:({isActive:u})=>`ck-nav-link ${u?"is-active":""}`,children:[e.jsx(be,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Portfolio"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(k,{to:"/our-team",className:({isActive:u})=>`ck-nav-link ${u?"is-active":""}`,children:[e.jsx(ve,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Team"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(k,{to:"/blogs",className:({isActive:u})=>`ck-nav-link ${u?"is-active":""}`,children:[e.jsx(he,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Blog"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(k,{to:"/contact",className:({isActive:u})=>`ck-nav-link ${u?"is-active":""}`,children:[e.jsx(se,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Contact"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"ck-nav-actions",children:[e.jsxs("button",{type:"button",onClick:c,className:"ck-cta-btn",children:["Get in Touch ",e.jsx(pe,{size:15})]}),e.jsx("button",{type:"button",className:"ck-nav-burger",onClick:d,"aria-label":"Open menu",children:e.jsx(Rt,{size:22})})]})]})})]})},U="917842385604",g={name:"Techland IT Solutions",shortName:"Techland",tagline:"Best App, Web & Digital Marketing Company in Hyderabad",website:"https://techlanditsolutions.com",email:{primary:"info@techlanditsolutions.com",get href(){return`mailto:${this.primary}`}},phone:{raw:U,display:"+91 784 238 5604",compact:"+91 78423 85604",e164:`+${U}`,get href(){return`tel:+${U}`}},address:{line1:"Flat No. 101, Sirisampada Hitec Apartment",line2:"H.No. 1-63/C/8/2, Plot No. 2, Block No. 8",locality:"Kavuri Hills",area:"Madhapur",city:"Hyderabad",state:"Telangana",postalCode:"500081",country:"IN",get full(){return`${this.line1}, ${this.line2}, ${this.locality}, ${this.area}, ${this.city}, ${this.state} ${this.postalCode}`},get street(){return`${this.line1}, ${this.line2}, ${this.locality}, ${this.area}`}},maps:{place:"https://maps.app.goo.gl/N13ixNnC7UHf7nwT9",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263340846998!2d78.37701741037169!3d17.447105483381275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938fa04b952d%3A0x2d0c448b127e06e3!2sTechland%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1737129743764!5m2!1sen!2sin"},social:{linkedin:"https://www.linkedin.com/company/techland-it-solutionss/",instagram:"https://www.instagram.com/techlanditsolutions?igsh=bnF2NmhobWdlNTQz",facebook:"",twitter:"",youtube:""},whatsapp(t=`Hi Techland,
I'm inquiring about the website development and mobile app development`){return`https://wa.me/${U}?text=${encodeURIComponent(t)}`},hours:{display:"Mon – Sat, 10:00 – 19:00 IST",schema:"Mo-Sa 10:00-19:00"},forms:{success:"Thank you! Our team will reach out to you within the next 2 hours."},stats:{clients:"350+",websites:"96+",apps:"156+"},certifications:["GST Registered"],languages:["English","Hindi","Telugu"]},Vt=[{to:"/services/web-development",label:"Web Development"},{to:"/services/mobile-app-development",label:"Mobile App Development"},{to:"/services/digital-marketing",label:"Digital Marketing"},{to:"/services/custom-software-development",label:"Custom Software"},{to:"/services/ui-ux-design",label:"UI / UX Design"}],Gt=[{to:"/about",label:"About Us"},{to:"/our-team",label:"Our Team"},{to:"/portfolio",label:"Our Work"},{to:"/services",label:"Services"},{to:"/blogs",label:"Journal"},{to:"/contact",label:"Contact"}],ye=[{href:g.social.linkedin,label:"LinkedIn",icon:"fab fa-linkedin-in"},{href:g.social.instagram,label:"Instagram",icon:"fab fa-instagram"},{href:g.social.facebook,label:"Facebook",icon:"fab fa-facebook-f"},{href:g.whatsapp(),label:"WhatsApp",icon:"fab fa-whatsapp"}].filter(t=>t.href);function Yt(){const t=new Date().getFullYear();return e.jsxs("footer",{className:"ft",role:"contentinfo",children:[e.jsxs("div",{className:"ft-bg","aria-hidden":"true",children:[e.jsx("span",{className:"ft-orb ft-orb--a"}),e.jsx("span",{className:"ft-orb ft-orb--b"}),e.jsx("span",{className:"ft-grid"})]}),e.jsxs("div",{className:"ft-container",children:[e.jsxs("div",{className:"ft-cta",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"ft-cta-title",children:"Have something to build?"}),e.jsx("p",{className:"ft-cta-sub",children:"Send a short brief — scope, timeline and a number come back within two working hours."})]}),e.jsxs("div",{className:"ft-cta-actions",children:[e.jsxs(v,{to:"/contact",className:"ft-btn ft-btn--solid",children:["Start a project",e.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]}),e.jsx("a",{href:g.phone.href,className:"ft-btn ft-btn--ghost",children:g.phone.display})]})]}),e.jsxs("div",{className:"ft-cols",children:[e.jsxs("div",{className:"ft-col ft-col--brand",children:[e.jsx(v,{to:"/",className:"ft-logo","aria-label":"Techland IT Solutions home",children:e.jsx("img",{src:"/assets/media/logo.png",alt:"Techland IT Solutions",loading:"lazy"})}),e.jsxs("p",{className:"ft-about",children:["An IT partner in Hyderabad building apps, websites and marketing programmes for ",g.stats.clients," businesses across India and abroad — designed, built and supported in-house."]}),ye.length>0&&e.jsx("ul",{className:"ft-social",children:ye.map(s=>e.jsx("li",{children:e.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer","aria-label":s.label,title:s.label,children:e.jsx("i",{className:s.icon,"aria-hidden":"true"})})},s.label))})]}),e.jsxs("nav",{className:"ft-col","aria-label":"Services",children:[e.jsx("h3",{className:"ft-col-title",children:"Services"}),e.jsx("ul",{className:"ft-links",children:Vt.map(s=>e.jsx("li",{children:e.jsx(v,{to:s.to,children:s.label})},s.to))})]}),e.jsxs("nav",{className:"ft-col","aria-label":"Company",children:[e.jsx("h3",{className:"ft-col-title",children:"Company"}),e.jsx("ul",{className:"ft-links",children:Gt.map(s=>e.jsx("li",{children:e.jsx(v,{to:s.to,children:s.label})},s.to))})]}),e.jsxs("div",{className:"ft-col ft-col--contact",children:[e.jsx("h3",{className:"ft-col-title",children:"Get in touch"}),e.jsxs("ul",{className:"ft-contact",children:[e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Studio"}),e.jsx("a",{className:"ft-v",href:g.maps.place,target:"_blank",rel:"noopener noreferrer",children:g.address.full})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Phone"}),e.jsx("a",{className:"ft-v",href:g.phone.href,children:g.phone.display})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Email"}),e.jsx("a",{className:"ft-v",href:g.email.href,children:g.email.primary})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Hours"}),e.jsx("span",{className:"ft-v ft-v--plain",children:g.hours.display})]})]})]})]}),e.jsxs("div",{className:"ft-bottom",children:[e.jsxs("p",{className:"ft-copy",children:["© ",t," ",g.name,". All rights reserved."]}),e.jsxs("p",{className:"ft-meta",children:[g.certifications.join(" · "),e.jsx("span",{"aria-hidden":"true",children:" · "}),"Hyderabad, India"]})]})]}),e.jsx("style",{children:`
        /* ============================================================
           FOOTER

           Replaces a 746-line build that carried ~300 lines of seasonal
           emoji snowfall (❄ 💖 🔱 raining over the links), a logo with
           alt="Atek" from the purchased template, a Staffing Services
           link for a service no longer offered, and a six-image blog
           thumbnail gallery that loaded full-size images.

           Four columns, one accent, everything sourced from company.js.
           ============================================================ */
        .ft {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #0B1020;
          color: rgba(255,255,255,0.72);
          padding: 0 0 26px;
        }

        .ft-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .ft-orb { position: absolute; border-radius: 999px; filter: blur(120px); }
        .ft-orb--a {
          width: 520px; height: 520px; top: -220px; left: -160px;
          background: radial-gradient(closest-side, rgba(79,70,229,0.42), transparent);
        }
        .ft-orb--b {
          width: 560px; height: 560px; bottom: -260px; right: -180px;
          background: radial-gradient(closest-side, rgba(124,58,237,0.34), transparent);
        }
        .ft-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(ellipse at 50% 0%, #000 10%, transparent 68%);
        }

        .ft-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .ft-container { padding: 0 32px; } }

        /* ---- top CTA ---- */
        .ft-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          padding: 46px 0 42px;
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }
        @media (min-width: 1024px) { .ft-cta { padding: 62px 0 54px; } }

        .ft-cta-title {
          margin: 0;
          font-family: "Play", sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 2.4vw + 0.6rem, 2.4rem);
          line-height: 1.1;
          letter-spacing: -0.032em;
          color: #ffffff;
          text-wrap: balance;
        }
        .ft-cta-sub {
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.55);
          max-width: 46ch;
        }
        .ft-cta-actions { display: flex; flex-wrap: wrap; gap: 12px; }

        .ft-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 26px;
          border-radius: 999px;
          font-family: "Play", sans-serif;
          font-size: 14px; font-weight: 640;
          letter-spacing: -0.01em;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }
        .ft-btn--solid {
          color: #ffffff;
          background: linear-gradient(120deg, #163198, #4f46e5 55%, #7c3aed);
          box-shadow: 0 18px 40px -18px rgba(79,70,229,0.8);
        }
        .ft-btn--solid:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 24px 52px -18px rgba(79,70,229,0.95);
        }
        .ft-btn--ghost {
          color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
        }
        .ft-btn--ghost:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.34);
        }
        .ft-btn svg {
          width: 17px; height: 17px;
          fill: none; stroke: currentColor;
          stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-btn--solid:hover svg { transform: translateX(3px); }

        /* ---- columns ---- */
        .ft-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 38px;
          padding: 44px 0 40px;
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }
        @media (min-width: 640px)  { .ft-cols { grid-template-columns: 1fr 1fr; gap: 38px 32px; } }
        @media (min-width: 1024px) { .ft-cols { grid-template-columns: 1.5fr 1fr 1fr 1.4fr; gap: 44px; padding: 56px 0 48px; } }

        .ft-col { min-width: 0; }
        .ft-col-title {
          margin: 0 0 18px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .ft-logo { display: inline-block; }
        /* The stored logo is dark-on-white, so it needs a plate to sit on a
           dark ground. A knockout version would remove the need for this. */
        .ft-logo img {
          height: 42px; width: auto; display: block;
          background: #ffffff;
          padding: 7px 11px;
          border-radius: 10px;
        }
        .ft-about {
          margin: 20px 0 0;
          font-size: 14.5px;
          line-height: 1.68;
          color: rgba(255,255,255,0.55);
          max-width: 42ch;
        }

        .ft-social { list-style: none; margin: 22px 0 0; padding: 0; display: flex; gap: 10px; }
        .ft-social a {
          width: 38px; height: 38px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .ft-social a:hover {
          transform: translateY(-3px);
          color: #ffffff;
          border-color: transparent;
          background: linear-gradient(135deg, #163198, #7c3aed);
        }

        .ft-links { list-style: none; margin: 0; padding: 0; display: grid; gap: 11px; }
        .ft-links a {
          font-size: 14.5px;
          color: rgba(255,255,255,0.62);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.28s ease, gap 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        /* A rule that grows in from nothing, rather than an arrow that jumps. */
        .ft-links a::before {
          content: "";
          width: 0; height: 1px;
          background: linear-gradient(90deg, #4f46e5, #a78bfa);
          transition: width 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-links a:hover { color: #ffffff; }
        .ft-links a:hover::before { width: 14px; }

        /* ---- contact ---- */
        .ft-contact { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; }
        .ft-contact li {
          display: grid;
          grid-template-columns: 62px 1fr;
          gap: 14px;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ft-contact li:last-child { border-bottom: 0; }
        .ft-k {
          font-family: ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }
        .ft-v {
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          transition: color 0.28s ease;
        }
        a.ft-v:hover { color: #a78bfa; }
        .ft-v--plain { color: rgba(255,255,255,0.6); }

        /* ---- bottom ---- */
        .ft-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 24px;
        }
        .ft-copy, .ft-meta {
          margin: 0;
          font-size: 12.5px;
          color: rgba(255,255,255,0.45);
        }
        .ft-meta {
          font-family: ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          .ft-btn, .ft-btn svg, .ft-social a, .ft-links a, .ft-links a::before, .ft-v {
            transition: none !important;
          }
          .ft-btn--solid:hover, .ft-social a:hover { transform: none !important; }
        }
      `})]})}const Kt=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"slider-drag-cursor d-flex align-items-center justify-content-between",children:[e.jsx("span",{className:"drag-icon-left",children:e.jsx("img",{src:"assets/img/icon/drag-arrow-left.svg",alt:"Drag left arrow"})}),"DRAG",e.jsx("span",{className:"drag-icon-right",children:e.jsx("img",{src:"assets/img/icon/drag-arrow-right.svg",alt:"Drag right arrow"})})]})}),Xt=[{name:"New Year",startMonth:11,startDay:30,endMonth:0,endDay:10,images:{circle1:"/assets/img/normal/NewYearImg_03.png",circle2:"/assets/img/normal/NewYearImg_02.png",main:"/assets/img/normal/NewYearImg_04.png"}},{name:"Sankranthi",startMonth:0,startDay:11,endMonth:0,endDay:20,images:{circle1:"/assets/img/normal/sankranthiImg03.png",circle2:"/assets/img/normal/sankranthiImg02.png",circle3:"/assets/img/normal/sankranthiImg01.png",main:"/assets/img/normal/sankranthiImg04.png"}},{name:"Holi",startMonth:1,startDay:27,endMonth:2,endDay:6,images:{circle1:"/assets/img/normal/holiImg03.png",circle2:"/assets/img/normal/holiImg02.png",circle3:"/assets/img/normal/holiImg01.png",main:"/assets/img/normal/holiImg04.png"}},{name:"Ugadi",startMonth:2,startDay:14,endMonth:2,endDay:21,images:{circle1:"/assets/img/normal/ugadiImg02.png",circle2:"/assets/img/normal/ugadiImg01.png",circle3:"/assets/img/normal/ugadiImg03.png",main:"/assets/img/normal/ugadilogo.png"}},{name:"Ramzan",startMonth:2,startDay:15,endMonth:2,endDay:22,images:{circle1:"/assets/img/normal/ramzan-right-image.png",circle2:"/assets/img/normal/centerImage.png",circle3:"/assets/img/normal/ramzanLeftImage.png",main:"/assets/img/normal/ramzan-bottom-image.png"}},{name:"Independence Day",startMonth:7,startDay:10,endMonth:7,endDay:17,images:{circle1:"/assets/img/normal/Independence-day-right-Img.png",circle2:"/assets/img/normal/Independence-day-center-Img.png",circle3:"/assets/img/normal/Independence-day-leftImg.png",main:"/assets/img/normal/Independence-day-bottom-Img.png"}},{name:"Onam",startMonth:7,startDay:20,endMonth:7,endDay:27,images:{circle1:"/assets/img/normal/sankranthiImg01.png",circle2:"/assets/img/normal/greetLogo.png",circle3:"/assets/img/normal/sankranthiImg03.png",main:"/assets/img/normal/sankranthiImg04.png"}},{name:"Ganesh Chaturthi",startMonth:8,startDay:9,endMonth:8,endDay:29,images:{circle1:"/assets/img/normal/diya.png",circle2:"/assets/img/normal/lordGanesh.png",circle3:"/assets/img/normal/Laddu.png",main:"/assets/img/normal/lord_ganesh.png"}},{name:"Dussehra",startMonth:9,startDay:15,endMonth:9,endDay:22,images:{circle1:"/assets/img/normal/ravan.png",circle2:"/assets/img/normal/greetLogo.png",circle3:"/assets/img/normal/ravan2.png",main:"/assets/img/normal/GodessIdol.png"}},{name:"Diwali",startMonth:10,startDay:3,endMonth:10,endDay:10,images:{circle1:"/assets/img/normal/diwali-diya-2.png",circle2:"/assets/img/normal/goddess-laxmi.png",circle3:"/assets/img/normal/diwali-diya-2.png",main:"/assets/img/normal/diwali-bottom-image.png"}},{name:"Christmas",startMonth:11,startDay:10,endMonth:11,endDay:29,images:{circle1:"/assets/cdn-images/Group 9.png",circle2:"/assets/cdn-images/Group 8.png",circle3:"/assets/cdn-images/Group 7.png",main:"/assets/cdn-images/santaClaus.png"}}],Zt=()=>{const t=m.useMemo(()=>{const a=new Date,n=a.getMonth(),r=a.getDate();return Xt.find(i=>{const{startMonth:l,startDay:o,endMonth:c,endDay:d}=i;if(l<=c){if(n===l&&r>=o)return l===c?r<=d:!0;if(n===c&&r<=d||n>l&&n<c)return!0}else if(n===l&&r>=o||n===c&&r<=d||n>l||n<c)return!0;return!1})},[]);if(!t)return null;const{images:s}=t;return e.jsxs("div",{className:"d-none d-lg-block",children:[e.jsx("div",{className:"try_circle_first try_circle_first_top hidden-xs hidden-sm",children:e.jsx("img",{src:s.circle1,alt:"circle"})}),e.jsx("div",{className:"try_circle_second try_circle_second_top hidden-xs hidden-sm",children:e.jsx("img",{src:s.circle2,alt:"circle"})}),e.jsx("div",{className:"try_circle_third try_circle_third_top hidden-xs hidden-sm",children:e.jsx("img",{src:s.circle3,alt:"circle"})}),e.jsx("div",{className:"try_slider_img_Wrapper try_slider_img_header_Wrapper","data-animation":"animated bounceInUp",children:e.jsx("img",{src:s.main,alt:"mobile"})})]})},Qt=()=>{const[t,s]=m.useState(!1);m.useEffect(()=>{const n=setTimeout(()=>s(!0),1500);return()=>clearTimeout(n)},[]);const a=g.whatsapp("Hi! I'm interested in your services.");return e.jsxs("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:`whatsapp-float ${t?"show":""}`,"aria-label":"Chat on WhatsApp",children:[e.jsx("span",{className:"tooltip",children:"Chat with us"}),e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fa-brands fa-whatsapp"})})]})},Jt="",es=Jt.replace(/\/+$/,""),je={API_BASE_URL:es,API_SUB_PATH:"/api",get ASSETS_URL(){return this.API_BASE_URL}},Me=Ue.create({baseURL:`${je.API_BASE_URL}${je.API_SUB_PATH}`,withCredentials:!0,timeout:15e3}),ts="Hi! Ask anything about your project — I'll take a few details and the team will come straight back to you.",ss=()=>{const[t,s]=m.useState(!1),[a,n]=m.useState("asking"),[r,i]=m.useState(""),[l,o]=m.useState(""),[c,d]=m.useState(!1),[h,p]=m.useState(""),[f,u]=m.useState({name:"",email:"",phone:"",message:""}),b=m.useRef(null),x=m.useRef(null);m.useEffect(()=>()=>clearTimeout(b.current),[]),m.useEffect(()=>{if(!t)return;const y=w=>w.key==="Escape"&&s(!1);return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[t]),m.useEffect(()=>{const y=x.current;y&&(y.scrollTop=y.scrollHeight)},[a,r]);const T=y=>{y.preventDefault();const w=l.trim();w&&(i(w),u(De=>({...De,message:w})),o(""),n("form"))},I=()=>{n("asking"),i(""),u({name:"",email:"",phone:"",message:""}),p("")},W=async y=>{if(y.preventDefault(),p(""),!f.name.trim())return p("Please tell us your name.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))return p("Please enter a valid email address.");if(!f.message.trim())return p("Please tell us what you need.");d(!0);try{const{data:w}=await Me.post("/contact",{name:f.name.trim(),email:f.email.trim(),phone:f.phone.trim(),subject:"Website chat enquiry",message:f.message.trim()});if(w&&w.success===!1)throw new Error(w.message);n("done"),b.current=setTimeout(()=>{s(!1),b.current=setTimeout(I,400)},3e3)}catch{p(`Couldn't send that. Please WhatsApp or call ${g.phone.display}.`)}finally{d(!1)}},R=y=>w=>u({...f,[y]:w.target.value}),Oe=e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`cw-bubble ${t?"is-open":""}`,onClick:()=>s(y=>!y),"aria-label":t?"Close chat":"Chat with us","aria-expanded":t,children:t?e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6 6l12 12M18 6L6 18"})}):e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"})})}),e.jsxs("div",{className:`cw-panel ${t?"is-open":""}`,role:"dialog","aria-label":"Chat with Techland",children:[e.jsxs("header",{className:"cw-head",children:[e.jsx("span",{className:"cw-avatar","aria-hidden":"true",children:"T"}),e.jsxs("div",{className:"cw-who",children:[e.jsx("strong",{children:g.shortName}),e.jsx("span",{className:"cw-status",children:"Replies within 2 hours"})]}),e.jsx("button",{type:"button",className:"cw-x",onClick:()=>s(!1),"aria-label":"Close chat",children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6 6l12 12M18 6L6 18"})})})]}),e.jsxs("div",{className:"cw-body",ref:x,children:[e.jsx("div",{className:"cw-msg cw-msg--bot",children:ts}),r&&e.jsx("div",{className:"cw-msg cw-msg--me",children:r}),a==="form"&&e.jsx("div",{className:"cw-msg cw-msg--bot",children:"Got it. Where should the team reach you?"}),a==="done"&&e.jsx("div",{className:"cw-msg cw-msg--bot cw-msg--ok",children:g.forms.success})]}),a==="asking"&&e.jsxs("form",{className:"cw-foot",onSubmit:T,children:[e.jsx("input",{value:l,onChange:y=>o(y.target.value),placeholder:"Type your question…","aria-label":"Your question",autoComplete:"off"}),e.jsx("button",{type:"submit","aria-label":"Send",disabled:!l.trim(),children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M4 12h14M13 6l6 6-6 6"})})})]}),a==="form"&&e.jsxs("form",{className:"cw-details",onSubmit:W,noValidate:!0,children:[e.jsxs("label",{className:"cw-field",children:[e.jsx("span",{children:"Name"}),e.jsx("input",{value:f.name,onChange:R("name"),placeholder:"Your name","aria-label":"Your name"})]}),e.jsxs("label",{className:"cw-field",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:f.email,onChange:R("email"),placeholder:"you@company.com","aria-label":"Email"})]}),e.jsxs("label",{className:"cw-field",children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{value:f.phone,onChange:R("phone"),placeholder:"Optional","aria-label":"Phone",inputMode:"tel"})]}),e.jsxs("label",{className:"cw-field",children:[e.jsx("span",{children:"Message"}),e.jsx("textarea",{value:f.message,onChange:R("message"),rows:3,placeholder:"What do you need?","aria-label":"Message"})]}),h&&e.jsx("p",{className:"cw-err",children:h}),e.jsxs("div",{className:"cw-actions",children:[e.jsx("button",{type:"button",className:"cw-back",onClick:I,disabled:c,children:"Back"}),e.jsx("button",{type:"submit",className:"cw-send",disabled:c,children:c?"Sending…":"Send to the team"})]})]})]})]});return typeof document>"u"?null:we.createPortal(Oe,document.body)},as=({children:t})=>{const{pathname:s}=B(),[a,n]=m.useState(t),[r,i]=m.useState("in"),l=m.useRef(s);return m.useEffect(()=>{if(s===l.current){n(t);return}if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){l.current=s,n(t);return}i("out");const o=setTimeout(()=>{l.current=s,n(t),i("in")},260);return()=>clearTimeout(o)},[s,t]),e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`pt-bar ${r==="out"?"is-running":""}`,"aria-hidden":"true",children:e.jsx("i",{})}),e.jsx("div",{className:`pt-stage pt-${r}`,children:a})]})};function ns({setOpenContactModal:t}){return e.jsxs("div",{className:"app",children:[e.jsx(Wt,{setOpenContactModal:t}),e.jsxs("main",{children:[e.jsx(Zt,{}),e.jsx(as,{children:e.jsx(Le,{context:{setOpenContactModal:t}})})]}),e.jsx(Yt,{}),e.jsx(Kt,{}),e.jsx(Qt,{}),e.jsx(ss,{})]})}const rs=()=>e.jsxs("div",{className:"pl",role:"status","aria-live":"polite","aria-label":"Loading",children:[e.jsxs("div",{className:"pl-bg","aria-hidden":"true",children:[e.jsx("span",{className:"pl-orb pl-orb--a"}),e.jsx("span",{className:"pl-orb pl-orb--b"}),e.jsx("span",{className:"pl-grid"})]}),e.jsxs("div",{className:"pl-stage",children:[e.jsx("div",{className:"pl-blocks","aria-hidden":"true",children:Array.from({length:9},(t,s)=>e.jsx("span",{className:"pl-block",style:{"--i":s}},s))}),e.jsxs("div",{className:"pl-word","aria-hidden":"true",children:[e.jsx("span",{className:"pl-word-main",children:"TECHLAND"}),e.jsx("span",{className:"pl-word-sub",children:"IT Solutions"})]}),e.jsx("div",{className:"pl-bar","aria-hidden":"true",children:e.jsx("span",{className:"pl-bar-fill"})})]}),e.jsx("span",{className:"pl-sr",children:"Loading…"})]});function is(){const{pathname:t}=B();return m.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[t]),m.useEffect(()=>{window.scrollTo(0,0)},[]),null}const os=({openModal:t,setOpenModal:s})=>{const[a,n]=m.useState(!1),r=B(),[i,l]=m.useState(!1),[o,c]=m.useState({name:"",email:"",phone:"",subject:"",message:""}),[d,h]=m.useState({});m.useEffect(()=>{t&&(n(!0),s&&s(!1))},[t,s]),m.useEffect(()=>{if(r.pathname==="/"){const x=setTimeout(()=>n(!0),6e3);return()=>clearTimeout(x)}},[r.pathname]),m.useEffect(()=>(a&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[a]);const p=()=>{n(!1),setTimeout(()=>{c({name:"",email:"",phone:"",subject:"",message:""}),h({})},300)},f=()=>{const x={};return o.name.trim()||(x.name="Required"),o.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(x.email="Invalid email"):x.email="Required",o.phone&&!/^\d{10,15}$/.test(o.phone.replace(/\D/g,""))&&(x.phone="10–15 digits"),o.message||(x.message="Required"),h(x),Object.keys(x).length===0},u=x=>{const{name:T,value:I}=x.target;c({...o,[T]:I}),d[T]&&h({...d,[T]:""})},b=async x=>{if(x&&x.preventDefault(),!f()){V.error("Please fill all required fields correctly.");return}l(!0);try{await Me.post("/contact",{...o,subject:o.subject||"Website Inquiry (Modal)"}),V.success(g.forms.success),c({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(p,1500)}catch{V.error("Failed to send message. Please try again.")}finally{l(!1)}};return a?e.jsx("div",{className:"cm-overlay",onClick:p,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"cm-modal",onClick:x=>x.stopPropagation(),children:[e.jsx("button",{className:"cm-close",onClick:p,"aria-label":"Close",children:e.jsx(Ie,{size:18,strokeWidth:2})}),e.jsxs("aside",{className:"cm-aside",children:[e.jsxs("div",{className:"cm-aside-bg","aria-hidden":"true",children:[e.jsx("div",{className:"cm-aside-mesh"}),e.jsx("div",{className:"cm-aside-grid"}),e.jsx("div",{className:"cm-aside-orb cm-aside-orb--a"}),e.jsx("div",{className:"cm-aside-orb cm-aside-orb--b"})]}),e.jsxs("div",{className:"cm-aside-top",children:[e.jsxs("div",{className:"cm-eyebrow",children:[e.jsx(qt,{size:12,className:"cm-eyebrow-spark"}),e.jsx("span",{children:"Let’s build together"})]}),e.jsxs("h2",{className:"cm-title",children:["Let’s start"," ",e.jsx("span",{className:"cm-title-hl",children:"something great"}),e.jsx("span",{className:"cm-title-dot",children:"."})]}),e.jsx("p",{className:"cm-lede",children:"Tell us about your project. We’ll get back to you within one business day with scope, timeline and a clear next step."})]}),e.jsxs("ul",{className:"cm-info",children:[e.jsxs("li",{children:[e.jsx("span",{className:"cm-info-ico",children:e.jsx($t,{size:14,strokeWidth:1.7})}),e.jsxs("div",{children:[e.jsx("span",{className:"cm-info-l",children:"Email"}),e.jsx("a",{className:"cm-info-v",href:g.email.href,children:g.email.primary})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"cm-info-ico",children:e.jsx(se,{size:14,strokeWidth:1.7})}),e.jsxs("div",{children:[e.jsx("span",{className:"cm-info-l",children:"Call"}),e.jsx("a",{className:"cm-info-v",href:g.phone.href,children:g.phone.display})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"cm-info-ico",children:e.jsx(Lt,{size:14,strokeWidth:1.7})}),e.jsxs("div",{children:[e.jsx("span",{className:"cm-info-l",children:"Studio"}),e.jsx("a",{className:"cm-info-v cm-info-v--addr",href:g.maps.place,target:"_blank",rel:"noopener noreferrer",children:g.address.full})]})]})]}),e.jsxs("p",{className:"cm-foot-meta",children:[e.jsx("span",{children:"One studio"}),e.jsx("span",{"aria-hidden":"true",children:"·"}),e.jsx("span",{children:"Global by default"})]})]}),e.jsxs("section",{className:"cm-form-wrap",children:[e.jsxs("header",{className:"cm-form-head",children:[e.jsx("h3",{className:"cm-form-title",children:"Request a quote"}),e.jsx("p",{className:"cm-form-sub",children:"A few quick details and we’ll be in touch."})]}),e.jsxs("form",{onSubmit:b,className:"cm-form",noValidate:!0,children:[e.jsxs("div",{className:"cm-grid",children:[e.jsx(z,{label:"Your name",required:!0,error:d.name,input:e.jsx("input",{type:"text",name:"name",value:o.name,onChange:u,placeholder:"Jane Doe",autoComplete:"name"})}),e.jsx(z,{label:"Email",required:!0,error:d.email,input:e.jsx("input",{type:"email",name:"email",value:o.email,onChange:u,placeholder:"jane@company.com",autoComplete:"email"})}),e.jsx(z,{label:"Subject",error:null,input:e.jsx("input",{type:"text",name:"subject",value:o.subject,onChange:u,placeholder:"What are we building?"})}),e.jsx(z,{label:"Phone",error:d.phone,phone:!0,input:e.jsxs("div",{className:"cm-phone",children:[e.jsxs("span",{className:"cm-phone-cc",children:[e.jsx("span",{className:"cm-phone-flag","aria-hidden":"true",children:"🇮🇳"}),e.jsx("span",{children:"+91"})]}),e.jsx("input",{type:"tel",name:"phone",value:o.phone,onChange:u,placeholder:"98765 43210",maxLength:10,autoComplete:"tel"})]})}),e.jsx(z,{label:"Project details",required:!0,error:d.message,full:!0,input:e.jsx("textarea",{name:"message",value:o.message,onChange:u,placeholder:"A few lines about your goals, timeline, and any constraints we should know about…",rows:4})})]}),e.jsxs("div",{className:"cm-form-foot",children:[e.jsx("p",{className:"cm-form-foot-meta",children:e.jsx("span",{children:"By submitting, you agree to be contacted by Techland."})}),e.jsxs("button",{type:"submit",className:"cm-submit",disabled:i,children:[i?"Sending…":"Get a quote",e.jsx(Ct,{size:16,strokeWidth:1.8})]})]})]})]})]})}):null},z=({label:t,required:s,error:a,input:n,full:r,phone:i})=>e.jsxs("label",{className:["cm-field",r?"is-full":"",i?"is-phone":"",a?"has-error":""].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"cm-field-wrap",children:[n,e.jsxs("span",{className:"cm-field-label",children:[t,s&&e.jsx("span",{className:"cm-field-req","aria-hidden":"true",children:"*"})]}),e.jsx("span",{className:"cm-field-bar","aria-hidden":"true"})]}),a&&e.jsx("span",{className:"cm-field-err",children:a})]}),ls=m.lazy(()=>A(()=>import("./HomeLayout-n3yLC3yI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),cs=m.lazy(()=>A(()=>import("./About-D5LjXFKz.js"),__vite__mapDeps([11,1,2,3,9,5,12]))),ds=m.lazy(()=>A(()=>import("./Services-BkcDheDK.js"),__vite__mapDeps([13,1,2,3,14,9,5,15]))),ms=m.lazy(()=>A(()=>import("./ServiceDetails-w5RBQ02R.js"),__vite__mapDeps([16,1,2,14,4,5,6,9,17]))),us=m.lazy(()=>A(()=>import("./Portfolio-fo9VtxpL.js"),__vite__mapDeps([18,1,2,3,8,9,5]))),ps=m.lazy(()=>A(()=>import("./ProjectDetail-DqKqB-j5.js"),__vite__mapDeps([19,1,2,3,8,9,5]))),hs=m.lazy(()=>A(()=>import("./Blogs-D-zrtOB3.js"),__vite__mapDeps([20,1,2,3,21,9,5,22]))),fs=m.lazy(()=>A(()=>import("./BlogDetails-Br-rIjJW.js"),__vite__mapDeps([23,1,2,21,9,5]))),gs=m.lazy(()=>A(()=>import("./Contact-Bm0sX-TV.js"),__vite__mapDeps([24,1,2,3,5,9,25]))),xs=m.lazy(()=>A(()=>import("./OurTeam-DF0-nVV5.js"),__vite__mapDeps([26,1,2,3,9,5,27])));function bs(){const[t,s]=m.useState(!1);return m.useEffect(()=>{window.scrollTo(0,0),He.init({duration:800,once:!0,easing:"ease-out",offset:50,disable:"mobile"})},[]),e.jsxs("div",{children:[e.jsx(m.Suspense,{fallback:e.jsx(rs,{}),children:e.jsx(ze,{children:e.jsxs(C,{path:"/",element:e.jsx(ns,{setOpenContactModal:s}),children:[e.jsx(C,{index:!0,element:e.jsx(ls,{})}),e.jsx(C,{path:"about",element:e.jsx(cs,{})}),e.jsx(C,{path:"services",element:e.jsx(ds,{})}),e.jsx(C,{path:"services/:id",element:e.jsx(ms,{})}),e.jsx(C,{path:"portfolio",element:e.jsx(us,{})}),e.jsx(C,{path:"portfolio/:category/:projectId",element:e.jsx(ps,{})}),e.jsx(C,{path:"blogs",element:e.jsx(hs,{})}),e.jsx(C,{path:"blogs/:id",element:e.jsx(fs,{})}),e.jsx(C,{path:"contact",element:e.jsx(gs,{})}),e.jsx(C,{path:"our-team",element:e.jsx(xs,{})})]})})}),e.jsx(is,{}),e.jsx(os,{openModal:t,setOpenModal:s}),e.jsx(qe,{position:"bottom-right",autoClose:3e3})]})}Z.createRoot(document.getElementById("root")).render(e.jsx(E.StrictMode,{children:e.jsx(Se,{children:e.jsx(Re,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(bs,{})})})}));(()=>{const t=document.getElementById("boot");if(!t)return;const s=700,a=performance.now(),n=Math.max(0,s-a),r=()=>{t.classList.add("is-out"),setTimeout(()=>t.remove(),500)};setTimeout(()=>requestAnimationFrame(r),n)})();export{pe as A,Ns as H,xe as L,qt as S,ve as U,Ct as a,je as b,j as c,Me as d,g as e};
