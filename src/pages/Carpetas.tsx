import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const carpetasProducts = [
    { id: 1, name: "carpeta con lomo", price: "$10.000", img: "/carpetaconlomo.jpeg", brand: "carpeta" },
    { id: 2, name: "carpeta con anillo", price: "$6.000", img: "/carpetaanillo.jpeg", brand: "carpeta" },
    { id: 3, name: "carpeta plastica", price: "$7.000", img: "/carpetaplastica.jpeg", brand: "carpeta" },
    { id: 4, name: "carpeta colgante", price: "$1.500", img: "/carpetacolgante.jpeg", brand: "carpeta" },
    { id: 6, name: "carpeta oficina", price: "2.500", img: "/carpeta oficina.jpeg", brand: "carpeta" },
    { id: 7, name: "carpeta a4", price: "$4.200", img: "/carpeta a4.jpeg", brand: "carpeta" },
    { id: 8, name: "anillo chico", price: "$200", img: "/anillochico.jpeg", brand: "carpeta" },
    { id: 9, name: "anillo grande", price: "$500", img: "/anillogrande.jpeg", brand: "carpeta" },
    { id: 10, name: "folo chico", price: "$200", img: "/folio chico.jpeg", brand: "carpeta" },
    { id: 11, name: "folio grande", price: "$300", img: "/foliogrande.jpeg", brand: "carpeta" },
    { id: 12, name: "caratula gruesa", price: "$1.600", img: "/caratula gruesa.jpeg", brand: "carpeta" },
    { id: 14, name: "caratula fina", price: "$1.200", img: "/caratula fina.jpeg", brand: "carpeta" },
    { id: 15, name: "carpeta oferta", price: "$10.000", img: "/carpetaanillo.jpeg", brand: "carpeta" },
    { id: 16, name: "hoja triunfante por 96", price: "$5.000", img: "/hojatruinfantex96.jpeg", brand: "triunfante" },
   { id: 15, name: "hoja americax96", price: "$4.000", img: "/hojatruinfantex96.jpeg", brand: "america" },
    { id: 16, name: "hoja triunfante por 96", price: "$5.000", img: "/americax96.jpeg", brand: "triunfante" },

     { id: 15, name: "hojax480 triunfante", price: "$18,000", img: "/americax96.jpeg", brand: "triunfante" },
    { id: 16, name: "hojax480 america", price: "$16,000", img: "/hojatriunfantex96.jpeg", brand: "america" },
    { id: 15, name: "hojalaprida cuadrillex48", price: "$3,500", img: "/laprida cuadrille.jpeg", brand: "america" },
    { id: 16, name: "lapridacuadrillex24", price: "$2,000", img: "/laprida cuadrille.jpeg", brand: "laprida" },
    { id: 16, name: "exitocuadrillex96", price: "$4,5000", img: "/exito.jpeg", brand: "exito" },
     { id: 15, name: "hojacarpetadibujogrande", price: "$4,000", img: "/hojadibujo.jpeg", brand: "america" },
    { id: 16, name: "hojadibujo colorA3", price: "$2,500", img: "/color.jpeg", brand: "triunfante" },
    { id: 15, name: "hojadibujoA3blanca", price: "$2,000", img: "/blanca.jpeg", brand: "america" },
    { id: 16, name: "PAPELMANTECA", price: "$5,000", img: "/manteca.jpeg", brand: "hoja" },
    { id: 16, name: "hojamilimetrado", price: "$2,500", img: "/milimrtrado.jpeg", brand: "hoja" },
     { id: 15, name: "hojamusica", price: "$3,000", img: "/musica.png", brand: "hoja" },
    { id: 16, name: "lamina del cuerpohimano", price: "$2,000", img: "/laminacuerpo.jpeg", brand: "lamina" },
    { id: 16, name: "laminachicacuerpohumano", price: "$1,600", img: "/laminacuerpo.jpeg", brand: "lamina" },
    { id: 16, name: "hojablanca", price: "$100", img: "/hojaA4.jpeg", brand:"HojaA4" },
    { id: 21, name: "cARPETA RIVADAVIA COMBO", price: "$23.000", img: "/blanco.jpeg", brand: "cuaderno" },
    { id: 21, name: "CARPETA CON SIERRE", price: "$18.200", img: "/blanco.jpeg", brand: "cuaderno" },
    { id: 21, name: "CARPETA A 4", price: "$4.500", img: "/blanco.jpeg", brand: "cuaderno" },
   { id: 21, name: "CARPETA CAPIBARA ", price: "$10.000", img: "/blanco.jpeg", brand: "cuaderno" },
   { id: 21, name: "HOJA RIVADAVIAX480", price: "$36.000", img: "/blanco.jpeg", brand: "cuaderno" },
   { id: 21, name: "HOJA HUSARESX480", price: "$25.000", img: "/blanco.jpeg", brand: "cuaderno" },
   { id: 21, name: "RIVADAVIA X96", price: "$7.200", img: "/blanco.jpeg", brand: "cuaderno" },
   










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

const Carpetas = ({ addToCart }) => {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");

    const brands = getUniqueBrands(carpetasProducts);

    const filteredProducts = carpetasProducts.filter(
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

export default Carpetas;