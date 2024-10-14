import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import AuthService from '../Auth/AuthService'; // Assuming you have an AuthService for session management

function Header() {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const navigate = useNavigate(); 

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function handleLogout() {
    AuthService.logout(); 
    alert("You've been signed out");
    navigate("/signin"); 
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon icon={["fab", "bootstrap"]} className="ms-1" size="lg" />
            <span className="ms-2 h5">Shop</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/products" className="nav-link">Explore</Link>
              </li>
            </ul>

            <button type="button" className="btn btn-outline-dark me-3">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <FontAwesomeIcon icon={["fas", "user-alt"]} /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>
                  <FontAwesomeIcon icon={["fas", "sign-out-alt"]} /> Logout
                </button>
              </li>
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
