import CalendarTemplate from "availability-calendar-react";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import styles from "./ReservationPage.module.css";

export function ReservationPage() {
  const [availability, setAvailability] = useState([]);
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
  });

  // Handler para imprimir los doctores
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDoctors = async () => {
      const q = query(
        collection(db, USERS_COLLECTION),
        where("role", "==", "Doctor")
      );

      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setDoctors(docs);
      setIsLoading(false);
    };
    getDoctors();
  }, []);

  const handleVerga = availability;
  //TODO mandar la informacion de availability a la lista de reservas del currentUser en la dbe
  console.log(handleVerga);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>¡Reserva una cita!</h1>
        <div>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            doctors.map((doctor) => <Card user={doctor} key={doctor.id} />)
          )}
        </div>
      </div>
            <div >
      <Calendar />
      </div>
    </div>
  );
}
