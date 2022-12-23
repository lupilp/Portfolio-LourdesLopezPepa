import React from "react";
import style from "../style/Home.module.css";
import SobreMi from "./SobreMi";
import HomeCont from "./HomeCont";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Menu from "./Menu";

function Home() {
  return (
    <div className={style.contGeneral}>
      <Menu></Menu>
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
