import company from "./company";

// SEO metadata for all pages
export const seoConfig = {
  home: {
    title:
      "Techland IT Solutions - Best App, Web & Digital Marketing Company in Hyderabad",
    description:
      `Leading IT solutions company in Hyderabad. Expert mobile app development, web development, digital marketing, custom software & UI/UX design services. Transform your business with Techland IT Solutions. Call ${company.phone.compact}`,
    keywords:
      "IT company Hyderabad, app development, web development, digital marketing, software development, UI/UX design, Techland IT Solutions",
    canonical: "https://techlanditsolutions.com/",
  },

  about: {
    title: "About Us - Techland IT Solutions | Leading IT Company in Hyderabad",
    description:
      `Learn about Techland IT Solutions - Hyderabad's trusted IT partner. We deliver innovative mobile apps, websites, digital marketing & custom software solutions. Meet our expert team. Call ${company.phone.compact}`,
    keywords:
      "about Techland IT Solutions, IT company Hyderabad, software company, web development company, app development company",
    canonical: "https://techlanditsolutions.com/about",
  },

  services: {
    title:
      "Our Services - Mobile App, Web & Digital Marketing | Techland IT Solutions",
    description:
      `Comprehensive IT services in Hyderabad: Mobile app development, web development, digital marketing, custom software, UI/UX design & IT staffing. Get expert solutions. Call ${company.phone.compact}`,
    keywords:
      "IT services Hyderabad, mobile app development, web development services, digital marketing agency, custom software development",
    canonical: "https://techlanditsolutions.com/services",
  },

  portfolio: {
    title: "Our Portfolio - Successful Projects | Techland IT Solutions",
    description:
      `Explore our portfolio of successful mobile apps, websites & digital marketing campaigns. See how Techland IT Solutions delivers excellence for clients in Hyderabad and beyond. Call ${company.phone.compact}`,
    keywords:
      "portfolio, projects, case studies, mobile apps, websites, Techland IT Solutions work",
    canonical: "https://techlanditsolutions.com/portfolio",
  }, 

  contact: {
    title: "Contact Us - Get in Touch | Techland IT Solutions Hyderabad",
    description:
      `Contact Techland IT Solutions for expert IT services in Hyderabad. Get free consultation for mobile app development, web development & digital marketing. Call ${company.phone.compact} or visit our office`,
    keywords:
      "contact Techland IT Solutions, IT company Hyderabad contact, get quote, free consultation, Hyderabad IT services",
    canonical: "https://techlanditsolutions.com/contact",
  },

  blogs: {
    title: "Tech Blog - Latest IT Trends & Insights | Techland IT Solutions",
    description:
      "Read our tech blog for latest insights on mobile app development, web development, digital marketing, AI & technology trends. Expert articles from Techland IT Solutions team",
    keywords:
      "tech blog, IT articles, mobile app development tips, web development trends, digital marketing insights",
    canonical: "https://techlanditsolutions.com/blogs",
  },

  ourTeam: {
    title: "Our Team - Meet the Experts | Techland IT Solutions",
    description:
      `Meet the talented team behind Techland IT Solutions. Our expert developers, designers & digital marketers in Hyderabad deliver world-class IT solutions. Call ${company.phone.compact}`,
    keywords:
      "Techland IT team, expert developers, IT professionals Hyderabad, software engineers, designers",
    canonical: "https://techlanditsolutions.com/our-team",
  },

  // Default fallback
  default: {
    title: "Techland IT Solutions - IT Services in Hyderabad",
    description:
      "Professional IT solutions company in Hyderabad offering mobile app development, web development, digital marketing and custom software services.",
    keywords: "Techland IT Solutions, IT services, Hyderabad",
    canonical: "https://techlanditsolutions.com/",
  },
};

// Helper function to get SEO data for a page
export const getSEO = (pageName) => {
  return seoConfig[pageName] || seoConfig.default;
};
