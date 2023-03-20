export const HOME_URL = "/";
export const FAVORITES_URL = "/favorites";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const PROFILE_URL = "/profile";
export const DOCTOR_DETAIL_URL = (doctorId = ":doctorId") =>
  `/doctors/${doctorId}`;
