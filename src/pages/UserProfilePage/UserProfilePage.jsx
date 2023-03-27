import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UserProfilePage.module.css";
import { HOME_URL } from "../../constants/urls";
import { getUserProfile, updateUser } from "../../firebase/users";
import { auth, storage } from "../../firebase/config";

export function UserProfilePage() {
  const navigate = useNavigate();
  const [formData, setData] = useState({});
  const [photo, setPhoto] = useState(null);

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userUid = auth.currentUser.uid;
    updateUser(userUid, {
      name: document.getElementById("name").value,
      phoneNumber: document.getElementById("phone").value,
      age: document.getElementById("age").value,
      gender: getGender(),
    });
    console.log(auth.currentUser.displayName);
    onSuccess();
  };

  const onChange = (event) => {
    setData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  const getGender = () => {
    const male = document.getElementById("male").checked;
    return male ? "Masculino" : "Femenino";
  };

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };
  // Sube la imagen al storage y obtiene el URL para guardarlo en el base de datos.
  const uploadPhoto = async () => {
    if (photo) {
      const userUid = auth.currentUser.uid;
      const storageRef = firebase
        .storage()
        .ref(`users/${userUid}/profile-photo`);
      const snapshot = await storageRef.put(photo);
      const photoUrl = await snapshot.ref.getDownloadURL();
      updateUser(userUid, { photoUrl });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Ajustes de perfil</h1>

        {/*FOTO DE PERFIL  */}
        <div className={styles.inputContainer}>
          <label htmlFor="photo">
            <span>Foto de perfil</span>
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>

        {/* NAME FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="name">
            <span>Nombre y apellido</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={auth.currentUser.displayName}
            onChange={onChange}
          />
        </div>

        {/* PHONE */}
        <div className={styles.inputContainer}>
          <label htmlFor="phone">
            <span>Numero telefónico</span>
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="TODO: colocar phone number del usuario en bd"
            onChange={onChange}
          />
        </div>

        {/* AGE */}
        <div className={styles.inputContainer}>
          <label htmlFor="age">
            <span>Ingresa tu edad</span>
          </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder={auth.currentUser.age}
            onChange={onChange}
          />
        </div>

        {/* GENDER */}
        <div>
          <label htmlFor="gender">
            <span>Escoge tu género:</span>
            <br />
          </label>
          <label htmlFor="male">Masculino</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="Masculino"
            checked={formData.gender === "Masculino"}
            onChange={onChange}
          />
          <label htmlFor="female">Femenino</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="Femenino"
            checked={formData.gender === "Femenino"}
            onChange={onChange}
          />
        </div>

        {/* Para guardar cambios */}
        <button
          type="submit"
          className={styles.submitBtn}
          onClick={handleSubmit}
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
