import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UserProfilePage.module.css";
import { HOME_URL } from "../../constants/urls";
import { useState } from "react";
import { getUserProfile, updateUser } from "../../firebase/users";

import { auth } from "../../firebase/config";
export function UserProfilePage() {
  const navigate = useNavigate();
  const [formData, setData] = useState({});

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  // TODO: se necesita poder cambiar los datos ingresados en la base de datos. hay que ver la prepa de firebase sobretodo la parte en la que programan createUser, updateUser y esa paja en index.js

  const handleSubmit = async (event) => {
    checkGender();
    event.preventDefault();
    await updateUser(auth.currentUser.uid, {
      // userData: formData,
      name: document.getElementById("name").value,
      phoneNumber: document.getElementById("phone").value,
      age: document.getElementById("age").value,
    });
    console.log(auth.currentUser.displayName);
  };

  const onChange = (event) => {
    setData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  const checkGender = () => {
    // TODO
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Ajustes de perfil</h1>

        {/* IMAGE FIELD */}
        <div className={styles.image}>
          <label htmlFor="image">Imagen de perfil</label>
          <input
            type="image"
            name="image"
            id="image"
            placeholder={auth.currentUser.image}
            // TODO: colocar una logica para que si el usuario aun no ha colocado su imagen que se coloque su imagen default
            onChange={onChange}
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

        {/* PHONE NUMBER */}
        <div className={styles.inputContainer}>
          <label htmlFor="age">
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
          <label for="male">Male</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="female" value="female" />
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
