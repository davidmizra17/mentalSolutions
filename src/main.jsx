import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HOME_URL } from "./constants/urls";
import { HomePage } from "./pages/Homepage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
