import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BackendAuthProvider } from "./contexts/BackendAuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackendAuthProvider>
      <App />
    </BackendAuthProvider>
  </StrictMode>
);
