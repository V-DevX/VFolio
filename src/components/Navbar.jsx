// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInStagger, navItemFade, wipeDown } from "../utils/animations";
import { personalData } from "../utils/data/personal-data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  const menuItems = [
    ["ABOUT", "about"],
    ["SKILLS", "skills"],
    ["SERVICES", "services"],
    ["PROJECTS", "projects"],
    ["EDUCATION", "education"],
  ];

  // Detect scroll position to show floating hamburger
  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current?.offsetHeight || 0;
      setShowFloat(window.scrollY > navHeight);
      if (window.scrollY <= navHeight) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll logic with fallback
  const scrollToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = window.innerWidth < 768 ? -130 : 0;
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setMenuOpen(false);
      }
    }, 100);
  };

  // Shared button classes for hover/active/focus
  const linkBtnClasses =
    "block px-4 py-2 rounded-full bg-gradient-to-r transition-all duration-300 text-sm text-white font-bold " +
    "hover:from-pink-500 hover:to-violet-600 hover:text-white hover:scale-105 " +
    "active:from-pink-500 active:to-violet-600 active:text-white active:scale-105 " +
    "focus:from-pink-500 focus:to-violet-600 focus:text-white focus:scale-105";

  const mobileLinkBtnClasses =
    "block w-full text-center rounded-full bg-gradient-to-r text-white text-sm px-4 py-2 transition-all duration-300 " +
    "hover:from-pink-500 hover:to-violet-600 hover:scale-105 " +
    "active:from-pink-500 active:to-violet-600 active:scale-105 " +
    "focus:from-pink-500 focus:to-violet-600 focus:scale-105";

  const hamburgerBtnClasses =
    "text-white p-2 rounded-md transition-all " +
    "hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-600 " +
    "active:scale-110 active:bg-gradient-to-r active:from-pink-500 active:to-violet-600 " +
    "focus:scale-110 focus:bg-gradient-to-r focus:from-pink-500 focus:to-violet-600";

  return (
    <>
      {/* Main Navbar */}
      <nav ref={navRef} className="bg-transparent w-full z-40 relative">
        <div className="flex items-center justify-between py-4 px-1 sm:px-4 md:px-8">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            variants={wipeDown}
            initial="hidden"
            animate="visible"
          >
            <a href="#" onClick={() => scrollToSection("top")}>
              <img
                src={personalData.cover}
                alt={personalData.name}
                className={
                  "w-35 md:w-40 rounded-lg transition-all duration-1000 grayscale " +
                  "hover:grayscale-0 active:grayscale-0 focus:grayscale-0 " +
                  "hover:scale-110 active:scale-110 focus:scale-110 cursor-pointer"
                }
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            variants={fadeInStagger}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-x-2 lg:gap-x-4"
          >
            {menuItems.map(([label, id], i) => (
              <motion.li key={id} variants={navItemFade} custom={i}>
                <button onClick={() => scrollToSection(id)} className={linkBtnClasses}>
                  {label}
                </button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={hamburgerBtnClasses}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 px-4 py-4 bg-[#0d0d0d] md:hidden"
            >
              {menuItems.map(([label, id], i) => (
                <motion.li key={id} variants={navItemFade} custom={i}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={mobileLinkBtnClasses}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Hamburger when navbar is out of view */}
      <AnimatePresence>
        {showFloat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-4 right-4 z-[9999] flex flex-col items-end"
          >
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={hamburgerBtnClasses}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              )}
            </button>

            {/* Floating Dropdown */}
            <AnimatePresence>
              {menuOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3 px-4 py-4 bg-[#0d0d0d] text-white rounded-lg shadow-lg mt-2"
                >
                  {menuItems.map(([label, id], i) => (
                    <motion.li key={id} variants={navItemFade} custom={i}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={mobileLinkBtnClasses}
                      >
                        {label}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
