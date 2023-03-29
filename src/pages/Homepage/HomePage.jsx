import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { USERS_COLLECTION } from "../../firebase/users";
import { db } from "../../firebase/config";
import styles from "./HomePage.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import useExternalScripts from "./hooks/useExternalScripts";

export function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Component = () => { useExternalScripts("https://cdn.tailwindcss.com")}

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
      <div class="mx-auto  px-8xl:px-0 px-20 my-[20px]">
        <div class="flex flexbox w-[283.5px] h-[341px] float-right">
            <img src="img/doc1.png" class="max-[850px]:hidden"></img>
        </div>
        <div>
            <h1 class="flex text-sky-400 text-[60px] max-[850px]:leading-tight">
                Atención a un click de distancia
            </h1>
            <p class="text-[30px] py-[40px]">
                Servicio de atención psicológica que brinda el acompañamiento necesario para cada paciente.
            </p>
            <a href="" class="bg-red-100 rounded-lg px-3 py-1">EMERGENCIA</a>
        </div>
      </div>





      <div class="mx-auto  px-8xl:px-0 px-20 my-[40px] pt-[100px] justify-center align-center text-center flex  flex-box clear-both">
          <h1 class="mx-auto flex text-sky-400 text-[60px] py-[12px]">Nuestros aliados</h1>
      </div>
      
      <div class="contenedor">
          <div class="slider-contenedor">
              <section class="contenido-slider">
                  <img src="img/unimet.jpg" alt=""></img>

              </section>
              <section class="contenido-slider">
                  <img src="img/ucv.jpeg" alt=""></img>

              </section>
              <section class="contenido-slider">
                  <img src="img/fpv.jpeg" alt=""></img>

              </section>
              <section class="contenido-slider">
                  <img src="img/udemy.png" alt=""></img>

              </section>
              <section class="contenido-slider">
                  <img src="img/platzi.jpg" alt=""></img>

              </section>
          </div>
      </div>
      <div class="mx-auto  px-8xl:px-0 text-right px-20 my-[20px] clear-both">
          <div class="flex flexbox w-[350px] h-[350px] float-left">
              <img src="img/dc2.png" class="max-[850px]:hidden"></img>
          </div>
          <div>
              <h1 class="text-sky-400 text-[60px] text-right">
                  ¿Quienes Somos?
              </h1>
              <p class="text-[30px] py-[40px]">
                  Nuestro equipo especializado de profesionales están disponibles las 24 horas del día, si tienes un problema y te sientes superado por este, aquí encontrarás psicólogos que te ayudarán a alcanzar las soluciones que necesitas.        </p>
              <a href="" class="bg-red-100 rounded-lg px-3 py-1">CONTÁCTANOS</a>
          </div>
      </div>

      <section id="psicologos" class="text-center my-[20px] clear-both">
          <div class="px-[150px] py-[12px] ">
              <h2 class="mt-0 text-[60px] text-sky-400">Nuestros psicólogos</h2>
              <p class="mt-0 text-[30px] py-[40px]">Trabamos solo con los mejores psicólogos profesionales y experimentados, manteniendo una comunicación segura y privada.</p>
              <div class="min-[850px]:flex min-[850px]:justify-center">
                  <div class="bg-gray-200 px-[50px] py-[0px] m-[30px] rounded-[15px] min-[850px]:p-[50px]">
                      <div class="flex justify-center py-[15px]">
                          <img src="img/m1.png" class="flex flex-box  rounded-full justify-self-center"></img>

                      </div>
                      <h3 class="text-[25px] min-[850px]:mt-[0px]">
                          Armando Paredes
                      </h3>

                      <p class="py-[10px] text-[20px] min-[850px]:block min-[850px]:mb-[30px]">
                          A través de un modelo de terapia relacional, te acompañaré para que puedas responder de una manera...
                      </p>
                  </div>
                  <div class="bg-gray-200 px-[50px] py-[0px] m-[30px] rounded-[15px] min-[850px]:p-[50px]">
                      <div class="flex justify-center py-[15px]">
                          <img src="img/h1.png" class="flex flex-box rounded-full justify-self-center"></img>

                      </div>
                      <h3 class="text-[25px] min-[850px]:mt-[0px]">
                          Mónica Dávila
                      </h3>

                      <p class="py-[10px] text-[20px] min-[850px]:block min-[850px]:mb-[30px]">
                          Mi objetivo es ayudarte a descubrir tu propia historia de aprendizaje, patrones mal adaptativos y...
                      </p>
                  </div>
                  <div class="bg-gray-200 px-[50px] py-[0px] m-[30px] rounded-[15px] min-[850px]:p-[50px]">
                      <div class="flex justify-center py-[15px]">
                          <img src="img/h2.png" class="flex flex-box  rounded-full justify-self-center"></img>

                      </div>
                      <h3 class="text-[25px] min-[850px]:mt-[0px]">
                          Valentina Díaz
                      </h3>

                      <p class="py-[10px] text-[20px] min-[850px]:block min-[850px]:mb-[30px]">
                          Trabajo bajo una perspectiva integradora, intervengo como psicoterapeuta del trauma y...
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <div class="mx-auto  px-8xl:px-0 px-20 my-[40px]">
          <h1 class="flex text-sky-400 text-[60px] py-[12px]">
              Pasos para Iniciar tu Terápia Online
          </h1>
          <div class="min-[850px]:flex min-[850px]:justify-center py-[12px] mb-8 lg:mb-0 text-black justify-center text-center py-[20px]">
              <div class="min-[850px]:px-[20px]">
                  <div class="flex justify-center py-[15px]">
                      <img src="img/3456426.png" class="flex flex-box rounded-full justify-self-center"></img>
                  </div>
                  <a href="" class="hover:text-blue-600 lg:mr-7 mb-8 lg:mb-0 no-underline px-10">1.- Regístrate</a>
              </div>
              <div>
                  <div class="flex justify-center py-[15px]">
                      <img src="img/410909.png" class="flex flex-box rounded-full justify-self-center"></img>
                  </div>
                  <a href="" class="hover:text-blue-600 lg:mr-7 mb-8 lg:mb-0 no-underline px-10">2.- Agenda tu cita</a>
              </div>
              <div>
                  <div class="flex justify-center py-[15px]">
                      <img src="img/_123037.png" class="flex flex-box rounded-full justify-self-center"></img>
                  </div>
                  <a href="" class="hover:text-blue-600 lg:mr-7 mb-8 lg:mb-0 no-underline px-10">3.- Conéctate</a>
              </div>

          </div>
      </div>

      <footer class="w-full absolute flex justify-center align-center flex-col">
          <div class="flex justify-center align-center flex-wrap mb-[1rem]">
              <div class="flex flex-box  max-[850px]:justify-evenly">
                  <img src="img/ig.png" class="w-28 h-17 m-[1rem]"></img>
                  <img src="img/tw.png" class="w-20 h-20 m-[1rem]"></img>
              </div>
              <div class="flex flex-box max-[850px]:block max-[850px]:box-border max-[850px]:w-full">
              <h3 class="text-[35px] text-center pb-8 m-[1rem] max-[850px]:align-center">¡Sigue a Mental Solutions!</h3>

              </div>
              <div class="flex flex-box max-[850px]:justify-evenly">
                  <img src="img/tk.png" class="w-20 h-20 m-[1rem]"></img>
                  <img src="img/yt.png" class="w-20 h-20 m-[1rem]"></img>
              </div>

          </div>
          <span class="flex flex-box justify-center">&copy; 2023 Mental Solutions, S.A.P.I. de C.V. Todos los derechos reservados.</span>

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
