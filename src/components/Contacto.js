import React from 'react'
import NavBar from './NavBar'
import Separador from './Separador';
import '../styles/Contacto.css';

function Contacto() {
    const handleClick = (event)=>{
        window.open('https://wa.me/+525516265721', '_blank')
    }
    return (
        <>
            <NavBar active={'contacto'}></NavBar>
            <main>
                <img className="logo" src={process.env.PUBLIC_URL + "/images/Logo.png"} />
                <Separador>¡Realiza tu pedido!</Separador>
                <button id="wa-button" onClick={handleClick}>
                    Envianos un Mensaje 
                    <img src={process.env.PUBLIC_URL + "/images/wa-logo.png"} alt="" id="whatssapp-logo"/>
                </button>
                <h1 className="title">SalamandraMilk</h1>
                <p className="ubication">Gustavo A. Madero, Mexico City, Mexico</p>
                <p className="email">salamandramilk@gmail.com</p>
            </main>
        </>
    );
};

export default Contacto;