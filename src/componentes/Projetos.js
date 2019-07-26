import React from 'react';

const ProjetoForm = (props) => {
    return (
        <form onSubmit={props.getProjeto}>
            <input type="text" name="nomeProjeto" className="input-projetos" placeholder="Número PRONAC"></input>
            <button className="botao-projetos">Enviar</button>
        </form>
    )
}

export default ProjetoForm;