import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import ButtonTop from "./common/ButtonTop/ButtonTop.jsx";

AOS.init();
AOS.init({
  duration: 1200,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ButtonTop />
    </BrowserRouter>
  </React.StrictMode>
);
