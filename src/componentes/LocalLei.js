import React from 'react';

function LocalLei(props) {
    return (
      <div className="local-lei">
        <h3 className="local">{props.local} - </h3><h3 className="sublocal">{props.sublocal}</h3>
        <h4 className="lei">{props.lei}</h4>
      </div>
    )
}

export default LocalLei;