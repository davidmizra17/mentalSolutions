import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { HOME_URL, LOGIN_URL } from "../../constants/urls";
import { signInWithGoogle } from "../../firebase/auth-api";

export function RegisterPage() {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(HOME_URL),
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Crea una cuenta</h1>
        <p className={styles.welcomeTxt}>
          Bienvenido! Te invitamos a ser parte de nuestra plataforma.
        </p>

        {/* USERNAME FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="username">
            <span>Ingresa tu nombre de usuario</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Eg. john_doe"
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
          />
        </div>

        {/* AGE FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="age">
            <span>Ingresa tu edad</span>
          </label>
          <input type="number" name="age" id="age" placeholder="Eg. 24" />
        </div>

        <button type="submit" className={styles.submitBtn}>
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
