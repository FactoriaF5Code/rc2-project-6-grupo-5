import "./Footer.css";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="footer">
      <h2 className="footerTitle">¡Ahorra tiempo y dinero!</h2>
      <p className="footerText">Registrate y te enviaremos las mejores ofertas para ti.</p>
      <form className="footerForm">
        <input className="footerEmailInput"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu direccion de email"
        ></input>
        <button className="footerSubscribeButton">¡Suscribete!</button>
      </form>
      <div className="footerLinks">
        <a href="">Tu cuenta</a>
        <a href="">Gestiona tus reservas online</a>
        <a href="">Atención al cliente</a>
        <a href="">Conviertete en afiliado</a>
        <a href="">Trooking.com for Business</a>
      </div>
    </section>
  );
};
