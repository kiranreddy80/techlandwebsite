import React from "react";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import HomeHero from "./HomeHero";
import OurProcess from "./OurProcess";
import HomeServices from "./HomeServices";
import MobileAppProjects from "./MobileAppProjects";
import WebsitesProjects from "./WebsitesProjects";
import HomeAboutUs from "./HomeAboutUs";
import OurFeatures from "./OurFeatures";
import StartWorkWithUS from "./StartWorkWithUS";
import HomeTestimonials from "./HomeTestimonials";
import HomeFAQ from "./HomeFAQ";
import HomeContactUs from "./HomeContactUs";
import OurClients from "./OurClients";

const HomeLayout = () => {
  const seo = getSEO("home");

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <HomeHero />
      <HomeAboutUs />
      <OurClients />
      <HomeServices />
      <MobileAppProjects />
      <WebsitesProjects />
      <OurProcess />
      {/* Hidden for now — the copy in here is generic blockchain filler
          ("immutable transactions", "public ledgers") rather than anything
          Techland does. Re-enable once it has been rewritten. */}
      {/* <OurFeatures /> */}
      <StartWorkWithUS />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeContactUs />
    </div>
  );
};

export default HomeLayout;
