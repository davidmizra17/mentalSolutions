import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./DoctorPage.module.css";
import { HOME_URL } from "../../constants/urls";
import { getUserProfile, updateUser } from "../../firebase/users";
import { auth } from "../../firebase/config";
import { db } from "../../firebase/config";
import { collection, where } from "firebase/firestore";

export function DoctorPage() {
  const navigate = useNavigate();
  const [formData, setData] = useState({});

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
      experience: document.getElementById("experience").value,
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

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Ajustes de perfil (Doctor)</h1>

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

        {/* AÑOS DE EXPERIENCIA */}
        <div className={styles.inputContainer}>
          <label htmlFor="experience">
            <span>Ingrese sus años de experiencia</span>
          </label>
          <input
            type="number"
            name="experience"
            id="experience"
            placeholder={auth.currentUser.experience}
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
