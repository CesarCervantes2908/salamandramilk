import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/menu">
                        Menú
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Comunícate con nostros
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
