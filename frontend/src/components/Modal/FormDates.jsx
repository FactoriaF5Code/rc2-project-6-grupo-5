import "./ModalReservationDates.css";
import { useState } from "react";
import PropTypes from 'prop-types';


export const FormDates = ( props ) => {
  const [formData, setFormData] = useState({
    entryDay: "",
    exitDay: "",
  });

  
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
        });
    };

  const apiUrlBookings = "http://localhost:8080/api/bookings";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append("entryDay", formData.entryDay);
    formDataObject.append("exitDay", formData.exitDay);
    formDataObject.append("hotelId", props.hotelId);

    fetch(apiUrlBookings, {
      method: "POST",
      body: JSON.stringify({
        entryDay: formData.entryDay,
        exitDay: formData.exitDay,
        hotelId: props.hotelId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Hacer algo con la respuesta del servidor
        if (data.success){
            //Cerrar ModalReservationDates y
            //Mostrar el snackbar de reserva exitosa
        } else{
            //Mostrar un mensaje de error
            //En ModalReservationDates
        }
      })
      .catch((error) => {
        console.error("Error al enviar datos al backend:", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="modalForm">
        <label htmlFor="entryDay" className="modalFormLabel">
          Fecha de entrada
        </label>
        <input
          type="date"
          id="entryDay"
          name="entryDay"
          value={formData.entryDay}
          onChange={handleChange}
        />
        <label htmlFor="exitDay" className="modalFormLabel">
          Fecha de salida
        </label>
        <input
          type="date"
          id="exitDay"
          name="exitDay"
          value={formData.exitDay}
          onChange={handleChange}
        />
        <button type="Submit" className="modalReservationButton">RESERVA AHORA</button>
      </form>
    </>
  );
};

FormDates.propTypes = {
    hotelId: PropTypes.number.isRequired,
  };