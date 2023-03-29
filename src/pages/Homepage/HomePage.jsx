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
      <div className="div1">
        <div className="div2">
            <img src="../../assets/doc1.png" className="hid"></img>
        </div>
        <div>
            <h1 className="h1">
                Atención a un click de distancia
            </h1>
            <p className="p1">
                Servicio de atención psicológica que brinda el acompañamiento necesario para cada paciente.
            </p>
            <a href="" className="">EMERGENCIA</a>
        </div>
    </div>





    <div className="div3">
        <h1 className="h12">Nuestros aliados</h1>
    </div>
    
    <div className="slider">
        <ul>
          <li><img src="../../unimet.jpg" alt="" /></li>
          <li><img src="../../platzi.jpg" alt=""/></li>
          <li><img src="../../fpv.jpeg" alt="" /></li>
          <li><img src="../../udemy.png" alt="" /></li>
        </ul>
      </div>










    <div className="div4">
        <div className="div5">
            <img src="../../assets/dc2.png" className="hid"></img>
        </div>
        <div>
            <h1 className="h1a">
                ¿Quienes Somos?
            </h1>
            <p className="p1">
                Nuestro equipo especializado de profesionales están disponibles las 24 horas del día, si tienes un problema y te sientes superado por este, aquí encontrarás psicólogos que te ayudarán a alcanzar las soluciones que necesitas.        </p>
            <a href="" class="a">CONTÁCTANOS</a>
        </div>
    </div>

    <section id="psi" >
        <div className="div6">
            <h2 className="h2">Nuestros psicólogos</h2>
            <p className="p2">Trabamos solo con los mejores psicólogos profesionales y experimentados, manteniendo una comunicación segura y privada.</p>
            <div className="divresp">
                <div className="div7">
                    <div className="div8">
                        <img src="../../assets/m1.png" className="img"></img>

                    </div>
                    <h3 className="h3">
                        Armando Paredes
                    </h3>

                    <p className="p3">
                        A través de un modelo de terapia relacional, te acompañaré para que puedas responder de una manera...
                    </p>
                </div>
                <div className="div7">
                    <div className="div8">
                        <img src="../../assets/h1.png" className="img"></img>

                    </div>
                    <h3 className="h3">
                        Mónica Dávila
                    </h3>

                    <p className="p3">
                        Mi objetivo es ayudarte a descubrir tu propia historia de aprendizaje, patrones mal adaptativos y...
                    </p>
                </div>
                <div className="div7">
                    <div className="div8">
                        <img src="../../assets/h2.png" className="img"></img>

                    </div>
                    <h3 className="h3">
                        Valentina Díaz
                    </h3>

                    <p className="p3">
                        Trabajo bajo una perspectiva integradora, intervengo como psicoterapeuta del trauma y...
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div className="characters">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          doctors.map((doctor) => <Card user={doctor} key={doctor.id} />)
        )}
      </div>

    <div className="div9">
        <h1 className="h1b">
            Pasos para Iniciar tu Terápia Online
        </h1>
        <div className="div10">
            <div className="divresp2">
                <div className="div11">
                    <img src="../../assets/3456426.png" className="img2"></img>
                </div>
                <a href="" className="a2">1.- Regístrate</a>
            </div>
            <div>
                <div className="div11">
                    <img src="../../assets/410909.png" class="img2"></img>
                </div>
                <a href="" className="a2">2.- Agenda tu cita</a>
            </div>
            <div>
                <div className="div11">
                    <img src="../../assets/_123037.png" className="img2"></img>
                </div>
                <a href="" className="a2">3.- Conéctate</a>
            </div>

        </div>
    </div>

    <footer className="div12">
        <div className="div13">
            <div className="div14">
                <img src="../../assets/ig.png" className="img3"></img>
                <img src="../../assets/tw.png" className="img3"></img>
            </div>
            <div className="div15">
             <h3 className="h3b">¡Sigue a Mental Solutions!</h3>

            </div>
            <div className="div16">
                <img src="../../assets/tk.png" className="img3"></img>
                <img src="../../assets/yt.png" className="img3"></img>
            </div>

        </div>
        <span className="span">&copy; 2023 Mental Solutions, S.A.P.I. de C.V. Todos los derechos reservados.</span>

    </footer>

      
    </div>
  );
}
