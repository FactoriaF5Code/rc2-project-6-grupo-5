import "./HotelCard.css";
import { HeartIcon } from "../Svg/HeartIcon";

export const HotelCard = (hotel) => {
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
            <button className="hotelReservationButton">¡Reserva Ahora!</button>
          </div>
        </div>
      </li>
    </>
  );
};