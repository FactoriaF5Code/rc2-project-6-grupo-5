import "./MyBookings.css"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { GalleryBookings } from "../MyBookings/GalleryBookings/GalleryBookings"

export const MyBookings = () => {
  return (
    <main className="bookingsPage">
        <Header />

        <GalleryBookings />
        
        <Footer />
    </main>
  )
}
