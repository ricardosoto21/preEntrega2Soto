import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Tecnologías Riki</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Atomatizaciones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Soluciones tecnológicas</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;