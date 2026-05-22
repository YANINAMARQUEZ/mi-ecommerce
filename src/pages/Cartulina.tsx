// ...existing code...
import React, { useState } from "react";
import { Link } from "react-router-dom";

const cartulinaProducts = [
  { id: 1, name: "Cartulina Divertida", price: "$5.000", img: "/divertida.jpeg", brand: "cartulina" },
   { id: 10, name: "Gomaeva Lisa", price: "$700", img: "/lisa.jpeg", brand: "gomaeva" },
  { id: 11, name: "Gomaeva con Brillo", price: "$1.300", img: "/brillo.jpeg", brand: "gomaeva" },
  { id: 12, name: "Gomaeva con Diseño", price: "$2.500", img: "/diseno.jpeg", brand: "gomaeva" },
  { id: 13, name: "Gomaeva con Tela y Brillo", price: "$700", img: "/gomaeva_tela_brillo.jpeg", brand: "gomaeva" },
  { id: 14, name: "Gomaeva Pelito", price: "$2.100", img: "/pelito.jpeg", brand: "gomaeva" },

  { id: 20, name: "gomaevaTela ", price: "$2.600", img: "/tela.jpeg", brand: "material" },

  { id: 30, name: "Cuaderno El Nene", price: "$5.000", img: "/nene.jpeg", brand: "cuaderno" },
  { id: 31, name: "Cuaderno Entretenida", price: "$5.000", img: "/divertida.jpeg", brand: "cuaderno" },
  { id: 32, name: "Cuaderno 128", price: "$6,500", img: "/128.jpeg", brand: "cuaderno" },
  { id: 33, name: "Cuaderno negro", price: "$4,500", img: "/negro.jpeg", brand: "cuaderno" },

  { id: 40, name: "Afiche ", price: "$1.000", img: "/lisa.jpeg", brand: "afiche" },

  // ejemplos adicionales de cartulina y afiches divertidos
  { id: 50, name: "papel forrar", price: "$900", img: "/forro.jpeg", brand: "cartulina" },
  { id: 51, name: "crepe", price: "$600", img: "/crepe.jpeg", brand: "afiche" },
];


const ofertaDestacada = {
    id: 99,
    name: "¡Oferta !carpetas ",
    price: "$5,300",
    description: "¡Aprovecha nuestra oferta especial en carpetas! Calidad y estilo a un precio increíble.",
};



const getUniqueBrands = (products) => [
    ...new Set(products.map((p) => p.brand)),
];

const Cartulina = ({ addToCart }) => {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");

    const brands = getUniqueBrands(cartulinaProducts);

    const filteredProducts = cartulinaProducts.filter(
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

export default Cartulina;