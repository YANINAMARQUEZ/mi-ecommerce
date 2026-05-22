import "../styles/ImageSlider.css";

const ImageSlider = () => {
    return (
        <div id="imagesSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/2.jpeg" className="d-block w-100" alt="Imagen 1" />
                </div>
                <div className="carousel-item">
                    <img src="/1.jpeg" className="d-block w-100" alt="Imagen 2" />
                </div>
                <div className="carousel-item">
                    <img src="/3.jpeg" className="d-block w-100" alt="Imagen 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#imagesSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#imagesSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};

export default ImageSlider;