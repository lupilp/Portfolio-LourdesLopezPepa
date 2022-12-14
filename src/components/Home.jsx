import React from "react";
import style from "../style/Home.module.css";
import foto from "../images/foto.jpg";

function Home() {
  return (
    <div>
      <div>
        <img src={foto} alt="foto-perfil" className={style.foto} />
        <div>Home</div>
        <div>Sobre Mi</div>
        <div>Mis Proyectos</div>
        <div>Contacto</div>
      </div>
    </div>
  );
}

export default Home;
