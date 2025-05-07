// src/components/TouchCircle.jsx
import React, { useState, useEffect, useRef } from "react";

export default function TouchCircle() {
  const circleRef = useRef(null);
  // null until first touchstart, {x,y} while touching
  const [touchPos, setTouchPos] = useState(null);

  useEffect(() => {
    const onTouchStart = (e) => {
      const t = e.touches[0];
      if (!t) return;
      // record position → triggers mount
      setTouchPos({ x: t.clientX, y: t.clientY });
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (!t || !circleRef.current) return;
      // move circle under finger
      const { offsetWidth: w, offsetHeight: h } = circleRef.current;
      circleRef.current.style.transform = 
        `translate3d(${t.clientX - w/2}px, ${t.clientY - h/2}px, 0)`;
    };

    const onTouchEnd = () => {
      // hide/unmount
      setTouchPos(null);
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

  // not mounted until touchPos !== null
  if (!touchPos) return null;

  // initial position under finger (32px = w-8 h-8)
  const initX = touchPos.x - 16;
  const initY = touchPos.y - 16;

  return (
    <div
      ref={circleRef}
      style={{ transform: `translate3d(${initX}px, ${initY}px, 0)` }}
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
