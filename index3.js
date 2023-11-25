import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./stylesTictoe.css";

import App from "./tictoe";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);