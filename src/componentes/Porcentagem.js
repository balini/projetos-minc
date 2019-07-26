import React from 'react';

function Porcentagem(props) {
    return (
      <div className="porcentagem">
        <p className="porcentagem-valor">{props.porcentagem}%</p>
        <p className="porcentagem-resto"></p>
      </div>
    )
  }

export default Porcentagem;