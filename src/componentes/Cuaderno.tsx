import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const cuadernoProducts = [
    { id: 1, name: "cuaderno 100 hojas", price: "$13,000", img: "/cuaderno100hojas.jpeg", brand: "cuaderno" },
    { id: 1, name: "cuadernillo tapablanda 84 hojas", price: "$10.000", img: "/cuadernillofino.jpeg", brand: "cuaderno" },
    { id: 2, name: "cuaderno 200 hojas", price: "$20,000", img: "/200hojas.jpeg", brand: "cuaderno" },
    { id: 3, name: "cuaderno 80 hojas", price: "$4.500", img: "/cuadernillomediano.png", brand: "cuaderno" },
    { id: 4, name: "cuaderno 40 hojas", price: "$3.500", img: "/cuadernillomediano.png", brand: "cuaderno" },
    { id: 5, name: "cuadernillo mediano 40 hojas", price: "$2.500", img: "/mini.jpeg", brand: "cuaderno" },
    { id: 6, name: "cuadernillo chico 40 hojas", price: "$700", img: "/mini.jpeg", brand: "cuaderno" },
    { id: 7, name: "cuadernillo grande 84 hojas", price: "$12.000", img: "/cuadernillogrande.jpeg", brand: "cuaderno" },
    { id: 8, name: "cuaderno 50 hojas", price: "$6.500", img: "/te.jpeg", brand: "cuaderno" },
    { id: 9, name: "cuaderno por 194 hojas", price: "$18.600", img: "/exito.jpeg", brand: "cuaderno" },
    { id: 10, name: "cuaderno 20 hojas", price: "$500", img: "/1.jpeg", brand: "cuaderno" },
    { id: 11, name: "cuaderno 48 hojas blando", price: "$3.600", img: "/48fino.jpeg", brand: "cuaderno" },
    { id: 12, name: "cuaderno 42 hojas alamo", price: "$4.500", img: "/alamo.jpeg", brand: "cuaderno" },
    { id: 14, name: "cuaderno 42 hijs exito", price: "$4.800", img: "/exito.jpeg", brand: "cuaderno" },
    { id: 15, name: "cuaderno 82 hojas", price: "$6.500", img: "/exito.jpeg", brand: "cuaderno" },
    { id: 16, name: "cuaderno 98 hoja", price: "$8.800", img: "/cuaderno98hojas.jpeg", brand: "cuaderno" },
    { id: 17, name: "cuaderno educasion inicial", price: "$6.000", img: "/inicial.jpeg", brand: "cuaderno" },
    { id: 18, name: "cuaderno comunicasion", price: "$3.500", img: "/comuni.jpeg", brand: "cuaderno" },
    { id: 19, name: "cuaderno blok negro", price: "$5.000", img: "/negro.jpeg", brand: "cuaderno" },
    { id: 20, name: "blok dibujo color", price: "$5.500", img: "/nene.jpeg", brand: "cuaderno" },
    { id: 21, name: "cuaderno anillo hoja blanca", price: "$6.000", img: "/blanco.jpeg", brand: "cuaderno" },
    { id: 21, name: "cuaderno TANGO X 100 98 HOJAS", price: "$1.3000", img: "/blanco.jpeg", brand: "cuaderno" },
   { id: 21, name: "CUADERNINILLO TAPABLANDA AMERICANO 80 HOJAS", price: "$6.700", img: "/blanco.jpeg", brand: "cuaderno" },
   
   
];

const ofertaDestacada = {
    id: 99,
    name: "¡Oferta !carpetas ",
    price: "$10.00",
    description: "¡Aprovecha nuestra oferta especial en carpetas! Calidad y estilo a un precio increíble.",
};



const getUniqueBrands = (products) => [
    ...new Set(products.map((p) => p.brand)),
];

const Cuaderno = ({ addToCart }) => {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");

    const brands = getUniqueBrands(cuadernoProducts);

    const filteredProducts = cuadernoProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (brand === "" || product.brand === brand)
    );

    return (
        <div className="container my-5">
         

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
            <h2 className="text-center text-primary mb-4" style={{ fontWeight: 700, letterSpacing: 1 }}>cuadernos</h2>
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

export default Cuaderno;