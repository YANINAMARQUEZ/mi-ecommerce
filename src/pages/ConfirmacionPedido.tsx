import { useNavigate } from "react-router-dom";

interface CartItem {
  name: string;
  price: string;
}

interface ConfirmacionPedidoProps {
  cartItems: CartItem[];
}

const ConfirmacionPedido: React.FC<ConfirmacionPedidoProps> = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5" style={{ maxWidth: 700, paddingBottom: "80px" }}>
      <h2 className="text-center mb-4">Confirmación de Pedido</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                {item.name} <span className="fw-bold">{item.price}</span>
              </li>
            ))}
          </ul>
          <hr />
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
