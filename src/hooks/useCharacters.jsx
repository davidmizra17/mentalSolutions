import { useCallback, useState } from "react";
import { fetchCharacterById, fetchCharacters } from "../utils/rick-morty-api";

export function useCharacters() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);

  const getCharacters = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchCharacters();
      setCharacters(data.results);
      setIsLoading(false);

      return characters;
    } catch (error) {
      console.error("FAILED GET CHARACTERS", error);
    }
  }, []);

  const getCharacter = useCallback(async (characterId) => {
    try {
      setIsLoading(true);
      const { data } = await fetchCharacterById(characterId);
      setCharacter(data);
      setIsLoading(false);

      return character;
    } catch (error) {
      console.error("FAILED GET CHARACTER", error);
    }
  }, []);

  return {
    isLoading,
    characters,
    character,
    getCharacters,
    getCharacter,
  };
}
