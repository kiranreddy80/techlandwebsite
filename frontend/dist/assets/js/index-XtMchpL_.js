const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HomeLayout-sRocR57S.js","assets/js/icons-vendor-DWk9LYok.js","assets/js/react-vendor-iesUOuYh.js","assets/js/seoConfig-DT6veDMX.js","assets/js/HomeContactUs-ChwapF3q.js","assets/js/utils-D_wzFjLH.js","assets/css/HomeContactUs-DDYY3nRh.css","assets/js/swiper-vendor-ubC_Fhtt.js","assets/js/projectsData-D8oepnKn.js","assets/js/animation-vendor-lhfjd4vI.js","assets/css/HomeLayout-Cx8a8Q3w.css","assets/js/About-DZMEwNH7.js","assets/css/About-CXRI853Y.css","assets/js/Services-BfHbmu7q.js","assets/js/servicesData-jbPba5FO.js","assets/css/Services-C-Qqvouu.css","assets/js/ServiceDetails-BW0kpnFy.js","assets/css/ServiceDetails-fWqNz1mS.css","assets/js/Portfolio-Bkpk-ZJN.js","assets/js/ProjectDetail-JrQu2zJj.js","assets/js/Blogs-BSnnBWCb.js","assets/js/blogData-nyk7lrJy.js","assets/css/Blogs-CCtv_z_w.css","assets/js/BlogDetails-BRB13fho.js","assets/js/Contact-B0p7QLrc.js","assets/css/Contact-B1Lz-xee.css","assets/js/OurTeam-CupRtMus.js","assets/css/OurTeam-BTZ6sNOB.css"])))=>i.map(i=>d[i]);
var Ce=Object.defineProperty;var Ee=(t,s,a)=>s in t?Ce(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var A=(t,s,a)=>Ee(t,typeof s!="symbol"?s+"":s,a);import{j as e}from"./icons-vendor-DWk9LYok.js";import{a as Se,g as J,r as u,R as C,u as U,L as b,N as j,O as Ie,b as Oe,d as w,B as Me}from"./react-vendor-iesUOuYh.js";import{A as De}from"./animation-vendor-lhfjd4vI.js";import{a as $e,y as q,L as Pe}from"./utils-D_wzFjLH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var G={},te=Se;G.createRoot=te.createRoot,G.hydrateRoot=te.hydrateRoot;var Le=typeof Element<"u",ze=typeof Map=="function",Re=typeof Set=="function",He=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function R(t,s){if(t===s)return!0;if(t&&s&&typeof t=="object"&&typeof s=="object"){if(t.constructor!==s.constructor)return!1;var a,r,n;if(Array.isArray(t)){if(a=t.length,a!=s.length)return!1;for(r=a;r--!==0;)if(!R(t[r],s[r]))return!1;return!0}var i;if(ze&&t instanceof Map&&s instanceof Map){if(t.size!==s.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!s.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!R(r.value[1],s.get(r.value[0])))return!1;return!0}if(Re&&t instanceof Set&&s instanceof Set){if(t.size!==s.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!s.has(r.value[0]))return!1;return!0}if(He&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(s)){if(a=t.length,a!=s.length)return!1;for(r=a;r--!==0;)if(t[r]!==s[r])return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof s.valueOf=="function")return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof s.toString=="function")return t.toString()===s.toString();if(n=Object.keys(t),a=n.length,a!==Object.keys(s).length)return!1;for(r=a;r--!==0;)if(!Object.prototype.hasOwnProperty.call(s,n[r]))return!1;if(Le&&t instanceof Element)return!1;for(r=a;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!R(t[n[r]],s[n[r]]))return!1;return!0}return t!==t&&s!==s}var Ue=function(s,a){try{return R(s,a)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const qe=J(Ue);var Fe=function(t,s,a,r,n,i,l,o){if(!t){var c;if(s===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[a,r,n,i,l,o],h=0;c=new Error(s.replace(/%s/g,function(){return d[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Be=Fe;const se=J(Be);var We=function(s,a,r,n){var i=r?r.call(n,s,a):void 0;if(i!==void 0)return!!i;if(s===a)return!0;if(typeof s!="object"||!s||typeof a!="object"||!a)return!1;var l=Object.keys(s),o=Object.keys(a);if(l.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(a),d=0;d<l.length;d++){var h=l[d];if(!c(h))return!1;var p=s[h],x=a[h];if(i=r?r.call(n,p,x,h):void 0,i===!1||i===void 0&&p!==x)return!1}return!0};const Ve=J(We);var be=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(be||{}),F={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ae=Object.values(be),ee={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ge=Object.entries(ee).reduce((t,[s,a])=>(t[a]=s,t),{}),T="data-rh",I={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},O=(t,s)=>{for(let a=t.length-1;a>=0;a-=1){const r=t[a];if(Object.prototype.hasOwnProperty.call(r,s))return r[s]}return null},Ye=t=>{let s=O(t,"title");const a=O(t,I.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),a&&s)return a.replace(/%s/g,()=>s);const r=O(t,I.DEFAULT_TITLE);return s||r||void 0},Ke=t=>O(t,I.ON_CHANGE_CLIENT_STATE)||(()=>{}),B=(t,s)=>s.filter(a=>typeof a[t]<"u").map(a=>a[t]).reduce((a,r)=>({...a,...r}),{}),Xe=(t,s)=>s.filter(a=>typeof a.base<"u").map(a=>a.base).reverse().reduce((a,r)=>{if(!a.length){const n=Object.keys(r);for(let i=0;i<n.length;i+=1){const o=n[i].toLowerCase();if(t.indexOf(o)!==-1&&r[o])return a.concat(r)}}return a},[]),Qe=t=>console&&typeof console.warn=="function"&&console.warn(t),M=(t,s,a)=>{const r={};return a.filter(n=>Array.isArray(n[t])?!0:(typeof n[t]<"u"&&Qe(`Helmet: ${t} should be of type "Array". Instead found type "${typeof n[t]}"`),!1)).map(n=>n[t]).reverse().reduce((n,i)=>{const l={};i.filter(c=>{let d;const h=Object.keys(c);for(let x=0;x<h.length;x+=1){const m=h[x],y=m.toLowerCase();s.indexOf(y)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(y==="rel"&&c[y].toLowerCase()==="stylesheet")&&(d=y),s.indexOf(m)!==-1&&(m==="innerHTML"||m==="cssText"||m==="itemprop")&&(d=m)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return r[d]||(r[d]={}),l[d]||(l[d]={}),r[d][p]?!1:(l[d][p]=!0,!0)}).reverse().forEach(c=>n.push(c));const o=Object.keys(l);for(let c=0;c<o.length;c+=1){const d=o[c],h={...r[d],...l[d]};r[d]=h}return n},[]).reverse()},Ze=(t,s)=>{if(Array.isArray(t)&&t.length){for(let a=0;a<t.length;a+=1)if(t[a][s])return!0}return!1},Je=t=>({baseTag:Xe(["href"],t),bodyAttributes:B("bodyAttributes",t),defer:O(t,I.DEFER),encode:O(t,I.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:B("htmlAttributes",t),linkTags:M("link",["rel","href"],t),metaTags:M("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:M("noscript",["innerHTML"],t),onChangeClientState:Ke(t),scriptTags:M("script",["src","innerHTML"],t),styleTags:M("style",["cssText"],t),title:Ye(t),titleAttributes:B("titleAttributes",t),prioritizeSeoTags:Ze(t,I.PRIORITIZE_SEO_TAGS)}),ve=t=>Array.isArray(t)?t.join(""):t,et=(t,s)=>{const a=Object.keys(t);for(let r=0;r<a.length;r+=1)if(s[a[r]]&&s[a[r]].includes(t[a[r]]))return!0;return!1},W=(t,s)=>Array.isArray(t)?t.reduce((a,r)=>(et(r,s)?a.priority.push(r):a.default.push(r),a),{priority:[],default:[]}):{default:t,priority:[]},re=(t,s)=>({...t,[s]:void 0}),tt=["noscript","script","style"],Y=(t,s=!0)=>s===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ye=t=>Object.keys(t).reduce((s,a)=>{const r=typeof t[a]<"u"?`${a}="${t[a]}"`:`${a}`;return s?`${s} ${r}`:r},""),st=(t,s,a,r)=>{const n=ye(a),i=ve(s);return n?`<${t} ${T}="true" ${n}>${Y(i,r)}</${t}>`:`<${t} ${T}="true">${Y(i,r)}</${t}>`},at=(t,s,a=!0)=>s.reduce((r,n)=>{const i=n,l=Object.keys(i).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,h)=>{const p=typeof i[h]>"u"?h:`${h}="${Y(i[h],a)}"`;return d?`${d} ${p}`:p},""),o=i.innerHTML||i.cssText||"",c=tt.indexOf(t)===-1;return`${r}<${t} ${T}="true" ${l}${c?"/>":`>${o}</${t}>`}`},""),je=(t,s={})=>Object.keys(t).reduce((a,r)=>{const n=ee[r];return a[n||r]=t[r],a},s),rt=(t,s,a)=>{const r={key:s,[T]:!0},n=je(a,r);return[C.createElement("title",n,s)]},H=(t,s)=>s.map((a,r)=>{const n={key:r,[T]:!0};return Object.keys(a).forEach(i=>{const o=ee[i]||i;if(o==="innerHTML"||o==="cssText"){const c=a.innerHTML||a.cssText;n.dangerouslySetInnerHTML={__html:c}}else n[o]=a[i]}),C.createElement(t,n)}),k=(t,s,a=!0)=>{switch(t){case"title":return{toComponent:()=>rt(t,s.title,s.titleAttributes),toString:()=>st(t,s.title,s.titleAttributes,a)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>je(s),toString:()=>ye(s)};default:return{toComponent:()=>H(t,s),toString:()=>at(t,s,a)}}},nt=({metaTags:t,linkTags:s,scriptTags:a,encode:r})=>{const n=W(t,F.meta),i=W(s,F.link),l=W(a,F.script);return{priorityMethods:{toComponent:()=>[...H("meta",n.priority),...H("link",i.priority),...H("script",l.priority)],toString:()=>`${k("meta",n.priority,r)} ${k("link",i.priority,r)} ${k("script",l.priority,r)}`},metaTags:n.default,linkTags:i.default,scriptTags:l.default}},it=t=>{const{baseTag:s,bodyAttributes:a,encode:r=!0,htmlAttributes:n,noscriptTags:i,styleTags:l,title:o="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:h,metaTags:p,scriptTags:x}=t,m={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:m,linkTags:h,metaTags:p,scriptTags:x}=nt(t)),{priority:m,base:k("base",s,r),bodyAttributes:k("bodyAttributes",a,r),htmlAttributes:k("htmlAttributes",n,r),link:k("link",h,r),meta:k("meta",p,r),noscript:k("noscript",i,r),script:k("script",x,r),style:k("style",l,r),title:k("title",{title:o,titleAttributes:c},r)}},K=it,L=[],ke=!!(typeof window<"u"&&window.document&&window.document.createElement),X=class{constructor(t,s){A(this,"instances",[]);A(this,"canUseDOM",ke);A(this,"context");A(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?L:this.instances,add:t=>{(this.canUseDOM?L:this.instances).push(t)},remove:t=>{const s=(this.canUseDOM?L:this.instances).indexOf(t);(this.canUseDOM?L:this.instances).splice(s,1)}}});this.context=t,this.canUseDOM=s||!1,s||(t.helmet=K({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ot={},we=C.createContext(ot),E,Te=(E=class extends u.Component{constructor(a){super(a);A(this,"helmetData");this.helmetData=new X(this.props.context||{},E.canUseDOM)}render(){return C.createElement(we.Provider,{value:this.helmetData.value},this.props.children)}},A(E,"canUseDOM",ke),E),S=(t,s)=>{const a=document.head||document.querySelector("head"),r=a.querySelectorAll(`${t}[${T}]`),n=[].slice.call(r),i=[];let l;return s&&s.length&&s.forEach(o=>{const c=document.createElement(t);for(const d in o)if(Object.prototype.hasOwnProperty.call(o,d))if(d==="innerHTML")c.innerHTML=o.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=o.cssText:c.appendChild(document.createTextNode(o.cssText));else{const h=d,p=typeof o[h]>"u"?"":o[h];c.setAttribute(d,p)}c.setAttribute(T,"true"),n.some((d,h)=>(l=h,c.isEqualNode(d)))?n.splice(l,1):i.push(c)}),n.forEach(o=>{var c;return(c=o.parentNode)==null?void 0:c.removeChild(o)}),i.forEach(o=>a.appendChild(o)),{oldTags:n,newTags:i}},Q=(t,s)=>{const a=document.getElementsByTagName(t)[0];if(!a)return;const r=a.getAttribute(T),n=r?r.split(","):[],i=[...n],l=Object.keys(s);for(const o of l){const c=s[o]||"";a.getAttribute(o)!==c&&a.setAttribute(o,c),n.indexOf(o)===-1&&n.push(o);const d=i.indexOf(o);d!==-1&&i.splice(d,1)}for(let o=i.length-1;o>=0;o-=1)a.removeAttribute(i[o]);n.length===i.length?a.removeAttribute(T):a.getAttribute(T)!==l.join(",")&&a.setAttribute(T,l.join(","))},lt=(t,s)=>{typeof t<"u"&&document.title!==t&&(document.title=ve(t)),Q("title",s)},ne=(t,s)=>{const{baseTag:a,bodyAttributes:r,htmlAttributes:n,linkTags:i,metaTags:l,noscriptTags:o,onChangeClientState:c,scriptTags:d,styleTags:h,title:p,titleAttributes:x}=t;Q("body",r),Q("html",n),lt(p,x);const m={baseTag:S("base",a),linkTags:S("link",i),metaTags:S("meta",l),noscriptTags:S("noscript",o),scriptTags:S("script",d),styleTags:S("style",h)},y={},g={};Object.keys(m).forEach(_=>{const{newTags:P,oldTags:Ae}=m[_];P.length&&(y[_]=P),Ae.length&&(g[_]=m[_].oldTags)}),s&&s(),c(t,y,g)},D=null,ct=t=>{D&&cancelAnimationFrame(D),t.defer?D=requestAnimationFrame(()=>{ne(t,()=>{D=null})}):(ne(t),D=null)},dt=ct,ie=class extends u.Component{constructor(){super(...arguments);A(this,"rendered",!1)}shouldComponentUpdate(s){return!Ve(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:a}=this.props.context;let r=null;const n=Je(s.get().map(i=>{const l={...i.props};return delete l.context,l}));Te.canUseDOM?dt(n):K&&(r=K(n)),a(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},V,xs=(V=class extends u.Component{shouldComponentUpdate(t){return!qe(re(this.props,"helmetData"),re(t,"helmetData"))}mapNestedChildrenToProps(t,s){if(!s)return null;switch(t.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,s,a,r){return{...s,[t.type]:[...s[t.type]||[],{...a,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,s,a,r){switch(t.type){case"title":return{...s,[t.type]:r,titleAttributes:{...a}};case"body":return{...s,bodyAttributes:{...a}};case"html":return{...s,htmlAttributes:{...a}};default:return{...s,[t.type]:{...a}}}}mapArrayTypeChildrenToProps(t,s){let a={...s};return Object.keys(t).forEach(r=>{a={...a,[r]:t[r]}}),a}warnOnInvalidChildren(t,s){return se(ae.some(a=>t.type===a),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ae.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),se(!s||typeof s=="string"||Array.isArray(s)&&!s.some(a=>typeof a!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,s){let a={};return C.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:n,...i}=r.props,l=Object.keys(i).reduce((c,d)=>(c[Ge[d]||d]=i[d],c),{});let{type:o}=r;switch(typeof o=="symbol"?o=o.toString():this.warnOnInvalidChildren(r,n),o){case"Symbol(react.fragment)":s=this.mapChildrenToProps(n,s);break;case"link":case"meta":case"noscript":case"script":case"style":a=this.flattenArrayTypeChildren(r,a,l,n);break;default:s=this.mapObjectTypeChildren(r,s,l,n);break}}),this.mapArrayTypeChildrenToProps(a,s)}render(){const{children:t,...s}=this.props;let a={...s},{helmetData:r}=s;if(t&&(a=this.mapChildrenToProps(t,a)),r&&!(r instanceof X)){const n=r;r=new X(n.context,!0),delete a.helmetData}return r?C.createElement(ie,{...a,context:r.value}):C.createElement(we.Consumer,null,n=>C.createElement(ie,{...a,context:n}))}},A(V,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),V);const mt="modulepreload",pt=function(t){return"/"+t},oe={},N=function(s,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.allSettled(a.map(c=>{if(c=pt(c),c in oe)return;oe[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":mt,d||(p.as="script"),p.crossOrigin="",p.href=c,o&&p.setAttribute("nonce",o),document.head.appendChild(p),d)return new Promise((x,m)=>{p.addEventListener("load",x),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return n.then(l=>{for(const o of l||[])o.status==="rejected"&&i(o.reason);return s().catch(i)})};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=(...t)=>t.filter((s,a,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,r)=>r?r.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=t=>{const s=ht(t);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ft={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=u.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:n="",children:i,iconNode:l,...o},c)=>u.createElement("svg",{ref:c,...ft,width:s,height:s,stroke:t,strokeWidth:r?Number(a)*24/Number(s):a,className:Ne("lucide",n),...!i&&!gt(o)&&{"aria-hidden":"true"},...o},[...l.map(([d,h])=>u.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(t,s)=>{const a=u.forwardRef(({className:r,...n},i)=>u.createElement(xt,{ref:i,iconNode:s,className:Ne(`lucide-${ut(le(t))}`,`lucide-${t}`,r),...n}));return a.displayName=le(t),a};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ce=v("arrow-right",bt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],yt=v("arrow-up-right",vt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],de=v("book-open",jt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],wt=v("chevron-down",kt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],me=v("house",Tt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],pe=v("info",Nt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ue=v("layers",_t);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],he=v("layout-grid",At);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Et=v("mail",Ct);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],It=v("map-pin",St);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mt=v("menu",Ot);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Z=v("phone",Dt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Pt=v("sparkles",$t);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],fe=v("users",Lt);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_e=v("x",zt),Rt=({setOpenContactModal:t})=>{const[s,a]=u.useState(!1),[r,n]=u.useState(null),[i,l]=u.useState(!1),o=U(),c=m=>{m.preventDefault(),t&&t(!0)};u.useEffect(()=>{a(!1),n(null)},[o.pathname]),u.useEffect(()=>{const m=()=>l(window.scrollY>12);return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]);const d=()=>a(m=>!m),h=(m,y)=>{y&&(y.preventDefault(),y.stopPropagation()),n(r===m?null:m)},p=()=>{a(!1),n(null)},x=o.pathname.startsWith("/services");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`th-menu-wrapper onepage-nav ${s?"th-body-visible menu-open":""}`,children:e.jsxs("div",{className:"th-menu-area text-center",children:[e.jsx("button",{type:"button",className:"th-menu-toggle",onClick:d,"aria-label":"Close menu",children:e.jsx(_e,{size:22})}),e.jsx("div",{className:"mobile-logo",children:e.jsx(b,{to:"/",onClick:p,children:e.jsx("img",{src:"/assets/media/logo.png",alt:"Techland",loading:"lazy"})})}),e.jsxs("div",{className:"th-mobile-menu allow-natural-scroll",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(j,{to:"/",onClick:p,children:[e.jsx(me,{size:15,className:"ck-nav-ico"})," Home"]})}),e.jsx("li",{children:e.jsxs(j,{to:"/about",onClick:p,children:[e.jsx(pe,{size:15,className:"ck-nav-ico"})," About Us"]})}),e.jsxs("li",{className:`menu-item-has-children ${r==="services"?"open":""}`,children:[e.jsxs(b,{to:"#",onClick:m=>h("services",m),className:x?"active":"",children:[e.jsx(ue,{size:15,className:"ck-nav-ico"})," Our Services"]}),e.jsxs("ul",{className:`sub-menu ${r==="services"?"open":""}`,children:[e.jsx("li",{children:e.jsx(b,{to:"/services/mobile-app-development",onClick:p,children:"Mobile App Development"})}),e.jsx("li",{children:e.jsx(b,{to:"/services/web-development",onClick:p,children:"Web Development"})}),e.jsx("li",{children:e.jsx(b,{to:"/services/digital-marketing",onClick:p,children:"Digital Marketing"})}),e.jsx("li",{children:e.jsx(b,{to:"/services/custom-software-development",onClick:p,children:"Custom Software Development"})}),e.jsx("li",{children:e.jsx(b,{to:"/services/ui-ux-design",onClick:p,children:"UI/UX Design"})})]})]}),e.jsx("li",{children:e.jsxs(j,{to:"/portfolio",onClick:p,children:[e.jsx(he,{size:15,className:"ck-nav-ico"})," Portfolio"]})}),e.jsx("li",{children:e.jsxs(j,{to:"/our-team",onClick:p,children:[e.jsx(fe,{size:15,className:"ck-nav-ico"})," Our Team"]})}),e.jsx("li",{children:e.jsxs(j,{to:"/blogs",onClick:p,children:[e.jsx(de,{size:15,className:"ck-nav-ico"})," Blog"]})}),e.jsx("li",{children:e.jsxs(j,{to:"/contact",onClick:p,children:[e.jsx(Z,{size:15,className:"ck-nav-ico"})," Contact us"]})})]}),e.jsx("div",{className:"ck-mobile-cta-wrap",children:e.jsxs("button",{type:"button",onClick:m=>{p(),c(m)},className:"ck-cta-btn",children:["Free Quote ",e.jsx(ce,{size:15})]})})]})]})}),e.jsx("nav",{className:`ck-nav ${i?"ck-nav--scrolled":""}`,children:e.jsxs("div",{className:"ck-nav-inner",children:[e.jsx(b,{to:"/",className:"ck-logo","aria-label":"Techland home",children:e.jsx("img",{src:"/assets/media/logo.png",alt:"Techland",loading:"eager"})}),e.jsxs("div",{className:"ck-nav-links",children:[e.jsxs(j,{to:"/",end:!0,className:({isActive:m})=>`ck-nav-link ${m?"is-active":""}`,children:[e.jsx(me,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Home"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(j,{to:"/about",className:({isActive:m})=>`ck-nav-link ${m?"is-active":""}`,children:[e.jsx(pe,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"About"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs("div",{className:"ck-nav-dd",children:[e.jsxs("button",{type:"button",className:`ck-nav-link ck-nav-link--btn ${x?"is-active":""}`,children:[e.jsx(ue,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Services"}),e.jsx(wt,{size:14,className:"ck-nav-chev"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs("div",{className:"ck-nav-dd-panel",role:"menu",children:[e.jsx(b,{to:"/services/mobile-app-development",role:"menuitem",children:"Mobile App Development"}),e.jsx(b,{to:"/services/web-development",role:"menuitem",children:"Web Development"}),e.jsx(b,{to:"/services/digital-marketing",role:"menuitem",children:"Digital Marketing"}),e.jsx(b,{to:"/services/custom-software-development",role:"menuitem",children:"Custom Software Development"}),e.jsx(b,{to:"/services/ui-ux-design",role:"menuitem",children:"UI/UX Design"})]})]}),e.jsxs(j,{to:"/portfolio",className:({isActive:m})=>`ck-nav-link ${m?"is-active":""}`,children:[e.jsx(he,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Portfolio"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(j,{to:"/our-team",className:({isActive:m})=>`ck-nav-link ${m?"is-active":""}`,children:[e.jsx(fe,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Team"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(j,{to:"/blogs",className:({isActive:m})=>`ck-nav-link ${m?"is-active":""}`,children:[e.jsx(de,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Blog"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]}),e.jsxs(j,{to:"/contact",className:({isActive:m})=>`ck-nav-link ${m?"is-active":""}`,children:[e.jsx(Z,{size:15,className:"ck-nav-ico"})," ",e.jsx("span",{children:"Contact"}),e.jsx("span",{className:"ck-underline","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"ck-nav-actions",children:[e.jsxs("button",{type:"button",onClick:c,className:"ck-cta-btn",children:["Get in Touch ",e.jsx(ce,{size:15})]}),e.jsx("button",{type:"button",className:"ck-nav-burger",onClick:d,"aria-label":"Open menu",children:e.jsx(Mt,{size:22})})]})]})})]})},z="917842385604",f={name:"Techland IT Solutions",shortName:"Techland",tagline:"Best App, Web & Digital Marketing Company in Hyderabad",website:"https://techlanditsolutions.com",email:{primary:"info@techlanditsolutions.com",get href(){return`mailto:${this.primary}`}},phone:{raw:z,display:"+91 784 238 5604",compact:"+91 78423 85604",e164:`+${z}`,get href(){return`tel:+${z}`}},address:{line1:"Flat No. 101, Sirisampada Hitec Apartment",line2:"H.No. 1-63/C/8/2, Plot No. 2, Block No. 8",locality:"Kavuri Hills",area:"Madhapur",city:"Hyderabad",state:"Telangana",postalCode:"500081",country:"IN",get full(){return`${this.line1}, ${this.line2}, ${this.locality}, ${this.area}, ${this.city}, ${this.state} ${this.postalCode}`},get street(){return`${this.line1}, ${this.line2}, ${this.locality}, ${this.area}`}},maps:{place:"https://maps.app.goo.gl/N13ixNnC7UHf7nwT9",embed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263340846998!2d78.37701741037169!3d17.447105483381275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938fa04b952d%3A0x2d0c448b127e06e3!2sTechland%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1737129743764!5m2!1sen!2sin"},social:{linkedin:"https://www.linkedin.com/company/techland-it-solutions/",instagram:"https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==",facebook:"",twitter:"",youtube:""},whatsapp(t=`Hi Techland,
I'm inquiring about the website development and mobile app development`){return`https://wa.me/${z}?text=${encodeURIComponent(t)}`},hours:{display:"Mon – Sat, 10:00 – 19:00 IST",schema:"Mo-Sa 10:00-19:00"},forms:{success:"Thank you! Our team will reach out to you within the next 2 hours."},stats:{clients:"350+",websites:"96+",apps:"156+"},certifications:["GST Registered"],languages:["English","Hindi","Telugu"]},Ht=[{to:"/services/web-development",label:"Web Development"},{to:"/services/mobile-app-development",label:"Mobile App Development"},{to:"/services/digital-marketing",label:"Digital Marketing"},{to:"/services/custom-software-development",label:"Custom Software"},{to:"/services/ui-ux-design",label:"UI / UX Design"}],Ut=[{to:"/about",label:"About Us"},{to:"/our-team",label:"Our Team"},{to:"/portfolio",label:"Our Work"},{to:"/services",label:"Services"},{to:"/blogs",label:"Journal"},{to:"/contact",label:"Contact"}],ge=[{href:f.social.linkedin,label:"LinkedIn",icon:"fab fa-linkedin-in"},{href:f.social.instagram,label:"Instagram",icon:"fab fa-instagram"},{href:f.social.facebook,label:"Facebook",icon:"fab fa-facebook-f"},{href:f.whatsapp(),label:"WhatsApp",icon:"fab fa-whatsapp"}].filter(t=>t.href);function qt(){const t=new Date().getFullYear();return e.jsxs("footer",{className:"ft",role:"contentinfo",children:[e.jsxs("div",{className:"ft-bg","aria-hidden":"true",children:[e.jsx("span",{className:"ft-orb ft-orb--a"}),e.jsx("span",{className:"ft-orb ft-orb--b"}),e.jsx("span",{className:"ft-grid"})]}),e.jsxs("div",{className:"ft-container",children:[e.jsxs("div",{className:"ft-cta",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"ft-cta-title",children:"Have something to build?"}),e.jsx("p",{className:"ft-cta-sub",children:"Send a short brief — scope, timeline and a number come back within two working hours."})]}),e.jsxs("div",{className:"ft-cta-actions",children:[e.jsxs(b,{to:"/contact",className:"ft-btn ft-btn--solid",children:["Start a project",e.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]}),e.jsx("a",{href:f.phone.href,className:"ft-btn ft-btn--ghost",children:f.phone.display})]})]}),e.jsxs("div",{className:"ft-cols",children:[e.jsxs("div",{className:"ft-col ft-col--brand",children:[e.jsx(b,{to:"/",className:"ft-logo","aria-label":"Techland IT Solutions home",children:e.jsx("img",{src:"/assets/media/logo.png",alt:"Techland IT Solutions",loading:"lazy"})}),e.jsxs("p",{className:"ft-about",children:["An IT partner in Hyderabad building apps, websites and marketing programmes for ",f.stats.clients," businesses across India and abroad — designed, built and supported in-house."]}),ge.length>0&&e.jsx("ul",{className:"ft-social",children:ge.map(s=>e.jsx("li",{children:e.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer","aria-label":s.label,title:s.label,children:e.jsx("i",{className:s.icon,"aria-hidden":"true"})})},s.label))})]}),e.jsxs("nav",{className:"ft-col","aria-label":"Services",children:[e.jsx("h3",{className:"ft-col-title",children:"Services"}),e.jsx("ul",{className:"ft-links",children:Ht.map(s=>e.jsx("li",{children:e.jsx(b,{to:s.to,children:s.label})},s.to))})]}),e.jsxs("nav",{className:"ft-col","aria-label":"Company",children:[e.jsx("h3",{className:"ft-col-title",children:"Company"}),e.jsx("ul",{className:"ft-links",children:Ut.map(s=>e.jsx("li",{children:e.jsx(b,{to:s.to,children:s.label})},s.to))})]}),e.jsxs("div",{className:"ft-col ft-col--contact",children:[e.jsx("h3",{className:"ft-col-title",children:"Get in touch"}),e.jsxs("ul",{className:"ft-contact",children:[e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Studio"}),e.jsx("a",{className:"ft-v",href:f.maps.place,target:"_blank",rel:"noopener noreferrer",children:f.address.full})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Phone"}),e.jsx("a",{className:"ft-v",href:f.phone.href,children:f.phone.display})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Email"}),e.jsx("a",{className:"ft-v",href:f.email.href,children:f.email.primary})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ft-k",children:"Hours"}),e.jsx("span",{className:"ft-v ft-v--plain",children:f.hours.display})]})]})]})]}),e.jsxs("div",{className:"ft-bottom",children:[e.jsxs("p",{className:"ft-copy",children:["© ",t," ",f.name,". All rights reserved."]}),e.jsxs("p",{className:"ft-meta",children:[f.certifications.join(" · "),e.jsx("span",{"aria-hidden":"true",children:" · "}),"Hyderabad, India"]})]})]}),e.jsx("style",{children:`
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
      `})]})}const Ft=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"slider-drag-cursor d-flex align-items-center justify-content-between",children:[e.jsx("span",{className:"drag-icon-left",children:e.jsx("img",{src:"assets/img/icon/drag-arrow-left.svg",alt:"Drag left arrow"})}),"DRAG",e.jsx("span",{className:"drag-icon-right",children:e.jsx("img",{src:"assets/img/icon/drag-arrow-right.svg",alt:"Drag right arrow"})})]})}),Bt=[{name:"New Year",startMonth:11,startDay:30,endMonth:0,endDay:10,images:{circle1:"/assets/img/normal/NewYearImg_03.png",circle2:"/assets/img/normal/NewYearImg_02.png",main:"/assets/img/normal/NewYearImg_04.png"}},{name:"Sankranthi",startMonth:0,startDay:11,endMonth:0,endDay:20,images:{circle1:"/assets/img/normal/sankranthiImg03.png",circle2:"/assets/img/normal/sankranthiImg02.png",circle3:"/assets/img/normal/sankranthiImg01.png",main:"/assets/img/normal/sankranthiImg04.png"}},{name:"Holi",startMonth:1,startDay:27,endMonth:2,endDay:6,images:{circle1:"/assets/img/normal/holiImg03.png",circle2:"/assets/img/normal/holiImg02.png",circle3:"/assets/img/normal/holiImg01.png",main:"/assets/img/normal/holiImg04.png"}},{name:"Ugadi",startMonth:2,startDay:14,endMonth:2,endDay:21,images:{circle1:"/assets/img/normal/ugadiImg02.png",circle2:"/assets/img/normal/ugadiImg01.png",circle3:"/assets/img/normal/ugadiImg03.png",main:"/assets/img/normal/ugadilogo.png"}},{name:"Ramzan",startMonth:2,startDay:15,endMonth:2,endDay:22,images:{circle1:"/assets/img/normal/ramzan-right-image.png",circle2:"/assets/img/normal/centerImage.png",circle3:"/assets/img/normal/ramzanLeftImage.png",main:"/assets/img/normal/ramzan-bottom-image.png"}},{name:"Independence Day",startMonth:7,startDay:10,endMonth:7,endDay:17,images:{circle1:"/assets/img/normal/Independence-day-right-Img.png",circle2:"/assets/img/normal/Independence-day-center-Img.png",circle3:"/assets/img/normal/Independence-day-leftImg.png",main:"/assets/img/normal/Independence-day-bottom-Img.png"}},{name:"Onam",startMonth:7,startDay:20,endMonth:7,endDay:27,images:{circle1:"/assets/img/normal/sankranthiImg01.png",circle2:"/assets/img/normal/greetLogo.png",circle3:"/assets/img/normal/sankranthiImg03.png",main:"/assets/img/normal/sankranthiImg04.png"}},{name:"Ganesh Chaturthi",startMonth:8,startDay:9,endMonth:8,endDay:29,images:{circle1:"/assets/img/normal/diya.png",circle2:"/assets/img/normal/lordGanesh.png",circle3:"/assets/img/normal/Laddu.png",main:"/assets/img/normal/lord_ganesh.png"}},{name:"Dussehra",startMonth:9,startDay:15,endMonth:9,endDay:22,images:{circle1:"/assets/img/normal/ravan.png",circle2:"/assets/img/normal/greetLogo.png",circle3:"/assets/img/normal/ravan2.png",main:"/assets/img/normal/GodessIdol.png"}},{name:"Diwali",startMonth:10,startDay:3,endMonth:10,endDay:10,images:{circle1:"/assets/img/normal/diwali-diya-2.png",circle2:"/assets/img/normal/goddess-laxmi.png",circle3:"/assets/img/normal/diwali-diya-2.png",main:"/assets/img/normal/diwali-bottom-image.png"}},{name:"Christmas",startMonth:11,startDay:10,endMonth:11,endDay:29,images:{circle1:"/assets/cdn-images/Group 9.png",circle2:"/assets/cdn-images/Group 8.png",circle3:"/assets/cdn-images/Group 7.png",main:"/assets/cdn-images/santaClaus.png"}}],Wt=()=>{const t=u.useMemo(()=>{const a=new Date,r=a.getMonth(),n=a.getDate();return Bt.find(i=>{const{startMonth:l,startDay:o,endMonth:c,endDay:d}=i;if(l<=c){if(r===l&&n>=o)return l===c?n<=d:!0;if(r===c&&n<=d||r>l&&r<c)return!0}else if(r===l&&n>=o||r===c&&n<=d||r>l||r<c)return!0;return!1})},[]);if(!t)return null;const{images:s}=t;return e.jsxs("div",{className:"d-none d-lg-block",children:[e.jsx("div",{className:"try_circle_first try_circle_first_top hidden-xs hidden-sm",children:e.jsx("img",{src:s.circle1,alt:"circle"})}),e.jsx("div",{className:"try_circle_second try_circle_second_top hidden-xs hidden-sm",children:e.jsx("img",{src:s.circle2,alt:"circle"})}),e.jsx("div",{className:"try_circle_third try_circle_third_top hidden-xs hidden-sm",children:e.jsx("img",{src:s.circle3,alt:"circle"})}),e.jsx("div",{className:"try_slider_img_Wrapper try_slider_img_header_Wrapper","data-animation":"animated bounceInUp",children:e.jsx("img",{src:s.main,alt:"mobile"})})]})},Vt=()=>{const[t,s]=u.useState(!1);u.useEffect(()=>{const r=setTimeout(()=>s(!0),1500);return()=>clearTimeout(r)},[]);const a=f.whatsapp("Hi! I'm interested in your services.");return e.jsxs("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:`whatsapp-float ${t?"show":""}`,"aria-label":"Chat on WhatsApp",children:[e.jsx("span",{className:"tooltip",children:"Chat with us"}),e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fa-brands fa-whatsapp"})})]})},Gt=({children:t})=>{const{pathname:s}=U(),[a,r]=u.useState(t),[n,i]=u.useState("in"),l=u.useRef(s);return u.useEffect(()=>{if(s===l.current){r(t);return}if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){l.current=s,r(t);return}i("out");const o=setTimeout(()=>{l.current=s,r(t),i("in")},260);return()=>clearTimeout(o)},[s,t]),e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`pt-bar ${n==="out"?"is-running":""}`,"aria-hidden":"true",children:e.jsx("i",{})}),e.jsx("div",{className:`pt-stage pt-${n}`,children:a})]})};function Yt({setOpenContactModal:t}){return e.jsxs("div",{className:"app",children:[e.jsx(Rt,{setOpenContactModal:t}),e.jsxs("main",{children:[e.jsx(Wt,{}),e.jsx(Gt,{children:e.jsx(Ie,{context:{setOpenContactModal:t}})})]}),e.jsx(qt,{}),e.jsx(Ft,{}),e.jsx(Vt,{})]})}const Kt=()=>e.jsxs("div",{className:"pl",role:"status","aria-live":"polite","aria-label":"Loading",children:[e.jsxs("div",{className:"pl-bg","aria-hidden":"true",children:[e.jsx("span",{className:"pl-orb pl-orb--a"}),e.jsx("span",{className:"pl-orb pl-orb--b"}),e.jsx("span",{className:"pl-grid"})]}),e.jsxs("div",{className:"pl-stage",children:[e.jsx("div",{className:"pl-blocks","aria-hidden":"true",children:Array.from({length:9},(t,s)=>e.jsx("span",{className:"pl-block",style:{"--i":s}},s))}),e.jsxs("div",{className:"pl-word","aria-hidden":"true",children:[e.jsx("span",{className:"pl-word-main",children:"TECHLAND"}),e.jsx("span",{className:"pl-word-sub",children:"IT Solutions"})]}),e.jsx("div",{className:"pl-bar","aria-hidden":"true",children:e.jsx("span",{className:"pl-bar-fill"})})]}),e.jsx("span",{className:"pl-sr",children:"Loading…"})]});function Xt(){const{pathname:t}=U();return u.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[t]),u.useEffect(()=>{window.scrollTo(0,0)},[]),null}const Qt="",Zt=Qt.replace(/\/+$/,""),xe={API_BASE_URL:Zt,API_SUB_PATH:"/api",get ASSETS_URL(){return this.API_BASE_URL}},Jt=$e.create({baseURL:`${xe.API_BASE_URL}${xe.API_SUB_PATH}`,withCredentials:!0,timeout:15e3}),es=({openModal:t,setOpenModal:s})=>{const[a,r]=u.useState(!1),n=U(),[i,l]=u.useState(!1),[o,c]=u.useState({name:"",email:"",phone:"",subject:"",message:""}),[d,h]=u.useState({});u.useEffect(()=>{t&&(r(!0),s&&s(!1))},[t,s]),u.useEffect(()=>{if(n.pathname==="/"){const g=setTimeout(()=>r(!0),6e3);return()=>clearTimeout(g)}},[n.pathname]),u.useEffect(()=>(a&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[a]);const p=()=>{r(!1),setTimeout(()=>{c({name:"",email:"",phone:"",subject:"",message:""}),h({})},300)},x=()=>{const g={};return o.name.trim()||(g.name="Required"),o.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(g.email="Invalid email"):g.email="Required",o.phone&&!/^\d{10,15}$/.test(o.phone.replace(/\D/g,""))&&(g.phone="10–15 digits"),o.message||(g.message="Required"),h(g),Object.keys(g).length===0},m=g=>{const{name:_,value:P}=g.target;c({...o,[_]:P}),d[_]&&h({...d,[_]:""})},y=async g=>{if(g&&g.preventDefault(),!x()){q.error("Please fill all required fields correctly.");return}l(!0);try{await Jt.post("/contact",{...o,subject:o.subject||"Website Inquiry (Modal)"}),q.success(f.forms.success),c({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(p,1500)}catch{q.error("Failed to send message. Please try again.")}finally{l(!1)}};return a?e.jsx("div",{className:"cm-overlay",onClick:p,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"cm-modal",onClick:g=>g.stopPropagation(),children:[e.jsx("button",{className:"cm-close",onClick:p,"aria-label":"Close",children:e.jsx(_e,{size:18,strokeWidth:2})}),e.jsxs("aside",{className:"cm-aside",children:[e.jsxs("div",{className:"cm-aside-bg","aria-hidden":"true",children:[e.jsx("div",{className:"cm-aside-mesh"}),e.jsx("div",{className:"cm-aside-grid"}),e.jsx("div",{className:"cm-aside-orb cm-aside-orb--a"}),e.jsx("div",{className:"cm-aside-orb cm-aside-orb--b"})]}),e.jsxs("div",{className:"cm-aside-top",children:[e.jsxs("div",{className:"cm-eyebrow",children:[e.jsx(Pt,{size:12,className:"cm-eyebrow-spark"}),e.jsx("span",{children:"Let’s build together"})]}),e.jsxs("h2",{className:"cm-title",children:["Let’s start"," ",e.jsx("span",{className:"cm-title-hl",children:"something great"}),e.jsx("span",{className:"cm-title-dot",children:"."})]}),e.jsx("p",{className:"cm-lede",children:"Tell us about your project. We’ll get back to you within one business day with scope, timeline and a clear next step."})]}),e.jsxs("ul",{className:"cm-info",children:[e.jsxs("li",{children:[e.jsx("span",{className:"cm-info-ico",children:e.jsx(Et,{size:14,strokeWidth:1.7})}),e.jsxs("div",{children:[e.jsx("span",{className:"cm-info-l",children:"Email"}),e.jsx("a",{className:"cm-info-v",href:f.email.href,children:f.email.primary})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"cm-info-ico",children:e.jsx(Z,{size:14,strokeWidth:1.7})}),e.jsxs("div",{children:[e.jsx("span",{className:"cm-info-l",children:"Call"}),e.jsx("a",{className:"cm-info-v",href:f.phone.href,children:f.phone.display})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"cm-info-ico",children:e.jsx(It,{size:14,strokeWidth:1.7})}),e.jsxs("div",{children:[e.jsx("span",{className:"cm-info-l",children:"Studio"}),e.jsx("a",{className:"cm-info-v cm-info-v--addr",href:f.maps.place,target:"_blank",rel:"noopener noreferrer",children:f.address.full})]})]})]}),e.jsxs("p",{className:"cm-foot-meta",children:[e.jsx("span",{children:"One studio"}),e.jsx("span",{"aria-hidden":"true",children:"·"}),e.jsx("span",{children:"Global by default"})]})]}),e.jsxs("section",{className:"cm-form-wrap",children:[e.jsxs("header",{className:"cm-form-head",children:[e.jsx("h3",{className:"cm-form-title",children:"Request a quote"}),e.jsx("p",{className:"cm-form-sub",children:"A few quick details and we’ll be in touch."})]}),e.jsxs("form",{onSubmit:y,className:"cm-form",noValidate:!0,children:[e.jsxs("div",{className:"cm-grid",children:[e.jsx($,{label:"Your name",required:!0,error:d.name,input:e.jsx("input",{type:"text",name:"name",value:o.name,onChange:m,placeholder:"Jane Doe",autoComplete:"name"})}),e.jsx($,{label:"Email",required:!0,error:d.email,input:e.jsx("input",{type:"email",name:"email",value:o.email,onChange:m,placeholder:"jane@company.com",autoComplete:"email"})}),e.jsx($,{label:"Subject",error:null,input:e.jsx("input",{type:"text",name:"subject",value:o.subject,onChange:m,placeholder:"What are we building?"})}),e.jsx($,{label:"Phone",error:d.phone,phone:!0,input:e.jsxs("div",{className:"cm-phone",children:[e.jsxs("span",{className:"cm-phone-cc",children:[e.jsx("span",{className:"cm-phone-flag","aria-hidden":"true",children:"🇮🇳"}),e.jsx("span",{children:"+91"})]}),e.jsx("input",{type:"tel",name:"phone",value:o.phone,onChange:m,placeholder:"98765 43210",maxLength:10,autoComplete:"tel"})]})}),e.jsx($,{label:"Project details",required:!0,error:d.message,full:!0,input:e.jsx("textarea",{name:"message",value:o.message,onChange:m,placeholder:"A few lines about your goals, timeline, and any constraints we should know about…",rows:4})})]}),e.jsxs("div",{className:"cm-form-foot",children:[e.jsx("p",{className:"cm-form-foot-meta",children:e.jsx("span",{children:"By submitting, you agree to be contacted by Techland."})}),e.jsxs("button",{type:"submit",className:"cm-submit",disabled:i,children:[i?"Sending…":"Get a quote",e.jsx(yt,{size:16,strokeWidth:1.8})]})]})]})]})]})}):null},$=({label:t,required:s,error:a,input:r,full:n,phone:i})=>e.jsxs("label",{className:["cm-field",n?"is-full":"",i?"is-phone":"",a?"has-error":""].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"cm-field-wrap",children:[r,e.jsxs("span",{className:"cm-field-label",children:[t,s&&e.jsx("span",{className:"cm-field-req","aria-hidden":"true",children:"*"})]}),e.jsx("span",{className:"cm-field-bar","aria-hidden":"true"})]}),a&&e.jsx("span",{className:"cm-field-err",children:a})]}),ts=u.lazy(()=>N(()=>import("./HomeLayout-sRocR57S.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),ss=u.lazy(()=>N(()=>import("./About-DZMEwNH7.js"),__vite__mapDeps([11,1,2,3,9,5,12]))),as=u.lazy(()=>N(()=>import("./Services-BfHbmu7q.js"),__vite__mapDeps([13,1,2,3,14,9,5,15]))),rs=u.lazy(()=>N(()=>import("./ServiceDetails-BW0kpnFy.js"),__vite__mapDeps([16,1,2,14,4,5,6,9,17]))),ns=u.lazy(()=>N(()=>import("./Portfolio-Bkpk-ZJN.js"),__vite__mapDeps([18,1,2,3,8,9,5]))),is=u.lazy(()=>N(()=>import("./ProjectDetail-JrQu2zJj.js"),__vite__mapDeps([19,1,2,3,8,9,5]))),os=u.lazy(()=>N(()=>import("./Blogs-BSnnBWCb.js"),__vite__mapDeps([20,1,2,3,21,9,5,22]))),ls=u.lazy(()=>N(()=>import("./BlogDetails-BRB13fho.js"),__vite__mapDeps([23,1,2,21,9,5]))),cs=u.lazy(()=>N(()=>import("./Contact-B0p7QLrc.js"),__vite__mapDeps([24,1,2,3,5,9,25]))),ds=u.lazy(()=>N(()=>import("./OurTeam-CupRtMus.js"),__vite__mapDeps([26,1,2,3,9,5,27])));function ms(){const[t,s]=u.useState(!1);return u.useEffect(()=>{window.scrollTo(0,0),De.init({duration:800,once:!0,easing:"ease-out",offset:50,disable:"mobile"})},[]),e.jsxs("div",{children:[e.jsx(u.Suspense,{fallback:e.jsx(Kt,{}),children:e.jsx(Oe,{children:e.jsxs(w,{path:"/",element:e.jsx(Yt,{setOpenContactModal:s}),children:[e.jsx(w,{index:!0,element:e.jsx(ts,{})}),e.jsx(w,{path:"about",element:e.jsx(ss,{})}),e.jsx(w,{path:"services",element:e.jsx(as,{})}),e.jsx(w,{path:"services/:id",element:e.jsx(rs,{})}),e.jsx(w,{path:"portfolio",element:e.jsx(ns,{})}),e.jsx(w,{path:"portfolio/:category/:projectId",element:e.jsx(is,{})}),e.jsx(w,{path:"blogs",element:e.jsx(os,{})}),e.jsx(w,{path:"blogs/:id",element:e.jsx(ls,{})}),e.jsx(w,{path:"contact",element:e.jsx(cs,{})}),e.jsx(w,{path:"our-team",element:e.jsx(ds,{})})]})})}),e.jsx(Xt,{}),e.jsx(es,{openModal:t,setOpenModal:s}),e.jsx(Pe,{position:"bottom-right",autoClose:3e3})]})}G.createRoot(document.getElementById("root")).render(e.jsx(C.StrictMode,{children:e.jsx(Te,{children:e.jsx(Me,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(ms,{})})})}));(()=>{const t=document.getElementById("boot");if(!t)return;const s=700,a=performance.now(),r=Math.max(0,s-a),n=()=>{t.classList.add("is-out"),setTimeout(()=>t.remove(),500)};setTimeout(()=>requestAnimationFrame(n),r)})();export{ce as A,xs as H,ue as L,Pt as S,fe as U,yt as a,xe as b,v as c,Jt as d,f as e};
