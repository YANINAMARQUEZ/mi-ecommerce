import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const kidsProducts = [
    { id: 7, name: "zapatillas Infantil", price: "$24.99", img: "/niña.jpeg", brand: "Nike" },
    { id: 8, name: "Zapatillas Kids", price: "$49.99", img: "/producto2.jpeg", brand: "Adidas" },
    { id: 9, name: "zapatilla Escolar", price: "$29.99", img: "/oferta2.jpeg", brand: "New Balance" },
    { id: 10, name: "zapatilla Infantil", price: "$24.99", img: "/niña.jpeg", brand: "Nike" },
    { id: 11, name: "Zapatillas Kids", price: "$49.99", img: "/producto2.jpeg", brand: "Adidas" },
    { id: 12, name: "zapatilla Escolar", price: "$29.99", img: "/oferta2.jpeg", brand: "New Balance" },
    { id: 13, name: "zapatilla Infantil", price: "$24.99", img: "/niña.jpeg", brand: "Nike" },
    { id: 14, name: "Zapatillas Kids", price: "$49.99", img: "/producto2.jpeg", brand: "Adidas" },
    { id: 15, name: "zapatilla Escolar", price: "$29.99", img: "/oferta2.jpeg", brand: "New Balance" },
    { id: 16, name: "zapatilla Infantil", price: "$24.99", img: "/niña.jpeg", brand: "Nike" },
    { id: 17, name: "Zapatillas Kids", price: "$49.99", img: "/producto2.jpeg", brand: "Adidas" },
    { id: 18, name: "zapatilla Escolar", price: "$29.99", img: "/oferta2.jpeg", brand: "New Balance" },
];

const getUniqueBrands = (products) => [
    ...new Set(products.map((p) => p.brand)),
];

const Kids = ({ addToCart }) => {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");

    const brands = getUniqueBrands(kidsProducts);

    const filteredProducts = kidsProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (brand === "" || product.brand === brand)
    );

    return (
        <div className="container my-5">
            {/* 🛍️ Banner Promocional con Oferta */}
            <div className="promo-banner d-flex align-items-center mb-5 p-4 rounded shadow" style={{
                background: "linear-gradient(90deg, #e3f2fd 60%, #ffe3ec 100%)",
                minHeight: 180
            }}>
                <img src="/niño.webp" alt="Oferta Exclusiva" className="promo-img rounded shadow-sm me-4" style={{
                    width: 120, height: 120, objectFit: "cover", border: "4px solid #fff"
                }} />
                <div className="promo-text flex-grow-1">
                    <h2 className="mb-2" style={{ color: "#1976d2", fontWeight: 700 }}>✨ Nueva Colección Kids ✨</h2>
                    <p className="mb-3" style={{ fontSize: "1.1rem" }}>
                        <strong>🔥 50% de descuento en artículos seleccionados 🔥</strong>
                    </p>
                    <Link to="/ofertas" className="btn btn-gradient px-4 py-2" style={{
                        background: "linear-gradient(90deg, #1976d2 40%, #fd7e14 100%)",
                        color: "#fff", fontWeight: 600, border: "none", borderRadius: 20
                    }}>
                        Ver Ofertas
                    </Link>
                </div>
            </div>

            {/* Buscador y filtro por marca */}
            <div className="row mb-4">
                <div className="col-md-6 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-6 mb-2">
                    <select
                        className="form-select"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="">Todas las marcas</option>
                        {brands.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 🏷️ Productos */}
            <h2 className="text-center text-primary mb-4" style={{ fontWeight: 700, letterSpacing: 1 }}>Sección Niños</h2>
            <div className="row g-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm product-card-hover">
                            <img src={product.img} alt={product.name} className="card-img-top" style={{
                                height: 200, objectFit: "cover", borderRadius: "12px 12px 0 0"
                            }} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title mb-2" style={{ fontWeight: 600 }}>{product.name}</h5>
                                <span className="badge bg-secondary mb-2">{product.brand}</span>
                                <p className="card-text mb-3" style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.1rem" }}>{product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-success btn-lg mt-auto"
                                    style={{
                                        borderRadius: 20,
                                        fontWeight: 600,
                                        background: "linear-gradient(90deg, #fd7e14 0%, #1976d2 100%)",
                                        border: "none"
                                    }}
                                >
                                    <i className="bi bi-cart-plus"></i> Añadir al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Estilos personalizados */}
            <style>{`
                .product-card-hover:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 8px 32px rgba(25,118,210,0.12);
                    transition: all 0.2s;
                }
            `}</style>
        </div>
    );
};

export default Kids;