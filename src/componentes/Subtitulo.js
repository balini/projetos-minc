import React from 'react';

function Subtitulo(props) {
    return (
      <div className="subtitulo">
        <h2 className="subtitulo-texto">{props.subtitulo}</h2>
      </div>
    )
  }

export default Subtitulo;