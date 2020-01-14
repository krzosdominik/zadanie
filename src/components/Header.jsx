import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/map-marker.png";

const Header = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <img src={logo} width="40" alt="Logo" />
          mapApp
        </Link>
      </div>
    </nav>
  );
};

export default Header;
