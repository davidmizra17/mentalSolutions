import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import styles from "./HomePage.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";

export function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="container">
      <h1 className="title">MentalSolutions</h1>
      <h2 className="title">Atención a un click de distancia</h2>
      <h3>
        Servicio de atención psicológica que brinda el acompañamiento necesario
        para cada paciente.
      </h3>
    </div>
  );
}
