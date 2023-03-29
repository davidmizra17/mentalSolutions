import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/config";

export function DoctorDetailsPage() {
  const location = useLocation();
  const user = location.state.user;
  const [doctorInfo, setDoctorInfo] = useState(null);

  useEffect(() => {
    db.collection("users")
      .where("name", "==", user.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          const { gender, name, email } = userData;
          setDoctorInfo({ gender, name, email });
        } else {
          console.log("No matching documents!");
        }
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }, [user.name]);

  return (
    <div>
      {doctorInfo ? (
        <div>
          <h1>Doctor's information:</h1>
          <p>Name: {doctorInfo.name}</p>
          <p>Gender: {doctorInfo.gender}</p>
          <p>Email: {doctorInfo.email}</p>
        </div>
      ) : (
        <p>Loading doctor's information...</p>
      )}
    </div>
  );
}
