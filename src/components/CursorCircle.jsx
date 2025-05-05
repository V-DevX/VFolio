// src/components/CursorCircle.jsx
import React, { useState, useEffect } from "react";
import { useSmoothFollow } from "../hooks/useSmoothFollow";

export default function CursorCircle() {
  // Snappier follow speed
  const circleRef = useSmoothFollow(0.2);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const interactiveSelector = "button, a, input, textarea";

    const handleMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const overInteractive = !!el?.closest(interactiveSelector);
      setIsShrunk((prev) => (overInteractive !== prev ? overInteractive : prev));
    };

    document.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className={`
        pointer-events-none fixed top-0 left-0 rounded-full
        bg-transparent border border-pink-500 z-[9999]
        transition-all duration-200 ease-out
        ${isShrunk ? "w-6 h-6" : "w-8 h-8"}
        hidden md:block
      `}
    />
  );
}
