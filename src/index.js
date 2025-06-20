// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import "./styles/global.css"; // <- import the scrollbar style

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
