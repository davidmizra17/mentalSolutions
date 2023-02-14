import Axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});

export async function fetchCharacters() {
  return axiosInstance.get("/character");
}

export async function fetchCharacterById(characterId) {
  return axiosInstance.get(`/character/${characterId}`);
}
