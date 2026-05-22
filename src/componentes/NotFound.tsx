import React from "react";
import { Link } from "react-router-dom";



const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="text-danger">404 - Página no encontrada</h1>
            <p className="lead text-muted">Lo sentimos, la página que buscas no existe.</p>
            <img src="/not-found-image.jpg" alt="Error 404" className="img-fluid rounded shadow-sm" />
            <div className="mt-4">
                <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
        </div>
    );
};

export default NotFound;

