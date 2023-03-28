import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { PROFILE_DOCTOR_URL, HOME_URL, LOGIN_URL, PROFILE_PATIENT_URL } from "../../constants/urls";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";
import { useState } from "react";

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setData] = useState({});

  const onSuccess = () => {
    navigate(HOME_URL);
    // const userId = auth.currentUser.uid;
    // const userRef = db.collection("users").doc(userId);
  
    // const userUrl = userRef.get().then((doc) => {
    //   if (doc.exists) {
    //     const role = doc.data().role; // get the role field from the document data
    
    //     if (role === "Patient") {
    //       navigate(PROFILE_PATIENT_URL); // return patient profile URL
    //     } else if (role === "Doctor") {
    //       navigate(PROFILE_DOCTOR_URL); // return doctor profile URL
    //     } else {
    //       throw new Error(`Invalid role: ${role}`);
    //     }
    //   } else {
    //     throw new Error("No such document!");
    //   }
    // }).catch((error) => {
    //   throw new Error("Error getting document:", error);
    // });
  };

  const onFail = (_error) => {
    console.log("REGISTER FAILED, Try Again");
  };

  //TODO - revisar esta funcion
  const getRole = () => {
    console.log("golazzo");
    const doctor = document.getElementById("doctor").checked;
    // console.log(doctor);
    // handleSubmit()
    // const helper = dataForm.
    return doctor ? "Doctor" : "Paciente";
  };

  // const getRole = () => {
  // if(document.getElementById("doctor").value === "Doctor"){
  //   console.log("puta");
  //   navigate(PROFILE_DOCTOR_URL);
  // }
  // }

  const handleRole = () => {

    // const role = getRole();
    // document.getElementById("doctor").checked;
    // navigate(PROFILE_DOCTOR_URL);
    if(document.getElementById("doctor").checked){
      navigate(PROFILE_DOCTOR_URL);
     }else{
      navigate(PROFILE_PATIENT_URL);
     }
  };


  const handleSubmit = async (event) => {
    console.log("zorra");
    // console.log(getRole.getElementById());
    event.preventDefault();


    await registerWithEmailAndPassword({
      userData: formData,
    //  handleRole,
      onSuccess,
      // handleRole,
      // onFail,
    });
    
  };

  const handleGoogleClick = async () => {
    console.log("perra");
    await signInWithGoogle({
      

      // handleRole: () => navigate(PROFILE_URL),
      handleRole,

    });
  };

  const onChange = (event) => {
    setData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Crea una cuenta</h1>
        <p className={styles.welcomeTxt}>
          Bienvenido! Te invitamos a ser parte de nuestra plataforma.
        </p>

        {/* NAME FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="name">
            <span>Ingresa tu nombre y apellido</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Eg. John Doe"
            onChange={onChange}
          />
        </div>

        {/* EMAIL FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Eg. john@email.com"
            onChange={onChange}
          />
        </div>

        {/* PASSWORD FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={onChange}
          />
        </div>

        {/* AGE FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="age">
            <span>Ingresa tu edad</span>
          </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Eg. 24"
            onChange={onChange}
          />
        </div>
{/* VERIFICACION DOCTOR O PACIENTE */}
        <div>
          <label htmlFor="role">
            <span>¿Es usted doctor o paciente?</span>
            <br />
          </label>
          <label htmlFor="doctor">Doctor</label>
          <input
            type="radio"
            name="role"
            id="doctor"
            value="Doctor"
            checked={formData.role === "Doctor"}
            onChange={onChange}
          />
          <label htmlFor="paciente">Paciente</label>
          <input
            type="radio"
            name="role"
            id="paciente"
            value="Paciente"
            checked={formData.role === "Paciente"}
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          onClick={handleSubmit}
          
        >
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogleClick}
          // onClick={getRole}
        >
          Registro con google
        </button>

        <Link to={LOGIN_URL} className={styles.loginRedirect}>
          ¿Ya tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Inicia sesión</span>
        </Link>
      </form>
    </div>
  );
}
