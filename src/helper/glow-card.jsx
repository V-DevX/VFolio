// src/helper/GlowCard.jsx
import React, { useEffect, useRef } from "react";

const GlowCard = ({ children }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    // Initialize CSS variables on the container
    container.style.setProperty("--gap", CONFIG.gap);
    container.style.setProperty("--blur", CONFIG.blur);
    container.style.setProperty("--spread", CONFIG.spread);
    container.style.setProperty(
      "--direction",
      CONFIG.vertical ? "column" : "row"
    );

    // Pointer move handler
    const handlePointerMove = (event) => {
      const { left, top, width, height } = card.getBoundingClientRect();

      const inX =
        event.x > left - CONFIG.proximity &&
        event.x < left + width + CONFIG.proximity;
      const inY =
        event.y > top - CONFIG.proximity &&
        event.y < top + height + CONFIG.proximity;

      card.style.setProperty("--active", inX && inY ? 1 : CONFIG.opacity);

      // calculate angle
      const cx = left + width / 2;
      const cy = top + height / 2;
      let angle = (Math.atan2(event.y - cy, event.x - cx) * 180) / Math.PI;
      if (angle < 0) angle += 360;
      card.style.setProperty("--start", `${angle + 90}`);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    return () =>
      document.body.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div ref={containerRef} className="glow-container">
      <article ref={cardRef} className="glow-card h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full">
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
