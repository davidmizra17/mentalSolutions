import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";
import logos from "../../assets/mental_solutions.png"
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <UserContextProvider>
      <main>
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className={styles.checkbtn}>
            <img src="img/barras.png" className={styles.bar}></img>
        </label>
        <a href="#" className={styles.enlace}>
            <img src={logos} alt="" className={styles.logo}></img>
        </a>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Iniciar Sesion</a></li>
            <li><a className={styles.active} href="#">Registrarse</a></li>
        </ul>
    </nav>
        <section className="body">
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}
