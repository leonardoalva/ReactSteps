import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router";


function Navbar() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((cat) => setCategories(cat))
  }, []); // Añadido array de dependencias vacío

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar">
      <div className="container-fluid">
        <h1 className="logoTit">compreaqui.com</h1>
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
              >{categories.map((category) => (
                <li key={category}>
                  <Link to={`/category/${category}` } >{category}</Link>
                </li>
                ))}
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
      </div>
    </nav>
  );
}

export default Navbar;