import { useState } from "react";
import CalendarTemplate from "availability-calendar-react";

export function ReservationPage() {
  const [availability, setAvailability] = useState([]);
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
  });

  const handleVerga = availability;
  //TODO mandar la informacion de availability a la lista de reservas del currentUser en la dbe
  console.log(handleVerga);

  return (
    <div>
      <h1>¡Reserva una cita!</h1>
      <Calendar />
    </div>
  );
}
