import React from "react";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";
import ShippingForm from "./ShippingForm";
import { useState} from "react";

import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
interface CartItem {
  name: string;
  price: string | number;
  quantity?: number;
}

interface CheckoutProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, clearCart }) => {
  const [showThanks, setShowThanks] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThanks(true);
    clearCart();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const parsePrice = (price: string | number) => {
    if (typeof price === "number") return price;
    if (!price) return 0;
    // Eliminar signos de moneda, puntos de miles, comas y espacios
    const cleaned = String(price).replace(/[$.,\s]/g, "");
    return parseFloat(cleaned) || 0;
  };

  const total = cartItems.reduce((acc, item) => {
    const priceNum = parsePrice(item.price);
    const qty = item.quantity ?? 1;
    return acc + priceNum * qty;
  }, 0);

  return (
    <div className="container py-4" style={{ maxWidth: "520px", margin: "0 auto" }}>
      <h3 className="text-center mb-4">Finalizar Compra</h3>

      {/* 🎞️ GIF animado */}
      <img
        src="https://acegif.com/wp-content/uploads/2022/fzk5d/18-yellow-flying-car.gif"
        alt="Carrito animado"
        style={{ width: "120px", margin: "0 auto", display: "block" }}
      />

      {/* 🛒 Resumen de compra */}
      <div className="mt-4 mb-3">
        <ul className="list-group">
          {cartItems.map((item, idx) => {
            const priceNum = parsePrice(item.price);
            const qty = item.quantity ?? 1;
            const subtotal = priceNum * qty;
            return (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <div>{item.name}</div>
                  <small className="text-muted">Precio unitario: ${priceNum.toLocaleString()}</small>
                  <div>Cantidad: {qty}</div>
                </div>
                <div className="fw-bold">${subtotal.toLocaleString()}</div>
              </li>
            );
          })}
        </ul>
        <p className="text-end mt-2 fw-bold">
          Total a pagar: ${total.toLocaleString()}
        </p>
      </div>

      {/* ✅ Mensaje de agradecimiento o formulario */}
      {showThanks ? (
        <div className="alert alert-success text-center">
          ¡Gracias por su compra! Redirigiendo...
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* 📍 Dirección */}
          <div className="p-3 mb-3 border rounded bg-light">
            <p className="fw-bold mb-2">📍 Dirección de Envío</p>
            <input className="form-control mb-2" placeholder="Nombre completo" required />
            <input className="form-control mb-2" placeholder="Calle y número" required />
            <input className="form-control mb-2" placeholder="Ciudad" required />
            <div className="row">
              <div className="col">
                <input className="form-control mb-2" placeholder="Provincia" required />
              </div>
              <div className="col">
                <input className="form-control mb-2" placeholder="Código Postal" required />
              </div>
            </div>
          </div>

          {/* 🚚 Método de envío */}
          <div className="p-3 mb-3 border rounded bg-light">
            <p className="fw-bold mb-2">🚚 Método de Envío</p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="envio" id="retiro" required />
              <label className="form-check-label" htmlFor="retiro">Retiro en tienda (gratis)</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="envio" id="standard" />
              <label className="form-check-label" htmlFor="standard">Envío estándar — $1500</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="envio" id="express" />
              <label className="form-check-label" htmlFor="express">Envío exprés — $2500</label>
            </div>
          </div>

          {/* 💳 Medios de pago */}
          <div className="p-3 mb-4 border rounded bg-light">
            <p className="fw-bold mb-2">💳 Medios de Pago</p>
            <input className="form-control mb-2" placeholder="Nombre en la tarjeta" required />
            <input className="form-control mb-2" placeholder="Número de tarjeta" required />
            <div className="row">
              <div className="col">
                <input className="form-control mb-2" placeholder="MM/AA" required />
              </div>
              <div className="col">
                <input className="form-control mb-2" placeholder="CVV" required />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Confirmar y Pagar
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
