import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import "./HomePage.css";
import { collection, getDocs, query, where } from "firebase/firestore";

export function HomePage() {
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

  return (
    <div className="container">
      <h1 className="title">MentalSolutions</h1>
      <div className="characters">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          doctors.map((doctor) => <Card user={doctor} key={doctor.id} />)
        )}
      </div>
    </div>
  );
}
