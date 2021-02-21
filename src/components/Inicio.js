import React from 'react';
import NavBar from './NavBar';
import '../styles/Inicio.css';
import Separador from './Separador';
import Carousel from './Carousel';
import ExtraInfo from './ExtraInfo';

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
                <section id="second">
                    <Separador>Conoce nuestros productos</Separador>
                    <Carousel></Carousel>
                </section>
                <section id="third">
                    <Separador>SalamandraMilk</Separador>
                    <ExtraInfo></ExtraInfo>
                    <Separador>Síguenos</Separador>
                    <img className="ig-logo" src="./images/IG-Logo-removebg-preview.png"/>
                </section>
            </main>
        </>
    );
};

export default Inicio;