import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Global styles
import "./index.css";           // your Tailwind + base CSS
import "./styles/globals.scss"; // your SCSS overrides
import "./styles/card.scss";    // glow‑card SCSS

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* We wrap in BrowserRouter in case you add nested routes later */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
