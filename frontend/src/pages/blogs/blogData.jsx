import { Link } from 'react-router-dom';
const img1 = "/assets/media/BlogImages/img1.jpg";
const img2 = "/assets/media/BlogImages/img2.jpg";
const img3 = "/assets/media/BlogImages/img3.jpg";
const img4 = "/assets/media/BlogImages/img4.jpg";
const img5 = "/assets/media/BlogImages/img5.jpg";

export const blogPosts = [
    {
        id: 1,
        title: "How Techland IT Solutions Ensures Consistent User Experience Across All Mobile Platforms",
        imageUrl: img1,
        fullDescription: "In today's technologically-driven environment, user experience cannot be ignored. Ensuring a seamless experience on mobile apps is not optional but an absolute requirement. Techland IT Solutions helps businesses in Hyderabad develop mobile applications with excellent design functionalities that create smooth, responsive, and user-centric experiences.",
        sections: [
            {
                title: "1. Special Emphasis on Mobile Application UI/UX Design in Hyderabad",
                content: (<>"As a leading <Link to="/services/mobile-app-development" className="text-blue">mobile app development</Link> firm, Techland places utmost importance on user interface and interaction design. These are foundational elements of any successful mobile application."</>),
                additionalContent: (<>"Our <Link to="/services/mobile-app-development" className="text-blue">UX/UI designers in Hyderabad</Link> utilize the latest technologies to create captivating designs and intuitive layouts that immediately draw users' attention. The results speak for themselves:"</>),
                points: [
                    "Increased user retention",
                    "Lower bounce rates",
                    "Higher customer satisfaction scores"
                ]
            },
            {
                title: "2. Mobile App Development for All Platforms",
                content: "Techland develops mobile apps with seamless functionality across all platforms and devices.",
                additionalContent: "Using the most up-to-date frameworks and technologies, we ensure identical experiences whether users are on Android or iOS devices. Our responsive web design expertise in Hyderabad complements our mobile development capabilities."
            },
            {
                title: "3. Clean, Minimalist and Mobile-Friendly Design",
                content: "Techland combines clear UI design with mobile interface SEO strategies to help businesses not only acquire but retain customers.",
                additionalContent: "From company websites to e-commerce platforms, we offer affordable web development solutions in Hyderabad that guarantee excellent user experiences without compromising quality."
            },
            {
                title: "4. Agile Development with Real-Time Feedback",
                content: "We employ agile methodologies to keep clients involved throughout the development process.",
                additionalContent: "Our customized technology development process in Hyderabad aligns perfectly with evolving customer requirements and market trends."
            },
            {
                title: "5. Robust Testing for High Performance",
                content: "Creating perfect user experiences requires extensive testing, including:",
                points: [
                    "Functional testing",
                    "Load testing",
                    "Security audits",
                    "UI coherence reviews"
                ],
                additionalContent: "We test on real devices to ensure every app performs flawlessly in real-world conditions."
            },
            {
                title: "6. Integration with Digital Marketing Services",
                content: "Development is just the beginning. Our in-house digital marketing team in Hyderabad provides:",
                points: [
                    "Google Ads management",
                    "Social media marketing (Facebook, Instagram, YouTube)",
                    "Lead generation campaigns",
                    "Marketing automation"
                ],
                additionalContent: "These services help companies maintain a competitive edge while effectively promoting their mobile apps."
            },
            {
                title: "7. Ongoing Support and Post-Launch Services",
                content: "Techland provides comprehensive support for website and app development, including maintenance services post-deployment.",
                additionalContent: "Clients benefit from 24/7 technical assistance, regular updates, and continuous performance optimization."
            },
            {
                title: "8. Why Choose Techland for UI/UX and Web Development?",
                content: "Techland is recognized as one of Hyderabad's top UX firms because we offer:",
                points: [
                    "Competitive pricing with exceptional design and development services",
                    "Full-stack development expertise (both frontend and backend)",
                    "Unwavering commitment to customer satisfaction",
                    "Rapid response times and outstanding ongoing support"
                ],
                additionalContent: "For UX/UI design and custom software development in Hyderabad, Techland stands out as the premier choice."
            }
        ],
        date: "May 29, 2025",
        author: "by Techland",
        readTime: "8 min read",
        category: ["Mobile Development", "UI/UX Design"]
    },
    {
        id: 2,
        title: "Static vs Dynamic Websites: Which One Works Best For You?",
        imageUrl: img2,
        fullDescription: "Every business in Hyderabad, from small startups to large enterprises, needs a strong web presence in today's digital landscape. This article examines the differences between static and dynamic websites to help you choose the best solution for your specific needs.",
        sections: [
            {
                title: "1. Understanding Static Websites",
                content: "A static website consists of fixed pages where content remains unchanged until manually updated.",
                additionalContent: "Key advantages of static websites:",
                points: [
                    "Lightning-fast loading speeds",
                    "Minimal maintenance requirements",
                    "Cost-effective solution",
                    "Enhanced security with no database vulnerabilities"
                ]
            },
            {
                title: "2. When to Choose a Static Website",
                content: "Static websites are ideal for:",
                points: [
                    "Personal portfolios and blogs",
                    "Small business brochure sites",
                    "Informational pages for service providers"
                ],
                additionalContent: (<> "If you're a startup working with a <Link to="/services/ui-ux-design" className="text-blue">web design</Link> company in Hyderabad, a static site may be perfect for your initial online presence."</>)
            },
            {
                title: "3. Understanding Dynamic Websites",
                content: "Dynamic websites pull content from databases and use server-side processing to deliver customized experiences.",
                additionalContent: "Key benefits of dynamic websites:",
                points: [
                    "Easy content updates via CMS",
                    "Personalized user experiences",
                    "Scalability for growing businesses",
                    "Advanced functionality integration"
                ]
            },
            {
                title: "4. When to Choose a Dynamic Website",
                content: "Dynamic websites excel for:",
                points: [
                    "E-commerce stores",
                    "Content-heavy news portals",
                    "Membership-based platforms",
                    "Businesses requiring frequent updates"
                ],
                additionalContent: "Many web development firms in Hyderabad specialize in creating powerful dynamic websites."
            },
            {
                title: "5. SEO Implications",
                content: "Both types can be optimized for search engines, but with different approaches:",
                subSections: [
                    {
                        title: "Static Website SEO Advantages",
                        points: [
                            "Faster load times improve rankings",
                            "Simpler technical SEO implementation",
                            "Fewer potential performance issues"
                        ]
                    },
                    {
                        title: "Dynamic Website SEO Advantages",
                        points: [
                            "Easier content updates for ongoing SEO",
                            "Better social media integration",
                            "Dynamic meta tags and structured data options"
                        ]
                    }
                ]
            },
            {
                title: "6. Cost and Maintenance Comparison",
                content: "Key differences in resources required:",
                subSections: [
                    {
                        title: "Static Websites",
                        points: [
                            "Lower initial development costs",
                            "Minimal ongoing maintenance",
                            "Developer needed for updates"
                        ]
                    },
                    {
                        title: "Dynamic Websites",
                        points: [
                            "Higher initial investment",
                            "Regular maintenance required",
                            "Content updates via user-friendly CMS"
                        ]
                    }
                ]
            },
            {
                title: "7. Making the Right Choice for Your Business",
                content: "Consider these factors when deciding:",
                points: [
                    "Your budget constraints",
                    "Frequency of content updates needed",
                    "Technical expertise available",
                    "Future growth plans"
                ],
                additionalContent: "Consult with a reputable web development company in Hyderabad to determine the best solution for your specific requirements."
            }
        ],
        date: "June 16, 2025",
        author: "by Techland",
        readTime: "7 min read",
        category: ["Web Development", "Business Strategy"]
    },
    {
        id: 3,
        title: "A Beginner's Guide to Choosing the Right Server for Your Business",
        imageUrl: img3,
        fullDescription: "Selecting the appropriate server is one of the most critical decisions for any business establishing an online presence. This guide helps Hyderabad business owners understand server options and make informed choices for their web and mobile applications.",
        sections: [
            {
                title: "1. Understanding Servers and Their Importance",
                content: "A server is a powerful computer that stores, processes, and delivers data to other devices on a network.",
                additionalContent: "Without proper server infrastructure:",
                points: [
                    "Websites may load slowly or crash",
                    "Applications won't perform reliably",
                    "Business data becomes vulnerable"
                ],
                additionalContent2: "Proper server configuration is essential whether you're running online marketing campaigns in Hyderabad or developing mobile applications."
            },
            {
                title: "2. Types of Servers for Businesses",
                content: "Understanding different server types helps you make the best choice:",
                subSections: [
                    {
                        title: "Web Servers",
                        content: "Host website content - crucial for businesses needing responsive web design in Hyderabad."
                    },
                    {
                        title: "Application Servers",
                        content: "Run business software and e-commerce platforms."
                    },
                    {
                        title: "Database Servers",
                        content: "Securely manage customer and business data."
                    },
                    {
                        title: "Mail Servers",
                        content: "Handle professional email communications."
                    },
                    {
                        title: "Virtual Private Servers (VPS)",
                        content: "Cost-effective, flexible solutions ideal for startups and small businesses."
                    }
                ]
            },
            {
                title: "3. Key Selection Criteria",
                content: "Consider these essential factors:",
                points: [
                    "Business size and expected traffic",
                    "Performance requirements",
                    "Security needs (firewalls, backups)",
                    "Budget constraints",
                    "Scalability for future growth"
                ],
                additionalContent: "These considerations are especially important for digital marketing agencies in Hyderabad running multiple campaigns."
            },
            {
                title: "4. Hyderabad-Specific Solutions",
                content: "Benefits of local Hyderabad server providers:",
                points: [
                    "Faster local support response",
                    "Understanding of regional business needs",
                    "Cost advantages over international providers",
                    "Compliance with Indian data regulations"
                ]
            },
            {
                title: "5. Implementation Strategy",
                content: "Steps to select your server solution:",
                points: [
                    "Assess current and future needs",
                    "Consult Hyderabad web experts",
                    "Compare multiple provider offerings",
                    "Start with scalable solutions",
                    "Plan for regular maintenance"
                ],
                additionalContent: "Whether choosing shared hosting, VPS, or dedicated servers, ensure alignment with your business goals."
            }
        ],
        date: "June 23, 2025",
        author: "by Techland",
        readTime: "9 min read",
        category: ["Server Management", "IT Infrastructure"]
    },
    {
        id: 4,
        title: "Why Good UX Is Critical for Your Website or App's Success",
        imageUrl: img4,
        fullDescription: "User Experience (UX) has become a decisive factor in the success of digital products. In Hyderabad's competitive market, superior UX design can mean the difference between engaging users and losing them to competitors. This article explores why UX matters and how to implement it effectively.",
        sections: [
            {
                title: "1. Enhanced User Satisfaction",
                content: "Good UX design directly impacts how users perceive and interact with your product.",
                additionalContent: "Key elements that boost satisfaction:",
                points: [
                    "Intuitive navigation structures",
                    "Fast loading times",
                    "Clear call-to-action elements"
                ],
                additionalContent2: "Our responsive web design services in Hyderabad ensure consistent experiences across all devices."
            },
            {
                title: "2. Building Trust and Credibility",
                content: "Poor UX makes users question your professionalism, while excellent UX builds confidence.",
                additionalContent: "Hyderabad UI/UX design firms help businesses create interfaces that establish immediate trust."
            },
            {
                title: "3. Driving Conversions",
                content: "Optimized UX directly impacts your bottom line by:",
                points: [
                    "Streamlining checkout processes",
                    "Reducing friction points",
                    "Creating clear conversion paths"
                ],
                additionalContent: "For e-commerce businesses in Hyderabad, UX optimization can significantly boost sales."
            },
            {
                title: "4. Improving SEO Performance",
                content: "Search engines prioritize websites with:",
                points: [
                    "Fast loading speeds",
                    "Mobile responsiveness",
                    "Intuitive navigation"
                ],
                additionalContent: "Our SEO-friendly web development in Hyderabad combines technical excellence with superior UX."
            },
            {
                title: "5. Gaining Competitive Advantage",
                content: "In Hyderabad's crowded digital market, UX can be your differentiator:",
                points: [
                    "Users prefer better-designed alternatives",
                    "Quality design reflects on brand perception",
                    "Stand out in competitive industries"
                ]
            },
            {
                title: "6. Fostering Customer Loyalty",
                content: "Good UX doesn't just attract users - it keeps them coming back through:",
                points: [
                    "Increased engagement",
                    "Higher repeat usage",
                    "Stronger brand attachment"
                ]
            },
            {
                title: "7. Mobile UX Considerations",
                content: "With mobile dominating internet usage, app UX requires special attention to:",
                points: [
                    "Touch-friendly interfaces",
                    "First-time user experiences",
                    "Cross-platform consistency"
                ],
                additionalContent: "Hyderabad mobile app developers focus on creating seamless mobile experiences."
            },
            {
                title: "8. Implementing UX Best Practices",
                content: "To achieve these benefits:",
                points: [
                    "Work with experienced UX designers",
                    "Conduct regular user testing",
                    "Adopt responsive design principles",
                    "Prioritize mobile-first approaches"
                ],
                additionalContent: "Companies investing in quality UX see measurable returns in engagement and conversions."
            }
        ],
        date: "June 30, 2025",
        author: "by Techland",
        readTime: "10 min read",
        category: ["UX Design", "Digital Strategy"]
    },
    {
        id: 5,
        title: "Building a Complete Digital Presence: Web + App + Marketing",
        imageUrl: img5,
        fullDescription: "In today's digital ecosystem, businesses need more than just a website. A comprehensive digital presence combines web development, mobile applications, and strategic marketing. This guide outlines how Hyderabad businesses can build an integrated digital strategy.",
        sections: [
            {
                title: "1. The Importance of a Holistic Digital Presence",
                content: "Modern consumers expect to interact with brands across multiple digital touchpoints.",
                additionalContent: "Key benefits of a complete digital presence:",
                points: [
                    "Increased visibility across channels",
                    "Enhanced brand credibility",
                    "Improved customer engagement"
                ]
            },
            {
                title: "2. Web Development Foundations",
                content: "Your website serves as the cornerstone of your digital presence.",
                subSections: [
                    {
                        title: "Essential Features",
                        points: [
                            (<><Link to="/contact" className="text-blue">"User-friendly design"</Link></>),
                            "Mobile responsiveness",
                            "SEO optimization",
                            "Robust security"
                        ]
                    },
                    {
                        title: "Hyderabad Web Development Services",
                        content: "Local providers offer:",
                        points: [
                            "Custom website development",
                            "Technical SEO implementation",
                            "Ongoing maintenance"
                        ]
                    }
                ]
            },
            {
                title: "3. Mobile App Integration",
                content: "Mobile apps provide deeper engagement with your audience through:",
                points: [
                    "Personalized experiences",
                    "Push notifications",
                    "Offline functionality"
                ],
                additionalContent: "Hyderabad mobile app developers create solutions tailored to business needs."
            },
            {
                title: "4. E-Commerce Solutions",
                content: "Online selling requires specialized platforms with:",
                subSections: [
                    {
                        title: "Core Features",
                        points: [
                            "Product catalogs",
                            "Secure payments",
                            "Inventory management"
                        ]
                    },
                    {
                        title: "Hyderabad E-Commerce Services",
                        content: "Local expertise includes:",
                        points: [
                            "Shopify development",
                            "Marketplace integration",
                            "Mobile commerce"
                        ]
                    }
                ]
            },
            {
                title: "5. Digital Marketing Strategy",
                content: "Effective marketing drives traffic to your digital properties.",
                subSections: [
                    {
                        title: "Core Channels",
                        points: [
                            "Search Engine Optimization",
                            (<><a href="https://www.odmt.in/" className="text-blue">"Social media marketing"</a></>),
                            "Content marketing",
                            "Paid advertising"
                        ]
                    },
                    {
                        title: "Hyderabad Marketing Services",
                        content: "Local agencies provide:",
                        points: [
                            "Market-specific strategies",
                            "Performance tracking",
                            "Integrated campaigns"
                        ]
                    }
                ]
            },
            {
                title: "6. Consistent Brand Experience",
                content: "Maintain uniformity across all digital touchpoints with:",
                points: [
                    "Cohesive visual design",
                    "Unified messaging",
                    "Seamless user journeys"
                ],
                additionalContent: "Hyderabad UX firms specialize in creating harmonious brand experiences."
            },
            {
                title: "7. Implementation Roadmap",
                content: "Steps to build your digital presence:",
                points: [
                    "Audit existing assets",
                    "Identify gaps and opportunities",
                    "Develop phased implementation plan",
                    "Measure and optimize continuously"
                ],
                additionalContent: "Partner with Hyderabad's top web, app, and marketing specialists for comprehensive solutions."
            }
        ],
        date: "July 7, 2025",
        author: "by Techland",
        readTime: "12 min read",
        category: ["Digital Strategy", "Marketing"]
    },
    {
        id: 6,
        title: "AI in Business: What Actually Works in 2026, and What Is Still Hype",
        imageUrl: img5,
        fullDescription: "Every vendor now has an AI feature and every board wants an AI strategy. Underneath the noise, a small number of applications are quietly paying for themselves — and a larger number are burning budget. Here is how we separate the two for our clients in Hyderabad and abroad.",
        sections: [
            {
                title: "1. Start With the Bottleneck, Not the Technology",
                content: "The projects that succeed begin with a process that is measurably slow or expensive — not with a decision to 'use AI'.",
                additionalContent: "Before writing a line of code we ask what the task costs today in hours, errors or lost customers. If nobody can answer that, the project has no benchmark to be judged against and it will quietly stall six months in.",
                points: [
                    "Where does work sit in a queue waiting for a human?",
                    "Which decisions are repetitive and rule-driven?",
                    "What data already exists to learn from?"
                ]
            },
            {
                title: "2. What Is Genuinely Working",
                content: "Across the projects we have shipped, four categories consistently return their investment:",
                points: [
                    "Document extraction — invoices, KYC forms and delivery notes read in seconds instead of minutes",
                    "Customer support triage — routing and drafting replies, with a human approving before send",
                    "Search that understands intent, not just keywords, inside large product catalogues",
                    "Forecasting demand for inventory-heavy businesses"
                ],
                additionalContent: "The pattern is the same in each: narrow scope, plenty of historical data, and a human still holding the final decision."
            },
            {
                title: "3. What Is Still Mostly Hype",
                content: "Some of the loudest promises remain unreliable in production.",
                points: [
                    "Fully autonomous agents running an unsupervised business process",
                    "Chatbots given free rein over pricing, refunds or legal commitments",
                    "Replacing domain experts rather than speeding them up"
                ],
                additionalContent: "These fail not because the models are weak, but because the cost of a confident wrong answer is far higher than the saving from removing the human."
            },
            {
                title: "4. The Question Worth Asking First",
                content: "If a model is right 90% of the time, what does the other 10% cost you?",
                additionalContent: "For a product recommendation, very little. For a loan approval or a medical triage, a great deal. That single answer decides whether the human stays in the loop — and it should be settled before any budget is approved."
            },
            {
                title: "5. How We Approach It",
                content: "We treat an AI feature the same way as any other engineering work: scoped, measured and reviewed.",
                points: [
                    "A two-week proof against your real data, not a demo dataset",
                    "A baseline measured before launch so the gain is provable",
                    "A fallback path for every automated decision",
                    "Costs modelled per request, because inference is not free"
                ],
                additionalContent: (<>If you are weighing up where AI fits in your business, our <Link to="/services/custom-software-development" className="text-blue">custom software team</Link> will tell you honestly which parts are worth building and which are not.</>)
            }
        ],
        date: "January 14, 2026",
        author: "by Techland",
        readTime: "9 min read",
        category: ["Artificial Intelligence", "Business Strategy"]
    },
    {
        id: 7,
        title: "Building AI Into Your Mobile App Without Wrecking Battery, Privacy or Cost",
        imageUrl: img1,
        fullDescription: "Adding an AI feature to a mobile app is easy to demo and hard to ship. Three things decide whether it survives contact with real users: where the model runs, what leaves the device, and what each request costs you. Here is how we make those calls.",
        sections: [
            {
                title: "1. On-Device or in the Cloud?",
                content: "This is the first decision and it shapes everything after it.",
                points: [
                    "On-device — instant, works offline, nothing leaves the phone, but limited by the handset",
                    "Cloud — far more capable, but adds latency, needs a connection and bills per request"
                ],
                additionalContent: "In practice most apps end up hybrid: a small model on the device for the common case, escalating to the cloud when the task genuinely needs it."
            },
            {
                title: "2. Battery and Thermals Are a Feature",
                content: "A model that drains 8% of a battery in a minute will be uninstalled, however clever it is.",
                additionalContent: "We profile on mid-range Android hardware rather than flagships, because that is what most Indian users actually carry. Sustained inference also throttles the CPU, which slows down everything else in the app.",
                points: [
                    "Batch requests instead of firing on every keystroke",
                    "Cache aggressively — the same question often comes twice",
                    "Quantise models so they fit comfortably in memory"
                ]
            },
            {
                title: "3. Privacy Is Not a Checkbox",
                content: "If user content leaves the device, you now have a data protection question to answer.",
                points: [
                    "Say plainly what is sent, and give a way to opt out",
                    "Strip identifiers before anything is transmitted",
                    "Do not log prompts containing personal data",
                    "Check whether your provider trains on your submissions"
                ],
                additionalContent: "India's DPDP Act makes this a legal matter, not just good manners."
            },
            {
                title: "4. Cost Discipline",
                content: "Cloud inference is billed per token, and a popular feature can become the largest line on your bill.",
                additionalContent: "We model cost per active user before launch, cap spend per account, and set a hard budget alert. A feature nobody has priced is a feature waiting to surprise you."
            },
            {
                title: "5. Design for Being Wrong",
                content: "The interface has to assume the model will sometimes be confidently incorrect.",
                points: [
                    "Show the source or reasoning where it exists",
                    "Make correcting the output easier than redoing it",
                    "Never auto-commit an irreversible action",
                    "Fail back to the manual path rather than a dead end"
                ],
                additionalContent: (<>Our <Link to="/services/mobile-app-development" className="text-blue">mobile app team</Link> builds these guardrails in from the first sprint rather than bolting them on after a bad review.</>)
            }
        ],
        date: "February 3, 2026",
        author: "by Techland",
        readTime: "10 min read",
        category: ["Artificial Intelligence", "Mobile Development"]
    },
    {
        id: 8,
        title: "AI and SEO in 2026: How Search Changed, and What Still Ranks",
        imageUrl: img2,
        fullDescription: "AI overviews now answer a large share of queries before anyone clicks a result. That has changed which pages earn traffic — but it has not made SEO obsolete. It has made thin content worthless and genuine expertise more valuable than it has been in years.",
        sections: [
            {
                title: "1. What Actually Changed",
                content: "Informational queries increasingly end at the summary. Nobody clicks through to learn what a term means.",
                additionalContent: "What still sends traffic are queries with intent behind them — comparing options, checking prices, finding somebody local, or making a decision. Those are the pages worth investing in.",
                points: [
                    "Definition and 'what is' pages: heavy losses",
                    "Comparison, pricing and local intent: broadly stable",
                    "Original data and first-hand experience: growing"
                ]
            },
            {
                title: "2. Why Thin AI Content Backfires",
                content: "Generating a hundred articles is now trivial, which is exactly why it no longer works.",
                additionalContent: "Search engines are explicitly rewarding content that demonstrates first-hand experience. A page assembled from what is already indexed adds nothing new, and increasingly ranks accordingly.",
                points: [
                    "Say something only you could say — your data, your projects, your numbers",
                    "Show the working, not just the conclusion",
                    "Put a real author and a real date on it"
                ]
            },
            {
                title: "3. Being Cited by the Summary",
                content: "If an AI overview answers the question, you want to be the source it names.",
                points: [
                    "Answer the question directly in the first paragraph",
                    "Use clear headings that match how people actually ask",
                    "Mark up your organisation, address and FAQs in structured data",
                    "Keep facts current — stale pages get dropped from citations"
                ],
                additionalContent: "Structured data has quietly gone from a nice-to-have to the main way machines understand who you are."
            },
            {
                title: "4. Local Search Is the Quiet Winner",
                content: "'Best web development company in Hyderabad' still produces a click, because the searcher intends to hire somebody.",
                additionalContent: "Local intent resists summarisation — a summary cannot pick a vendor for you. Accurate listings, reviews and location markup matter more now than they did three years ago."
            },
            {
                title: "5. What We Would Do With Your Budget",
                content: "Fewer pages, better ones.",
                points: [
                    "Consolidate thin pages that compete with each other",
                    "Rebuild the three pages that already convert",
                    "Publish one piece of genuinely original research",
                    "Fix structured data and page speed before writing anything new"
                ],
                additionalContent: (<>Our <Link to="/services/digital-marketing" className="text-blue">digital marketing team</Link> reports against traffic that converts, not impressions that flatter.</>)
            }
        ],
        date: "March 2, 2026",
        author: "by Techland",
        readTime: "11 min read",
        category: ["Artificial Intelligence", "Digital Marketing"]
    }
];
