import { useCallback, useState } from "react";
import { fetchDoctorById, fetchDoctors } from "../utils/rick-morty-api";

export function useDoctors() {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);

  const getDoctors = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchDoctors();
      setDoctors(data.results);
      setIsLoading(false);

      return characters;
    } catch (error) {
      console.error("FALLO AL BUSCAR DOCTOR", error);
    }
  }, []);

  const getDoctor = useCallback(async (doctorId) => {
    try {
      setIsLoading(true);
      const { data } = await fetchDoctorById(doctorId);
      setDoctor(data);
      setIsLoading(false);

      return doctor;
    } catch (error) {
      console.error("FAILED GET CHARACTER", error);
    }
  }, []);

  return {
    isLoading,
    doctors,
    doctor,
    getDoctors,
    getDoctor,
  };
}
