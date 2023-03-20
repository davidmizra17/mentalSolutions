//import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { useDoctors } from "../../hooks/useDoctors";
import styles from "./DoctorList.module.css";

export function showDoctors() {
  const [isLoading, doctors, doctor, getDoctors, getDoctor] = useDoctors()
  return (
    <div>
      <h1 className={styles.title}>Psicólogos Disponibles</h1>
      <div className={styles.container}>
        <div className={styles.containerElipse}>
          <div className={styles.doctorsSpace}>
        {
          getDoctors.map((doctor) => (
            <Card doctor={doctor} />
            ))
        }
        </div>
        </div>
      </div>
    </div>
  );
}
