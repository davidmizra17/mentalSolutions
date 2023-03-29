import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";

export function DoctorDetailsPage() {
  const [doctorInfo, setDoctorInfo] = useState(null);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // db.collection("users")
    //   .where("name", "==", user.name)
    //   .get()
    //   .then((querySnapshot) => {
    //     if (!querySnapshot.empty) {
    //       const userData = querySnapshot.docs[0].data();
    //       const { gender, name, email } = userData;
    //       setDoctorInfo({ gender, name, email });
    //     } else {
    //       console.log("No matching documents!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents:", error);
    //   });

    fetch(`/firebaseconfig/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));

    const fetchUser = async () => {
      try {
        const userRef = db.collection("users").doc(id);
        const userDoc = await userRef.get();
        setUser(userDoc.data());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Doctor's information:</h1>
          <p>Name: {user.name}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading doctor's information...</p>
      )}
    </div>
  );
}
