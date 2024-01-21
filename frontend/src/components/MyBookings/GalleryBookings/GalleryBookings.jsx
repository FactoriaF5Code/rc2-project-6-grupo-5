import "../../GalleryHotels/GalleryHotels.css"
import { BookedCard } from "../BookedCard/BookedCard";
import { useEffect, useState } from "react";


export const GalleryBookings = ( ) => {
  const [viewBookedHotels, setBookedHotels] = useState([]);

  useEffect(() => {
    const apiUrlBookings = 'http://localhost:8080/api/bookings';

    fetch(apiUrlBookings)
      .then((response) => response.json())
      .then((data) => {
        setBookedHotels(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API en el backend:', error);
      });
  }, []);


  return (
    <main>
        <h2 className="galleryTitle">Tus reservas actuales:</h2>

        <ul className="hotelList">
          {viewBookedHotels.map((bookedHotel, id) => (
          <BookedCard
            key={id}
            name={bookedHotel.name}
            photo={bookedHotel.photoUrl}
            entryDay={bookedHotel.entryDay}
            exitDay={bookedHotel.exitDay}
            hotel={bookedHotel}
          />
        ))}

        </ul>
    </main>
  )
}