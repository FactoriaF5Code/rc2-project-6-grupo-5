import "./ModalReservationDates.css"
import PropTypes from 'prop-types';

export const ModalReservationDates = ({ closeModal }) => {
  return (
    <>
        <section className="modalContainer">
            <button className="modalCloseButton" onClick={closeModal}>CERRAR X</button>
            <h2 className="modalTitle">Completa tu reserva</h2>
            <form action="" className="modalForm">
                <label htmlFor="fechaEntrada" className="modalFormLabel">Fecha de entrada</label>
                <input type="date" id="fechaEntrada"></input>
                <label htmlFor="fechaSalida" className="modalFormLabel">Fecha de salida</label>
                <input type="date" id="fechaSalida"></input>
            </form>
            <button className="modalReservationButton">RESERVA AHORA</button>
        </section>
    </>
  )
}

ModalReservationDates.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
