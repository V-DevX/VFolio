// src/components/TouchCircle.jsx
import React, { useState, useEffect, useRef } from "react";

export default function TouchCircle() {
  const circleRef = useRef(null);
  // null until first touchstart; then {x,y} while finger down
  const [touchPos, setTouchPos] = useState(null);

  // refs to drive smoothing without re-renders
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    // Touch handlers
    const onTouchStart = (e) => {
      const t = e.touches[0];
      if (!t) return;
      const { clientX: x, clientY: y } = t;
      // show & initialize positions
      setTouchPos({ x, y });
      target.current = { x, y };
      current.current = { x, y };
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (!t) return;
      target.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchEnd = () => {
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

  useEffect(() => {
    if (!touchPos) return;

    const speed = 0.99; // higher → faster follow
    const step = () => {
      if (circleRef.current) {
        // lerp current → target
        current.current.x += (target.current.x - current.current.x) * speed;
        current.current.y += (target.current.y - current.current.y) * speed;
        const el = circleRef.current;
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        el.style.transform = `translate3d(${
          current.current.x - w / 2
        }px, ${current.current.y - h / 2}px, 0)`;
      }
      raf.current = requestAnimationFrame(step);
    };

    // immediate first frame
    step();

    return () => {
      cancelAnimationFrame(raf.current);
    };
  }, [touchPos]);

  // only render when finger is down
  if (!touchPos) return null;

  return (
    <div
      ref={circleRef}
      className="
        pointer-events-none fixed top-0 left-0
        w-8 h-8 rounded-full border border-pink-500 bg-transparent
        z-[9999]
      "
      style={{
        // initial position under finger
        transform: `translate3d(${touchPos.x - 16}px, ${
          touchPos.y - 16
        }px, 0)`,
      }}
    />
  );
}
