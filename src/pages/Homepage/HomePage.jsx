import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import styles from "./HomePage.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";

import doc1 from "../../assets/doc1.png";
import unimet from "../../assets/unimet.jpg";
import platzi from "../../assets/platzi.jpg";
import udemy from "../../assets/udemy.png";
import fpv from "../../assets/fpv.jpeg";
import dc2 from "../../assets/dc2.png";
import m1 from "../../assets/m1.png";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import ex1 from "../../assets/3456426.png";
import ex2 from "../../assets/410909.png";
import ex3 from "../../assets/_123037.png";
import ig from "../../assets/ig.png";
import tw from "../../assets/tw.png";
import yt from "../../assets/yt.png";
import tk from "../../assets/tk.png";

export function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <img src={doc1} className={styles.hid}></img>
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
            <img src={unimet} alt="" />
          </li>
          <li>
            <img src={platzi} alt="" />
          </li>
          <li>
            <img src={fpv} alt="" />
          </li>
          <li>
            <img src={udemy} alt="" />
          </li>
        </ul>
      </div>

      <div className={styles.div4}>
        <div className={styles.div5}>
          <img src={dc2} className={styles.hid}></img>
        </div>
        <div>
          <h1 className={styles.h1a}>¿Quienes Somos?</h1>
          <p className={styles.p1}>
            Nuestro equipo especializado de profesionales están disponibles las
            24 horas del día, si tienes un problema y te sientes superado por
            este, aquí encontrarás psicólogos que te ayudarán a alcanzar las
            soluciones que necesitas.{" "}
          </p>
          <a href="" className={styles.a}>
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
                <img src={m1} className={styles.img}></img>
              </div>
              <h3 className={styles.h3}>Armando Paredes</h3>

              <p className={styles.p3}>
                A través de un modelo de terapia relacional, te acompañaré para
                que puedas responder de una manera...
              </p>
            </div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img src={h1} className={styles.img}></img>
              </div>
              <h3 className={styles.h3}>Mónica Dávila</h3>

              <p className={styles.p3}>
                Mi objetivo es ayudarte a descubrir tu propia historia de
                aprendizaje, patrones mal adaptativos y...
              </p>
            </div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img src={h2} className={styles.img}></img>
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
              <img src={ex1} className={styles.img2}></img>
            </div>
            <p href="" className={styles.a2}>
              1.- Regístrate
            </p>
          </div>
          <div>
            <div className={styles.div11}>
              <img src={ex2} class={styles.img2}></img>
            </div>
            <p href="" className={styles.a2}>
              2.- Agenda tu cita
            </p>
          </div>
          <div>
            <div className={styles.div11}>
              <img src={ex3} className={styles.img2}></img>
            </div>
            <p href="" className={styles.a2}>
              3.- Conéctate
            </p>
          </div>
        </div>
      </div>

      <footer className={styles.div12}>
        <span className={styles.span}>
          &copy; 2023 Mental Solutions, S.A.P.I. de C.V. Todos los derechos
          reservados.
        </span>
      </footer>
    </div>
  );
}
