import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import styles from "./CharacterDetail.module.css";

export function CharacterDetailPage() {
  const { characterId } = useParams();
  const { getCharacter, character, isLoading } = useCharacters();

  const { name, image,species, status, gender  } = character || {};

  useEffect(() => {
    if (!isLoading && characterId) {
      getCharacter(characterId);
    }
  }, [getCharacter]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>Loading...</h1>
      </div>
    );
  }

  if (!isLoading && !character) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>NOT FOUND DATA</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.info}>Especie: {species}</p>
        <p className={styles.info}>Estado: {status}</p>
        <p className={styles.info}>Género: {gender}</p>
      </div>
    </div>
  );
}
