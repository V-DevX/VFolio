import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CursorCircle from "./components/CursorCircle";
import Navbar from "./components/Navbar";
import ScrollToTop from "./helper/scroll-to-top";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactSection from "./components/ContactSection";

function App() {
  // Initialize Google Tag Manager
  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID;
    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, []);

  return (
    <>
      {/* Circle that follows the cursor */}
      <CursorCircle />

      {/* Toast notifications */}
      <ToastContainer />

      {/* Navbar with scroll progress */}
      <ScrollProgress />
      <Navbar />

      {/* Main content */}
      <main className="min-h-screen container mx-auto px-6 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-white">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <ContactSection />
      </main>

      {/* Scroll‑to‑Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
