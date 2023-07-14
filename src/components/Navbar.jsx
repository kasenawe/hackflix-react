import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;
      setScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: `${
      scrollPos > 0
        ? "rgb(19, 19, 19)"
        : "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)"
    }`,
    transition: "background-color 0.5s ease",
  };

  return (
    <Nav
      style={navbarStyle}
      className="d-flex gap-5 px-5 justify-content-between align-items-center navbar"
    >
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

        <Link className="navbar-links" to="/about-us">
          About
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
