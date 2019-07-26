import React from 'react';

function Aprovado(props) {
    return (
      <div className="aprovado">
        <p className="aprovado-texto">Aprovado</p>
        <p className="aprovado-valor">R$ {props.aprovado}</p>
      </div>
    )
  }

export default Aprovado;