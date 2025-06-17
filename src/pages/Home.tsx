import ImageCarousel from "../componentes/ImageCarousel";
import NewsSections from "../componentes/NewsSections";

const Home = () => (
  <div
    style={{
      background: "linear-gradient(120deg, #f8fafc 60%, #e3f2fd 100%)",
      minHeight: "100vh",
      paddingTop: 40,
      paddingBottom: 40,
    }}
  >
    {/* Carrusel de imágenes profesional */}
    <div
      className="container mb-5 py-4"
      style={{
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(25,118,210,0.08)",
        maxWidth: 900,
      }}
    >
      <ImageCarousel />
    </div>

    {/* Noticias y destacados */}
    <div
      className="container mb-5 py-4"
      style={{
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(25,118,210,0.08)",
        maxWidth: 500,
      }}
    >
      <NewsSections />
    </div>
  </div>
);

export default Home;