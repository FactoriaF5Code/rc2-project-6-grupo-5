import { HotelCard } from "../HotelCard/HotelCard"
import "./GalleryHotels.css"
import { useEffect, useState } from "react";
import { ModalReservationDates } from "../Modal/ModalReservationDates";

export const GalleryHotels = () => {
  const [viewHotels, setHotels] = useState([]);
  const [modalHotelId, setModalHotelId] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/hotels';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API en el backend:', error);
      });
  }, []);
  
  return (
    <main> 
        <h2 className="galleryTitle">Las mejores ofertas de alojamiento</h2>

        <ul className="hotelList">
        {viewHotels.map((hotel, id) => (
          <HotelCard
            key={id}
            name={hotel.name}
            photo={hotel.photoUrl}
            description={hotel.description}
            price={hotel.pricePerNight}
            hotel={hotel} // Pasa el objeto completo del hotel como prop
            openModal={(hotelId) => setModalHotelId(hotelId)}
          />
        ))}
      </ul>

      {modalHotelId && (
        <ModalReservationDates
          closeModal={() => setModalHotelId(null)}
          hotelId={modalHotelId}
        />
      )}
    </main>
  )
}