import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
<<<<<<< HEAD
  DOCTOR_DETAIL_URL,
=======
  DOCTOR_DETAILS_URL,
>>>>>>> 688c6c18dfe835397fb3a542bfe5dcdba206c2eb
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
<<<<<<< HEAD
<<<<<<< HEAD
//import { DoctorDetailPage } from "./pages/DoctorDetail/DoctorDetailPage";
=======
import { DoctorDetailsPage } from "./pages/DoctorDetailsPage/DoctorDetailsPage";
>>>>>>> 688c6c18dfe835397fb3a542bfe5dcdba206c2eb
=======
>>>>>>> dbef60116a78fb6b8e31c9d872232d61682b5474
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { ReservationPage } from "./pages/Reservation/ReservationPage";
import "./index.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import ChatPage from "./pages/ChatPage/ChatPage";
import { DoctorDetailsPage } from "./pages/DoctorDetailsPage/DoctorDetailsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
<<<<<<< HEAD
          
          <Route
            path={DOCTOR_DETAIL_URL()}
            element={< DoctorDetailPage />}
          />
=======

>>>>>>> 688c6c18dfe835397fb3a542bfe5dcdba206c2eb
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
              <PrivateRoute>
                <ReservationPage />
              </PrivateRoute>
            }
          />
          <Route
            path={DOCTOR_DETAILS_URL}
            element={
              <PrivateRoute>
                <DoctorDetailsPage />
              </PrivateRoute>
            }
          />

          <Route path="/doctors/:doctorName" element={<DoctorDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
