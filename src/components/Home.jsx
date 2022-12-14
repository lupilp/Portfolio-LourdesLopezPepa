import React from "react";
import style from "../style/Home.module.css";
import foto from "../images/foto.jpg";

function Home() {
  return (
    <div className={style.contGeneral}>
      <div className={style.contMenu}>
        <img src={foto} alt="foto-perfil" className={style.foto} />
        <div className={style.todosItems}>
          <div className={style.item}>Home</div>
          <div className={style.item}>Sobre Mi</div>
          <div className={style.item}>Mis Proyectos</div>
          <div className={style.item}>Contacto</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
