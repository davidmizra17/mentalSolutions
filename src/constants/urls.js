export const HOME_URL = "/";
export const FAVORITES_URL = "/favorites";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const CHARACTER_DETAIL_URL = (characterId = ":characterId") =>
  `/characters/${characterId}`;
