import "./Footer.css";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <section>
      <h1>¡Ahorra tiempo y dinero!</h1>
      <h2>Registrate y te enviaremos las mejores ofertas para </h2>
      <form>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button className="suscribete">¡Suscribete!</button>
      </form>
      <div>
        <a href="">Tu cuenta</a>
        <a href="">Gestiona tus reservas onlin</a>
        <a href="">Atención al cliente</a>
        <a href="">Conviertete en afiliado</a>
        <a href="">Trooking.com for Business</a>
      </div>
    </section>
  );
};
