import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const ofertas = [
  { id: 1, name: "Zapatilla Deportiva Oferta", price: "$19.99", img: "/1.jpeg" },
  { id: 2, name: "Zapatilla Elegante Oferta", price: "$39.99", img: "/2.jpeg" },
  { id: 3, name: "Zapatilla Verano Oferta", price: "$29.99", img: "/3.jpeg" },
];

const Ofertas = ({ addToCart }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-danger mb-4" style={{ fontWeight: 800, letterSpacing: 1 }}>
        🔥 Productos en Oferta 🔥
      </h2>
      <div className="row g-4">
        {ofertas.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm oferta-card-hover">
              <img
                src={product.img}
                alt={product.name}
                className="card-img-top"
                style={{
                  height: 220,
                  objectFit: "cover",
                  borderRadius: "18px 18px 0 0",
                  borderBottom: "2px solid #fd7e14",
                }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-2" style={{ fontWeight: 700, color: "#d63384" }}>
                  {product.name}
                </h5>
                <p className="card-text mb-3" style={{ color: "#fd7e14", fontWeight: 700, fontSize: "1.1rem" }}>
                  {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-success btn-lg mt-auto"
                  style={{
                    borderRadius: 20,
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #fd7e14 0%, #d63384 100%)",
                    border: "none",
                  }}
                >
                  <i className="bi bi-cart-plus"></i> Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .oferta-card-hover:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 8px 32px rgba(253,126,20,0.12);
          transition: all 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Ofertas;