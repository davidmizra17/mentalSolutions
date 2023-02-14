import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "./constants/urls";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./pages/Layout/Layout";
import { HomePage } from "./pages/Homepage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: HOME_URL,
        element: <HomePage />,
      },
      {
        path: FAVORITES_URL,
        element: <h1>FAVORITES PAGE!!!</h1>,
      },
      {
        path: LOGIN_URL,
        element: <h1>LOGIN PAGE!!!</h1>,
      },
      {
        path: REGISTER_URL,
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
