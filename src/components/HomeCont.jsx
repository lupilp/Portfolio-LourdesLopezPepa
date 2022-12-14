import React from "react";
import style from "../style/HomeCont.module.css";

function HomeCont() {
  return (
    <div>
      <div className={style.contInfo}>
        <div className={style.hola}>
          <img
            src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
            alt="gif"
            className={style.gif}
          />
          ¡Hola!{" "}
        </div>
        <div className={style.name}>Soy Lourdes López Pepa</div>
        <div className={style.dev}>Full Stack Developer</div>
        <div className={style.description}>
          Full Stack Developer con formación como Diseñadora Gráfica. Con
          pensamiento creativo, resolución de problemas, trabajo en equipo,
          comunicación y autonomía.
        </div>
      </div>
    </div>
  );
}

export default HomeCont;
