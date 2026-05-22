import { useLocation } from "react-router-dom";  // ✅ Importación correcta
import { Link } from "react-router-dom";  // ✅ Importación correcta

import React from "react";
import ProductCard from "./ProductCard";
import "../styles/Products.css";

const Products = ({ category, setCartCount }) => {
    const productData = {
        Men: [
            { id: 1, name: "Zapatillas Hombre", price: 120, img: "/oferta2.jpeg", hoverImg: "/oferta1-hover.jpeg" },
            { id: 2, name: "casual Hombre", price: 60, img: "/producto1.jpeg", hoverImg: "/oferta2-hover.jpeg" }
            
        ],
        women: [
            { id: 3, name: "zapatilla mujer", price: 80, img: "/oferta1.jpeg", hoverImg: "/women1-hover.jpg" },
            { id: 4, name: "deportivas Mujer", price: 150, img: "/producto.jpeg", hoverImg: "/women2-hover.jpg" },
             { id: 3, name: "zapatilla mujer", price: 80, img: "/oferta1.jpeg", hoverImg: "/women1-hover.jpg" },
             { id: 4, name: "deportivas Mujer", price: 150, img: "/producto.jpeg", hoverImg: "/women2-hover.jpg"}
        ],
        kids: [
            { id: 5, name: "zapatilla niña", price: 90, img: "/niña1.jpeg", hoverImg: "/kids1-hover.jpg" },
            { id: 6, name: "Zapatos Niño", price: 70, img: "/oferta3.jpg", hoverImg: "/kids2-hover.jpg" }
        ]
    };

    if (!productData[category]) {
        return <p>Error: Categoría no encontrada.</p>;  // 🚨 Manejo de error si la categoría es inválida
    }

    return ( <div className="products-container">
            <h2>Productos de {category === "men" ? "Hombre" : category === "women" ? "Mujer" : "Niños"}</h2>
            <div className="product-grid">
                {productData[category].map((product) => (
                    <ProductCard key={product.id} product={product} setCartCount={setCartCount} />
                ))}
            </div>

            {/* ✅ Botón para volver al inicio */}
            <Link to="/" className="btn btn-outline-dark back-button">Volver al Inicio</Link>
        </div>
    );
};
export default Products;