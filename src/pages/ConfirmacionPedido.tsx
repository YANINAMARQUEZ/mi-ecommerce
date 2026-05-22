import { useNavigate } from "react-router-dom";

interface CartItem {
  name: string;
  price: string | number;
  quantity?: number;
}

interface ConfirmacionPedidoProps {
  cartItems: CartItem[];
}

const ConfirmacionPedido: React.FC<ConfirmacionPedidoProps> = ({ cartItems }) => {
  const navigate = useNavigate();

  const parsePrice = (price: string | number) => {
    if (typeof price === "number") return price;
    if (!price) return 0;
    return parseFloat(String(price).replace(/[$.,\s]/g, "")) || 0;
  };

  const total = cartItems.reduce((acc, item) => {
    const priceNum = parsePrice(item.price);
    const qty = item.quantity ?? 1;
    return acc + priceNum * qty;
  }, 0);

  return (
    <div className="container mt-5" style={{ maxWidth: 700, paddingBottom: "80px" }}>
      <h2 className="text-center mb-4">Confirmación de Pedido</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item, index) => {
              const priceNum = parsePrice(item.price);
              const qty = item.quantity ?? 1;
              const subtotal = priceNum * qty;
              return (
                <li key={index} className="list-group-item d-flex justify-content-between">
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
          <hr />
          <p className="text-end fw-bold">Total: ${total.toLocaleString()}</p>
          <button 
            className="btn btn-primary w-100 mt-3" 
            onClick={() => navigate("/checkout")}
          >
            Proceder al Pago
          </button>
        </>
      )}
    </div>
  );
};

export default ConfirmacionPedido;
