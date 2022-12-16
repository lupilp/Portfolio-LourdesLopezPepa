import React from "react";
import style from "../style/Home.module.css";
import foto from "../images/foto.jpg";
import SobreMi from "./SobreMi";
import HomeCont from "./HomeCont";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

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

          <a href="#proyectos" className={style.item}>
            Mis Proyectos
          </a>

          <a href="#contacto" className={style.item}>
            Contacto
          </a>
        </div>
      </div>

      <div className={style.contenedor}>
        <section id="home">
          <HomeCont></HomeCont>
        </section>

        <section id="sobreMi">
          <SobreMi></SobreMi>
        </section>

        <section id="proyectos">
          <Proyectos></Proyectos>
        </section>

        <section id="contacto">
          <Contacto></Contacto>
        </section>
      </div>
    </div>
  );
}

export default Home;
