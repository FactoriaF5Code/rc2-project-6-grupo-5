import "./ModalReservationDates.css";
import PropTypes from "prop-types";
import { FormDates } from "./FormDates";

export const ModalReservationDates = ({
  closeModal,
  hotelId,
  name,
  photoUrl,
}) => {
  return (
    <>
      <section className="modalContainer">
        <button className="modalCloseButton" onClick={closeModal}>
          CERRAR X
        </button>
        <h2 className="modalTitle">Completa tu reserva</h2>
        <FormDates hotelId={hotelId} name={name} photoUrl={photoUrl} />
      </section>
    </>
  );
};

ModalReservationDates.propTypes = {
  closeModal: PropTypes.func.isRequired,
  hotelId: PropTypes.number.isRequired,

  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};
