import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { HOME_URL, REGISTER_URL } from "../../constants/urls";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  const onFail = (_error) => {
    console.log("LOGIN FAILED, Try Again");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleRole = () => {
    if(getRole === "Doctor"){
      navigate(PROFILE_DOCTOR_URL);
     }else{
      navigate(PROFILE_PATIENT_URL);
     }
  }
//TODO - aqui se verifica a donde se va a redirigir al usuario dependiendo de si es doctor o paciente
  const handleGoogleClick = async () => {
    await signInWithGoogle({
      // onSuccess: () => navigate(PROFILE_URL),
      handleRole,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Bienvenido!</h1>
        <p className={styles.welcomeTxt}>
          Inicia sesión e inspecciona tus personajes favoritos.
        </p>

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

        <button type="submit" className={styles.submitBtn}>
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogleClick}
        >
          Iniciar con google
        </button>

        <Link to={REGISTER_URL} className={styles.loginRedirect}>
          ¿No tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Regístrate</span>
        </Link>
      </form>
    </div>
  );
}
