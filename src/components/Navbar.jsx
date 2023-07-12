import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

function Navbar() {
  return (
    <Nav className="d-flex gap-5 px-2 justify-content-between align-items-center navbar">
      <Nav.Item>
        <Link to="/">
          <img
            src="/img/hackflix-logo-trans.png"
            alt="Logo"
            className="d-inline-block ms-2 align-text-top me-3 nav-logo"
          ></img>
        </Link>
      </Nav.Item>
      <Nav.Item className="d-flex gap-3 me-2">
        <Link to="/search">
          <i className="bi bi-search text-white"></i>
        </Link>
        <Link className="navbar-links" to="/contact">
          Contact
        </Link>
        <Link className="navbar-links" to="/about-us">
          About
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
