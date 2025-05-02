// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 text-white transition-all duration-300 ease-out hover:text-xl";
const SCROLL_THRESHOLD = 50;

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // run once to set initial state
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      aria-label="Scroll to top"
      className={DEFAULT_BTN_CLS}
    >
      <FaArrowUp size={16} />
    </button>
  );
}

export default ScrollToTop;
