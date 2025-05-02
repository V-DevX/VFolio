// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        {/* Centered divider line */}
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        {/* Centered credit text */}
        <p className="text-center text-sm">
          © Developer Portfolio by{" "}
          <a
            href="https://www.linkedin.com/in/vasanth-anto/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16f2b3] hover:underline"
          >
            VASANTH
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
