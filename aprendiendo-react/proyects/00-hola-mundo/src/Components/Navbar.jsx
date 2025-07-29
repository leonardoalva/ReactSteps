import { useState, useEffect } from "react";

function Nabvar() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((cat) => setCategories(cat))
      .then(() => console.log(categories));
  }, []); // Añadido array de dependencias vacío

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar">
      <div className="container-fluid">
        <h1 className="titulo logo">CompreAqui.com</h1>
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
                className="btn btn-dark dropdown-toggle"
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
                  <li key={category}> {/* Key movida aquí */}
                    <a className="dropdown-item" href="#">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <ul className="Navbar-Links">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Another action</a>
              </li>
              <li>
                <a href="#">Something else here</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nabvar;