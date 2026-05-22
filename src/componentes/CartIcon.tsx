import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CartIconProps {
  cartCount: number;
  onClick?: () => void;
}

const CartIcon = ({ cartCount, onClick }: CartIconProps) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        cursor: "pointer",
        zIndex: 1000,
        margin: "40px auto 0",
        display: "flex",
        alignItems: "center", // Alinea el número junto al carrito
        justifyContent: "center",
        position: "static"
      }}
      onClick={onClick ? onClick : () => navigate("/checkout")}
    >
      <FaShoppingCart size={28} />
      {cartCount > 0 && (
        <span
          style={{
            background: "red",
            color: "white",
            borderRadius: 12,
            padding: "2px 10px",
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 8, // Espacio entre el carrito y el número
            position: "static"
          }}
        >
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;