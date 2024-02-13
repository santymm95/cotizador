import React from 'react';
import logo from '../images/logo (2).png'; // Ajusta la ruta según tu estructura de archivos
import '../assets/stylesCSS/header.css';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" className="navbar-brand" />
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                INICIO
              </a>
              <a className="nav-link" href="#">
                MOTOCICLETAS
              </a>
              <a className="nav-link" href="#">
                PRODUCTOS
              </a>
              <a className="nav-link" href="#">
                REPUESTOS
              </a>
              <a className="nav-link" href="#">
                CONTACTO
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
