import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import styles from "./HomePage.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";

export function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <img src="../../assets/doc1.png" className={styles.hid}></img>
        </div>
        <div>
          <h1 className={styles.h1}>Atención a un click de distancia</h1>
          <p className={styles.p1}>
            Servicio de atención psicológica que brinda el acompañamiento
            necesario para cada paciente.
          </p>
          <a href="" className={styles.a}>
            EMERGENCIA
          </a>
        </div>
      </div>

      <div className={styles.div3}>
        <h1 className={styles.h12}>Nuestros aliados</h1>
      </div>

      <div className={styles.slider}>
        <ul>
          <li>
            <img src="../../unimet.jpg" alt="" />
          </li>
          <li>
            <img src="../../platzi.jpg" alt="" />
          </li>
          <li>
            <img src="../../fpv.jpeg" alt="" />
          </li>
          <li>
            <img src="../../udemy.png" alt="" />
          </li>
        </ul>
      </div>

      <div className={styles.div4}>
        <div className={styles.div5}>
          <img src="../../assets/dc2.png" className={styles.hid}></img>
        </div>
        <div>
          <h1 className={styles.h1a}>¿Quienes Somos?</h1>
          <p className={styles.p1}>
            Nuestro equipo especializado de profesionales están disponibles las
            24 horas del día, si tienes un problema y te sientes superado por
            este, aquí encontrarás psicólogos que te ayudarán a alcanzar las
            soluciones que necesitas.{" "}
          </p>
          <a href="" class={styles.a}>
            CONTÁCTANOS
          </a>
        </div>
      </div>

      <section id={styles.psi}>
        <div className={styles.div6}>
          <h2 className={styles.h2}>Nuestros psicólogos</h2>
          <p className={styles.p2}>
            Trabamos solo con los mejores psicólogos profesionales y
            experimentados, manteniendo una comunicación segura y privada.
          </p>
          <div className={styles.divresp}>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img src="../../assets/m1.png" className={styles.img}></img>
              </div>
              <h3 className={styles.h3}>Armando Paredes</h3>

              <p className={styles.p3}>
                A través de un modelo de terapia relacional, te acompañaré para
                que puedas responder de una manera...
              </p>
            </div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img src="../../assets/h1.png" className={styles.img}></img>
              </div>
              <h3 className={styles.h3}>Mónica Dávila</h3>

              <p className={styles.p3}>
                Mi objetivo es ayudarte a descubrir tu propia historia de
                aprendizaje, patrones mal adaptativos y...
              </p>
            </div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img src="../../assets/h2.png" className={styles.img}></img>
              </div>
              <h3 className={styles.h3}>Valentina Díaz</h3>

              <p className={styles.p3}>
                Trabajo bajo una perspectiva integradora, intervengo como
                psicoterapeuta del trauma y...
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.div9}>
        <h1 className={styles.h1b}>Pasos para Iniciar tu Terápia Online</h1>
        <div className={styles.div10}>
          <div className={styles.divresp2}>
            <div className={styles.div11}>
              <img src="../../assets/3456426.png" className={styles.img2}></img>
            </div>
            <a href="" className={styles.a2}>
              1.- Regístrate
            </a>
          </div>
          <div>
            <div className={styles.div11}>
              <img src="../../assets/410909.png" class={styles.img2}></img>
            </div>
            <a href="" className={styles.a2}>
              2.- Agenda tu cita
            </a>
          </div>
          <div>
            <div className={styles.div11}>
              <img src="../../assets/_123037.png" className={styles.img2}></img>
            </div>
            <a href="" className={styles.a2}>
              3.- Conéctate
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.div12}>
        <div className={styles.div13}>
          <div className={styles.div14}>
            <img src="../../assets/ig.png" className={styles.img3}></img>
            <img src="../../assets/tw.png" className={styles.img3}></img>
          </div>
          <div className={styles.div15}>
            <h3 className={styles.h3b}>¡Sigue a Mental Solutions!</h3>
          </div>
          <div className={styles.div16}>
            <img src="../../assets/tk.png" className={styles.img3}></img>
            <img src="../../assets/yt.png" className={styles.img3}></img>
          </div>
        </div>
        <span className={styles.span}>
          &copy; 2023 Mental Solutions, S.A.P.I. de C.V. Todos los derechos
          reservados.
        </span>
      </footer>
    </div>
  );
}
