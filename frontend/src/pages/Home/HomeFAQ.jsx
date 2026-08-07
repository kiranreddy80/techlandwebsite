import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Smartphone,
  Layers,
  ShieldCheck,
  Clock,
  DollarSign,
  ChevronRight
} from "lucide-react";
import "./HomeFAQ.css";

const HomeFAQ = () => {
  // --- ORIGINAL DATA PRESERVED EXACTLY ---
  const faqData = [
    {
      id: 1,
      icon: <Layers size={32} />,
      question: "01. What services does Techland IT Solutions offer?",
      answer:
        "Techland IT Solutions provides end-to-end mobile app development, web development, UI/UX design, software development, and digital marketing services. We specialize in creating user-centric applications for Android, iOS, and cross-platform solutions.",
    },
    {
      id: 2,
      icon: <Zap size={32} />,
      question:
        "02. Why is Techland IT Solutions considered one of the best mobile app development companies in Hyderabad?",
      answer:
        "We are known for delivering custom mobile app development solutions that blend innovation, scalability, and great design. Our team of experienced developers focuses on turning business ideas into functional, high-performing apps trusted by clients across India, Dubai, California, and Denmark.",
    },
    {
      id: 3,
      icon: <Smartphone size={32} />,
      question: "03. Do you develop both Android and iOS mobile apps?",
      answer:
        "Yes. We offer native app development for Android and iOS, as well as cross-platform app development using Flutter and React Native ensuring your app performs seamlessly on all devices.",
    },
    {
      id: 4,
      icon: <Clock size={32} />,
      question: "04. How long does it take to develop a mobile app?",
      answer:
        "The development timeline depends on your app's complexity, design requirements, and feature set. A simple app may take 6-8 weeks, while feature-rich enterprise apps may require 3-6 months. We provide clear project timelines during our initial consultation.",
    },
    {
      id: 5,
      icon: <DollarSign size={32} />,
      question: "05. How much does mobile app development cost?",
      answer:
        "App development cost varies based on features, technology stack, and platform choice. Techland IT Solutions offers cost-effective packages tailored to your business goals whether you need a startup MVP or a full-scale enterprise solution.",
    },
    {
      id: 6,
      icon: <ShieldCheck size={32} />,
      question:
        "06. Can you help with app maintenance and post-launch support?",
      answer:
        "Absolutely! We provide ongoing maintenance, updates, and performance optimization services after your app goes live. Our team ensures your app remains secure, fast, and up-to-date with the latest OS versions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const { setOpenContactModal } = useOutletContext();

  return (
    <section className="faq-morph-section">
      <div className="container morph-container">
        <div className="morph-layout">

          {/* Left Side: Editorial Navigation */}
          <div className="morph-navigation">
            <header className="morph-header">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="morph-tag"
              >
                Information Hub 
              </motion.span>
              <h2 className="morph-title">Expertly Resolved.</h2>
            </header>

            <div className="morph-questions">
              {faqData.map((item, index) => {
                const isActive = activeIndex === index;
                // Clean the "01. " part
                const cleanQuestion = item.question.includes(". ") ? item.question.split(". ")[1] : item.question;

                return (
                  <button
                    key={item.id}
                    className={`morph-btn ${isActive ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="morph-num">0{index + 1}</span>
                    <span className="morph-q-text">{cleanQuestion}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: The Creative Display */}
          <div className="morph-display-area">
            {/* Background Morphing Shape */}
            <div className={`morphing-blob blob-id-${activeIndex}`}></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="morph-content-card"
              >
                <div className="morph-icon-wrap">
                  {faqData[activeIndex].icon}
                </div>
                <h3 className="morph-display-title">
                  {faqData[activeIndex].question.split(". ")[1]}
                </h3>
                <p className="morph-display-answer">
                  {faqData[activeIndex].answer}
                </p>

                <motion.button
                  whileHover={{ x: 10 }}
                  style={{ marginTop: '32px', background: 'none', border: 'none', color: 'var(--morph-accent)', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}
                  onClick={() => setOpenContactModal(true)}
                >
                  Discuss This <ChevronRight size={18} />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
