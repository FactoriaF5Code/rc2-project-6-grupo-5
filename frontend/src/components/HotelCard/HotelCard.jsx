import "./HotelCard.css";
import React, { useState } from "react";
import { HeartIcon } from "../Svg/HeartIcon";
import { ModalReservationDates } from "../Modal/ModalReservationDates";
import { Button, IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";

export const HotelCard = (hotel) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);
  const [fechaEntrada, setFechaEntrada] = useState();
  const [fechaSalida, setFechaSalida] = useState();
  const openModal = () => {
    setModalIsOpen(true);
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
            <div className="icon">
              <HeartIcon />
            </div>
            <button className="hotelReservationButton" onClick={openModal}>
              ¡Reserva Ahora!
            </button>
            {modalIsOpen && (
              <ModalReservationDates
                closeModal={() => {
                  setSnackOpen(true);
                  setModalIsOpen(false);
                }}
              />
            )}
          </div>
        </div>
      </li>
      <Snackbar
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
      </Snackbar>
    </>
  );
};
