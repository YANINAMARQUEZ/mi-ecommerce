const news = [
  {
    title: "¡🔥Nueva colección de verano!🔥",
    content: "Descubre los nuevos productos frescos para esta temporada.",
  },
  {
    title: "Descuento especial",
    content: "🔥Aprovecha un 20% de descuento en productos seleccionados.🔥",
  },
];

const NewsSection = () => (
  <>
    {/* Noticia destacada izquierda - mitad de la página */}
    <section
      style={{
        position: "fixed",
        top: "45vh", // Centrado verticalmente en la mitad inferior
        left: 24,
        zIndex: 3000,
        maxWidth: "180px",
        width: "70vw",
        boxShadow: "0 4px 16px rgba(25,118,210,0.15)",
        borderRadius: 12,
        animation: "pulseNews 1.2s infinite alternate",
        background: "#fff",
        padding: "8px 10px",
        transform: "translateY(-50%)",
      }}
    >
      <h2
        style={{
          fontSize: "0.85rem",
          marginBottom: 4,
          color: "#1976d2",
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        ✨ Noticias destacadas ✨
      </h2>
      <div
        className="alert alert-info py-1 px-1"
        role="alert"
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          marginBottom: "0.3rem",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(25,118,210,0.08)",
          animation: "bounceNews 1s infinite alternate",
        }}
      >
        <strong>{news[0].title}</strong>
        <br />
        {news[0].content}
      </div>
    </section>

    {/* Noticia destacada derecha - mitad de la página */}
    <section
      style={{
        position: "fixed",
        top: "45vh", // Centrado verticalmente en la mitad inferior
        right: 24,
        zIndex: 3000,
        maxWidth: "140px",
        width: "50vw",
        boxShadow: "0 4px 16px rgba(253,126,20,0.15)",
        borderRadius: 12,
        animation: "pulseNewsOrange 1.2s infinite alternate",
        background: "#fff",
        padding: "6px 8px",
        transform: "translateY(-50%)",
      }}
    >
      <h2
        style={{
          fontSize: "0.75rem",
          marginBottom: 3,
          color: "#fd7e14",
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        ✨ Oferta especial ✨
      </h2>
      <div
        className="alert alert-warning py-1 px-1"
        role="alert"
        style={{
          fontSize: "0.65rem",
          fontWeight: 500,
          marginBottom: "0.2rem",
          borderRadius: 7,
          boxShadow: "0 2px 8px rgba(253,126,20,0.08)",
          animation: "bounceNews 1s infinite alternate",
        }}
      >
        <strong>{news[1].title}</strong>
        <br />
        {news[1].content}
      </div>
    </section>
    <style>{`
      @keyframes pulseNews {
        0% { box-shadow: 0 4px 16px rgba(25,118,210,0.15); }
        100% { box-shadow: 0 8px 24px rgba(25,118,210,0.25); }
      }
      @keyframes pulseNewsOrange {
        0% { box-shadow: 0 4px 16px rgba(253,126,20,0.15); }
        100% { box-shadow: 0 8px 24px rgba(253,126,20,0.25); }
      }
      @keyframes bounceNews {
        0% { transform: scale(1);}
        100% { transform: scale(1.05);}
      }
    `}</style>
  </>
);

export default NewsSection;