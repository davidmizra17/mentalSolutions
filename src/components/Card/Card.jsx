import React from "react";
import styles from "./index.module.css";

function Card({ character }) {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{character.name}</h2>
          <div className={styles.statusRow}>
            <div
              className={
                character.status === "Alive"
                  ? styles.aliveStatus
                  : styles.deadStatus
              }
            />
            <h3>
              {character.status} - {character.species}
            </h3>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.subtitle}>Last known location:</h3>
          <h3 className={styles.subtitleInfo}>
            {character.last_known_location}
          </h3>
        </div>
        <div>
          <h3 className={styles.subtitle}>First seen in:</h3>
          <h3 className={styles.subtitleInfo}>{character.first_seen_in}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
