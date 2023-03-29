//import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { CHARACTER_DETAIL_URL } from "../../constants/urls";
=======
import { DOCTOR_DETAILS_URL } from "../../constants/urls";
>>>>>>> 688c6c18dfe835397fb3a542bfe5dcdba206c2eb

function Card({ character }) {
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
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>
            {" "}
            <Link
              to={{
                pathname: DOCTOR_DETAILS_URL,
                state: {
                  user,
                },
              }}
              className={styles.link}
            >
              {user.name}
            </Link>
          </h2>
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
        <div>
          <h3 className={styles.subtitle}>Edad:</h3>
          <h3 className={styles.subtitleInfo}>{user.age}</h3>
        </div>
        <div>
          <h3 className={styles.subtitle}>Rating:</h3>
          <h3 className={styles.subtitleInfo}>{user.rating}</h3>
        </div>
      </div>
    </div>
*/