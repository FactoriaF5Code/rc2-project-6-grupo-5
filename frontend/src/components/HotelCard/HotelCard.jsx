import "./HotelCard.css";
import { useState } from "react";
import { HeartIcon } from "../Svg/HeartIcon";
import { ModalReservationDates } from "../Modal/ModalReservationDates";
import { Button, IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";


export const HotelCard = ({ hotel, openModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);

  const handleReservationClick = () => {
    openModal(hotel.id);
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <>
      <li className="hotelCard">
        <img src={hotel.photoUrl} alt={hotel.name} className="hotelImage" />
        <div className="hotelInfo">
          <div className="hotelDetails">
            <div className="hotelNamePrice">
              <h3 className="hotelName">{hotel.name}</h3>
              <p className="hotelPrice">{hotel.pricePerNight} €</p>
            </div>
            <p className="hotelDescription">{hotel.description}</p>
          </div>
          <div className="reservationInfo">
            <div className="icon">
              <HeartIcon />
            </div>
            <button className="hotelReservationButton" onClick={handleReservationClick}>
              ¡Reserva Ahora!
            </button>
            {modalIsOpen && <ModalReservationDates closeModal={() => setModalIsOpen(false)} hotelId={hotel.id} />}

            {/* {modalIsOpen && (
              <ModalReservationDates
                closeModal={() => {
                  setSnackOpen(true);
                  setModalIsOpen(false);
                }}
              />
            )} */}
          </div>
        </div>
      </li>
      {/* <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackOpen}
        
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      >
        <Alert onClose={handleClose} severity="success">
          Enhorabuena! Has reservado en {hotel.name} entre
        </Alert>
      </Snackbar> */}
    </>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
