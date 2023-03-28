export const HOME_URL = "/home-page";
export const FAVORITES_URL = "/favorites";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const PROFILE_PATIENT_URL = "/profile-patient";
export const PROFILE_DOCTOR_URL = "/profile-doctor";
export const CHARACTER_DETAIL_URL = (characterId = ":characterId") =>
  `/characters/${characterId}`;
