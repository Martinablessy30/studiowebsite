import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LenisProvider from "./providers/LenisProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </React.StrictMode>
);
