import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { HOME_URL, REGISTER_URL } from "../../constants/urls";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";
//import { Link } from "react-router-dom";

export function LoginPage() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const onSuccess = () => {
      navigate(HOME_URL);
    };
  
    const onFail = (_error) => {
      console.log("LOGIN FAILED, Try Again");
    };
  
    const onSubmit = async (event) => {
      event.preventDefault();
  
      await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
    };
  
    const onChange = (event) => {
      const { name, value } = event.target;
      setFormData((oldData) => ({ ...oldData, [name]: value }));
    };
  
    const handleGoogleClick = async () => {
      await signInWithGoogle({
        onSuccess: () => navigate(PROFILE_URL),
      });
    };
  
    return (
      <div className={styles.container}>
       <form className={styles.form} onSubmit={onSubmit} >
        {/* EMAIL FIELD */}
        <div className={styles.inputContainer}>
            <label className={styles.inputContainerLabel} htmlFor="email">
              <span>Correo Electrónico</span>
            </label>
            <input
              className={styles.inputContainerInput}
              type="email"
              name="email"
              id="email"
              placeholder="Example: ernesto@gmail.com"
              onChange={onChange}
            />
          </div>
  
          {/* PASSWORD FIELD */}
          <div className={styles.inputContainer}>
            <label className={styles.inputContainerLabel} htmlFor="password">
              <span>Contraseña</span>
            </label>
            <input
              className={styles.inputContainerInput}
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={onChange}
            />
          </div>
   
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleGoogleClick}
          >
            <p className={styles.textGoogleBtn}>Continuar con Google</p>
          </button>
  
          <div>
            <div className={styles.containerLeft}>
            <button type="button" className={styles.goBackBtn} /*onClick={}*/><p className={styles.goBack}>
              Atrás
              </p></button>
            </div>
            <div className={styles.containerRight}>
            <button type="sumbit" className={styles.signInBtn} /*onClick={}*/>
              <p className={styles.signIn}> 
              Enviar
              </p></button>              
            </div>
          </div>
        </form> 
      </div>
    );
  }
