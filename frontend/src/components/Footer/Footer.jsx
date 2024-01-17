import "./Footer.css";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <section>
      <h2>¡Ahorra tiempo y dinero!</h2>
      <h3>Registrate y te enviaremos las mejores ofertas para </h3>
      <form>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu direccion de email"
        ></input>
        <button className="suscribete">¡Suscribete!</button>
      </form>
      <div className="footerlinks">
        <a href="">Tu cuenta</a>
        <a href="">Gestiona tus reservas online</a>
        <a href="">Atención al cliente</a>
        <a href="">Conviertete en afiliado</a>
        <a href="">Trooking.com for Business</a>
      </div>
    </section>
  );
};
