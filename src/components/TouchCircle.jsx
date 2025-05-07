// src/components/TouchCircle.jsx
import React, { useState, useEffect, useRef } from "react";

export default function TouchCircle() {
  const circleRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Position the circle under (x, y)
    const moveCircle = (x, y) => {
      const el = circleRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0)`;
    };

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

  return (
    <div
      ref={circleRef}
      className={`
        pointer-events-none fixed top-0 left-0
        w-8 h-8 rounded-full border border-pink-500 bg-transparent
        z-[9999]
        transition-transform duration-200 ease-out
        ${active ? "opacity-100" : "opacity-0"}
      `}
    />
  );
}
