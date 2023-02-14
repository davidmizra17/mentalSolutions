import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { REGISTER_URL } from "../../constants/urls";

export function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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

        <button type="submit" className={styles.submitBtn}>
          Entrar
        </button>

        <button type="button" className={styles.googleBtn}>
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
