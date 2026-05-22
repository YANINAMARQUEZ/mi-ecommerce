import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h3>Panel de Administración</h3>
      <p>Acá podrás editar tus productos, precios e imágenes.</p>
      {/* Aquí iría tu lógica para cargar/editar productos */}
    </div>
  );
};

export default AdminPanel;
