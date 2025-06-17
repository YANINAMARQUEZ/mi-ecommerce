import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const WomenProducts = [
    { id: 1, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 2, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 3, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 4, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 5, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 6, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 7, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 8, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 9, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 10, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 11, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 12, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 14, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 15, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 16, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 17, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 18, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 19, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 20, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 21, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 22, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 23, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 24, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 25, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 26, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 27, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 28, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 29, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 30, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 31, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 32, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 33, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 34, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 35, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 36, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 37, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 38, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 39, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 40, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
    { id: 41, name: "Zapatilla Deportiva", price: "$29.99", img: "/1.jpeg", brand: "Nike" },
    { id: 42, name: "zapatilla Elegante", price: "$59.99", img: "/2.jpeg", brand: "Adidas" },
    { id: 43, name: "zapatilla Verano", price: "$49.99", img: "/3.jpeg", brand: "New Balance" },
];


const ofertaDestacada = {
    id: 99,
    name: "¡Oferta Destacada! Zapatillas Pro",
    price: "$14.99",
    video: "https://marketplace.canva.com/EAE6VpTpdPQ/2/0/450w/canva-i_RoMi8tOB0.mp4",
    description: "¡Solo por hoy! Zapatillas Pro con 70% de descuento y envío gratis.",
};

const getUniqueBrands = (products) => [
    ...new Set(products.map((p) => p.brand)),
];

const Women = ({ addToCart }) => {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");

    const brands = getUniqueBrands(WomenProducts);

    const filteredProducts = WomenProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (brand === "" || product.brand === brand)
    );

    return (
        <div className="container my-5">
            {/* Banner Nueva Colección */}
            <div className="promo-banner d-flex align-items-center mb-5 p-4 rounded shadow" style={{
                background: "linear-gradient(90deg, #f8fafc 60%, #ffe3ec 100%)",
                minHeight: 140
            }}>
                <img src="/ofertamujer.webp" alt="Nueva Colección Mujer" className="promo-img rounded shadow-sm me-4" style={{
                    width: 90, height: 90, objectFit: "cover", border: "4px solid #fff"
                }} />
                <div className="promo-text flex-grow-1">
                    <h2 className="mb-2" style={{ color: "#d63384", fontWeight: 700, fontSize: "1.6rem" }}>✨ Nueva Colección Mujer ✨</h2>
                    <p className="mb-3" style={{ fontSize: "1.05rem" }}>
                        <strong>🔥 50% de descuento en artículos seleccionados 🔥</strong>
                    </p>
                    <Link to="/ofertas" className="btn btn-gradient px-4 py-2" style={{
                        background: "linear-gradient(90deg, #d63384 40%, #fd7e14 100%)",
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

            {/* Oferta destacada con video (más pequeña) */}
            <div className="row justify-content-center mb-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div
                        className="card border-0 shadow oferta-card-hover"
                        style={{
                            background: "linear-gradient(90deg, #fffbe7 60%, #ffe3ec 100%)",
                            borderRadius: 14,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            padding: 8,
                            minHeight: 100,
                            maxWidth: 340,
                            margin: "0 auto"
                        }}
                    >
                        <div style={{ flex: 1, minWidth: 60 }}>
                            <video
                                src={ofertaDestacada.video}
                                controls
                                autoPlay
                                muted
                                style={{
                                    width: "100%",
                                    maxWidth: 70,
                                    borderRadius: 8,
                                    boxShadow: "0 2px 8px rgba(253,126,20,0.10)",
                                    border: "2px solid #fd7e14",
                                    background: "#000",
                                }}
                            />
                        </div>
                        <div style={{ flex: 2 }}>
                            <h6 style={{ color: "#fd7e14", fontWeight: 700, marginBottom: 4, fontSize: "0.95rem" }}>
                                ⭐ {ofertaDestacada.name}
                            </h6>
                            <p style={{ fontWeight: 500, color: "#d63384", fontSize: "0.85rem", marginBottom: 2 }}>
                                {ofertaDestacada.description}
                            </p>
                            <p style={{ fontWeight: 700, color: "#fd7e14", fontSize: "1rem", marginBottom: 6 }}>
                                {ofertaDestacada.price}
                            </p>
                            <button
                                onClick={() => addToCart(ofertaDestacada)}
                                className="btn btn-warning btn-sm"
                                style={{
                                    borderRadius: 12,
                                    fontWeight: 600,
                                    color: "#fff",
                                    background: "linear-gradient(90deg, #fd7e14 0%, #d63384 100%)",
                                    border: "none",
                                    boxShadow: "0 1px 4px rgba(253,126,20,0.10)",
                                    fontSize: "0.85rem",
                                    padding: "4px 10px"
                                }}
                            >
                                <i className="bi bi-cart-plus"></i> Comprar Oferta
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos */}
            <h2 className="text-center text-primary mb-4" style={{ fontWeight: 700, letterSpacing: 1 }}>Sección Mujer</h2>
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
                                <p className="card-text mb-3" style={{ color: "#d63384", fontWeight: 700, fontSize: "1.1rem" }}>{product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-success btn-lg mt-auto"
                                    style={{
                                        borderRadius: 20,
                                        fontWeight: 600,
                                        background: "linear-gradient(90deg, #fd7e14 0%, #d63384 100%)",
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
                .oferta-card-hover:hover, .product-card-hover:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 8px 32px rgba(214,51,132,0.12);
                    transition: all 0.2s;
                }
            `}</style>
        </div>
    );
};

export default Women;