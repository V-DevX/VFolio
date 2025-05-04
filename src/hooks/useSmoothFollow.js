// src/hooks/useSmoothFollow.js
import { useEffect, useRef } from "react";

export function useSmoothFollow(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      if (ref.current) {
        // center the circle (width/height is 32px)
        ref.current.style.transform = `translate3d(${posX -
          16}px, ${posY - 16}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed]);

  return ref;
}
