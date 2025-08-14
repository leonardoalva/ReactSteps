import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router";
import CartWidget from "./CartWidget";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg Navbar">
      <div className="container-fluid">
        <h1 className="logoTit">siembra</h1>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="Margin-Btn btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" style={{ 
                  maxHeight: "300px",  // Altura máxima antes de aparecer scroll
                  overflowY: "auto",   // Habilita scroll vertical
                  scrollbarWidth: "thin", // Estilo del scroll (Firefox)
                }}
              >
                <li>
                  <Link to={`/category/panaderia` } >panaderia</Link>
                </li>
                <li>
                  <Link to={`/category/pasteleria` } >pasteleria</Link>
                </li>
  
              </ul>
            </li>
            <ul className="Center-Navbar">
              <li>
                <Link to='/'>Inicio</Link>

              </li>
              <li>
                <Link to='/nosotros'>Nosotros</Link>
              </li>
              <li>

                <Link to='/como_comprar'>Como comprar ?</Link>
              </li>
            </ul>
          </ul>
        </div>
        <CartWidget/>
      </div>

    </nav>
  );
}

export default Navbar;