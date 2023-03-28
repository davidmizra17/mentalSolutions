import React from "react";
import styles from "./index.module.css";

function Card({ user }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={user.image} alt={user.name} className={styles.image} />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{user.name}</h2>
          <div className={styles.statusRow}>
            <h3>{user.type}</h3>
          </div>
        </div>
        <div>
          <h3 className={styles.subtitle}>Edad:</h3>
          <h3 className={styles.subtitleInfo}>{user.age}</h3>
        </div>
        <div>
          <h3 className={styles.subtitle}>Bio:</h3>
          <h3 className={styles.subtitleInfo}>{user.bio}</h3>
        </div>
        <div>
          <h3 className={styles.subtitle}>Rating:</h3>
          <h3 className={styles.subtitleInfo}>{user.rating}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
