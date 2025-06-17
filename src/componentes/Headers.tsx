import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../componentes/CartIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Headers.css";




interface HeadersProps {
  cartCount: number;
  addToCart: (product: any) => void;
}

const Headers: React.FC<HeadersProps> = ({ cartCount }) => {
  return (
    <header className="shadow-sm bg-white sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light container py-2">
        
        {/* Logo + nombre de tienda */}
        <Link to="/" className="navbar-brand d-flex align-items-center me-auto">
          <img
            src="/logo.webp"
            alt="Logo ZapasTop"
            style={{ height: 40, marginRight: 10 }}
          />
          <span className="fs-5 fw-bold text-dark">E-COMERCE</span>
        </Link>

        {/* Botón responsive hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navegación principal */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
           

            <li className="nav-item">
              <Link to="/" className="nav-link px-3 fw-semibold text-dark">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/Men" className="nav-link px-3 fw-semibold text-dark">Hombre</Link>
            </li>
            <li className="nav-item">
              <Link to="/women" className="nav-link px-3 fw-semibold text-dark">Mujer</Link>
            </li>
            <li className="nav-item">
              <Link to="/kids" className="nav-link px-3 fw-semibold text-dark">Niños</Link>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link px-3 fw-semibold text-danger">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-3 fw-semibold text-dark">Login</Link></li>
          </ul>
        </div>

        {/* Carrito */}
        <div className="position-relative ms-3">
          <Link to="/checkout" className="btn btn-outline-dark rounded-circle">
            🛒
          </Link>
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
              {cartCount}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Headers;
