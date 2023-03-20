//import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { DOCTOR_DETAIL_URL } from "../../constants/urls";

//atributos del doctor: nombre, edad, genero, imagen, biografia


export function Card({ doctor }) {
  //const {name, age, gender, img, bio, rating} = doctor
  return (
    <div className={styles.container}>
        <img 
          src={doctor.img}
          alt={doctor.name}
          className={styles.image}
        />
        <p className={styles.name}>{doctor.name}</p>  
        <p className={styles.stars}>{doctor.rating}</p>
        <Link to={DOCTOR_DETAIL_URL(doctor.id)} className={styles.linkSeeMore}>Ver información completa</Link>
    </div>
   );

}
/*    <div className={styles.container}>
      <div>
        <img
          src={doctor.image}
          alt={doctor.name}
          className={styles.image}
        />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>
            <Link
              to={CHARACTER_DETAIL_URL(character.id)}
              className={styles.link}
            >
              {character.name}
            </Link>
          </h2>
          <div className={styles.statusRow}>
            <div
              className={
                character.status === "Morido"
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
*/