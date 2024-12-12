import "./main.css";
import React from "react";
import Router from "./routes";
import { createRoot } from "react-dom/client";

const app = createRoot(document.querySelector("#root"));
app.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
