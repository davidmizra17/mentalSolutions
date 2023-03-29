import { Link } from "react-router-dom";
//import { useDoctors } from "../../hooks/useDoctors";
import styles from "./index.module.css";
import {CONTACT_URL} from "./constants/urls.js"

export function CardDetail(doctor) {
    //const [isLoading, doctors, doctor, getDoctors, getDoctor] = useDoctors()

    return (
        <div className={styles.container}>
            <div>
                <img 
                    src={doctor.img}
                    alt={doctor.name}
                    className={styles.image}
                />
                <h1 className={styles.name}>{doctor.name}</h1>
            </div>
            <div className={styles.info}>
                <p>{doctor.bio}</p>
                <p className={styles.info.title}>Especialidades</p>
                <p className={styles.skills}>{doctor.skills}</p>
                <Link to={CONTACT_URL}>Contáctame</Link>
            </div>           
        </div>
    );
}