// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white px-1 sm:px-4 md:px-8">
      <div className="relative mx-auto max-w-2xl py-6 lg:py-10">
        {/* Centered divider line */}
        <div className="flex justify-center">
          <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        {/* Centered credit text */}
        <p className="text-center text-sm mt-4">
          © Developer Portfolio by{" "}
          <a
            href="https://www.linkedin.com/in/vasanth-anto/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[#16f2b3] hover:underline active:underline focus:underline
              focus:outline-none focus:ring-2 focus:ring-violet-500
            "
          >
            VASANTH
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
