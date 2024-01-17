import "./HotelCard.css";
import { useState } from "react";
import { HeartIcon } from "../Svg/HeartIcon";
import { ModalReservationDates } from "../Modal/ModalReservationDates";

export const HotelCard = (hotel) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <li className="hotelCard">
        <img src={hotel.photo} alt="Imagen hotel" className="hotelImage" />
        <div className="hotelInfo">
          <div className="hotelDetails">
            <div className="hotelNamePrice">
                <h3 className="hotelName">{hotel.name}</h3>
                <p className="hotelPrice">{hotel.price} €</p>
            </div>
            <p className="hotelDescription">{hotel.description}</p>
          </div>
          <div className="reservationInfo">
            <div className="icon"><HeartIcon /></div>
            <button className="hotelReservationButton"  onClick={openModal}>
              ¡Reserva Ahora!
            </button>
            {modalIsOpen && <ModalReservationDates closeModal={() => setModalIsOpen(false)} />}
          </div>
        </div>
      </li>
    </>
  );
};
