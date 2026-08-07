import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurFeatures.css";

const OurFeatures = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const featuresData = [
    {
      id: 1,
      icon: "/assets/img/cdn-assets/icons8-security-checked.png",
      title: "Enhanced Security",
      description: "Immutable and encrypted transactions prevent fraud and unauthorized access with state-of-the-art blockchain technology."
    },
    {
      id: 2,
      icon: "/assets/img/cdn-assets/icons8-handshake.png",
      title: "Transparency & Trust",
      description: "Public ledgers ensure full accountability and build unshakeable trust with all your stakeholders and partners."
    },
    {
      id: 3,
      icon: "/assets/img/cdn-assets/icons8-rocket.png",
      title: "Faster Transactions",
      description: "Enable instant cross-border payments and near-real-time processing to keep your business moving at the speed of light."
    },
    {
      id: 4,
      icon: "/assets/img/cdn-assets/icons8-money-bag.png",
      title: "Cost Reduction",
      description: "Eliminate unnecessary intermediaries and drastically reduce operational and transactional costs for your enterprise."
    },
    {
      id: 5,
      icon: "/assets/img/cdn-assets/icons8-bank-building.png",
      title: "Financial Inclusion",
      description: "Provide seamless access to banking services for the unbanked and underbanked populations across the globe."
    },
    {
      id: 6,
      icon: "/assets/img/cdn-assets/flaticon-4712027.png",
      title: "Smart Automation",
      description: "Leverage intelligent smart contracts to automate complex processes and eliminate manual errors efficiently."
    }
  ];

  // Split features for the 2-column masonry on the right
  const col1 = featuresData.filter((_, i) => i % 2 === 0);
  const col2 = featuresData.filter((_, i) => i % 2 !== 0);

  return (
    <section className="features-section">
      <div className="features-bg"></div>

      <div className="container">
        <div className="features-split-layout">

          {/* Left: Sticky Branding & Aesthetic Hero Box */}
          <div className="features-left-wrapper">
            <div className="features-left-sticky" data-aos="fade-right">
              {/* Aesthetic Particles */}
              <div className="left-particles">
                <div className="particle p-1"></div>
                <div className="particle p-2"></div>
              </div>

              <span className="features-tag">Productivity Powered</span>
              <h2 className="features-heading">
                Innovative
                <span>Solutions for</span>
                Modern Business
              </h2>
              <p className="features-desc">
                Techland IT Solutions specializes in delivering exceptional digital
                experiences. We blend essential design patterns with sophisticated
                technology to ensure your digital presence is not just functional,
                it's truly exceptional.
              </p>
            </div>
          </div>

          {/* Right: Continuously Scrolling Feature Cards */}
          <div className="features-right-grid">

            <div className="feature-col-wrapper col-up">
              <div className="feature-col-inner">
                {[...col1, ...col1, ...col1].map((f, i) => (
                  <div
                    key={`${f.id}-${i}`}
                    className="feature-card-rich"
                  >
                    <div className="icon-wrapper-rich">
                      <img src={f.icon} alt={f.title} />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="feature-col-wrapper col-down">
              <div className="feature-col-inner">
                {[...col2, ...col2, ...col2].map((f, i) => (
                  <div
                    key={`${f.id}-${i}`}
                    className="feature-card-rich"
                  >
                    <div className="icon-wrapper-rich">
                      <img src={f.icon} alt={f.title} />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
