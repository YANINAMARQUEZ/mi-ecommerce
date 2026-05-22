 import React from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = ({ cartItems, setCartCount }) => {
    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartCount(updatedCart.length);  // ✅ Actualiza la cantidad en el carrito al eliminar
    };

    return (
        <div className="cart-container">
            <h2>🛒 Mi Carrito</h2>

            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.name} />
                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <p>Precio: ${item.price}</p>
                                <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger">
                                    ❌ Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Tu carrito está vacío.</p>
            )}

            {/* ✅ Botón para ir al pago */}
            {cartItems.length > 0 && (
                <Link to="/checkout" className="btn btn-success mt-3">
                    Ir a Pagar
                </Link>
            )}
        </div>
    );
};

export default CartPage;
