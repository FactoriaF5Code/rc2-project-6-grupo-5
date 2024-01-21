import "../../HotelCard/HotelCard.css";
import { OkIcon } from "../../Svg/OkIcon";
// import { useState } from "react";
// import PropTypes from "prop-types";


export const BookedCard = ( bookedHotel ) => {
  return (
    <>
      <li className="bookedCard">
        <img src={bookedHotel.photoUrl} alt={bookedHotel.name} className="hotelImage" />
        <div className="hotelInfo">
          <div>
            <div className="hotelNamePrice">
                <h3 className="hotelName">{bookedHotel.name}</h3>
                <div className="bookedOk">
                  <OkIcon />
                </div>
            </div>
            <p className="hotelDescription">Fecha de entrada:
              <span style={{ fontWeight: '600', color:"#1367e7" }}> {bookedHotel.entryDay}</span>
            </p>
            <p className="hotelDescription">Fecha de salida:
              <span style={{ fontWeight: '600', color:"#1367e7" }}> {bookedHotel.exitDay}</span>
            </p>
          </div>
          <ul className="bookedMenu">
            <li className="linkMenu">Contactar con el alojamiento</li>
            <li className="linkMenu">Gestionar reserva</li>
          </ul>
        </div>
      </li>
    </>
  );
};
