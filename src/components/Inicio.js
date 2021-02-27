import React from 'react';
import NavBar from './NavBar';
import '../styles/Inicio.css';
import Separador from './Separador';
import Carousel from './Carousel';
import ExtraInfo from './ExtraInfo';

function Inicio() {
    return (
        <>
            <NavBar active={'inicio'}></NavBar>
            <main>
                <section id="first">
                    <img src={process.env.PUBLIC_URL + "/images/FotoInicio.jpeg"} id="foto-inicio"/>
                    <div className="right-column">
                        <img src={process.env.PUBLIC_URL + "/images/Logo.png"} id="logo"/>
                        <h1 className="title">Kéfir</h1>
                        <p className="text-info">Alimento probiótico que contiene compuestos bioactivos, incluyendo hasta 30 cepas de microorganismos que ayudan a combatir tumores, microbios dañinos, carcinógenos y muchas otras enfermedades.</p>
                    </div>
                </section>
                <section id="second">
                    <Separador>Conoce nuestros productos</Separador>
                    <Carousel></Carousel>
                </section>
                <section id="third">
                    <Separador>SalamandraMilk</Separador>
                    <ExtraInfo></ExtraInfo>
                    <Separador id="siguenos">Síguenos</Separador>
                    <img className="ig-logo" src={process.env.PUBLIC_URL + "/images/Iglogo.png"}/>
                </section>
            </main>
        </>
    );
};

export default Inicio;