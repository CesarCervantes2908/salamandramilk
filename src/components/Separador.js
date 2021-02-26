import React from 'react';
import '../styles/Separador.css';

function Separador({children, id}) {
    return (
        <div className="separador" id={id}>
            <div className="barra"> </div>
            <p className="texto-separador">{children}</p>
            <div className="barra"> </div>
        </div>
    )
}

export default Separador;
