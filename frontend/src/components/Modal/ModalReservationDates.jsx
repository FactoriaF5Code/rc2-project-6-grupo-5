import "./ModalReservationDates.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const ModalReservationDates = ({ closeModal }) => {
  const [fechaEntrada, setFechaEntrada] = useState();
  const [fechaSalida, setFechaSalida] = useState();
  return (
    <>
      <section className="modalContainer">
        <button className="modalCloseButton" onClick={closeModal}>
          CERRAR X
        </button>
        <h2 className="modalTitle">Completa tu reserva</h2>
        <form action="" className="modalForm">
          <label htmlFor="fechaEntrada" className="modalFormLabel">
            Fecha de entrada
          </label>
          <input
            type="date"
            id="fechaEntrada"
            value={fechaEntrada}
            onChange={(e) => setFechaEntrada(e.target.value)}
          ></input>
          <label htmlFor="fechaSalida" className="modalFormLabel">
            Fecha de salida
          </label>
          <input
            type="date"
            id="fechaSalida"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
          ></input>
        </form>
        <button className="modalReservationButton" onClick={closeModal}>
          RESERVA AHORA
        </button>
      </section>
    </>
  );
};

ModalReservationDates.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
