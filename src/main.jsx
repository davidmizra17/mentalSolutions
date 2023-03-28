import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  CHARACTER_DETAIL_URL,
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  PROFILE_URL,
  REGISTER_URL,
  RESERVATION_URL,
} from "./constants/urls";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./pages/Layout/Layout";
import { HomePage } from "./pages/Homepage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { CharacterDetailPage } from "./pages/CharacterDetail/CharacterDetail";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { ReservationPage } from "./pages/Reservation/ReservationPage";
import "./index.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import ChatPage from "./pages/ChatPage/ChatPage";

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
          <Route
            path={REGISTER_URL}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path={LOGIN_URL}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path={FAVORITES_URL}
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />

          <Route
            path={PROFILE_URL}
            element={
              <PrivateRoute>
                <UserProfilePage />
              </PrivateRoute>
            }
          />

          <Route
            path={RESERVATION_URL}
            element={
              <PublicRoute>
                <ReservationPage />
              </PublicRoute>
            }
          />

          <Route path="/doctors/:doctorName" />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
