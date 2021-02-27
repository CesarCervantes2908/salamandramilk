import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

function NavBar({active}) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={active === 'inicio' ? 'active' : ''}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/menu" className={active === 'menu' ? 'active' : ''}>
                        Menú
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className={active === 'contacto' ? 'active' : ''}>
                        Comunícate con nostros
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
