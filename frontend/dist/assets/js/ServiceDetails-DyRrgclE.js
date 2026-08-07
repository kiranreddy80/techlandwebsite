import{j as s}from"./icons-vendor-DWk9LYok.js";import{r,f as b,L as d}from"./react-vendor-iesUOuYh.js";import{H as j,e as x}from"./index-B0wVHTp_.js";import{s as u}from"./servicesData-jbPba5FO.js";import{H as N,b as y}from"./HomeContactUs-BAjsuLEC.js";import"./animation-vendor-lhfjd4vI.js";import"./utils-D_wzFjLH.js";const f={"Frontend Development":[{name:"HTML",icon:"/assets/img/tool-icons/html5.svg",color:"#E34F26"},{name:"CSS",icon:"/assets/img/tool-icons/css3.svg",color:"#1572B6"},{name:"Bootstrap",icon:"/assets/img/tool-icons/bootstrap.svg",color:"#7952B3"},{name:"JavaScript",icon:"/assets/img/tool-icons/javascript.svg",color:"#F7DF1E"},{name:"React JS",icon:"/assets/img/tool-icons/react.svg",color:"#61DAFB"},{name:"Next JS",icon:"/assets/img/tool-icons/nextjs.svg",color:"#000000"},{name:"Vue JS",icon:"/assets/img/tool-icons/vuejs.svg",color:"#4FC08D"},{name:"Angular",icon:"/assets/img/tool-icons/angularjs.svg",color:"#DD0031"},{name:"Tailwind CSS",icon:"/assets/img/tool-icons/tailwindcss.svg",color:"#06B6D4"}],"Backend Development":[{name:"Node JS",icon:"/assets/img/tool-icons/nodejs.svg",color:"#339933"},{name:"Express JS",icon:"/assets/img/tool-icons/express.svg",color:"#000000"},{name:"PHP",icon:"/assets/img/tool-icons/php.svg",color:"#777BB4"},{name:"Laravel",icon:"/assets/img/tool-icons/laravel.svg",color:"#FF2D20"},{name:"Java",icon:"/assets/img/tool-icons/java.svg",color:"#007396"},{name:"Python",icon:"/assets/img/tool-icons/python.svg",color:"#3776AB"},{name:"Django",icon:"/assets/img/tool-icons/django.svg",color:"#092E20"},{name:"Flask",icon:"/assets/img/tool-icons/flask.svg",color:"#000000"},{name:"FastAPI",icon:"/assets/img/tool-icons/fastapi.svg",color:"#009688"}],"Mobile App Development":[{name:"Flutter",icon:"/assets/img/tool-icons/flutter.svg",color:"#02569B"},{name:"React Native",icon:"/assets/img/tool-icons/react.svg",color:"#61DAFB"},{name:"Swift",icon:"/assets/img/tool-icons/swift.svg",color:"#FA7343"},{name:"Kotlin",icon:"/assets/img/tool-icons/kotlin.svg",color:"#7F52FF"},{name:"Android",icon:"/assets/img/tool-icons/android.svg",color:"#3DDC84"},{name:"iOS",icon:"/assets/img/tool-icons/ios.png",color:"#000000"}],"Cloud Platforms":[{name:"AWS",icon:"/assets/img/tool-icons/aws.svg",color:"#FF9900"},{name:"Google Cloud",icon:"/assets/img/tool-icons/googlecloud.svg",color:"#4285F4"},{name:"Azure",icon:"/assets/img/tool-icons/azure.svg",color:"#0078D4"},{name:"Docker",icon:"/assets/img/tool-icons/docker.svg",color:"#2496ED"},{name:"Kubernetes",icon:"/assets/img/tool-icons/kubernetes.svg",color:"#326CE5"}],Databases:[{name:"MongoDB",icon:"/assets/img/tool-icons/mongodb.svg",color:"#47A248"},{name:"MySQL",icon:"/assets/img/tool-icons/mysql.svg",color:"#4479A1"},{name:"PostgreSQL",icon:"/assets/img/tool-icons/postgresql.svg",color:"#336791"},{name:"Firebase",icon:"/assets/img/tool-icons/firebase.svg",color:"#FFCA28"},{name:"Redis",icon:"/assets/img/tool-icons/redis.svg",color:"#DC382D"}],"Machine Learning & AI":[{name:"TensorFlow",icon:"/assets/img/tool-icons/tensorflow.svg",color:"#FF6F00"},{name:"PyTorch",icon:"/assets/img/tool-icons/pytorch.svg",color:"#EE4C2C"},{name:"Pandas",icon:"/assets/img/tool-icons/pandas.svg",color:"#150458"},{name:"Scikit-learn",icon:"/assets/img/tool-icons/scikit-learn.svg",color:"#F7931E"}],"DevOps & CI/CD":[{name:"Jenkins",icon:"/assets/img/tool-icons/jenkins.svg",color:"#D24939"},{name:"GitLab",icon:"/assets/img/tool-icons/gitlab.svg",color:"#FC6D26"},{name:"Bitbucket",icon:"/assets/img/tool-icons/bitbucket.svg",color:"#0052CC"}],"Testing & Automation":[{name:"Selenium",icon:"/assets/img/tool-icons/selenium.svg",color:"#43B02A"},{name:"Jest",icon:"/assets/img/tool-icons/jest.svg",color:"#C21325"},{name:"Cypress",icon:"/assets/img/tool-icons/cypress.svg",color:"#17202C"}],Blockchain:[{name:"Solidity",icon:"/assets/img/tool-icons/solidity.svg",color:"#363636"},{name:"Ethereum",icon:"/assets/img/tool-icons/ethereum.svg",color:"#3C3C3D"}]},w=()=>{const l=Object.keys(f),[e,g]=r.useState(l[0]),[m,c]=r.useState(!1),t=r.useRef(null);r.useEffect(()=>{const i=t.current;if(!i)return;if(!("IntersectionObserver"in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){c(!0);return}const o=new IntersectionObserver(a=>{a[0].isIntersecting&&(c(!0),o.disconnect())},{threshold:.12});return o.observe(i),()=>o.disconnect()},[]);const h=f[e]||[];return s.jsxs("section",{className:`tl-section ${m?"is-in":""}`,ref:t,"aria-label":"Technologies we use",children:[s.jsxs("div",{className:"tl-container",children:[s.jsxs("header",{className:"tl-head",children:[s.jsxs("span",{className:"tl-eyebrow",children:[s.jsx("span",{className:"tl-eyebrow-line","aria-hidden":"true"}),"Our toolkit"]}),s.jsxs("h2",{className:"tl-title",children:["Built with what ",s.jsx("span",{className:"tl-title-hl",children:"actually holds up"}),"."]})]}),s.jsx("div",{className:"tl-tabs",role:"tablist","aria-label":"Technology categories",children:l.map(i=>s.jsxs("button",{type:"button",role:"tab","aria-selected":i===e,className:`tl-tab ${i===e?"is-active":""}`,onClick:()=>g(i),children:[s.jsx("span",{children:i}),s.jsx("em",{children:f[i].length})]},i))}),s.jsx("ul",{className:"tl-grid",children:h.map((i,o)=>s.jsxs("li",{className:"tl-item",style:{"--i":o,"--brand":i.color},children:[s.jsx("span",{className:"tl-glow","aria-hidden":"true"}),s.jsx("span",{className:"tl-icon",children:s.jsx("img",{src:i.icon,alt:"","aria-hidden":"true",loading:"lazy",decoding:"async"})}),s.jsx("span",{className:"tl-name",children:i.name})]},i.name))},e)]}),s.jsx("style",{children:`
        .tl-section {
          --ink: #0a0a0a;
          --soft: rgba(10,10,10,0.55);
          --faint: rgba(10,10,10,0.36);
          --rule: rgba(10,10,10,0.09);
          --g1: #163198; --g2: #4f46e5; --g3: #7c3aed;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 90px 0 96px;
          background: linear-gradient(180deg, #ffffff, #fafaff 55%, #ffffff);
          color: var(--ink);
        }
        .tl-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .tl-container { padding: 0 32px; } }

        .tl-head {
          display: flex; flex-direction: column; align-items: center;
          gap: 4px; text-align: center; margin-bottom: 38px;
        }
        .tl-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--faint);
        }
        .tl-eyebrow-line { width: 26px; height: 1px; background: linear-gradient(to right, transparent, var(--g2)); }
        .tl-title {
          font-family: "Play", sans-serif;
          font-weight: 400;
          font-size: clamp(1.9rem, 3vw + 0.6rem, 2.9rem);
          line-height: 1.08; letter-spacing: -0.035em;
          margin: 16px 0 0; text-wrap: balance;
        }
        .tl-title-hl {
          font-weight: 700;
          background: linear-gradient(135deg, var(--g1), var(--g2) 50%, var(--g3));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }

        /* ---- tabs ---- */
        .tl-tabs {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 8px; margin-bottom: 40px;
        }
        .tl-tab {
          position: relative;
          isolation: isolate;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 18px;
          border-radius: 999px;
          border: 1px solid var(--rule);
          background: #fff;
          cursor: pointer;
          font-family: "Play", sans-serif;
          font-size: 13.5px; font-weight: 620; letter-spacing: -0.01em;
          color: var(--soft);
          transition: color 0.3s ease, border-color 0.3s ease,
                      transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .tl-tab::before {
          content: "";
          position: absolute; inset: 0; z-index: -1;
          border-radius: inherit;
          background: linear-gradient(120deg, var(--g1), var(--g2) 55%, var(--g3));
          opacity: 0; transform: scale(0.9);
          transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .tl-tab:hover { color: var(--ink); border-color: rgba(79,70,229,0.35); transform: translateY(-1px); }
        .tl-tab.is-active {
          color: #fff;
          border-color: transparent;
          box-shadow: 0 16px 32px -16px rgba(79,70,229,0.75);
        }
        .tl-tab.is-active::before { opacity: 1; transform: scale(1); }
        .tl-tab em {
          font-style: normal;
          font-family: ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700;
          padding: 3px 7px; border-radius: 999px;
          background: rgba(10,10,10,0.06);
          color: var(--faint);
          transition: background 0.3s ease, color 0.3s ease;
        }
        .tl-tab.is-active em { background: rgba(255,255,255,0.22); color: #fff; }

        /* ---- grid ---- */
        .tl-grid {
          list-style: none; margin: 0; padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
          gap: 14px;
        }

        .tl-item {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 16px;
          padding: 22px 14px 18px;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          opacity: 0; transform: translateY(14px) scale(0.97);
          animation: tlIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
          /* Capped so a 40-tool category still finishes quickly. */
          animation-delay: calc(min(var(--i) * 28ms, 640ms));
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .tl-section:not(.is-in) .tl-item { animation-play-state: paused; }
        @keyframes tlIn { to { opacity: 1; transform: translateY(0) scale(1); } }

        .tl-item:hover {
          transform: translateY(-5px);
          /* Each tool lights up in its own brand colour — the one place
             per-item colour is justified, since it identifies the tool. */
          border-color: color-mix(in srgb, var(--brand) 45%, transparent);
          box-shadow: 0 22px 44px -22px color-mix(in srgb, var(--brand) 60%, transparent);
        }

        .tl-glow {
          position: absolute; inset: -30% -20% auto -20%; height: 80%; z-index: -1;
          background: radial-gradient(closest-side, color-mix(in srgb, var(--brand) 26%, transparent), transparent 72%);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .tl-item:hover .tl-glow { opacity: 1; }

        .tl-icon {
          width: 46px; height: 46px;
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .tl-item:hover .tl-icon { transform: scale(1.12) rotate(-4deg); }
        /* Full brand colour at rest. Greyscaling these hid the one thing a
           visitor is scanning for — which stack you actually work in. */
        .tl-icon img {
          max-width: 100%; max-height: 100%;
          object-fit: contain; display: block;
          transition: filter 0.4s ease;
        }
        .tl-item:hover .tl-icon img {
          filter: drop-shadow(0 4px 10px color-mix(in srgb, var(--brand) 45%, transparent));
        }

        .tl-name {
          font-size: 12.5px; font-weight: 600;
          letter-spacing: -0.01em;
          color: rgba(10, 10, 10, 0.72);
          text-align: center;
          transition: color 0.35s ease;
        }
        .tl-item:hover .tl-name { color: var(--ink); }

        @media (prefers-reduced-motion: reduce) {
          .tl-item {
            opacity: 1 !important; transform: none !important;
            animation: none !important; transition: none !important;
          }
          .tl-item:hover { transform: none !important; }
          .tl-icon, .tl-icon img, .tl-name, .tl-tab, .tl-tab::before { transition: none !important; }
          .tl-item:hover .tl-icon { transform: none !important; }
        }
      `})]})},v=(l={})=>{const e=r.useRef(null),[g,m]=r.useState(!1);return r.useEffect(()=>{const c=e.current;if(!c)return;if(!("IntersectionObserver"in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){m(!0);return}const t=new IntersectionObserver(h=>{h[0].isIntersecting&&(m(!0),t.disconnect())},{threshold:.14,...l});return t.observe(c),()=>t.disconnect()},[]),[e,g]},A=()=>{var o;const{id:l}=b(),e=u.find(a=>a.id===l),[g,m]=v(),[c,t]=v();r.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[l]);const h=a=>{const n=a.target.closest(".sd-card");if(!n)return;const p=n.getBoundingClientRect();n.style.setProperty("--mx",`${(a.clientX-p.left)/p.width*100}%`),n.style.setProperty("--my",`${(a.clientY-p.top)/p.height*100}%`)};if(!e)return s.jsx("div",{className:"sd-page",children:s.jsx("section",{className:"sd-missing",children:s.jsxs("div",{className:"sd-container",children:[s.jsx("h1",{children:"Service not found"}),s.jsx("p",{children:"That service doesn't exist, or it is no longer offered."}),s.jsxs(d,{to:"/services",className:"sd-btn sd-btn--solid",children:["See all services",s.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:s.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]})]})})});const i=u.filter(a=>a.id!==e.id);return s.jsxs("div",{className:"sd-page",children:[s.jsxs(j,{children:[s.jsx("title",{children:e.metaTitle||e.title}),s.jsx("meta",{name:"description",content:e.metaDescription||e.description}),s.jsx("link",{rel:"canonical",href:`${x.website}/services/${e.id}`})]}),s.jsxs("section",{className:"sd-hero",children:[s.jsxs("div",{className:"sd-hero-bg","aria-hidden":"true",children:[s.jsx("span",{className:"sd-orb sd-orb--a"}),s.jsx("span",{className:"sd-orb sd-orb--b"}),s.jsx("span",{className:"sd-hero-grid"})]}),s.jsxs("div",{className:"sd-container sd-hero-grid-2",children:[s.jsxs("div",{className:"sd-hero-copy",children:[s.jsxs("nav",{className:"sd-crumb","aria-label":"Breadcrumb",children:[s.jsx(d,{to:"/",children:"Home"}),s.jsx("span",{"aria-hidden":"true",children:"/"}),s.jsx(d,{to:"/services",children:"Services"}),s.jsx("span",{"aria-hidden":"true",children:"/"}),s.jsx("span",{"aria-current":"page",children:e.title})]}),s.jsx("h1",{className:"sd-hero-title",children:s.jsx("span",{className:"sd-hero-hl",children:e.title})}),s.jsx("p",{className:"sd-hero-lede",children:e.description}),s.jsxs("div",{className:"sd-hero-cta",children:[s.jsxs(d,{to:"/contact",className:"sd-btn sd-btn--solid",children:["Get a quote",s.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:s.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]}),s.jsx("a",{href:x.phone.href,className:"sd-btn sd-btn--ghost",children:x.phone.display})]})]}),e.heroImage&&s.jsxs("div",{className:"sd-hero-art",children:[s.jsx("span",{className:"sd-hero-art-glow","aria-hidden":"true"}),s.jsx("img",{src:e.heroImage,alt:e.title,loading:"eager"})]})]})]}),((o=e.details)==null?void 0:o.length)>0&&s.jsx("section",{className:`sd-inc ${m?"is-in":""}`,ref:g,children:s.jsxs("div",{className:"sd-container",children:[s.jsxs("header",{className:"sd-head",children:[s.jsxs("span",{className:"sd-eyebrow",children:[s.jsx("span",{className:"sd-eyebrow-line","aria-hidden":"true"}),"What's included"]}),s.jsx("h2",{className:"sd-h2",children:e.servicesTitle||`Everything in ${e.title}`})]}),s.jsxs("ol",{className:"sd-track",onMouseMove:h,children:[s.jsx("span",{className:"sd-track-rail","aria-hidden":"true",children:s.jsx("span",{className:"sd-track-fill"})}),e.details.map((a,n)=>s.jsxs("li",{className:`sd-step ${n%2?"is-right":"is-left"}`,style:{"--i":n},children:[s.jsxs("span",{className:"sd-node","aria-hidden":"true",children:[s.jsx("span",{className:"sd-node-ring"}),s.jsx("b",{children:String(n+1).padStart(2,"0")})]}),s.jsxs("article",{className:"sd-card",children:[s.jsx("span",{className:"sd-card-spot","aria-hidden":"true"}),s.jsx("span",{className:"sd-card-edge","aria-hidden":"true"}),s.jsx("h3",{children:a.subTitle}),s.jsx("p",{children:a.subDescription})]})]},a.subTitle))]})]})}),e.aboutContent&&s.jsx("section",{className:`sd-about ${t?"is-in":""}`,ref:c,children:s.jsxs("div",{className:"sd-container sd-about-grid",children:[s.jsxs("div",{className:"sd-about-copy",children:[s.jsxs("span",{className:"sd-eyebrow",children:[s.jsx("span",{className:"sd-eyebrow-line","aria-hidden":"true"}),e.aboutTitle||"About this service"]}),s.jsx("h2",{className:"sd-h2",children:e.aboutSubtitle||e.title}),s.jsx("p",{children:e.aboutContent}),e.closingContent&&s.jsx("p",{children:e.closingContent}),s.jsxs(d,{to:"/contact",className:"sd-inline-link",children:["Talk to us about ",e.title,s.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:s.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]})]}),s.jsxs("aside",{className:"sd-facts",children:[s.jsx("h3",{children:e.closingTitle||"Why Techland"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("span",{className:"sd-fact-k",children:"Team"}),s.jsx("span",{className:"sd-fact-v",children:"In-house, no subcontracting"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"sd-fact-k",children:"Cadence"}),s.jsx("span",{className:"sd-fact-v",children:"Two-week sprints, staging always live"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"sd-fact-k",children:"Pricing"}),s.jsx("span",{className:"sd-fact-v",children:"Fixed scope or sprint rate"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"sd-fact-k",children:"After launch"}),s.jsx("span",{className:"sd-fact-v",children:"Runbooks, handover and support"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"sd-fact-k",children:"Reply time"}),s.jsx("span",{className:"sd-fact-v",children:"Two working hours"})]})]})]})]})}),s.jsx(w,{}),i.length>0&&s.jsx("section",{className:"sd-others",children:s.jsxs("div",{className:"sd-container",children:[s.jsxs("header",{className:"sd-head sd-head--row",children:[s.jsx("h2",{className:"sd-h2",children:"Keep exploring"}),s.jsxs(d,{to:"/services",className:"sd-inline-link",children:["All services",s.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:s.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]})]}),s.jsx("div",{className:"sd-others-rail",children:i.map(a=>s.jsxs(d,{to:`/services/${a.id}`,className:"sd-other",children:[s.jsx("span",{children:a.title}),s.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:s.jsx("path",{d:"M4 10h11M11 5l5 5-5 5"})})]},a.id))})]})}),s.jsx(N,{}),s.jsx(y,{})]})};export{A as default};
