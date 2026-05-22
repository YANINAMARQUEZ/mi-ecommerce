const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.4rem 1rem", // Menos padding vertical
      background: "#d3d3d3",
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      zIndex: 999,
      fontSize: "0.8rem", // Letra más pequeña
      boxSizing: "border-box",
    }}
  >
    <div style={{ textAlign: "left", flex: 1, minWidth: 0, overflow: "hidden" }}>
      <strong>Contacto:</strong>
      <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        cliente@email.com
      </div>
      <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        +34 123 456 789
      </div>
    </div>
    <div style={{ textAlign: "right", flex: 1, minWidth: 0, overflow: "hidden" }}>
      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        © 2025 Tu Tienda. Todos los derechos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;