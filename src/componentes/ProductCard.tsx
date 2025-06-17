import { useState } from "react";
import "../styles/ProductCard.css";




const ProductCard = ({ product, setCartCount }) => {
    const [currentImage, setCurrentImage] = useState(product.img);

    const handleMouseEnter = () => {
        if (product.hoverImg) {
            setCurrentImage(product.hoverImg);  // ✅ Cambia la imagen al pasar el mouse
        }
    };

    const handleMouseLeave = () => {
        setCurrentImage(product.img);  // ✅ Vuelve a la imagen original
    };

    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);  // ✅ Incrementa el contador del carrito
    };

    return (
        <div className="card text-center shadow-sm p-2">
            <img 
                src={currentImage} 
                alt={product.name} 
                className="card-img-top"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <button onClick={handleAddToCart} className="btn btn-primary">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
