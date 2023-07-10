import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/" className="navbar-brand">
            <img
              src="/img/hackflix-logo-trans.png"
              alt="Logo"
              width="100"
              height="100%"
              className="d-inline-block align-text-top me-3"
            ></img>
          </Link>
          <div className="d-flex gap-4">
            <Link to="/search" className="navbar-brand navbarText">
              <i class="bi bi-search text-white"></i>
            </Link>
            <Link to="/contact" className="navbar-brand navbarText">
              <h3>Contact</h3>
            </Link>
            <Link to="/about-us" className="navbar-brand navbarText">
              <h3>About</h3>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
