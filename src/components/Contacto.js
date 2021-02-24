import React from 'react'
import NavBar from './NavBar'
import Separador from './Separador';

function Contacto() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <img className="logo" src="./images/Logo.png" />
                <Separador>¡Realiza tu pedido!</Separador>
                <button>
                    <img src="" alt="" id="whatssapp-logo"/>
                    Envianos un Mensaje
                </button>
                <h1 className="title">SalamandraMilk</h1>
                <p className="ubication">Gustavo A. Madero, Mexico City, Mexico</p>
                <p className="email">salamandramilk@gmail.com</p>
            </main>
        </>
    );
};

export default Contacto;