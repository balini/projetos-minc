import React from 'react';
import eye from '../imgs/eye.png'

function Empresa(props) {
    return (
      <div className="empresa">
        <h5 className="empresa-texto">Aportaram este projeto:</h5>
  
        <div className="empresa-itens">
          <p className="empresa-itens--nome">{props.empresa}</p>
            <button className="empresa-itens--todos"><img className="empresa-itens--img" src={eye} alt="ícone de um olho aberto"></img>Ver todos</button>
        </div>
    </div>  
    )
  }

export default Empresa;