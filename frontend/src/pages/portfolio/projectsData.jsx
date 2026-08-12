

import React, { useState } from "react";

// Project asset paths
const abhisreeweb = "/assets/media/Assets/Projectimg/Zenfoo AppScreen.webp";
const abhisreewebdetails = "/assets/media/Assets/Projectimg/Zenfoo View.webp";
const cashexbiteboxweb = "/assets/media/Assets/Projectimg/cashexbiteboxweb.webp";
const cashexweb = "/assets/media/Assets/Projectimg/cashexweb.webp";
const meatoweb = "/assets/media/Assets/Projectimg/meatoweb.webp";
const nudealweb = "/assets/media/Assets/Projectimg/nudealweb.webp";
const templecityweb = "/assets/media/Assets/Projectimg/templecityweb.webp";
const workoasisweb = "/assets/media/Assets/Projectimg/workoasisweb.webp";
const sapid = "/assets/media/Assets/Projectimg/sapid.webp";
const sapidimage = "/assets/media/Assets/Projectimg/sapiddetail.webp";
const templecity = "/assets/media/Assets/Projectimg/templecity.webp";
const poolpal = "/assets/media/Assets/Projectimg/Poolpal_Main.webp";
const poolpalimg = "/assets/media/Assets/Projectimg/Poolpal_View.webp";
const Zapp = "/assets/media/Assets/Projectimg/ZaapGo_Main.webp";
const Zappimg = "/assets/media/Assets/Projectimg/ZaapGo_View.webp";
const Nama = "/assets/media/Assets/Projectimg/NamaOutsourcing_Main.webp";
const Namaimg = "/assets/media/Assets/Projectimg/NamaOutsourcing_View.webp";
const Hcit = "/assets/media/Assets/Projectimg/HCIT_Main.webp";
const Hcitimg = "/assets/media/Assets/Projectimg/HCIT_View.webp";
const Yuvaride = "/assets/media/Assets/Projectimg/YuvaRide_Main.webp";
const Yuvarideimg = "/assets/media/Assets/Projectimg/YuvaRide_View.webp";
const Govinda = "/assets/media/Assets/Projectimg/GovindaTech_Main.webp";
const Govindaimg = "/assets/media/Assets/Projectimg/GovindaTech_View.webp";
const Bestseeds = "/assets/media/Assets/Projectimg/Best Seeds_Main.webp";
const Bestseedsimg = "/assets/media/Assets/Projectimg/Best Seeds_View.webp";
const Paywallet = "/assets/media/Assets/Projectimg/PayWallet_Main.webp";
const Paywalletimg = "/assets/media/Assets/Projectimg/PayWallet_View.webp";
const Vnews = "/assets/media/Assets/Projectimg/VNews_Main.webp";
const Vnewsimg = "/assets/media/Assets/Projectimg/VNews_View.webp";
const Viswam = "/assets/media/Assets/Projectimg/Viswam.webp";
const Viswamimg = "/assets/media/Assets/Projectimg/Vishwamimg.webp";
const Trustlab = "/assets/media/Assets/Projectimg/Trustlab_Main.webp";
const Trustlabimg = "/assets/media/Assets/Projectimg/TrustLab_View.webp";
const NudealView = "/assets/media/Assets/Projectimg/Nudeal_View.webp";
const MeatoView = "/assets/media/Assets/Projectimg/MeatO_View.webp";
const TemplecityView = "/assets/media/Assets/Projectimg/Temple City View.webp";
const ZenfooWeb = "/assets/media/Assets/Projectimg/Zenfoo_Web.webp";
const ViswamWeb = "/assets/media/Assets/Projectimg/Viswam_Web.webp";
const TrustlabWeb = "/assets/media/Assets/Projectimg/Trustlab_Web.webp";
const BestSeedsWeb = "/assets/media/Assets/Projectimg/BestSeeds_Web.webp";
const CashExPhone = "/assets/media/Assets/Projectimg/CashEx_Main.webp";
const ZaapGoPhone = "/assets/media/Assets/Projectimg/ZaapGo_Phone.webp";
const MyDealPhone = "/assets/media/Assets/Projectimg/MyDeal_Main.webp";
const MyDealWeb = "/assets/media/Assets/Projectimg/MyDeal_Web.webp";
const GoCarCleanPhone = "/assets/media/Assets/Projectimg/GoCarClean_Main.webp";
const GoCarCleanWeb = "/assets/media/Assets/Projectimg/GoCarClean_Web.webp";
const NudealPhone = "/assets/media/Assets/Projectimg/Nudeal_Main.webp";
const MeatoPhone = "/assets/media/Assets/Projectimg/MeatO_Main.webp";
const TemplecityPhone = "/assets/media/Assets/Projectimg/Temple City_Main.webp";
const YuvarideWeb = "/assets/media/Assets/Projectimg/yuvarideweb.webp";
const Boti = "/assets/media/Assets/Projectimg/Boutique_Main.webp";
const Botiimg = "/assets/media/Assets/Projectimg/Boutique_View.webp";





/**
 * Which mockup to show for a project, per tab.
 *
 * The catalogue stores one `image` per project, chosen for whichever platform
 * the work is best known as. That reads oddly once the list is filtered: NUDEAL
 * and Meato are mobile products whose card artwork is a laptop, so the Mobile
 * Apps tab was showing laptops, and the web-only builds are laptop mockups that
 * would look wrong under Mobile.
 *
 * Only overrides live here. A project with no entry — or no artwork for the tab
 * being viewed — keeps its own `image`, so nothing is ever blank.
 *
 * Classified by looking at every file: `X_Main` is a phone for app projects but
 * a laptop for web ones (GovindaTech, Nama, HCIT, ZaapGo), so the suffix alone
 * cannot be trusted.
 */
export const platformArtwork = {
  NUDEAL: { mobile: NudealPhone, web: nudealweb },
  ZENFOO: { web: ZenfooWeb },
  "MY DEAL": { mobile: MyDealPhone, web: MyDealWeb },
  "GO CAR CLEAN": { mobile: GoCarCleanPhone, web: GoCarCleanWeb },
  Meato: { mobile: MeatoPhone, web: meatoweb },
  "Temple City": { mobile: TemplecityPhone, web: templecityweb },
  "YUVA RIDE": { mobile: Yuvaride, web: YuvarideWeb },
  "Cashex Bitebox": { mobile: CashExPhone, web: cashexbiteboxweb },
  "Best Seeds": { mobile: Bestseeds, web: BestSeedsWeb },
  SAPID: { mobile: sapid },
  "Healthcare Solutions": { mobile: Trustlab, web: TrustlabWeb },
  "Viswam Realty Connect": { mobile: Viswam, web: ViswamWeb },
  "Botique Dekho": { mobile: Boti },
  "Pay Wallet": { mobile: Paywallet },
  "V NEWS": { mobile: Vnews },
  "POOL PAL": { mobile: poolpal },
  GOVINDHATECH: { web: Govinda },
  "NAMA OUTSOURCING": { web: Nama },
  "HC IT SOLUTIONS": { web: Hcit },
  "ZAPP GO": { mobile: ZaapGoPhone, web: Zapp },
};

/** The image a card should use for the tab currently being viewed. */
export const artworkFor = (project, type) => {
  const set = platformArtwork[project?.title];
  return (set && set[type]) || project?.image || "";
};

export const categories = {
  "E-Commerce": [
    {
      id: 2,
      title: "NUDEAL",
      description:
        "A comprehensive multi-vendor marketplace that connects customers with a wide range of sellers.",
      link: "https://nudeal.in",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
      ],
      status: "Live",
      platform: "Mobile",
      image: nudealweb,
      details_image: NudealView,
      project_overview:
        "NUDEAL is a comprehensive multi-vendor marketplace that connects customers with a wide range of sellers through a clean, intuitive, and scalable platform.",
      features: [
        "Customer mobile app for browsing, ordering, and payments",
        "Vendor management and multi-seller ecosystem",
        "Secure payment processing and order tracking",
        "Intuitive user interface",
        "Scalable architecture",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "14 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Managing multiple vendors with different product catalogs",
          solution:
            "Implemented a flexible vendor management system with customizable product attributes",
        },
        {
          problem:
            "Ensuring secure payment processing for multiple stakeholders",
          solution:
            "Integrated Stripe API with escrow functionality to protect both buyers and sellers",
        },
      ],
    },
    {
      id: 3,
      title: "MY DEAL",
      description:
        "An innovative reward-based commerce application where customers receive scratch cards with purchases.",
      link: "",
      technologies_used: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Payment Gateway",
      ],
      status: "Live",
      platform: "Mobile",
      image: MyDealPhone,
      details_image: MyDealWeb,
      project_overview:
        "MY DEAL is an innovative reward-based commerce application. Customers purchasing new products receive scratch cards, and winning users are rewarded with doorstep delivery of goods.",
      features: [
        "Reward system with scratch cards",
        "Product catalog and purchasing",
        "Winner notification system",
        "End-to-end logistics coordination for prize delivery",
        "Vendor management system",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "2 weeks",
        Development: "12 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Creating a fair and transparent reward system",
          solution:
            "Implemented a blockchain-based algorithm to ensure randomness in scratch card results",
        },
        {
          problem:
            "Managing logistics for prize delivery across multiple regions",
          solution:
            "Developed a custom logistics management system with route optimization and delivery tracking",
        },
      ],
    },
  ],
  "Food & Delivery": [
    {
      id: 1,
      title: "Cashex Bitebox",
      description:
        "India's first food pre-ordering platform designed specifically for college campuses.",
      link: "",
      technologies_used: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Web & Mobile",
      image: cashexbiteboxweb,
      details_image: cashexweb,
      project_overview:
        "Cashex-Bitebox is India's first food pre-ordering platform designed specifically for college campuses. It allows students to pre-book meals from campus canteens, significantly reducing waiting time during peak hours.",
      features: [
        "Food booking mobile application",
        "Order scheduling and queue management",
        "Vendor-side order handling",
        "Campus-specific customization",
        "Real-time notifications",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "14 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Managing peak hour order volumes without system overload",
          solution:
            "Implemented a queue-based system with load balancing to handle high traffic during meal times",
        },
        {
          problem:
            "Integrating with multiple campus canteens with different workflows",
          solution:
            "Created a flexible vendor management system that adapts to each canteen's specific requirements",
        },
      ],
    },
    {
      id: 2,
      title: "Meato",
      description:
        "A robust, scalable meat delivery ecosystem built with three dedicated applications.",
      link: "",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Mobile",
      image: meatoweb,
      details_image: MeatoView,
      project_overview:
        "Meato is a robust, scalable meat delivery ecosystem built with three dedicated applications to support seamless operations.",
      features: [
        "Customer App: Browse and order from nearby meat vendors",
        "Vendor App: Inventory, order, and sales management",
        "Delivery Partner App: Route optimization and real-time delivery tracking",
        "Quality assurance system",
        "Temperature-controlled delivery tracking",
      ],
      timeline: {
        "Research & Planning": "3 weeks",
        "UI/UX Design": "3 weeks",
        Development: "16 weeks",
        "Testing & QA": "3 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem: "Ensuring food safety and quality during delivery",
          solution:
            "Implemented IoT temperature sensors in delivery vehicles with real-time monitoring and alerts",
        },
        {
          problem: "Optimizing delivery routes for perishable goods",
          solution:
            "Developed a custom algorithm that prioritizes delivery routes based on perishability and distance",
        },
      ],
    },
    {
      id: 3,
      title: "Best Seeds",
      description:
        "A seafood delivery and seed supply platform delivering fish, prawns, and related seeds.",
      link: "https://bestseed.in",
      technologies_used: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Web & Mobile",
      image: Bestseeds, // No image available
      details_image: Bestseedsimg, // No image available
      project_overview:
        "Best Seeds is a seafood delivery and seed supply platform delivering fish, prawns, and related seeds sourced from onboarded fish hatcheries.",
      features: [
        "Bulk order support with vehicle facility",
        "Vendor onboarding from coastal regions of Andhra Pradesh",
        "Nationwide delivery coverage",
        "Timely delivery aligned with booking schedules",
        "Quality assurance for seafood and seeds",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "16 weeks",
        "Testing & QA": "3 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem: "Managing nationwide delivery of perishable goods",
          solution:
            "Implemented a cold chain management system with specialized delivery vehicles and real-time temperature monitoring",
        },
        {
          problem:
            "Coordinating with multiple hatcheries across different regions",
          solution:
            "Developed a vendor management system with standardized quality checks and inventory synchronization",
        },
      ],
    },
    {
      id: 4,
      title: "SAPID",
      description:
        "A flagship hospitality brand in Hyderabad with 11+ outlets across Telangana.",
      link: "https://sapid.co.in",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Mobile",
      image: sapid,
      details_image: sapidimage,
      project_overview:
        "SAPID is a flagship hospitality brand in Hyderabad with 11+ outlets across Telangana. Techland IT Solutions delivered a complete digital ecosystem supporting multiple business verticals.",
      features: [
        "Food Ordering App",
        "Dine-In Table Booking App",
        "Room Reservation App",
        "Banquet Hall Booking App",
        "Vendor Management App",
        "Delivery Partner App",
      ],
      timeline: {
        "Research & Planning": "3 weeks",
        "UI/UX Design": "4 weeks",
        Development: "20 weeks",
        "Testing & QA": "4 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem:
            "Integrating multiple business verticals into a cohesive digital ecosystem",
          solution:
            "Developed a unified backend system with microservices architecture to handle different business operations",
        },
        {
          problem: "Managing real-time inventory across 11+ outlets",
          solution:
            "Implemented a centralized inventory management system with real-time synchronization across all locations",
        },
      ],
    },
  ],
  "Grocery Delivery": [
    {
      id: 1,
      title: "ZENFOO",
      description:
        "A multi-vendor grocery, vegetable, and food delivery platform operating in Andhra Pradesh.",
      link: "https://zenfoo.in",
      technologies_used: [
        "React",
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Mobile & Web",
      image: abhisreeweb, // Using existing image as placeholder
      details_image: abhisreewebdetails,
      project_overview:
        "ZENFOO is a multi-vendor grocery, vegetable, and food delivery platform currently operating in Andhra Pradesh, with plans to expand pan-India.",
      features: [
        "Multi-vendor onboarding",
        "Real-time inventory and order management",
        "Scalable architecture for nationwide expansion",
        "Customer app with ordering and tracking",
        "Vendor app with inventory management",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "14 weeks",
        "Testing & QA": "3 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem:
            "Building a scalable architecture to support nationwide expansion",
          solution:
            "Implemented a microservices architecture with cloud-based infrastructure that can dynamically scale based on demand",
        },
        {
          problem: "Managing real-time inventory across multiple vendors",
          solution:
            "Developed a centralized inventory management system with real-time synchronization and automated stock alerts",
        },
      ],
    },
  ],
  "Devotional & Spiritual": [
    {
      id: 1,
      title: "Temple City",
      description:
        "India's first all-in-one devotional services application connecting devotees and priests.",
      link: "https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Payment Gateway",
      ],
      status: "Live",
      platform: "Mobile",
      image: templecity,
      details_image: TemplecityView,
      project_overview:
        "Temple City is India's first all-in-one devotional services application, designed to digitally connect devotees and priests.",
      features: [
        "Pujari App: Enables priests to register, manage availability, and offer services",
        "Devotee App: Allows users to book pujas based on time, requirements, and availability",
        "Digital payment system for offerings",
        "Live streaming of special ceremonies",
        "Devotional calendar and reminders",
      ],
      timeline: {
        "Research & Planning": "3 weeks",
        "UI/UX Design": "3 weeks",
        Development: "12 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Creating a user-friendly interface for diverse age groups",
          solution:
            "Conducted extensive user research and implemented an intuitive UI with large touch targets and clear navigation",
        },
        {
          problem:
            "Managing priest availability across different time zones and locations",
          solution:
            "Developed a smart scheduling system that accounts for regional differences and priest availability",
        },
      ],
    },
  ],
  Healthcare: [
    {
      id: 1,
      title: "Healthcare Solutions",
      description:
        "Multiple digital healthcare platforms developed for a PAN-India diagnostic company.",
      link: "",
      technologies_used: [
        "React",
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
        "Healthcare APIs",
      ],
      status: "Live",
      platform: "Web & Mobile",
      image: Trustlab,
      details_image: Trustlabimg,
      project_overview:
        "Techland IT Solutions partnered with a PAN-India diagnostic company (500+ employees) to deliver multiple digital healthcare platforms.",
      features: [
        "Sample Collection Booking App (similar to Apollo 24/7)",
        "Sales Pulse 365: Real-time field sales tracking",
        "Mi Route: Sample collector tracking and expense management",
        "Doctor Booking Applications: Appointment scheduling & patient management",
        "CRM System: Customized sales and client relationship management",
        "Inventory Management System: Stock and resource tracking",
        "Quality Management System (QMS): Compliance and service excellence",
      ],
      timeline: {
        "Research & Planning": "4 weeks",
        "UI/UX Design": "4 weeks",
        Development: "24 weeks",
        "Testing & QA": "4 weeks",
        Deployment: "3 weeks",
      },
      challenges: [
        {
          problem:
            "Ensuring compliance with healthcare data privacy regulations",
          solution:
            "Implemented end-to-end encryption and strict access controls to protect sensitive patient information",
        },
        {
          problem:
            "Integrating multiple systems into a cohesive healthcare ecosystem",
          solution:
            "Developed a unified API gateway with standardized data models to ensure seamless communication between different applications",
        },
      ],
    },
  ],
  "Real Estate": [
    {
      id: 1,
      title: "Viswam Realty Connect",
      description:
        "A dual-purpose platform combining real estate listings and on-demand service bookings.",
      link: "",
      technologies_used: [
        "React",
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Web & Mobile",
      image: Viswam,
      details_image: Viswamimg,
      project_overview:
        "Viswam Realty Connect is a dual-purpose platform combining real estate listings and on-demand service bookings.",
      features: [
        "Customer App for property search and nearby services",
        "Vendor App for service provider onboarding",
        "Admin Panel for centralized platform management",
        "Property listing with virtual tours",
        "Service booking and scheduling",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "14 weeks",
        "Testing & QA": "3 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem:
            "Integrating two different business models into one platform",
          solution:
            "Developed a modular architecture that allows both real estate and service booking functionalities to operate seamlessly",
        },
        {
          problem: "Implementing virtual property tours with limited resources",
          solution:
            "Created an innovative solution using 360-degree images and interactive floor plans to provide immersive virtual tours",
        },
      ],
    },
    {
      id: 2,
      title: "Botique Dekho",
      description:
        "A customized tailoring service application that revives personalized tailoring at home.",
      link: "",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Mobile",
      image: Boti,
      details_image: Botiimg,
      project_overview:
        "Botique Dekho is a customized tailoring service application that revives the traditional concept of personalized tailoring at home.",
      features: [
        "Doorstep tailor booking",
        "Fully customized clothing options",
        "Measurement management and order tracking",
        "Design catalog and customization tools",
        "Payment and order history",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "12 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Digitizing the traditional tailoring measurement process",
          solution:
            "Developed an innovative measurement guide with AR assistance to help users take accurate measurements at home",
        },
        {
          problem: "Connecting customers with available tailors in their area",
          solution:
            "Implemented a location-based matching algorithm with real-time availability tracking",
        },
      ],
    },
  ],
  Services: [
    {
      id: 1,
      title: "GO CAR CLEAN",
      description:
        "An UrbanClap-like application focused on doorstep vehicle cleaning services.",
      link: "https://gocarclean.com",
      technologies_used: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
        "Payment Gateway",
      ],
      status: "Live",
      platform: "Mobile",
      image: GoCarCleanPhone,
      details_image: GoCarCleanWeb,
      project_overview:
        "GO CAR CLEAN is an UrbanClap-like application focused on doorstep vehicle cleaning services, offering daily and monthly subscription packages.",
      features: [
        "Vehicle cleaning service booking",
        "Daily and monthly subscription packages",
        "Service provider app with scheduling",
        "Customer app with booking history",
        "Payment processing and wallet system",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "2 weeks",
        Development: "10 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Managing service provider schedules and routes efficiently",
          solution:
            "Implemented an AI-powered route optimization algorithm that considers traffic patterns and service time requirements",
        },
        {
          problem:
            "Creating a subscription model that balances customer value with profitability",
          solution:
            "Developed a flexible subscription system with tiered pricing based on service frequency and vehicle type",
        },
      ],
    },
  ],
  Payments: [
    {
      id: 1,
      title: "Pay Wallet",
      description:
        "A secure digital transaction platform similar to PhonePe and Google Pay.",
      link: "https://paywalletinvestment.com",
      technologies_used: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Blockchain",
        "Payment Gateway APIs",
      ],
      status: "Live",
      platform: "Mobile",
      image: Paywallet,
      details_image: Paywalletimg,
      project_overview:
        "Pay Wallet is a secure digital transaction platform similar to PhonePe and Google Pay, with advanced wallet features.",
      features: [
        "Digital payments and wallet transactions",
        "USDT buy/sell features",
        "Peer-to-peer transactions (non-trading)",
        "Global usability focus",
        "Multi-currency support",
      ],
      timeline: {
        "Research & Planning": "3 weeks",
        "UI/UX Design": "3 weeks",
        Development: "16 weeks",
        "Testing & QA": "4 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem: "Ensuring security for financial transactions",
          solution:
            "Implemented multi-factor authentication, end-to-end encryption, and blockchain-based transaction verification",
        },
        {
          problem: "Integrating with multiple financial systems and currencies",
          solution:
            "Developed a flexible API gateway that can connect with various financial institutions and support multiple currencies",
        },
      ],
    },
  ],
  News: [
    {
      id: 1,
      title: "V NEWS",
      description:
        "A regional news and information application delivering local news and business advertisements.",
      link: "",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Content Management APIs",
      ],
      status: "Live",
      platform: "Mobile",
      image: Vnews,
      details_image: Vnewsimg,
      project_overview:
        "V NEWS is a regional news and information application delivering local news and business advertisements to users on a regular basis.",
      features: [
        "Local news publishing",
        "Business advertisement management",
        "User engagement through timely updates",
        "Personalized news feed",
        "Offline reading capability",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "2 weeks",
        Development: "10 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Delivering timely news updates without draining battery",
          solution:
            "Implemented an optimized push notification system with smart batching and adaptive delivery",
        },
        {
          problem:
            "Creating a sustainable revenue model through advertisements",
          solution:
            "Developed a targeted advertising system that delivers relevant ads based on user preferences and reading habits",
        },
      ],
    },
  ],
  Transportation: [
    {
      id: 1,
      title: "POOL PAL",
      description:
        "A first-of-its-kind multi-service travel platform offering ride booking, ride sharing, and more.",
      link: "https://poolpal.in",
      technologies_used: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps API",
        "Payment Gateway",
      ],
      status: "Live",
      platform: "Mobile",
      image: poolpal, // No image available
      details_image: poolpalimg,
      project_overview:
        "POOL PAL is a first-of-its-kind multi-service travel platform offering ride booking, ride sharing, vacation and Yatra packages, temple visits and hotel bookings. All services are offered within a single unified application.",
      features: [
        "Ride booking",
        "Ride sharing",
        "Vacation and Yatra packages",
        "Temple visits and hotel bookings",
        "Unified wallet for all services",
      ],
      timeline: {
        "Research & Planning": "3 weeks",
        "UI/UX Design": "4 weeks",
        Development: "18 weeks",
        "Testing & QA": "3 weeks",
        Deployment: "2 weeks",
      },
      challenges: [
        {
          problem:
            "Integrating multiple travel services into a single cohesive platform",
          solution:
            "Developed a modular architecture with a unified user interface and shared services for common functionality",
        },
        {
          problem: "Managing complex routing for multi-destination trips",
          solution:
            "Implemented an advanced route optimization algorithm that considers multiple stops, traffic conditions, and user preferences",
        },
      ],
    },
    {
      id: 2,
      title: "YUVA RIDE",
      description:
        "A ride booking and ride-sharing application similar to Rapido and BlaBlaCar.",
      link: "https://yuvaride.com",
      technologies_used: [
        "Flutter",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Mobile",
      image: Yuvaride,
      details_image: Yuvarideimg,
      project_overview:
        "YUVA RIDE is a ride booking and ride-sharing application similar to Rapido and BlaBlaCar.",
      features: [
        "Ride booking services",
        "Ride-sharing features",
        "Real-time tracking",
        "In-app payments",
        "Driver and passenger rating system",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "14 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Ensuring safety for both drivers and passengers",
          solution:
            "Implemented multiple safety features including emergency buttons, ride sharing with trusted contacts, and background verification",
        },
        {
          problem: "Optimizing driver routes for maximum efficiency",
          solution:
            "Developed a smart matching algorithm that considers driver location, destination, and traffic patterns to optimize routes",
        },
      ],
    },
  ],
  Websites: [
    {
      id: 1,
      title: "GOVINDHATECH",
      description:
        "A global IT hardware solutions website providing information on CCTV cameras, fire alarms, and IT components.",
      link: "",
      technologies_used: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Bootstrap",
      ],
      status: "Live",
      platform: "Web",
      image: Govinda,
      details_image: Govindaimg,
      project_overview:
        "GOVINDHATECH is a global IT hardware solutions website providing information on CCTV cameras, fire alarms & extinguishers, and IT hardware components.",
      features: [
        "Product catalog with detailed specifications",
        "Quotation system",
        "Contact and inquiry forms",
        "Responsive design",
        "Admin panel for content management",
      ],
      timeline: {
        "Research & Planning": "1 week",
        "UI/UX Design": "2 weeks",
        Development: "8 weeks",
        "Testing & QA": "1 week",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem:
            "Creating a comprehensive product catalog with complex specifications",
          solution:
            "Developed a flexible content management system with custom fields for different product categories",
        },
        {
          problem:
            "Optimizing website performance with large product images and specifications",
          solution:
            "Implemented image optimization, lazy loading, and efficient data fetching techniques",
        },
      ],
    },
    {
      id: 2,
      title: "NAMA OUTSOURCING",
      description:
        "A dynamic outsourcing company website offering manpower supply and support services.",
      link: "",
      technologies_used: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Material-UI",
      ],
      status: "Live",
      platform: "Web",
      image: Nama, // No image available
      details_image: Namaimg, // No image available
      project_overview:
        "NAMA OUTSOURCING is a dynamic outsourcing company website offering manpower supply, support staff services, and customer support operations, managed entirely through an admin panel.",
      features: [
        "Service descriptions and case studies",
        "Client testimonials",
        "Career portal",
        "Admin panel for content management",
        "Contact forms and inquiry management",
      ],
      timeline: {
        "Research & Planning": "1 week",
        "UI/UX Design": "2 weeks",
        Development: "8 weeks",
        "Testing & QA": "1 week",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem: "Creating an intuitive admin panel for non-technical users",
          solution:
            "Developed a user-friendly interface with drag-and-drop functionality and visual content editors",
        },
        {
          problem: "Managing dynamic content across multiple pages efficiently",
          solution:
            "Implemented a centralized content management system with reusable components and templates",
        },
      ],
    },
    {
      id: 3,
      title: "HC IT SOLUTIONS",
      description:
        "A staffing and customer support services website providing services across India.",
      link: "",
      technologies_used: [
        "Vue.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      status: "Live",
      platform: "Web",
      image: Hcit, // No image available
      details_image: Hcitimg,
      project_overview:
        "HC IT SOLUTIONS is a staffing and customer support services website providing services across India with centralized admin management.",
      features: [
        "Service descriptions",
        "Client portfolio",
        "Job listings and application portal",
        "Admin panel for content management",
        "Contact and inquiry forms",
      ],
      timeline: {
        "Research & Planning": "1 week",
        "UI/UX Design": "2 weeks",
        Development: "8 weeks",
        "Testing & QA": "1 week",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem:
            "Creating a scalable website structure to accommodate future growth",
          solution:
            "Implemented a modular architecture with reusable components and a flexible content management system",
        },
        {
          problem:
            "Optimizing for search engines while maintaining dynamic functionality",
          solution:
            "Used server-side rendering techniques and implemented SEO best practices throughout the development process",
        },
      ],
    },
    {
      id: 4,
      title: "ZAPP GO",
      description:
        "A logistics and EV rental services platform operating across India.",
      link: "",
      technologies_used: [
        "React",
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Maps API",
      ],
      status: "Live",
      platform: "Web & Mobile",
      image: Zapp, // No image available
      details_image: Zappimg, // No image available
      project_overview:
        "ZAPP GO is a logistics and EV rental services platform operating across India with 15+ years of industry presence, offering electric vehicles on rental and ownership models for delivery partners.",
      features: [
        "EV rental booking system",
        "Ownership models for delivery partners",
        "Fleet management",
        "Maintenance scheduling",
        "Payment processing",
      ],
      timeline: {
        "Research & Planning": "2 weeks",
        "UI/UX Design": "3 weeks",
        Development: "12 weeks",
        "Testing & QA": "2 weeks",
        Deployment: "1 week",
      },
      challenges: [
        {
          problem:
            "Managing a diverse fleet of electric vehicles with different specifications",
          solution:
            "Developed a comprehensive fleet management system with detailed vehicle profiles and maintenance tracking",
        },
        {
          problem: "Creating flexible rental and ownership models",
          solution:
            "Implemented a dynamic pricing system that can accommodate various rental periods and ownership options",
        },
      ],
    },
  ],
};
