import React from "react";
import style from "../style/Proyectos.module.css";
import { RiGithubFill } from "react-icons/ri";
import pokemon from "../images/pokemon.png";

function Proyectos() {
  return (
    <div className={style.contGeneral}>
      <div className={style.edText}>Mis Proyectos</div>
      <div className={style.contProyectos}>
        <div className={style.contProyecto}>
          <div className={style.contenedor}>
            <a
              href="https://pi-pokemon-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={pokemon} alt="pokemon" className={style.img} />
                <div className={style.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={style.title}>Pokemon App</div>
          <a
            href="https://github.com/lupilp/PI-Pokemon"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.iconos}>
              <RiGithubFill className={style.icon} />
              Ir al codigo
            </div>
          </a>
        </div>

        <div className={style.contProyecto}>
          <div className={style.contenedor}>
            <a
              href="https://pi-pokemon-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={pokemon} alt="pokemon" className={style.img} />
                <div className={style.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={style.title}>Pokemon App</div>
          <a
            href="https://github.com/lupilp/PI-Pokemon"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.iconos}>
              <RiGithubFill className={style.icon} />
              Ir al codigo
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
