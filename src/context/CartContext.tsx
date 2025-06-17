import { createContext, useContext, useState } from "react";



const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);  // ✅ Estado global del carrito

    // 🛒 Agregar producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // 🗑️ Eliminar producto del carrito
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // ➕ Incrementar cantidad de un producto
    const incrementQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // ➖ Disminuir cantidad de un producto
    const decrementQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0) 
            // ✅ Elimina si la cantidad llega a 0
        );
    };
const [shippingDetails, setShippingDetails] = useState({ address: "", shippingMethod: "" });

const saveShippingInfo = (address, shippingMethod) => {
    setShippingDetails({ address, shippingMethod });
};

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
