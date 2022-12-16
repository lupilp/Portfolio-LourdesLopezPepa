import React from "react";
import style from "../style/Proyectos.module.css";
import { RiGithubFill } from "react-icons/ri";
import pokemon from "../images/pokemon.png";
import urlearning from "../images/urlearning.png";
import portfolio from "../images/portfolio.png";

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
              href="https://pf-ur-learning.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={urlearning} alt="urlearning" className={style.img} />
                <div className={style.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={style.title}>urLearning</div>
          <a
            href="https://github.com/JuanSBass/PF-urLearning"
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
              href="https://portfolio-lourdes-lopez-pepa.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={portfolio} alt="portfolio" className={style.img} />
                <div className={style.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={style.title}>Portafolio</div>
          <a
            href="https://github.com/lupilp/Portfolio-LourdesLopezPepa"
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
