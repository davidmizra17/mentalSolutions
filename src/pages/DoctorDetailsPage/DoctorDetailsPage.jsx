import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/config";
import { useUserContext } from "../../contexts/UserContext";

export function DoctorDetailsPage() {
  const { user, isLoadingUser } = useUserContext();

  // const location = useLocation();
  // const [doctorInfo, setDoctorInfo] = useState(null);
  // console.log(doctor_name);
  // useEffect(() => {
  //   db.collection("users")
  //     .where("name", "==", doctor_name)
  //     .get()
  //     .then((querySnapshot) => {
  //       if (!querySnapshot.empty) {
  //         const userData = querySnapshot.docs[0].data();
  //         const { gender, name, email } = userData;
  //         setDoctorInfo({ gender, name, email });
  //       } else {
  //         console.log("No matching documents!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents:", error);
  //     });
  // }, [doctor_name]);

  // return (
  //   <div>
  //     {doctorInfo ? (
  //       <div>
  //         <h1>Doctor's information:</h1>
  //         <p>Name: {doctor_name}</p>
  //         <p>Gender: {doctorInfo.gender}</p>
  //         <p>Email: {doctorInfo.email}</p>
  //       </div>
  //     ) : (
  //       <p>Loading doctor's information...</p>
  //     )}
  //   </div>
  // );
}
