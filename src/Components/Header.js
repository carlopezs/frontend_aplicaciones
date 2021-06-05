import React from "react";
import logo_02 from "../images/Logo_02.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="index.html">
        <img src={logo_02} alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse sub-menu-bar"
        id="navbarSupportedContent"
      >
        <ul id="nav" className="navbar-nav ml-auto">
          <li className="nav-item active">
              <Link className="page-scroll" to="/"> Inicio </Link>
          </li>
          <li className="nav-item">
              <Link className="page-scroll" to="/productos"> Productos</Link>
          </li>
          <li className="nav-item">
              <Link className="page-scroll" to="/ajuste"> Ajustes</Link>
          </li>
          <li className="nav-item">
              <Link className="page-scroll" to="/kardex"> Kardex</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
