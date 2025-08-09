// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/AdminContext"; // ✅ Keep your context
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Only ONE BrowserRouter here */}
      <AdminProvider> {/* ✅ Wrap context here if needed globally */}
        <App />
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
