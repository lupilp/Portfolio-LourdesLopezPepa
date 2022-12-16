import React from "react";
import style from "../style/SobreMi.module.css";
import { FaGraduationCap } from "react-icons/fa";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

import { SiRedux, SiSequelize, SiExpress, SiFigma } from "react-icons/si";

function SobreMi() {
  return (
    <div className={style.contGeneral}>
      <div className={style.edText}>Educación</div>

      <div className={style.contEducación}>
        <div className={style.educación}>
          <div className={style.izq}>
            <FaGraduationCap className={style.icon} />
          </div>

          <div className={style.der}>
            <div className={style.edTitle}>Diseñadora Gráfica</div>
            <div className={style.institucion}>
              Instituto Superior San Jorge
            </div>
            <div className={style.fecha}>2017-2019</div>
          </div>
        </div>

        <div className={style.educación}>
          <div className={style.izq}>
            <FaGraduationCap className={style.icon} />
          </div>

          <div className={style.der}>
            <div className={style.edTitle}>Full Stack Developer</div>
            <div className={style.institucion}>Soy Henry</div>
            <div className={style.fecha}>2022</div>
          </div>
        </div>
      </div>

      <hr className={style.hr} />
      <div className={style.edText}>Tech Skills</div>

      <div className={style.contSkills}>
        <ul className={style.skillsTag}>
          <li className={style.skillsItem}>
            <DiJavascript1 className={style.skillsIcon} /> Javascript
          </li>

          <li className={style.skillsItem}>
            <DiHtml5 className={style.skillsIcon} /> HTML
          </li>

          <li className={style.skillsItem}>
            <DiCss3 className={style.skillsIcon} /> CSS
          </li>

          <li className={style.skillsItem}>
            <DiNodejsSmall className={style.skillsIcon} /> Node.js
          </li>

          <li className={style.skillsItem}>
            <DiReact className={style.skillsIcon} /> React
          </li>

          <li className={style.skillsItem}>
            <SiRedux className={style.skillsIcon} /> Redux
          </li>

          <li className={style.skillsItem}>
            <DiPostgresql className={style.skillsIcon} /> Postresql
          </li>

          <li className={style.skillsItem}>
            <SiSequelize className={style.skillsIcon} /> Sequelize
          </li>

          <li className={style.skillsItem}>
            <SiExpress className={style.skillsIcon} /> Express
          </li>

          <li className={style.skillsItem}>
            <SiFigma className={style.skillsIcon} /> Figma
          </li>

          <li className={style.skillsItem}>
            <DiPhotoshop className={style.skillsIcon} /> Photoshop
          </li>

          <li className={style.skillsItem}>
            <DiIllustrator className={style.skillsIcon} /> Illustrator
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SobreMi;
