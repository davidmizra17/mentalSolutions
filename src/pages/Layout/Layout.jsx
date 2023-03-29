import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";
import logos from "../../assets/mental_solutions.png";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        <Navbar />
        <section className="body">
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}
