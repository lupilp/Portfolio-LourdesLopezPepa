import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import foto from "../images/foto.jpg";
import style from "../style/Menu.module.css";

function Menu() {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className={`${style.contAbierto} ${!isOpen && style.contCerrado}`}>
      <div className={`${style.menuAbierto} ${!isOpen && style.menuCerrado}`}>
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
      <button
        className={`${style.buttonClose} ${!isOpen && style.buttonRotate}`}
        onClick={handleClick}
      >
        <AiOutlineMenu />
      </button>
    </div>
  );
}

export default Menu;
