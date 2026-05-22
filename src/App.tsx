import { Routes, Route, useNavigate } from "react-router-dom";
import Headers from "./componentes/Headers";
import Home from "./pages/Home";
import Checkout from "./componentes/Checkout";
import Footer from "./componentes/Footer";
import NotFound from "./componentes/NotFound";
import Cartulina from "./pages/Cartulina";
import Cuaderno from "./componentes/Cuaderno";
import Carpetas from "./pages/Carpetas";
import CartIcon from "./componentes/CartIcon";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lapisespegamento from "./pages/Lapisespegamento";
import ConfirmacionPedido from "./pages/ConfirmacionPedido";
import Login from "./componentes/login";
import AdminPanel from "./pages/AdminPanel"; // o la ruta correcta donde guardaste el componen
interface CartItem {
  name: string;
  price: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  const addToCart = (product: CartItem) => {
    setCartItems((prev) => [...prev, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const parsePrice = (price: string | number) => {
    if (typeof price === "number") return price;
    if (!price) return 0;
    return parseFloat(String(price).replace(/[$.,\s]/g, "")) || 0;
  };

  const total = cartItems.reduce((acc, item) => {
    const precio = parsePrice(item.price);
    const qty = (item as any).quantity ?? 1;
    return acc + precio * qty;
  }, 0);

  return (
    <>
      {/* Icono del carrito fijo arriba a la derecha */}
      <div
        style={{
          position: "fixed",
          top: 24,
          right: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          zIndex: 3000,
        }}
      >
        <CartIcon
          cartCount={cartItems.length}
          onClick={() => navigate("/checkout")}
        />
      </div>

      <div className="app-container" style={{ paddingBottom: "80px" }}>
        <Headers cartCount={cartItems.length} addToCart={addToCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
          <Route path="/confirmacion" element={<ConfirmacionPedido cartItems={cartItems} />} />
          <Route path="/carpetas" element={<Carpetas addToCart={addToCart} />} />
          <Route path="/cuaderno" element={<Cuaderno addToCart={addToCart} />} />
          <Route path="/cartulina" element={<Cartulina addToCart={addToCart} />} />
          <Route path="/lapisespegamento" element={<Lapisespegamento addToCart={addToCart} />} />
          <Route path="*" element={<NotFound />} />
         <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;