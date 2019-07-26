import React from 'react';

function Captado(props) {
    return (
      <div className="captado">
        <p className="captado-texto">Captado</p>
        <p className="captado-valor">R$ {props.captado}</p>
      </div> 
    )
  }

export default Captado;