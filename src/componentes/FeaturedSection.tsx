import React from "react";


import "../styles/FeaturedSection.css";

<img src={product.img} alt={product.name} className="card-img-top" style={{ width: "80%", height: "auto" }} />


const featuredProducts = [
    { id: 1, name: "Producto 1", price: "$29.99", img: "/product1.jpg" },
    { id: 2, name: "Producto 2", price: "$39.99", img: "/product2.jpg" },
    { id: 3, name: "Producto 3", price: "$49.99", img: "/product3.jpg" },
];

const FeaturedSection = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center text-primary">Productos Destacados</h2>
            <div className="row">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card text-center shadow-sm">
                            <img src={product.img} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-success">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedSection;
