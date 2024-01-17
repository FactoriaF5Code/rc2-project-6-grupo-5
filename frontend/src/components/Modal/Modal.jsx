import "./Modal.css"
// import { useState } from "react";


export const Modal = () => {

// const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <section className="modalContainer">
            <button className="modalCloseButton">CERRAR</button>
            <h2 className="modalTitle">Completa tu reserva</h2>
            <form action="" className="modalForm">
                <label htmlFor="fechaEntrada" className="modalFormLabel">Fecha de entrada</label>
                <input type="date" id="fechaEntrada"></input>
                <label htmlFor="fechaSalida" className="modalFormLabel">Fecha de salida</label>
                <input type="date" id="fechaSalida"></input>
            </form>
            <button className="modalReservationButton">RESERVA AHORA</button>
        </section>
    </>
  )
}

    {/* // <section className="modalContainer">
    //     <button className="openModalButton" onClick={()=>setIsOpen(true)} >Open Modal</button>
    //     { */}
    //         isOpen && (
    //             <div className="modalSuperior">
    //                 <div className="modal">
    //                     Esta es la ventana modal
    //                 </div>
    //                 <div>
    //                     <button className="closeModal" onClick={()=>setIsOpen(false)}>CERRAR MODAL</button>
    //                 </div>
    //             </div>
    //             )
    //     }
        
    // </section>