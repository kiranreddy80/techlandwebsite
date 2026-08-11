import{j as e}from"./icons-vendor-DWk9LYok.js";import{r as f,L as m}from"./react-vendor-iesUOuYh.js";import{g as T,S as R}from"./seoConfig-DSEkwWx-.js";import{b as L,d as D}from"./index-DjLZX98b.js";import{c as x}from"./projectsData-D8oepnKn.js";import"./animation-vendor-lhfjd4vI.js";import"./utils-D_wzFjLH.js";const P={All:{icon:"📋",color:"#475569",bgColor:"#f8fafc"},"E-Commerce":{icon:"🛒",color:"#475569",bgColor:"#f8fafc"},Healthcare:{icon:"🏥",color:"#475569",bgColor:"#f8fafc"},Education:{icon:"🎓",color:"#475569",bgColor:"#f8fafc"},Finance:{icon:"💰",color:"#475569",bgColor:"#f8fafc"},"Social Media":{icon:"📱",color:"#475569",bgColor:"#f8fafc"},Entertainment:{icon:"🎬",color:"#475569",bgColor:"#f8fafc"},"Food & Delivery":{icon:"🍔",color:"#475569",bgColor:"#f8fafc"},Travel:{icon:"✈️",color:"#475569",bgColor:"#f8fafc"},"Real Estate":{icon:"🏠",color:"#475569",bgColor:"#f8fafc"},Fitness:{icon:"💪",color:"#475569",bgColor:"#f8fafc"},Business:{icon:"💼",color:"#475569",bgColor:"#f8fafc"},Productivity:{icon:"✅",color:"#475569",bgColor:"#f8fafc"},Gaming:{icon:"🎮",color:"#475569",bgColor:"#f8fafc"},News:{icon:"📰",color:"#475569",bgColor:"#f8fafc"},Music:{icon:"🎵",color:"#475569",bgColor:"#f8fafc"},Photography:{icon:"📷",color:"#475569",bgColor:"#f8fafc"},Utilities:{icon:"⚙️",color:"#475569",bgColor:"#f8fafc"},Communication:{icon:"💬",color:"#475569",bgColor:"#f8fafc"},"Job Search":{icon:"🔍",color:"#475569",bgColor:"#f8fafc"},Financial:{icon:"💵",color:"#475569",bgColor:"#f8fafc"},"Non-Profit":{icon:"❤️",color:"#475569",bgColor:"#f8fafc"},"Wedding Planning":{icon:"💒",color:"#475569",bgColor:"#f8fafc"},"Car Rental":{icon:"🚗",color:"#475569",bgColor:"#f8fafc"},"HR & Recruitment":{icon:"👥",color:"#475569",bgColor:"#f8fafc"},Delivery:{icon:"📦",color:"#475569",bgColor:"#f8fafc"},"General Utilities":{icon:"🔧",color:"#475569",bgColor:"#f8fafc"},Hospitality:{icon:"🏨",color:"#475569",bgColor:"#f8fafc"},"Food Delivery":{icon:"🍕",color:"#475569",bgColor:"#f8fafc"},default:{icon:"⭐",color:"#475569",bgColor:"#f8fafc"}},O=()=>{if(!x||typeof x!="object")return[];const a=[];for(const i in x)(x[i]||[]).forEach(s=>{if(s&&s.title){const u=s.id?`${i}-${s.id}`:`${i}-${s.title.replace(/\s+/g,"-")}`;a.push({...s,id:u,category:i})}});return a},h=O(),I=["All",...new Set(h.map(a=>a.category))],B=()=>{const a=T("portfolio"),[i,s]=f.useState(h),[u,A]=f.useState(I),[c,j]=f.useState(["All"]),[d,z]=f.useState("all"),[g,$]=f.useState(!1),v=L.ASSETS_URL,C=h.length?null:"Project data is not available or is in an incorrect format.";f.useEffect(()=>{let o=!1;return(async()=>{try{const{data:l}=await D.get("/projects");if(o||!Array.isArray(l))return;const n=l.filter(r=>r.isActive!==!1).map(r=>{var S;return{...r,id:r._id,platform:"Web",image:(S=r.image)!=null&&S.startsWith("http")?r.image:`${v}${r.image}`}});if(!n.length)return;const b=[...n,...h];s(b),A(["All",...new Set(b.map(r=>r.category))])}catch(l){console.warn("[/projects] API unavailable, showing bundled projects.",l==null?void 0:l.message)}})(),()=>{o=!0}},[v]);const E=o=>{j(o==="All"?["All"]:t=>{const l=t.filter(n=>n!=="All");if(l.includes(o)){const n=l.filter(b=>b!==o);return n.length===0?["All"]:n}else return[...l,o]})},y=o=>{z(o)},N=f.useMemo(()=>{let o=i;return d==="mobile"?o=o.filter(t=>t.platform==="Android"||t.platform==="iOS"):d==="web"&&(o=o.filter(t=>t.platform==="Web")),c.includes("All")||(o=o.filter(t=>c.includes(t.category))),o},[i,d,c]),w=o=>o==="all"?i.length:o==="mobile"?i.filter(t=>t.platform==="Android"||t.platform==="iOS").length:o==="web"?i.filter(t=>t.platform==="Web").length:0,k=o=>P[o]||P.default,p=o=>(o||"uncategorized").toLowerCase().replace(/ /g,"-"),F=()=>{$(!g)};return C?e.jsx("div",{className:"error-wrapper",children:e.jsx("p",{children:C})}):e.jsxs("div",{children:[e.jsx(R,{title:a.title,description:a.description,keywords:a.keywords}),e.jsx("div",{className:"breadcumb-area style2 bg-smoke4",children:e.jsx("div",{className:"breadcumb-wrapper",style:{backgroundImage:'url("/assets/img/bg/breadcumb-bg.webp")'},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"breadcumb-content",children:[e.jsx("h1",{className:"breadcumb-title",children:"Portfolio"}),e.jsxs("ul",{className:"breadcumb-menu",children:[e.jsx("li",{children:e.jsx(m,{to:"/",children:"Home"})}),e.jsx("li",{children:"Portfolio"})]})]})})})}),e.jsx("div",{className:"case-area space",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row justify-content-center text-center",children:e.jsx("div",{className:"col-xl-12",children:e.jsx("span",{className:"sub-title mb-5",children:"Our Latest Projects"})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"case-menu mb-5 text-center",children:[e.jsxs("button",{className:`case4-btn ${d==="all"?"active":""}`,onClick:()=>y("all"),children:["All Projects (",w("all"),")"]}),e.jsxs("button",{className:`case4-btn ${d==="mobile"?"active":""}`,onClick:()=>y("mobile"),children:["Mobile Apps (",w("mobile"),")"]}),e.jsxs("button",{className:`case4-btn ${d==="web"?"active":""}`,onClick:()=>y("web"),children:["Web Projects (",w("web"),")"]})]})})}),e.jsxs("div",{className:"portfolio-layout",children:[e.jsx("div",{className:"mobile-filter-toggle d-lg-none mb-4",children:e.jsxs("button",{className:"filter-toggle-btn",onClick:F,children:[e.jsx("span",{className:"toggle-icon",children:g?"✕":"☰"}),g?"Hide Filters":"Show Filters",e.jsx("span",{className:"selected-badge",children:c.length})]})}),e.jsx("div",{className:`col-lg-3 portfolio-sidebar ${g?"show":""}`,children:e.jsxs("div",{className:"sidebar-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsxs("h3",{className:"widget-title",children:[e.jsx("span",{className:"title-icon",children:"🎯"}),"Filter by Category"]}),e.jsx("p",{className:"widget-subtitle",children:c.includes("All")?"All categories selected":`${c.length} selected`})]}),e.jsx("div",{className:"category-filter-grid",children:u.map(o=>{const t=k(o),l=c.includes(o);return e.jsxs("div",{className:`category-pill ${l?"active":""}`,onClick:()=>E(o),style:{"--pill-color":t.color,"--pill-bg":t.bgColor},children:[e.jsxs("div",{className:"pill-content",children:[e.jsx("span",{className:"pill-icon",children:t.icon}),e.jsx("span",{className:"pill-label",children:o}),l&&e.jsx("span",{className:"pill-check",children:e.jsx("img",{src:"/assets/icons/checkmark.png",alt:"Selected",width:"14",height:"14",style:{objectFit:"contain"},loading:"lazy"})})]}),e.jsx("div",{className:"pill-ripple"})]},o)})})]})}),e.jsx("div",{className:"col-lg-9 portfolio-content",children:e.jsx("div",{className:"row",children:N.length===0?e.jsx("div",{className:"col-12 text-center",children:e.jsx("p",{className:"no-projects-message",children:"No projects found matching your filters."})}):N.map(o=>{k(o.category);const t=p(o.category),l=o.platform?o.platform.toLowerCase():"";return e.jsx("div",{className:`col-xl-4 col-lg-6 col-md-6 mb-4 project-item ${t} ${l}`,children:e.jsxs("div",{className:"case-box style2 inner-style1 position-relative",children:[e.jsxs("div",{className:"case-img global-img",children:[e.jsx("img",{src:o.image||"/assets/img/default-project.webp",alt:o.title}),e.jsx(m,{to:`/portfolio/${p(o.category)}/${o.id}`,className:"icon-btn",children:e.jsx("img",{src:"/assets/icons/forward.png",alt:"View",width:"20",height:"20",style:{objectFit:"contain"},loading:"lazy"})})]}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:e.jsx(m,{to:`/portfolio/${p(o.category)}/${o.id}`,children:o.title})}),e.jsxs("div",{className:"case-meta",children:[e.jsx("span",{className:"case-categ",children:o.category}),o.platform&&e.jsxs("span",{className:"case-platform",children:[" ","• ",o.platform]})]})]}),e.jsx("div",{className:"case-action",children:e.jsx(m,{to:`/portfolio/${p(o.category)}/${o.id}`,className:"case-btn",children:e.jsx("i",{className:"fa-regular fa-arrow-right"})})})]})},o.id)})})})]})]})}),e.jsx("style",{jsx:!0,children:`
        /* ============================================
           PROFESSIONAL CATEGORY FILTER STYLES
           ============================================ */

        .portfolio-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .portfolio-sidebar {
          flex: 0 0 280px;
          position: sticky;
          top: 100px;
          height: fit-content;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }

        .portfolio-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .portfolio-sidebar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .portfolio-sidebar::-webkit-scrollbar-thumb {
          background: #64748b;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .portfolio-sidebar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        .portfolio-content {
          flex: 1;
          min-width: 0;
        }

        /* Widget Styling */
        .sidebar-widget {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05),
            0 10px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
        }

        .widget-header {
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .widget-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 6px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #1e293b;
          letter-spacing: -0.02em;
        }

        .title-icon {
          font-size: 22px;
          filter: grayscale(0.2);
        }

        .widget-subtitle {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        /* Category Filter Grid */
        .category-filter-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Professional Category Pills */
        .category-pill {
          position: relative;
          cursor: pointer;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
        }

        .category-pill::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          transition: background 0.25s ease;
          z-index: 0;
        }

        .category-pill:hover {
          border-color: #cbd5e1;
          background: #f1f5f9;
          transform: translateX(4px);
        }

        .category-pill:hover::before {
          background: rgba(100, 116, 139, 0.02);
        }

        .category-pill.active {
          border-color: #475569;
          background: #475569;
          box-shadow: 0 2px 8px rgba(71, 85, 105, 0.15);
          transform: translateX(4px);
        }

        .category-pill.active::before {
          background: transparent;
        }

        .pill-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
        }

        .pill-icon {
          font-size: 18px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
          filter: grayscale(0.1);
        }

        .category-pill:hover .pill-icon {
          transform: scale(1.1);
        }

        .category-pill.active .pill-icon {
          transform: scale(1.05);
          filter: grayscale(0) brightness(1.2);
        }

        .pill-label {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          transition: color 0.25s ease;
          letter-spacing: -0.01em;
        }

        .category-pill:hover .pill-label {
          color: #1e293b;
        }

        .category-pill.active .pill-label {
          color: #ffffff;
          font-weight: 700;
        }

        .pill-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: checkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @keyframes checkPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        /* Ripple Effect */
        .pill-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: #475569;
          opacity: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .category-pill:active .pill-ripple {
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        /* Mobile Filter Toggle */
        .filter-toggle-btn {
          width: 100%;
          padding: 14px 20px;
          background: #475569;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(71, 85, 105, 0.15);
          position: relative;
          overflow: hidden;
        }

        .filter-toggle-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          transition: left 0.5s ease;
        }

        .filter-toggle-btn:hover::before {
          left: 100%;
        }

        .filter-toggle-btn:hover {
          background: #334155;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(71, 85, 105, 0.25);
        }

        .toggle-icon {
          font-size: 18px;
          font-weight: bold;
        }

        .selected-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Projects Count */
        .projects-count {
          color: #64748b;
          font-size: 16px;
          margin: 0;
          padding: 15px 20px;
          background: #f8fafc;
          border-radius: 10px;
          border-left: 3px solid #475569;
        }

        .projects-count strong {
          color: #475569;
          font-weight: 700;
          font-size: 18px;
        }

        /* No Projects Message */
        .no-projects-message {
          padding: 80px 20px;
          font-size: 18px;
          color: #94a3b8;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px dashed #cbd5e1;
        }

        /* Project Items */
        .project-item {
          transition: all 0.3s ease;
        }

        .case-box {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
        }

        .case-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .case-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.3;
        }

        .case-title a {
          color: #ffffffff !important;
          text-decoration: none;
        }

        .case-categ {
          color: #ffffffff !important;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .case-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
        }

        .case-platform {
          color: #94a3b8;
          font-size: 13px;
        }

        .mobile-filter-toggle {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .portfolio-sidebar {
            flex: 0 0 100%;
            width: 100%;
            max-height: none;
            position: relative;
            top: 0;
            display: none;
          }

          .portfolio-sidebar.show {
            display: block;
            animation: slideDown 0.3s ease-out;
          }

          .portfolio-content {
            flex: 0 0 100%;
          }

          .mobile-filter-toggle {
            display: block;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})};export{B as default};
