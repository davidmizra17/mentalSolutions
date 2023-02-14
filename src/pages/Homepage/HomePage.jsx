import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useCharacters } from "../../hooks/useCharacters";
import "./HomePage.css";

export function HomePage() {
  const { isLoading, characters, getCharacters } = useCharacters();

  // FETCH CHARACTERS USING RICK AND MORTY API
  useEffect(() => {
    if (!isLoading) {
      getCharacters();
    }
  }, [getCharacters]);

  return (
    <>
      <div className="container">
        <h1 className="title">Rick and Morty Characters</h1>
        <div className="characters">
          {isLoading ? (
            <p className="loading">Loading...</p>
          ) : (
            characters.map((character) => (
              <>
                <Card character={character} key={character.name} />
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
}
