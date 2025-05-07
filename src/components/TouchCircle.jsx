// src/components/TouchCircle.jsx
import React, { useState, useEffect, useRef } from "react";

export default function TouchCircle() {
  const circleRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Position helper
    const moveCircle = (x, y) => {
      const el = circleRef.current;
      if (!el) return;
      const { offsetWidth: w, offsetHeight: h } = el;
      el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0)`;
    };

    // Handlers
    const onTouchStart = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      moveCircle(touch.clientX, touch.clientY);
      setActive(true);
    };
    const onTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      moveCircle(touch.clientX, touch.clientY);
    };
    const onTouchEnd = () => {
      setActive(false);
    };

    // Listen globally
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchcancel", onTouchEnd);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  // Only render the circle while active
  if (!active) return null;

  return (
    <div
      ref={circleRef}
      className="
        pointer-events-none
        fixed top-0 left-0
        w-8 h-8 rounded-full
        border border-pink-500 bg-transparent
        z-[9999]
        transition-transform duration-200 ease-out
      "
    />
  );
}
