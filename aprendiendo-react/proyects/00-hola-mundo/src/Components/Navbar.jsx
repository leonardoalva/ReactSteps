function Nabvar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark Navbar">
      <div class="container-fluid">
        <h1 className="titulo logo">CompreAqui.com</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Inicio
                  </a>
                </li>
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
