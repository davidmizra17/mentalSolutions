import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { HOME_URL, LOGIN_URL, PROFILE_URL } from "../../constants/urls";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setData] = useState({});
  const { user, isLoadingUser } = useUserContext();

  const onSuccess = () => {
    console.log("GOLAZO");
    if (user.role === "Paciente") {
      navigate("/profile-patient");
    } else if (user.role === "Doctor") {
      navigate("/profile-doctor");
    }
  };

  const onFail = (_error) => {
    console.log("REGISTER FAILED, Try Again");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await registerWithEmailAndPassword({
      userData: formData,
      onSuccess,
      onFail,
    });
  };

  const handleGoogleClick = async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(PROFILE_URL),
    });
  };

  const onChange = (event) => {
    setData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Crea una cuenta</h1>
        <p className={styles.welcomeTxt}>
          Bienvenido! Te invitamos a ser parte de nuestra plataforma.
        </p>

        {/* NAME FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="name">
            <span>Ingresa tu nombre y apellido</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Eg. John Doe"
            onChange={onChange}
          />
        </div>

        {/* EMAIL FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Eg. john@email.com"
            onChange={onChange}
          />
        </div>

        {/* PASSWORD FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={onChange}
          />
        </div>

        {/* AGE FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="age">
            <span>Ingresa tu edad</span>
          </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Eg. 24"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="role">
            <span>¿Es usted doctor o paciente?</span>
            <br />
          </label>
          <label htmlFor="doctor">Doctor</label>
          <input
            type="radio"
            name="role"
            id="doctor"
            value="Doctor"
            checked={formData.role === "Doctor"}
            onChange={onChange}
          />
          <label htmlFor="paciente">Paciente</label>
          <input
            type="radio"
            name="role"
            id="paciente"
            value="Paciente"
            checked={formData.role === "Paciente"}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className={styles.submitBtn}
          onClick={handleSubmit}
        >
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogleClick}
        >
          Registro con google
        </button>

        <Link to={LOGIN_URL} className={styles.loginRedirect}>
          ¿Ya tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Inicia sesión</span>
        </Link>
      </form>
    </div>
  );
}
