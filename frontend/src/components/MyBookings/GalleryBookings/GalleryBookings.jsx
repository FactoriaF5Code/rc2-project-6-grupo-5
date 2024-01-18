import "../../GalleryHotels/GalleryHotels.css"
import { BookedCard } from "../BookedCard/BookedCard";

export const GalleryBookings = () => {
  
  return (
    <main> 
        <h2 className="galleryTitle">Tus reservas actuales:</h2>

        <div className="hotelList">
          < BookedCard />
        </div>
    </main>
  )
}