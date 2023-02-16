import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  CHARACTER_DETAIL_URL,
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "./constants/urls";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./pages/Layout/Layout";
import { HomePage } from "./pages/Homepage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { CharacterDetailPage } from "./pages/CharacterDetail/CharacterDetail";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route
            path={CHARACTER_DETAIL_URL()}
            element={<CharacterDetailPage />}
          />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={FAVORITES_URL} element={<h1>FAVORITES PAGE!!!</h1>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
