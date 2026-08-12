import{j as e}from"./icons-vendor-DWk9LYok.js";import{R as v,f as O,r as j,L as y}from"./react-vendor-iesUOuYh.js";import{g as z,S}from"./seoConfig-ScsCPm3p.js";import{c as u}from"./projectsData-CrCvCROv.js";import{b as I,d as D}from"./index-D6AUSmVj.js";import"./animation-vendor-lhfjd4vI.js";import"./utils-D_wzFjLH.js";function E(s,i){if(s==null)return{};var t=$(s,i),o,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)o=r[n],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(t[o]=s[o])}return t}function $(s,i){if(s==null)return{};var t={},o=Object.keys(s),n,r;for(r=0;r<o.length;r++)n=o[r],!(i.indexOf(n)>=0)&&(t[n]=s[n]);return t}function w(){return w=Object.assign||function(s){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=t[o])}return s},w.apply(this,arguments)}function N(s,i){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);i&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),t.push.apply(t,o)}return t}function x(s){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?N(Object(t),!0).forEach(function(o){A(s,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach(function(o){Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(t,o))})}return s}function A(s,i,t){return i in s?Object.defineProperty(s,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[i]=t,s}const F={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},C=2;class L extends v.Component{constructor(i){super(i),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let t;this.props.breakpointCols&&this.props.breakpointCols.default?t=this.props.breakpointCols.default:t=parseInt(this.props.breakpointCols)||C,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){const i=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;typeof t!="object"&&(t={default:parseInt(t)||C});let o=1/0,n=t.default||C;for(let r in t){const d=parseInt(r);d>0&&i<=d&&d<o&&(o=d,n=t[r])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){const i=this.state.columnCount,t=new Array(i),o=v.Children.toArray(this.props.children);for(let n=0;n<o.length;n++){const r=n%i;t[r]||(t[r]=[]),t[r].push(o[n])}return t}renderColumns(){const{column:i,columnAttrs:t={},columnClassName:o}=this.props,n=this.itemsInColumns(),r=`${100/n.length}%`;let d=o;d&&typeof d!="string"&&(this.logDeprecated('The property "columnClassName" requires a string'),typeof d>"u"&&(d="my-masonry-grid_column"));const m=x(x(x({},i),t),{},{style:x(x({},t.style),{},{width:r}),className:d});return n.map((h,f)=>v.createElement("div",w({},m,{key:f}),h))}logDeprecated(i){console.error("[Masonry]",i)}render(){const i=this.props,{children:t,breakpointCols:o,columnClassName:n,columnAttrs:r,column:d,className:m}=i,h=E(i,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let f=m;return typeof m!="string"&&(this.logDeprecated('The property "className" requires a string'),typeof m>"u"&&(f="my-masonry-grid")),v.createElement("div",w({},h,{className:f}),this.renderColumns())}}L.defaultProps=F;const k={All:{icon:"📋",color:"#667eea",bgColor:"#f0f4ff"},"E-Commerce":{icon:"🛒",color:"#f59e0b",bgColor:"#fef3c7"},Healthcare:{icon:"🏥",color:"#ef4444",bgColor:"#fee2e2"},Education:{icon:"🎓",color:"#8b5cf6",bgColor:"#f5f3ff"},Finance:{icon:"💰",color:"#10b981",bgColor:"#d1fae5"},"Social Media":{icon:"📱",color:"#ec4899",bgColor:"#fce7f3"},Entertainment:{icon:"🎬",color:"#f43f5e",bgColor:"#ffe4e6"},"Food & Delivery":{icon:"🍔",color:"#f97316",bgColor:"#ffedd5"},Travel:{icon:"✈️",color:"#06b6d4",bgColor:"#cffafe"},"Real Estate":{icon:"🏠",color:"#14b8a6",bgColor:"#ccfbf1"},Fitness:{icon:"💪",color:"#84cc16",bgColor:"#ecfccb"},Business:{icon:"💼",color:"#6366f1",bgColor:"#e0e7ff"},Productivity:{icon:"✅",color:"#a855f7",bgColor:"#f3e8ff"},Gaming:{icon:"🎮",color:"#d946ef",bgColor:"#fae8ff"},News:{icon:"📰",color:"#64748b",bgColor:"#f1f5f9"},Music:{icon:"🎵",color:"#f43f5e",bgColor:"#ffe4e6"},Photography:{icon:"📷",color:"#0ea5e9",bgColor:"#e0f2fe"},Utilities:{icon:"⚙️",color:"#71717a",bgColor:"#f4f4f5"},Communication:{icon:"💬",color:"#3b82f6",bgColor:"#dbeafe"},"Job Search":{icon:"🔍",color:"#8b5cf6",bgColor:"#f5f3ff"},Financial:{icon:"💵",color:"#10b981",bgColor:"#d1fae5"},"Non-Profit":{icon:"❤️",color:"#ef4444",bgColor:"#fee2e2"},"Wedding Planning":{icon:"💒",color:"#ec4899",bgColor:"#fce7f3"},"Car Rental":{icon:"🚗",color:"#06b6d4",bgColor:"#cffafe"},"HR & Recruitment":{icon:"👥",color:"#6366f1",bgColor:"#e0e7ff"},Delivery:{icon:"📦",color:"#f97316",bgColor:"#ffedd5"},"General Utilities":{icon:"🔧",color:"#71717a",bgColor:"#f4f4f5"},Hospitality:{icon:"🏨",color:"#f59e0b",bgColor:"#fef3c7"},"Food Delivery":{icon:"🍕",color:"#f97316",bgColor:"#ffedd5"},default:{icon:"⭐",color:"#eab308",bgColor:"#fef9c3"}},_=s=>({React:"/assets/img/cdn-assets/devicon-react-original.svg","Node.js":"/assets/img/cdn-assets/devicon-nodejs-original.svg",Flutter:"/assets/img/cdn-assets/devicon-flutter-original.svg",Firebase:"/assets/img/cdn-assets/devicon-firebase-plain.svg",MongoDB:"/assets/img/cdn-assets/devicon-mongodb-original.svg","Stripe API":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg","Google Maps API":"/assets/img/cdn-assets/devicon-google-original.svg","REST API":"/assets/img/cdn-assets/flaticon-2164832.png",Express:"/assets/img/cdn-assets/devicon-express-original.svg",MySQL:"/assets/img/cdn-assets/devicon-mysql-original.svg",PostgreSQL:"/assets/img/cdn-assets/devicon-postgresql-original.svg",Redux:"/assets/img/cdn-assets/devicon-redux-original.svg",TypeScript:"/assets/img/cdn-assets/devicon-typescript-original.svg",JavaScript:"/assets/img/cdn-assets/devicon-javascript-original.svg",Python:"/assets/img/cdn-assets/devicon-python-original.svg",Django:"/assets/img/cdn-assets/devicon-django-plain.svg","Vue.js":"/assets/img/cdn-assets/devicon-vuejs-original.svg",Angular:"/assets/img/cdn-assets/devicon-angularjs-original.svg",Docker:"/assets/img/cdn-assets/devicon-docker-original.svg",AWS:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",Git:"/assets/img/cdn-assets/devicon-git-original.svg",GraphQL:"/assets/img/cdn-assets/devicon-graphql-plain.svg","Tailwind CSS":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",Bootstrap:"/assets/img/cdn-assets/devicon-bootstrap-original.svg",Sass:"/assets/img/cdn-assets/devicon-sass-original.svg",Webpack:"/assets/img/cdn-assets/devicon-webpack-original.svg","Next.js":"/assets/img/cdn-assets/devicon-nextjs-original.svg",Kotlin:"/assets/img/cdn-assets/devicon-kotlin-original.svg",Swift:"/assets/img/cdn-assets/devicon-swift-original.svg",Java:"/assets/img/cdn-assets/devicon-java-original.svg",PHP:"/assets/img/cdn-assets/devicon-php-original.svg",Laravel:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",Redis:"/assets/img/cdn-assets/devicon-redis-original.svg",Nginx:"/assets/img/cdn-assets/devicon-nginx-original.svg"})[s]||"/assets/img/cdn-assets/flaticon-2164832.png",H=()=>{const{projectId:s}=O(),i=z("portfolio"),[t,o]=j.useState(null),[n,r]=j.useState(!0),[d,m]=j.useState([]),h=I.ASSETS_URL;j.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"}),(async()=>{r(!0);try{let l=null;if(u&&typeof u=="object")for(const c in u){const g=u[c].find(b=>(b.id?`${c}-${b.id}`:`${c}-${b.title.replace(/\s+/g,"-")}`)===s);if(g){l={...g,category:g.category||c};break}}if(!l)try{const{data:c}=await D.get("/projects"),p=c.find(g=>g._id===s);p&&(l={...p,id:p._id,platform:p.platform||"Web",category:p.category||"General",image:p.image.startsWith("http")?p.image:`${h}${p.image}`,details_image:p.image.startsWith("http")?p.image:`${h}${p.image}`})}catch(c){console.error("API Fetch failed for detail",c)}if(o(l),l){const c=l.category,p=(u[c]||[]).filter(g=>(g.id?`${c}-${g.id}`:`${c}-${g.title.replace(/\s+/g,"-")}`)!==s).map(g=>({...g,compositeId:g.id?`${c}-${g.id}`:`${c}-${g.title.replace(/\s+/g,"-")}`,category:c}));m(p.slice(0,3))}}catch(l){console.error("Error in detail fetching:",l)}finally{r(!1)}})()},[s]);const f=a=>k[a]||k.default,P=a=>(a||"uncategorized").toLowerCase().replace(/ /g,"-");return n?e.jsxs("div",{className:"loading-wrapper",children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{children:"Loading Project..."})]}):t?(f(t.category),e.jsxs("div",{children:[e.jsx(S,{title:`${t.title} - ${i.title}`,description:t.description,keywords:i.keywords,canonical:i.canonical}),e.jsx("div",{className:"breadcumb-area style2 bg-smoke4",children:e.jsx("div",{className:"breadcumb-wrapper",style:{backgroundImage:'url("/assets/img/bg/breadcumb-bg.webp")'},"data-aos":"fade-in","data-aos-duration":"1500",children:e.jsx("div",{className:"container space",children:e.jsxs("div",{className:"breadcumb-content pt-5",children:[e.jsx("h1",{className:"breadcumb-title",children:t.title}),e.jsxs("ul",{className:"breadcumb-menu",children:[e.jsx("li",{children:e.jsx(y,{to:"/",children:"Home"})}),e.jsx("li",{children:e.jsx(y,{to:"/portfolio",children:"Portfolio"})}),e.jsx("li",{children:t.title})]})]})})})}),e.jsx("div",{className:"project-content",children:e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"content-layout",children:[e.jsxs("div",{className:"main-column",children:[e.jsx("div",{className:"project-image-wrapper",children:e.jsx("img",{src:t.details_image||t.image||"/assets/img/default-project.webp",alt:t.title,className:"project-image"})}),e.jsxs("div",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Project Overview"}),e.jsx("p",{className:"section-text",children:t.project_overview||t.description})]}),t.technologies_used&&t.technologies_used.length>0&&e.jsxs("div",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Technologies Used"}),e.jsx("div",{className:"tech-stack-grid",children:t.technologies_used.map((a,l)=>e.jsxs("div",{className:"tech-item",children:[e.jsx("div",{className:"tech-icon-wrapper",children:e.jsx("img",{src:_(a),alt:a,className:"tech-logo",onError:c=>{c.target.src="/assets/img/cdn-assets/flaticon-2164832.png"}})}),e.jsx("span",{className:"tech-name",children:a})]},l))})]}),t.features&&t.features.length>0&&e.jsxs("div",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Key Features"}),e.jsx("div",{className:"features-grid",children:t.features.map((a,l)=>e.jsxs("div",{className:"d-flex align-item-center gap-3",children:[e.jsx("img",{src:"/assets/icons/checkmark.png",alt:"Feature",width:"20",height:"20",style:{objectFit:"contain"},className:"feature-icon",loading:"lazy"}),e.jsx("p",{className:"feature-text",children:a})]},l))})]}),t.challenges&&t.challenges.length>0&&e.jsxs("div",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Challenges & Solutions"}),e.jsx("div",{className:"challenges-list",children:t.challenges.map((a,l)=>e.jsxs("div",{className:"challenge-card",children:[e.jsxs("div",{className:"challenge-problem",children:[e.jsx("span",{className:"challenge-label",children:"Challenge:"}),e.jsx("p",{children:a.problem})]}),e.jsxs("div",{className:"challenge-solution",children:[e.jsx("span",{className:"solution-label",children:"Solution:"}),e.jsx("p",{children:a.solution})]})]},l))})]})]}),e.jsxs("aside",{className:"sidebar-column",children:[e.jsxs("div",{className:"info-card d-block",children:[e.jsx("h3",{className:"card-title",children:"Project Info"}),e.jsxs("ul",{className:"info-list",children:[e.jsxs("li",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Category"}),e.jsx("span",{className:"info-value",children:t.category})]}),e.jsxs("li",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Platform"}),e.jsx("span",{className:"info-value",children:t.platform})]}),e.jsxs("li",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Status"}),e.jsx("span",{className:`info-value status-badge ${t.status==="Live"?"live":"progress"}`,children:t.status})]})]}),t.link&&e.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"live-btn",children:[e.jsx("span",{className:"btn-icon",children:"🚀"}),"View Live Project"]})]}),t.timeline&&Object.keys(t.timeline).length>0&&e.jsxs("div",{className:"timeline-card",children:[e.jsx("h3",{className:"card-title",children:"Development Timeline"}),e.jsx("div",{className:"timeline-list",children:Object.entries(t.timeline).map(([a,l],c)=>e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-dot"}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("span",{className:"timeline-phase",children:a}),e.jsx("span",{className:"timeline-duration",children:l})]})]},c))})]})]})]}),d.length>0&&e.jsxs("div",{className:"related-section",children:[e.jsx("h2",{className:"related-title",children:"Related Projects"}),e.jsx("div",{className:"related-grid",children:d.map(a=>{const l=f(a.category);return e.jsxs(y,{to:`/portfolio/${P(a.category)}/${a.compositeId}`,className:"related-card",children:[e.jsxs("div",{className:"related-image",children:[e.jsx("img",{src:a.image||"/assets/img/default-project.webp",alt:a.title}),a.platform&&e.jsx("span",{className:"related-platform",children:a.platform})]}),e.jsxs("div",{className:"related-body",children:[e.jsx("h3",{className:"related-card-title",children:a.title}),e.jsx("p",{className:"related-desc",children:a.description}),e.jsx("span",{className:"related-category",style:{background:l.bgColor,color:l.color},children:a.category})]})]},a.compositeId)})})]})]})}),e.jsx("style",{jsx:!0,children:`
        .loading-wrapper,
        .error-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 40px;
          text-align: center;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e0e0e0;
          border-top-color: #163198;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .back-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 28px;
          background: #163198;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .back-btn:hover {
          background: #1c5bbf;
        }

        .breadcumb-area {
          background: #f2f5fa;
          border-bottom: 1px solid #e0e0e0;
        }
        .breadcumb-wrapper {
          padding: 40px 0;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .breadcumb-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }
        .breadcumb-content {
          position: relative;
          z-index: 1;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 16px;
          transition: opacity 0.2s;
        }
        .back-link:hover {
          opacity: 0.8;
        }
        .back-icon {
          font-size: 18px;
        }
        .project-title {
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          font-family: "Poppins", sans-serif;
        }
        .breadcumb-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
        .breadcumb-menu li {
          display: flex;
          align-items: center;
        }
        .breadcumb-menu li::after {
          content: "/";
          margin-left: 8px;
        }
        .breadcumb-menu li:last-child::after {
          display: none;
        }
        .breadcumb-menu a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
        }
        .breadcumb-menu a:hover {
          color: #fff;
        }

        .project-content {
          padding: 40px 0;
        }
        .container-fluid {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .content-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 30px;
        }

        .main-column {
          min-width: 0;
        }
        /* The artwork comes in three shapes — square marketing cards, portrait
           phone mockups and wide multi-screen collages. a full-width rule with no
           height limit sized them by whatever they happened to be, so a square
           1080px image rendered 988x988 and towered over the page while a
           landscape collage sat short beside it.

           Capping the HEIGHT instead gives every project the same visual
           weight: the box is a consistent size, the image sits centred inside
           it at its own proportions, and nothing is stretched or cropped. */
        .project-image-wrapper {
          background: #f2f5fa;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
          display: grid;
          place-items: center;
          padding: 22px;
          min-height: 320px;
        }
        .project-image {
          max-height: 520px;
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 6px;
        }
        @media (max-width: 767px) {
          .project-image-wrapper { padding: 14px; min-height: 220px; }
          .project-image { max-height: 340px; }
        }

        .content-section {
          background: #f2f5fa;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
        }
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 20px;
          font-family: "Poppins", sans-serif;
        }
        .section-text {
          font-size: 15px;
          line-height: 1.8;
          color: #666;
          margin: 0;
        }

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 16px;
        }
        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .tech-item:hover {
          background: #e9ecef;
          transform: translateY(-2px);
        }
        .tech-icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f5fa;
          border-radius: 8px;
          padding: 10px;
        }
        .tech-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .tech-name {
          font-size: 13px;
          font-weight: 600;
          color: #333;
          text-align: center;
        }

        .features-grid {
          display: grid;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .feature-icon {
          width: 24px;
          height: 24px;
          background: #e8f5e9;
          color: #388e3c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .feature-text {
          margin: 0;
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        .challenges-list {
          display: grid;
          gap: 20px;
        }
        .challenge-card {
          border-left: 3px solid #163198;
          padding-left: 20px;
        }
        .challenge-problem,
        .challenge-solution {
          margin-bottom: 12px;
        }
        .challenge-label,
        .solution-label {
          display: block;
          font-weight: 700;
          font-size: 14px;
          color: #212121;
          margin-bottom: 6px;
        }
        .challenge-problem p,
        .challenge-solution p {
          margin: 0;
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        .sidebar-column {
          position: sticky;
          top: 20px;
          height: fit-content;
        }
        .info-card,
        .timeline-card {
          background: #f2f5fa;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 20px;
          font-family: "Poppins", sans-serif;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          border-top: 1px solid #f0f0f0;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .info-label {
          font-size: 14px;
          font-weight: 600;
          color: #878787;
        }
        .info-value {
          font-size: 14px;
          font-weight: 600;
          color: #212121;
        }
        .status-badge {
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .status-badge.live {
          background: #e8f5e9;
          color: #388e3c;
        }
        .status-badge.progress {
          background: #fef3c7;
          color: #f57c00;
        }

        .live-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          background: #163198;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .live-btn:hover {
          background: #1c5bbf;
        }
        .btn-icon {
          font-size: 18px;
        }

        .timeline-list {
          display: grid;
          gap: 16px;
        }
        .timeline-item {
          display: flex;
          gap: 12px;
          position: relative;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          background: #163198;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .timeline-item:not(:last-child) .timeline-dot::after {
          content: "";
          position: absolute;
          left: 5px;
          top: 16px;
          width: 2px;
          height: calc(100% + 4px);
          background: #e0e0e0;
        }
        .timeline-content {
          flex: 1;
        }
        .timeline-phase {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #212121;
          margin-bottom: 4px;
        }
        .timeline-duration {
          display: block;
          font-size: 13px;
          color: #878787;
        }

        .related-section {
          margin-top: 60px;
        }
        .related-title {
          font-size: 28px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 30px;
          font-family: "Poppins", sans-serif;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .related-card {
          text-decoration: none;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s;
        }
        .related-card:hover {
          transform: translateY(-5px);
        }
        .related-image {
          height: 180px;
          position: relative;
        }
        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .related-platform {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
        .related-body {
          padding: 16px;
        }
        .related-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 8px;
        }
        .related-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          margin: 0 0 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .related-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        @media (max-width: 992px) {
          .content-layout {
            grid-template-columns: 1fr;
          }
          .sidebar-column {
            position: static;
          }
        }
      `})]})):e.jsxs("div",{className:"error-wrapper",children:[e.jsx("h2",{children:"Project Not Found"}),e.jsx("p",{children:"Sorry, the project you're looking for doesn't exist."}),e.jsx(y,{to:"/portfolio",className:"back-btn",children:"Back to Portfolio"})]})};export{H as default};
