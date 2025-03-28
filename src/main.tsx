import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
