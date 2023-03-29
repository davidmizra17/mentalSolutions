import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import styles from "./HomePage.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";


export function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const getDoctors = async () => {
      const q = query(
        collection(db, USERS_COLLECTION),
        where("role", "==", "Doctor")
      );

      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setDoctors(docs);
      setIsLoading(false);
    };
    getDoctors();
  }, []);

  return (
    <div className="container">
      <div class="div1">
        <div class="div2">
            <img src="../../assets/doc1.png" class="hid"></img>
        </div>
        <div>
            <h1 class="h1">
                Atención a un click de distancia
            </h1>
            <p class="p1">
                Servicio de atención psicológica que brinda el acompañamiento necesario para cada paciente.
            </p>
            <a href="" class="">EMERGENCIA</a>
        </div>
    </div>





    <div class="div3">
        <h1 class="h12">Nuestros aliados</h1>
    </div>
    
    <div class="contenedor">
        <div class="slider-contenedor">
            <section class="contenido-slider">
                <img src="../../assets/unimet.jpg" alt=""></img>

            </section>
            <section class="contenido-slider">
                <img src="../../assets/ucv.jpeg" alt=""></img>

            </section>
            <section class="contenido-slider">
                <img src="../../assets/fpv.jpeg" alt=""></img>

            </section>
            <section class="contenido-slider">
                <img src="../../assets/udemy.png" alt=""></img>

            </section>
            <section class="contenido-slider">
                <img src="../../assets/platzi.jpg" alt=""></img>

            </section>
        </div>
    </div>









    <div class="div4">
        <div class="div5">
            <img src="../../assets/dc2.png" class="hid"></img>
        </div>
        <div>
            <h1 class="h1a">
                ¿Quienes Somos?
            </h1>
            <p class="p1">
                Nuestro equipo especializado de profesionales están disponibles las 24 horas del día, si tienes un problema y te sientes superado por este, aquí encontrarás psicólogos que te ayudarán a alcanzar las soluciones que necesitas.        </p>
            <a href="" class="a">CONTÁCTANOS</a>
        </div>
    </div>

    <section id="psi" >
        <div class="div6">
            <h2 class="h2">Nuestros psicólogos</h2>
            <p class="p2">Trabamos solo con los mejores psicólogos profesionales y experimentados, manteniendo una comunicación segura y privada.</p>
            <div class="divresp">
                <div class="div7">
                    <div class="div8">
                        <img src="../../assets/m1.png" class="img"></img>

                    </div>
                    <h3 class="h3">
                        Armando Paredes
                    </h3>

                    <p class="p3">
                        A través de un modelo de terapia relacional, te acompañaré para que puedas responder de una manera...
                    </p>
                </div>
                <div class="div7">
                    <div class="div8">
                        <img src="../../assets/h1.png" class="img"></img>

                    </div>
                    <h3 class="h3">
                        Mónica Dávila
                    </h3>

                    <p class="p3">
                        Mi objetivo es ayudarte a descubrir tu propia historia de aprendizaje, patrones mal adaptativos y...
                    </p>
                </div>
                <div class="div7">
                    <div class="div8">
                        <img src="../../assets/h2.png" class="img"></img>

                    </div>
                    <h3 class="h3">
                        Valentina Díaz
                    </h3>

                    <p class="p3">
                        Trabajo bajo una perspectiva integradora, intervengo como psicoterapeuta del trauma y...
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div class="div9">
        <h1 class="h1b">
            Pasos para Iniciar tu Terápia Online
        </h1>
        <div class="div10">
            <div class="divresp2">
                <div class="div11">
                    <img src="../../assets/3456426.png" class="img2"></img>
                </div>
                <a href="" class="a2">1.- Regístrate</a>
            </div>
            <div>
                <div class="div11">
                    <img src="../../assets/410909.png" class="img2"></img>
                </div>
                <a href="" class="a2">2.- Agenda tu cita</a>
            </div>
            <div>
                <div class="div11">
                    <img src="../../assets/_123037.png" class="img2"></img>
                </div>
                <a href="" class="a2">3.- Conéctate</a>
            </div>

        </div>
    </div>

    <footer class="div12">
        <div class="div13">
            <div class="div14">
                <img src="../../assets/ig.png" class="img3"></img>
                <img src="../../assets/tw.png" class="img3"></img>
            </div>
            <div class="div15">
             <h3 class="h3b">¡Sigue a Mental Solutions!</h3>

            </div>
            <div class="div16">
                <img src="../../assets/tk.png" class="img3"></img>
                <img src="../../assets/yt.png" class="img3"></img>
            </div>

        </div>
        <span class="span">&copy; 2023 Mental Solutions, S.A.P.I. de C.V. Todos los derechos reservados.</span>

    </footer>

      <div className="characters">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          doctors.map((doctor) => <Card user={doctor} key={doctor.id} />)
        )}
      </div>
    </div>
  );
}
