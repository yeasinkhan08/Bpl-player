import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navber from "./components/Navber.tsx";
import Banner from "./components/Banner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Navber />
    <Banner />
  </StrictMode>,
);
