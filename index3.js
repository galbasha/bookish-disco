import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./stylesTictoe.css";

import App from "./tictoe.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
