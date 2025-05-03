// src/hooks/usePointerHover.js
import { useRef, useEffect } from "react";

/**
 * usePointerHover(hoverClass, duration)
 * - attaches pointerdown/up/cancel listeners to its `ref`.
 * - on pointerdown it adds `hoverClass`.
 * - on pointerup / pointercancel it waits `duration`ms then removes it.
 */
export function usePointerHover(
  hoverClass = "pointer-hover-active",
  duration = 300
) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId;

    const start = () => {
      el.classList.add(hoverClass);
      // ensure the class sticks around for full duration
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        el.classList.remove(hoverClass);
      }, duration);
    };
    const end = () => {
      clearTimeout(timeoutId);
      el.classList.remove(hoverClass);
    };

    el.addEventListener("pointerdown", start, { passive: true });
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);

    return () => {
      clearTimeout(timeoutId);
      el.removeEventListener("pointerdown", start);
      el.removeEventListener("pointerup", end);
      el.removeEventListener("pointercancel", end);
    };
  }, [hoverClass, duration]);

  return ref;
}
