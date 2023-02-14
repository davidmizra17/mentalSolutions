import { Link } from "react-router-dom";
import {
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "../../constants/urls";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./Navbar.module.css";

export function Navbar() {
  const { user } = useUserContext();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={HOME_URL} className={styles.link}>
            <span>Personajes</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={FAVORITES_URL} className={styles.link}>
            <span>Favoritos</span>
          </Link>
        </li>
      </ul>

      <ul className={styles.menuList}>
        {!!user ? (
          <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
            <Link to={HOME_URL} className={styles.link}>
              <div className={styles.userAvatar} />
              <span>{user.name}</span>
            </Link>
          </li>
        ) : (
          <>
            <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
              <Link to={LOGIN_URL} className={styles.link}>
                <span>Iniciar sesión</span>
              </Link>
            </li>
            <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
              <Link to={REGISTER_URL} className={styles.link}>
                <span>Registro</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
