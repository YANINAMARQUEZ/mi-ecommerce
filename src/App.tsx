import { Routes, Route, useNavigate } from "react-router-dom";
import Headers from "./componentes/Headers";
import Home from "./pages/Home";
import Checkout from "./componentes/Checkout";
import Footer from "./componentes/Footer";
import NotFound from "./componentes/NotFound";
import Men from "./pages/Men";
import Women from "./componentes/Women";
import Kids from "./pages/Kids";
import CartIcon from "./componentes/CartIcon";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ofertas from "./pages/Ofertas";
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

  const total = cartItems.reduce((acc, item) => {
    const precio = Number(
      String(item.price)
        .replace("$", "")
        .replace(",", ".")
        .replace(" ", "")
    );
    return acc + (isNaN(precio) ? 0 : precio);
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
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />
          <Route path="/women" element={<Women addToCart={addToCart} />} />
          <Route path="/men" element={<Men addToCart={addToCart} />} />
          <Route path="/ofertas" element={<Ofertas addToCart={addToCart} />} />
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
