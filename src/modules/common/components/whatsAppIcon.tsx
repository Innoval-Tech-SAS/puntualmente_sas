import React, { useEffect, useRef, useState, CSSProperties } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../assets/css/WhatsAppIcon.module.css";

const WhatsAppIcon: React.FC = () => {
  const iconRef = useRef<HTMLAnchorElement>(null);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);

  const [bottomOffset, setBottomOffset] = useState("4.5rem");

  useEffect(() => {
    const calculateOffset = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const footerTop = entry.boundingClientRect.top;
        const windowHeight = window.innerHeight;
        const visiblePart = (windowHeight - footerTop) * 2;
        const newBottomRem = 4.5 + visiblePart / 16 + 2;
        setBottomOffset(`${newBottomRem}rem`);
      } else {
        setBottomOffset("4.5rem");
      }
    };

    const setupObserver = () => {
      const footer = document.getElementById("footerLayout");
      if (!footer) return;

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(calculateOffset);
      }, options);

      observer.observe(footer);
      footerObserverRef.current = observer;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (footerRect.top < windowHeight) {
        calculateOffset({
          isIntersecting: true,
          boundingClientRect: footerRect,
        } as IntersectionObserverEntry);
      }
    };

    const timerId = setTimeout(setupObserver, 500);
    return () => {
      clearTimeout(timerId);
      if (footerObserverRef.current) {
        footerObserverRef.current.disconnect();
      }
    };
  }, []);

  const handleClick = () => {
    try {
      const phoneNumber = "+5712542630";
      const text =
        "Hola,%20ingrese%20a%20su%20pagina%20web%20y%20necesito%20información%20de%20mi%20deuda.";
      const url = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(url, "_blank");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const dynamicStyles: CSSProperties = {
    position: "fixed",
    bottom: bottomOffset,
    right: "3.5rem",
    zIndex: 999,
    transition: "bottom 0.3s ease",
  };

  return (
    <a
      ref={iconRef}
      className={styles.whatsappContainer}
      id="whatsapp-container"
      onClick={handleClick}
      style={dynamicStyles}
      role="button"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} size={35} />
    </a>
  );
};

export default WhatsAppIcon;
