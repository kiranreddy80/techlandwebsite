import React, { useState } from "react";
const processBg = "/assets/img/bg/process-1-3-bg.jpg";
import clientsData from "./clientsData";
import useApiWithFallback, { resolveImageUrl } from "../../utils/useApiWithFallback";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const OurClients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Logos uploaded through the admin panel take over as soon as the API is
  // reachable; otherwise the bundled logos keep the section populated.
  const { items: brandData } = useApiWithFallback(
    "/clients",
    (c) => ({ id: c._id, name: c.name, img: resolveImageUrl(c.logo) }),
    clientsData
  );

  return (
    <div>
      <div
        className="newsletter-area process-area space pb-0"
        style={{
          backgroundImage: `url(${processBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="newsletter-top container mb-0">
          <div className="row align-items-center">
            <div className="col-lg-3 d-flex flex-column align-items-start">
              <h2 className="newsletter-title text-white text-capitalize mb-3">
                Our Clients
              </h2>
              <button
                className="view-all-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <i className="fal fa-th-large"></i>
                View All
              </button>
            </div>
            <div className="col-lg-9">
              <div>
                <Swiper
                  // Re-initialise when the API swaps the slide set in, so loop
                  // mode is recalculated for the new slide count.
                  key={brandData.length}
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={brandData.length > 6}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1300: { slidesPerView: 6 },
                    1400: { slidesPerView: 6 },
                  }}
                  className="swiper th-slider brandSlider1"
                >
                  {brandData.map((brand) => (
                    <SwiperSlide key={brand.id}>
                      <div className="brand-box">
                        <a href="#">
                          <img
                            className="original"
                            src={brand.img}
                            alt={brand.name}
                            loading="lazy"
                          />
                          <img
                            className="gray"
                            src={brand.img}
                            alt={brand.name}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Clients Modal - Totally Unique & Attractive Design */}
      <div
        className={`clients-modal-overlay-unique ${isModalOpen ? "open" : ""}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="clients-modal-container-unique"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Decorative Sidebar - Hidden on mobile */}
          <div className="modal-side-accent">
            <div className="accent-content">
              <span className="accent-label">TECHLAND PARTNERS</span>
              <div className="accent-line"></div>
              <h2 className="accent-text">TRUSTED BY INDUSTRY LEADERS</h2>
            </div>
          </div>

          <div className="modal-main-content">
            <div className="modal-header-unique">
              <div className="header-info">
                <h3 className="modal-title-unique">Our Valued Clients</h3>

              </div>
              <button
                className="modal-close-unique"
                onClick={() => setIsModalOpen(false)}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>

            <div className="modal-body-unique">
              <div className="clients-grid-unique">
                {brandData.map((brand, index) => (
                  <div
                    key={brand.id}
                    className="client-card-unique"
                    style={{ "--index": index }}
                  >
                    <div className="card-inner">
                      <div className="client-logo-wrapper">
                        <img src={brand.img} alt={brand.name} loading="lazy" />
                      </div>
                      <div className="client-info-unique">

                        <h4 className="client-name-unique">{brand.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
