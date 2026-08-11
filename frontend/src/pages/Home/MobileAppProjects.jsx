import React, { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

import api from "../../services/api";
import config from "../../config";

/**
 * The app screenshots, with the project each one belongs to.
 *
 * Nothing is ever drawn on top of a screen. The project name sits above the
 * device and lights up when that phone is the centred one.
 *
 * Names were read off the screenshots themselves — 4.png shows a home-services
 * category grid with no visible brand, so it carries a descriptive label until
 * someone confirms the real product name.
 */
const staticMobileShots = [
  { src: "/assets/img/mobile_projects/1.webp",  name: "Zenfoo" },
  { src: "/assets/img/mobile_projects/2.webp",  name: "Best Seeds" },
  { src: "/assets/img/mobile_projects/3.webp",  name: "Market Yatra" },
  { src: "/assets/img/mobile_projects/4.webp",  name: "Home Services" },
  { src: "/assets/img/mobile_projects/5.webp",  name: "SAPID" },
  { src: "/assets/img/mobile_projects/6.webp",  name: "Temple City" },
  { src: "/assets/img/mobile_projects/7.webp",  name: "Yuva Rider" },
  { src: "/assets/img/mobile_projects/8.webp",  name: "SAPID" },
  { src: "/assets/img/mobile_projects/9.webp",  name: "TRUSTlab" },
  { src: "/assets/img/mobile_projects/10.webp", name: "Abhisree Foundation" },
];

const MobileAppProjects = () => {
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const backendUrl = config.ASSETS_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setDynamicProjects(
          data.filter(
            (p) =>
              p.isActive !== false &&
              (p.platform === "Android" || p.platform === "iOS")
          )
        );
      } catch (error) {
        console.error("Error fetching mobile projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const shots = useMemo(() => {
    const fromApi = dynamicProjects.map((p) => ({
      id: p._id,
      src: p.image?.startsWith("http") ? p.image : `${backendUrl}${p.image}`,
      name: p.title || "",
    }));

    const fromStatic = staticMobileShots.map((shot, i) => ({
      id: `s-${i}`,
      src: shot.src,
      name: shot.name || "",
    }));

    return [...fromApi, ...fromStatic];
  }, [dynamicProjects, backendUrl]);

  return (
    <div className="mp-area position-relative overflow-hidden space">
      <div className="container th-container">
        {/* Title */}
        <div className="title-area text-center" data-aos="fade-up">
          <span className="sub-title text-anime-style-2">
            Innovating Mobile Experiences
          </span>
          <h2 className="sec-title text-anime-style-3">
            Our Mobile Masterpieces
          </h2>
        </div>

        {/* Devices */}
        <div className="mp-stage">
          <Swiper
            modules={[Autoplay]}
            grabCursor
            loop={true}
            centeredSlides
            slidesPerView={"auto"}
            spaceBetween={34}
            speed={700}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            className="mp-swiper"
          >
            {shots.map((shot) => (
              <SwiperSlide key={shot.id} className="mp-slide">
                <div className="mp-item">
                  {/* Name above the phone, always visible. The centred one
                      lights up in the brand gradient; the rest stay grey, so
                      the row itself tells you which project is in focus. */}
                  <h3 className="mp-name">{shot.name || " "}</h3>

                  <div className="mp-device">
                    <img
                      src={shot.src}
                      alt={
                        shot.name
                          ? `${shot.name} mobile app by Techland IT Solutions`
                          : "Mobile app screen by Techland IT Solutions"
                      }
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Quiet footnote: what these were built with. Small, left-aligned and
            in each tool's own colour, so it reads as a caption rather than
            competing with the devices above it. */}
        <ul className="mp-stack" aria-label="Technologies used">
          <li style={{ "--c": "#61DAFB" }}>
            <span className="mp-stack-dot" aria-hidden="true" />
            React Native
          </li>
          <li style={{ "--c": "#42A5F5" }}>
            <span className="mp-stack-dot" aria-hidden="true" />
            Flutter
          </li>
          <li style={{ "--c": "#FF6F4A" }}>
            <span className="mp-stack-dot" aria-hidden="true" />
            SwiftUI
          </li>
        </ul>
      </div>

      <style>{`
        /* ============================================================
           MOBILE MASTERPIECES — devices only.

           No labels, no captions, no hover panels, no glows, no tints,
           no overlap. Every screen is shown whole, upright and at full
           colour. The only interaction is a small lift on hover.
           ============================================================ */
        .mp-area { position: relative; background: #ffffff; }

        .mp-stage { position: relative; margin-top: 6px; }
        /* Visible overflow so neighbouring devices aren't clipped mid-slide. */
        /* Extra vertical padding so the scaled-up centre device has room to
           grow without colliding with the heading or the controls. */
        .mp-swiper { overflow: visible !important; padding: 34px 0 26px; }
        /* Perspective sits on the wrapper because that is the slides' direct
           parent — on .mp-stage it would only apply to .mp-swiper and the
           handsets would stay flat. preserve-3d keeps Swiper's own translate
           on the wrapper from collapsing the depth of its children. */
        .mp-swiper .swiper-wrapper {
          align-items: center;
          perspective: 1600px;
          transform-style: preserve-3d;
        }

        /* ---- Depth ----
           The row used to render every handset identically: same transform,
           same opacity, same size, so nothing was in focus and the whole
           section read flat. The only emphasis written was scale(1.12), and
           it sat inside the prefers-reduced-motion block — which meant the
           effect showed ONLY for visitors who had asked for less animation,
           and never for anyone else.

           Now the centred phone stands forward of the row and the ones
           either side fall back behind it. */
        .mp-swiper .swiper-slide {
          transform: scale(0.8) translateZ(-160px);
          opacity: 0.45;
          filter: saturate(0.7);
          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.7s ease,
            filter 0.7s ease;
          will-change: transform, opacity;
        }
        .mp-swiper .swiper-slide-prev,
        .mp-swiper .swiper-slide-next {
          transform: scale(0.9) translateZ(-80px);
          opacity: 0.8;
          filter: saturate(0.9);
          z-index: 2;
        }
        .mp-swiper .swiper-slide-active {
          transform: scale(1.08) translateZ(0);
          opacity: 1;
          filter: none;
          z-index: 3;
        }

        .mp-slide {
          width: 250px !important;
          height: auto;
        }
        @media (max-width: 768px) { .mp-slide { width: 200px !important; } }

        .mp-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* The box is pinned to the phone, so the box has to BE the phone:
           height drives it and the artwork's own ratio sets the width. Left
           as a full-width flex container, the card would float in the empty
           space beside the handset. */
        .mp-device {
          position: relative;
          height: 430px;
          aspect-ratio: 1064 / 2080;
          width: auto;
        }
        @media (max-width: 768px) { .mp-device { height: 350px; } }

        /* The artwork had no rule of its own outside the reduced-motion block,
           so it was relying on a global img{max-width} from the template to be
           sized at all. Stated explicitly here. */
        .mp-device img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 22px;
        }

        /* Shadow on the device rather than the slide: drop-shadow follows the
           handset's actual silhouette, so the artwork's rounded corners cast
           a real edge instead of a rectangle behind a transparent PNG. */
        .mp-device {
          filter: drop-shadow(0 18px 26px rgba(12, 14, 40, 0.16));
          transition: filter 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mp-swiper .swiper-slide-active .mp-device {
          filter: drop-shadow(0 40px 62px rgba(12, 14, 40, 0.36));
        }

        /* ---- Project name, above the phone ----
           Grey for the phones either side, brand gradient for the one in the
           middle — so the row shows which project is in focus without an
           overlay covering the screen you are trying to look at. */
        .mp-name {
          margin: 0 0 16px;
          min-height: 22px;
          font-family: "Play", sans-serif;
          font-size: 15.5px;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-align: center;
          color: rgba(10, 10, 10, 0.3);
          transition: color 0.45s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .mp-swiper .swiper-slide-active .mp-name {
          transform: translateY(-2px);
          background: linear-gradient(120deg, #163198, #4f46e5 50%, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* ---- built-with footnote ---- */
        .mp-stack {
          list-style: none;
          margin: 26px 0 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 22px;
          /* Bottom-left of the section, deliberately not centred — a caption
             sits at the edge of the thing it describes. */
          justify-content: flex-start;
        }
        .mp-stack li {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: ui-monospace, monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(10, 10, 10, 0.42);
          transition: color 0.3s ease;
        }
        .mp-stack li:hover { color: rgba(10, 10, 10, 0.72); }
        .mp-stack-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c);
          /* A faint halo in the same colour keeps the dot from looking stuck
             on, at a size where a plain circle reads as a bullet point. */
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 18%, transparent);
        }
        @media (max-width: 575px) {
          .mp-stack { gap: 8px 16px; margin-top: 22px; }
        }

        /* Reduced motion removes the travel between states, not the hierarchy.
           The centred handset still reads as the focused one — it simply
           arrives there without the easing. */
        @media (prefers-reduced-motion: reduce) {
          .mp-swiper .swiper-slide,
          .mp-device,
          .mp-name,
          .mp-stack li {
            transition: none !important;
          }
          .mp-swiper .swiper-slide-active .mp-name { transform: none !important; }
        }
      `}</style>
    </div>
  );
};

export default MobileAppProjects;
