import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">Nombre de la Tienda</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria1">Categoría 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria2">Categoría 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria3">Categoría 3</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria4">Categoría 4</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria5">Categoría 5</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
