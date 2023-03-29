import { Link, useNavigate } from "react-router-dom";
import {
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  PROFILE_URL,
  REGISTER_URL,
  RESERVATION_URL,
} from "../../constants/urls";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./Navbar.module.css";
import { logout } from "../../firebase/auth";
import logo from "../../assets/mental_solutions.png";

export function Navbar() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUserContext();

  const handleLogout = async () => {
    await logout(() => navigate(HOME_URL));
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={HOME_URL} className={styles.link}>
            <img
              src={logo}
              alt="mental solutions logo"
              className={styles.image}
            />
          </Link>
        </li>
      </ul>

      {!isLoadingUser && (
        <ul className={styles.menuList}>
          {!!user ? (
            <>
              <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
                <Link to={RESERVATION_URL} className={styles.link}>
                  <span>Reservar cita</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={PROFILE_URL} className={styles.link}>
                  <div className={styles.userAvatar} />
                  <span>{user.name}</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.logoutBtn}`}
                  onClick={handleLogout}
                >
                  <span>Salir</span>
                </button>
              </li>
            </>
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
      )}
    </nav>
  );
}
