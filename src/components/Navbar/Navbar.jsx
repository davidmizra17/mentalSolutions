import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import {
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  PROFILE_PATIENT_URL,
  REGISTER_URL,
  PROFILE_DOCTOR_URL,
} from "../../constants/urls";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./Navbar.module.css";
import { logout } from "../../firebase/auth";
import { auth } from "../../firebase/config";
import { async } from "@firebase/util";




 
 

export function Navbar() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUserContext();

  const handleLogout = async () => {
    await logout(() => navigate(HOME_URL));
  };


const redirect = () => {  
  
      console.log("dimeloo");
      if (user.role === "Paciente") {
        navigate('/profile-patient')
      } else if (user.role === "Doctor") {
        navigate('/profile-doctor')
      } else {
        throw new Error(`Invalid role: ${role}`);
      }
  
};

  
 

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={HOME_URL} className={styles.link}>
            <span>Doctores</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={FAVORITES_URL} className={styles.link}>
            <span>Favoritos</span>
          </Link>
        </li>
      </ul>

      {!isLoadingUser && (
        <ul className={styles.menuList}>
          {!!user ? (
            
            <>
            
              {/* <li className={`${styles.menuItem} ${styles.menuItemRight}`}> */}
                {/* //TODO - ver como hacer para desviar al usuario a la doctor page o a user profile */}
                {/* <Link to={redirect} className={styles.link}>
                  <div className={styles.userAvatar} />
                  <span>{user.role}</span>
                </Link>  */}
                <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.logoutBtn}`}
                  onClick={redirect}
                >
                  <span>{user.name}</span>
                </button>
                {/* <button id="link">{user.name}</button> */}
          
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
