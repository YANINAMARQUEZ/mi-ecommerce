import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "/carrucel3.jpeg",
  "/carucel1.webp",
  "/carrusel2.webp",
  "/carrucel4.jpeg",
  "/carrucel5.jpeg",
];

const ImageCarousel = () => (
  <Carousel
    showThumbs={false}
    infiniteLoop
    useKeyboardArrows
    dynamicHeight={false}
    centerMode
    centerSlidePercentage={70}
    showStatus={false}
    autoPlay
  >
    {images.map((src, idx) => (
      <div key={idx} style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={src}
          alt={`slide-${idx}`}
          className="carousel-img-prof"
          style={{
            maxHeight: "280px",
            width: "100%",
            objectFit: "cover",
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(25,118,210,0.12)",
            border: "3px solid #fff",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        />
      </div>
    ))}
    <style>{`
      .carousel-img-prof:hover {
        transform: scale(1.03);
        box-shadow: 0 12px 40px rgba(25,118,210,0.18);
      }
    `}</style>
  </Carousel>
);

export default ImageCarousel;