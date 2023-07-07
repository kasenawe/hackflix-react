import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="/">
            <img
              src="/img/hackflix-logo-trans.png"
              alt="Logo"
              width="100"
              height="100%"
              className="d-inline-block align-text-top me-3"
            ></img>
          </a>

          <a className="navbar-brand navbarText " href="/contacto">
            <h3>Contacto</h3>
          </a>
          <a className="navbar-brand navbarText" href="/sobre-nosotros">
            <h3>Sobre nosotros</h3>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
