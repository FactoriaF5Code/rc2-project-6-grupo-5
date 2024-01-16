import "./GalleryHotels.css"

export const GalleryHotels = () => {
  return (
    <main> 
        <h2 className="galleryTitle">Las mejores ofertas de alojamiento</h2>

        <ul className="hotelList">
            <li className="hotelCard">
                                <img src="/public/IMAGEN_HOTEL.jpg" alt="Imagen hotel" />
                <div className="hotelInfo">
                    <div className="hotelNamePrice">
                        <h3 className="hotelName">Nombre del hotel</h3>
                        <p className="hotelPrice">99,99 €</p>
                    </div>
                    <p className="hotelDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, reiciendis soluta. Sapiente sit a voluptate optio ducimus saepe inventore quidem dolorum facere cumque quis quisquam, pariatur odit iure officiis quia!</p>
                    <div className="reservationInfo">
                        <button className="hotelReservationButton">¡Reserva Ahora!</button>
                    </div>
                </div>
            </li>
            <li className="hotelCard">
                                <img src="/public/IMAGEN_HOTEL.jpg" alt="Imagen hotel" />
                <div className="hotelInfo">
                    <div className="hotelNamePrice">
                        <h3 className="hotelName">Nombre del hotel</h3>
                        <p className="hotelPrice">99,99 €</p>
                    </div>
                    <p className="hotelDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, reiciendis soluta. Sapiente sit a voluptate optio ducimus saepe inventore quidem dolorum facere cumque quis quisquam, pariatur odit iure officiis quia!</p>
                    <div className="reservationInfo">
                        <button className="hotelReservationButton">¡Reserva Ahora!</button>
                    </div>
                </div>
            </li>
            <li className="hotelCard">
                                <img src="/public/IMAGEN_HOTEL.jpg" alt="Imagen hotel" />
                <div className="hotelInfo">
                    <div className="hotelNamePrice">
                        <h3 className="hotelName">Nombre del hotel</h3>
                        <p className="hotelPrice">99,99 €</p>
                    </div>
                    <p className="hotelDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, reiciendis soluta. Sapiente sit a voluptate optio ducimus saepe inventore quidem dolorum facere cumque quis quisquam, pariatur odit iure officiis quia!</p>
                    <div className="reservationInfo">
                        <button className="hotelReservationButton">¡Reserva Ahora!</button>
                    </div>
                </div>
            </li>
        </ul>
    </main>
  )
}