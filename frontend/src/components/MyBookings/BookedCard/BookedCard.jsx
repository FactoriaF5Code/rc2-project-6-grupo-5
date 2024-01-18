import "../../HotelCard/HotelCard.css";
import { OkIcon } from "../../Svg/OkIcon";

export const BookedCard = () => {
  return (
    <>
      <li className="bookedCard">
        <img src="/public/IMAGEN_HOTEL.jpg" alt="Imagen hotel" className="hotelImage" />
        <div className="hotelInfo">
          <div>
            <div className="hotelNamePrice">
                <h3 className="hotelName">Nombre del hotel</h3>
                <div className="bookedOk">
                  <OkIcon />
                </div>
            </div>
            <p className="hotelDescription">Fecha de entrada:
              <span style={{ fontWeight: '600', color:"#1367e7" }}> 1/1/2024</span>
            </p>
            <p className="hotelDescription">Fecha de salida:
              <span style={{ fontWeight: '600', color:"#1367e7" }}> 31/12/2024</span>
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
