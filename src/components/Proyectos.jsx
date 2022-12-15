import React from "react";
import style from "../style/Proyectos.module.css";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import pokemon from "../images/pokemon.png";

function Proyectos() {
  return (
    <div className={style.contGeneral}>
      <div className={style.edText}>Mis Proyectos</div>
      <div className={style.contProyecto}>
        <div className={style.contImagen}>
          <a href="https://pi-pokemon-gilt.vercel.app/" target="_blank">
            <img src={pokemon} alt="pokemon" className={style.img} />
          </a>
        </div>
        <div className={style.title}>Pokemon App</div>
        <a href="https://github.com/lupilp/PI-Pokemon" target="_blank">
          <div className={style.iconos}>
            <RiGithubFill className={style.icon} />
            Ir al codigo
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
