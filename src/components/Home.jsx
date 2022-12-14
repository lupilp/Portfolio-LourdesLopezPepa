import React from "react";
import style from "../style/Home.module.css";
import foto from "../images/foto.jpg";
import SobreMi from "./SobreMi";
import HomeCont from "./HomeCont";

function Home() {
  return (
    <div className={style.contGeneral}>
      <div className={style.contMenu}>
        <img src={foto} alt="foto-perfil" className={style.foto} />
        <div className={style.todosItems}>
          <a href="#home" className={style.item}>
            Home
          </a>
          <a href="#sobreMi" className={style.item}>
            Sobre Mi
          </a>
          <div className={style.item}>Mis Proyectos</div>
          <div className={style.item}>Contacto</div>
        </div>
      </div>

      <div className={style.contenedor}>
        <section id="home">
          <HomeCont></HomeCont>
        </section>

        <section id="sobreMi">
          <SobreMi></SobreMi>
        </section>
      </div>
    </div>
  );
}

export default Home;
