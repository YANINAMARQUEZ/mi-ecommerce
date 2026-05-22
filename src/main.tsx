import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";  


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartProvider>  {/* ✅ Envuelve la aplicación con el contexto */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);

