import React from "react";

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
    {/* 🟦 Banner izquierdo */}
    <section className="news-banner news-left">
      <h2 className="news-title">✨ Noticias destacadas ✨</h2>
      <div className="alert alert-info news-alert">
        <strong>{news[0].title}</strong>
        <br />
        {news[0].content}
      </div>
    </section>

    {/* 🟧 Banner derecho */}
    <section className="news-banner news-right">
      <h2 className="news-title orange">✨ Oferta especial ✨</h2>
      <div className="alert alert-warning news-alert">
        <strong>{news[1].title}</strong>
        <br />
        {news[1].content}
      </div>
    </section>

    {/* 🎨 Estilos embebidos */}
    <style>{`
      .news-banner {
        position: fixed;
        top: 45vh;
        z-index: 3000;
        background: #fff;
        padding: 8px 10px;
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        animation: bounceNews 1s infinite alternate;
        transform: translateY(-50%);
        max-width: 180px;
        width: 70vw;
      }

      .news-left {
        left: 24px;
        animation: pulseNews 1.2s infinite alternate;
      }

      .news-right {
        right: 24px;
        max-width: 140px;
        width: 50vw;
        animation: pulseNewsOrange 1.2s infinite alternate;
      }

      .news-title {
        font-size: 0.85rem;
        margin-bottom: 4px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 1px;
        color: #1976d2;
      }

      .news-title.orange {
        color: #fd7e14;
        font-size: 0.75rem;
      }

      .news-alert {
        font-size: 0.75rem;
        font-weight: 500;
        margin-bottom: 0.3rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      }

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

      /* 📱 Ocultar en móviles */
      @media (max-width: 768px) {
        .news-banner {
          display: none;
        }
      }
    `}</style>
  </>
);

export default NewsSection;
