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
          <div className="d-flex gap-4">
            <a className="navbar-brand navbarText " href="/search">
              <h3>Search</h3>
            </a>
            <a className="navbar-brand navbarText " href="/contact">
              <h3>Contact</h3>
            </a>
            <a className="navbar-brand navbarText" href="/about-us">
              <h3>About</h3>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
