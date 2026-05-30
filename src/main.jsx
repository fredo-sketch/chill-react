import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, redirect } from "react-router";
import router from "./utils/router.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);
