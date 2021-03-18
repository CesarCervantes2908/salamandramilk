import React from 'react'
import NavBar from './NavBar'
import Separador from './Separador';
import { leches } from '../utils/Productos';
import { kefir } from '../utils/Productos';
import ProductCard from './ProductCard';
import '../styles/Menu.css';

function Menu() {
    const renderLeches = () => {
        return leches.map(leche => {
            return (
                <ProductCard title={leche.title}
                             className="leche-card"
                             imgageURL={leche.imgageURL}
                             price={leche.price}
                             quantity={leche.quantity}
                             key={leche.title}>
                                {leche.description}
                </ProductCard>
                );
        });
    };
    const renderKefir = () => {
        return kefir.map(product => {
            return (
                <ProductCard title={product.title}
                             className="kefir-card"
                             imgageURL={product.imgageURL}
                             price={product.price}
                             quantity={product.quantity}
                             key={product.title}>
                                {product.description}
                </ProductCard>
                );
        });
    };
    return (
        <>
            <NavBar active={'menu'}></NavBar>
            <main>
                <img className="logo" src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="logo de salamandramilk"/>
                <Separador>Lista de Precios</Separador>
                <section id="Leches">
                    <h2 className="section-title" >
                        Leche Vegana
                    </h2>
                    <p className="section-description">
                        Entre otros beneficios las leches vegetales reducen el colesterol son bajas en calorías y grasas, e incluso previenen ciertos tipos de cáncer. No contiene conservadores ni endulzantes. Dura de 4 a 5 días en refrigeración a partir de su elaboración. Venta por litro.
                    </p>
                    <div className="product-container leches">
                        {renderLeches()}
                    </div>
                </section>
                <Separador></Separador>
                <section id="Kefir">
                    <h2 className="section-title" >
                        Kéfir
                    </h2>
                    <p className="section-description">
                        No contiene endulzantes ni conservadores. Dura hasta 15 días en refrigeración a partir de la fecha de elaboración.
                    </p>
                    <div className="product-container leches">
                        {renderKefir()}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Menu;