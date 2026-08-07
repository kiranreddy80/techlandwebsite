import React, { useEffect, useState } from "react";
import company from "../config/company";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = company.whatsapp("Hi! I'm interested in your services.");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${visible ? "show" : ""}`}
      aria-label="Chat on WhatsApp"
    >
      <span className="tooltip">Chat with us</span>

      <div className="icon-wrapper">
        <i className="fa-brands fa-whatsapp" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
