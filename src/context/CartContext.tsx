
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // ✅ Estados iniciales por defecto
    const defaultCart = [];
    const defaultShipping = { address: "", shippingMethod: "" };

    // 📦 Recuperar carrito desde localStorage o usar default
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : defaultCart;
    });

    // 🚚 Recuperar datos de envío desde localStorage o usar default
    const [shippingDetails, setShippingDetails] = useState(() => {
        const savedShipping = localStorage.getItem("shippingDetails");
        return savedShipping ? JSON.parse(savedShipping) : defaultShipping;
    });

    // 💾 Guardar carrito en localStorage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // 💾 Guardar datos de envío en localStorage
    useEffect(() => {
        localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
    }, [shippingDetails]);

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

    // 🗑️ Eliminar producto
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // ➕ Incrementar cantidad
    const incrementQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // ➖ Disminuir cantidad
    const decrementQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0) 
        );
    };

    // 🚚 Guardar info de envío
    const saveShippingInfo = (address, shippingMethod) => {
        setShippingDetails({ address, shippingMethod });
    };

    // 💰 Calcular total
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            // Convertir el precio de string a número (quita $ y comas)
            const numPrice = typeof item.price === "string" 
                ? parseFloat(item.price.replace(/[$,]/g, "")) 
                : item.price;
            return total + (numPrice * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                addToCart, 
                removeFromCart, 
                incrementQuantity, 
                decrementQuantity,
                shippingDetails,
                saveShippingInfo,
                getTotalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
