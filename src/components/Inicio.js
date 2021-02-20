import React from 'react';
import NavBar from './NavBar';
import '../styles/Inicio.css';
import Separador from './Separador';

function Inicio() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <section id="first">
                    <img src="./images/FotoInicio.jpeg" id="foto-inicio"/>
                    <div className="right-column">
                        <img src="./images/Logo.png" id="logo"/>
                        <p className="text-info">El Kéfir es un alimento probiótico que contiene muchos compuestos bioactivos, incluyendo hasta 30 cepas de bacterias buenas que ayudan a combatir tumores, microbios dañinos, carcinógenos y muchas otras enfermedades.</p>
                    </div>
                </section>
                <Separador>Conoce nuestros productos</Separador>
            </main>
        </>
    );
};

export default Inicio;