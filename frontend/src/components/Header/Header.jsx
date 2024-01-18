import "./Header.css"
import { Link } from "react-router-dom";
import { BaggageIcon } from "../Svg/BaggageIcon"

export const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">
              <div className="logo">
                <BaggageIcon />
                <h1>Trooking</h1>
              </div>
            </Link>
            <Link to="/mis-reservas">
              <button className="reservationButton">Mis reservas</button>
            </Link>
        </nav>
    </header>
  )
}
