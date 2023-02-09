import React from "react";
import styles from "./index.module.css";

function Card({
  name,
  image,
  last_known_location,
  status,
  first_seen_in,
  species,
}) {
  return (
    <div className={styles.container}>
      <div className="">
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <div>
          <div />
          <h3>{status}</h3>
          <h3>{species}</h3>
        </div>
        <div>
          <h3>Last known location:</h3>
          <h3>{last_known_location}</h3>
        </div>
        <div>
          <h3>First seen in:</h3>
          <h3>{first_seen_in}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
