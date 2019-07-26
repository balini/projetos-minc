import React from 'react';
import project from '../imgs/project.png'

function Titulo(props) {
    return (
      <div className="titulo">
        <h1 className="titulo-texto">{props.titulo}</h1>
        <img className="titulo-img" src={project} alt="Ícone de um lápis, uma régua e uma seta"></img>
      </div>
    )
  }

export default Titulo;