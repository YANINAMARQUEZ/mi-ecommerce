import React, { useState } from "react";
import { Link } from "react-router-dom";

const LapisespegamentoProducts = [
  { id: 1, name: "Plasticola Tintoretto - Chica", price: "$600", img: "/TINTORETOCHICA.jpeg", brand: "plasticola" },
  { id: 2, name: "Plasticola Tintoretto - Mediana", price: "$1.000", img: "/tintoretomediane.jpeg", brand: "plasticola" },
  { id: 3, name: "Tintoretto - Grande", price: "$1.200", img: "/tintoretogrande.jpeg", brand: "plasticola" },

  { id: 10, name: "Voligoma (pequeña)", price: "$No disponible", img: "/voligomaroja.jpeg", brand: "voligoma" },
  { id: 11, name: "Voligoma (grande)", price: "$No disponible", img: "/voligoma.jpeg", brand: "voligoma" },

  { id: 20, name: "Plasticola de Color", price: "$1.000", img: "/plasticolacolor.jpeg", brand: "plasticola" },
  { id: 21, name: "Pegamento Universal", price: "$3.700", img: "/pegamento.jpeg", brand: "pegamento" },

  { id: 30, name: "Virome Bik", price: "$1.200", img: "/bic.jpeg", brand: "pegamento" },
  { id: 31, name: "Virome Faber", price: "$900", img: "/faber.jpeg", brand: "pegamento" },

  
  { id: 41, name: "Tijera Escolar", price: "$1,000", img: "/tijera.jpeg", brand: "tijera" },

  { id: 50, name: "Colores x24", price: "$4.000", img: "/colores24.jpeg", brand: "colores" },
  { id: 51, name: "Colores x12", price: "$2.200", img: "/colores12.jpeg", brand: "colores" },

  // nuevos productos solicitados anteriormente
  { id: 60, name: "Regla en forma de animal", price: "$4.500", img: "/animal.jpeg", brand: "reglas" },
  { id: 61, name: "Pinceles Arte (set)", price: "$10.000", img: "/arte.jpeg", brand: "pinceles" },
  { id: 62, name: "Sticker Chancho/Tortuga", price: "$1.500", img: "/anotador2.jpeg", brand: "stickers" },
  { id: 63, name: "Sticker sinta", price: "$1.500", img: "/anotador1.jpeg", brand: "stickers" },
  { id: 66, name: "reglaslargas", price: "$1.500", img: "/largas.jpeg", brand: "pegamento" },
  { id: 67, name: "reglaschicas", price: "$700", img: "/chicas.jpeg", brand: "plasticina" },
  { id: 68, name: "Set de regla", price: "$5.500", img: "/set.jpeg", brand: "caligrafia" },
  { id: 69, name: "semisirculo", price: "$800", img: "/cm.jpeg", brand: "papel" },
  { id: 70, name: "brillantinagrande", price: "$500", img: "/bri.jpeg", brand: "cartulina" },
  { id: 71, name: "MOCHILA NEGRA/AZUL", price: "$25.000", img: "/set_acuarelas.jpeg", brand: "mochila" },
  { id: 72, name: "Marcadores Aromatizados", price: "$2.500", img: "/aromatico.jpeg", brand: "marcadores" },
  { id: 73, name: "Goma de borrar (1)", price: "$400", img: "/go.jpeg", brand: "gomas" },
  { id: 74, name: "Sacapuntas Doble", price: "$1.200", img: "/2.jpeg", brand: "sacapuntas" },
  { id: 75, name: "Regla 30cm", price: "$1000", img: "/larga.jpeg", brand: "reglas" },
  { id: 76, name: "Compás Escolar", price: "$900", img: "/compas.jpeg", brand: "compases" },

  { id: 77, name: "SET LAPIZ PASTEL", price: "$4.500", img: "/transportador.jpeg", brand: "transportadores" },

  { id: 78, name: "Escuadra 45°/90°", price: "$1.200", img: "/esc.jpeg", brand: "escuadras" },
  { id: 79, name: "MOCHILA CREMITA", price: "$26.000", img: "/cartabon.jpeg", brand: "cartabones" },
  { id: 80, name: "MOCHILA AZUL Y GRIS", price: "$27.000", img: "/pinceles_detalle.jpeg", brand: "pinceles" },
  { id: 81, name: "CARTUCHERA 2 PISOS UNICORNIO", price: "$15.000", img: "/acuarelas_pastilla.jpeg", brand: "cartuchera" },
  { id: 82, name: "CARTUCHERA 1 PISO POATROL", price: "$9.600", img: "/marcadores_pizarra.jpeg", brand: "cartuchera" },
  { id: 83, name: "CARTUCHERA AZUL OLAMI", price: "$18.000", img: "/borrador_pizarra.jpeg", brand: "cartuchera" },
  { id: 84, name: "Set de Geometría", price: "$5.000", img: "/set_geometria.jpeg", brand: "reglageometria" },
  { id: 85, name: "CARTUCHERA BARATITA", price: "$3.600", img: "/papel_fotografico.jpeg", brand: "cartuchera" },
  { id: 86, name: "MOCHILA pepa ", price: "$10.000", img: "/cartulina_adhesiva.jpeg", brand: "mochila" },
  { id: 87, name: "Set de Sticker", price: "$1.200", img: "/set_stickers.jpeg", brand: "stickers" },
  { id: 88, name: "MOCHILA DE AUTO GRANDE VARON", price: "$27.000", img: "/papel_lija.jpeg", brand: "mochila" },
  { id: 89, name: "MOCHILA CHENSON ROSASA", price: "$15.000", img: "/cinta_adhesiva.jpeg", brand: "mochila" },
  { id: 90, name: "MOCHILA PONI", price: "$12.000", img: "/cinta_masking_tape.jpeg", brand: "mochila" },
  { id: 91, name: "Papel Crepé ", price: "$1.000", img: "/papel_crepe.jpeg", brand: "crepe" },
  { id: 92, name: "PALITOS PARA MAQUETAR", price: "$1.200", img: "/foam_adhesivo.jpeg", brand: "anillo" },
  { id: 93, name: "COLORES FABER GRANDE", price: "$8.300", img: "/set_plantillas.jpeg", brand: "colores" },
  { id: 94, name: "COLORES FABER CHICO", price: "$3.600", img: "/papel_charol.jpeg", brand: "colores" },
  { id: 95, name: "COLORES FIBRAX6 BARATOS", price: "$500", img: "/cinta_doble_cara.jpeg", brand: "fibra" },{ id: 96, name: "Pegamento para Madera", price: "$2.200", img: "/pegamento_madera.jpeg", brand: "pegamento" },
  
 { id: 93, name: "fibras por 10 marquer", price: "2.000", img: "/set_plantillas.jpeg", brand: "colores" },
  { id: 94, name: "microfibras por 10 ", price: "$5.800", img: "/papel_charol.jpeg", brand: "colores" },
  { id: 95, name: "virome con brillos", price: "$5000", img: "/cinta_doble_cara.jpeg", brand: "fibra" },{ id: 96, name: "Pegamento para Madera", price: "$2.200", img: "/pegamento_madera.jpeg", brand: "pegamento" },
  
  
  // productos adicionales
  
  { id: 101, name: "lapiznegro ", price: "$900", img: "/cartulina_metalizada.jpeg", brand: "lapiz" },
  { id: 102, name: " tisa", price: "$", img: "/set_brochas.jpeg", brand: "brochas" },
  { id: 103, name: "abrochadora", price: "$10.000", img: "/papel_seda.jpeg", brand: "abrochadora" },
  { id: 104, name: "estikergrande ", price: "$1.200", img: "/cinta_decorativa.jpeg", brand: "stiker" },
  { id: 105, name: "estiker chico", price: "$700", img: "/pegamento_ceramica.jpeg", brand: "siker" },
  { id: 106, name: "sobregrande", price: "$400", img: "/pasta_modelar.jpeg", brand: "sobre" },
  { id: 107, name: "Sobrechico", price: "$200", img: "/set_lijas.jpeg", brand: "sobre" },
  { id: 108, name: "sobre carta ", price: "$400", img: "/cinta_pintar.jpeg", brand: "sobre" },
  { id: 109, name: "Papel Carbono ", price: "$1.000", img: "/papel_carbono.jpeg", brand: "papel" },
  { id: 110, name: "trincheta", price: "$600", img: "/set_calcos.jpeg", brand: "trincheta" },
  { id: 111, name: "abrochadora", price: "$4.500", img: "/pasta_papel_mache.jpeg", brand: "abrochadora" },
  { id: 112, name: "pincelunidad", price: "$600", img: "/cinta_antideslizante.jpeg", brand: "pincel" },
  { id: 113, name: "Pinturatela", price: "$2.500", img: "/pegamento_tela.jpeg", brand: "pinturatela" },
  { id: 114, name: "tisas unidad", price: "$200", img: "/set_pinceles.jpeg", brand: "tiza" },
  { id: 115, name: "cajadetiza", price: "$3.300", img: "/papel_lija_waterproof.jpeg", brand: "tiza" },
  { id: 116, name: "ceritax12chica", price: "$1.500", img: "/cinta_aislamiento.jpeg", brand: "cerita" },
  { id: 117, name: "seritagrandeJUMBO", price: "$4.000", img: "/pegamento_plastico.jpeg", brand: "cerita" },
  { id: 118, name: "Maicrofibra negro", price: "$1,000", img: "/mascarilla_pintura.jpeg", brand: "ceritas" },
  { id: 119, name: "remarcador labubu", price: "$agotado", img: "/guantes_nitrilo.jpeg", brand: "microfibra" },
  { id: 120, name: "microfibrax6", price: "$6.000", img: "/delantal_pintura.jpeg", brand: "microfibra" },
  { id: 121, name: "viromebrillo c/u", price: "$500", img: "/set_moldes_resina.jpeg", brand: "virome" },
  { id: 122, name: "reglacuadradaflex", price: "$3.500", img: "/papel_origami.jpeg", brand: "regla" },
  { id: 123, name:"trincheta", price: "$600", img: "/set_sellos_caucho.jpeg", brand: "sellos" },
  { id: 124, name: "broche grande", price: "$2.500", img: "/tinta_sellos.jpeg", brand: "tintas " },
  { id: 125, name: "brochechico", price: "$800", img: "/papel_metalizado_regalo.jpeg", brand: "papel" },

   
  { id: 123, name:"anillo grande", price: "$800", img: "/set_sellos_caucho.jpeg", brand: "sellos" },
  { id: 124, name: "pincel -6-4", price: "$600", img: "/tinta_sellos.jpeg", brand: "tintas " },
  { id: 125, name: "pincel numero 12-14-18-16", price: "$800", img: "/papel_metalizado_regalo.jpeg", brand: "papel" },

   
   
   
   
   

  { id: 126, name: "compas", price: "$800", img: "/cinta_embalar.jpeg", brand: "cinta" },
  { id: 127, name: "silicona grande", price: "$900", img: "/pegamento_goma_eva.jpeg", brand: "pegamento" },
  { id: 128, name: "Silicona en barra chica", price: "$400", img: "/set_brochas_detalle.jpeg", brand: "brochas" },
  { id: 129, name: "plasticolamaxunchica", price: "$400", img: "/papel_arroz_decoupage.jpeg", brand: "papel" },
  { id: 130, name: "plasticolamediana", price: "$1.000", img: "/set_plantillas_scrapbook.jpeg", brand: "plantillas" },
  { id: 131, name: "plasticolagrande", price: "$1.800", img: "/cinta_washi.jpeg", brand: "cinta" },
  { id: 132, name: "sintapapel grande", price: "$1.800", img: "/pegamento_scrapbook.jpeg", brand: "pegamento" },
  { id: 133, name: "sintapapel chica", price: "$1.500", img: "/resina_epoxico_especial.jpeg", brand: "resina" },
  { id: 134, name: "pasasinta", price: "$.1000", img: "/masilla_modelar.jpeg", brand: "masilla" },
  { id: 135, name: "palitogrochet", price: "$1.200", img: "/cera_manualidades.jpeg", brand: "cera" },
  { id: 137, name: "fibron", price: "$800", img: "/cinta_carrocero.jpeg", brand: "cinta" },
  { id: 138, name: "", price: "$2.200", img: "/pegamento_carton.jpeg", brand: "pegamento" },
  { id: 139, name: "tabla periodica", price: "$1,000", img: "/pegamento_carton.jpeg", brand: "pegamento" },
  ];
  
       
const ofertaDestacada = {
    id: 99,
    name: "¡Oferta !carpetas ",
    price: "$10.00",
    description: "¡Aprovecha nuestra oferta especial en carpetas! Calidad y estilo a un precio increíble.",
};



const getUniqueBrands = (products) => [
    ...new Set(products.map((p) => p.brand)),
];

const Lapisespegamento = ({ addToCart }) => {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");

    const brands = getUniqueBrands(LapisespegamentoProducts);

    const filteredProducts = LapisespegamentoProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (brand === "" || product.brand === brand)
    );

    return (
        <div className="container my-5">
         

            {/* Buscador y filtro por marca */}
            <div className="row mb-4">
                <div className="col-md-6 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-6 mb-2">
                    <select
                        className="form-select"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="">Todas las marcas</option>
                        {brands.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Oferta destacada con video (más pequeña) */}
            <div className="row justify-content-center mb-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div
                        className="card border-0 shadow oferta-card-hover"
                        style={{
                            background: "linear-gradient(90deg, #fffbe7 60%, #ffe3ec 100%)",
                            borderRadius: 14,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            padding: 8,
                            minHeight: 100,
                            maxWidth: 340,
                            margin: "0 auto"
                        }}
                    >
                        <div style={{ flex: 1, minWidth: 60 }}>
                            <video
                                src={ofertaDestacada.video}
                                controls
                                autoPlay
                                muted
                                style={{
                                    width: "100%",
                                    maxWidth: 70,
                                    borderRadius: 8,
                                    boxShadow: "0 2px 8px rgba(253,126,20,0.10)",
                                    border: "2px solid #fd7e14",
                                    background: "#000",
                                }}
                            />
                        </div>
                        <div style={{ flex: 2 }}>
                            <h6 style={{ color: "#fd7e14", fontWeight: 700, marginBottom: 4, fontSize: "0.95rem" }}>
                                ⭐ {ofertaDestacada.name}
                            </h6>
                            <p style={{ fontWeight: 500, color: "#d63384", fontSize: "0.85rem", marginBottom: 2 }}>
                                {ofertaDestacada.description}
                            </p>
                            <p style={{ fontWeight: 700, color: "#fd7e14", fontSize: "1rem", marginBottom: 6 }}>
                                {ofertaDestacada.price}
                            </p>
                            <button
                                onClick={() => addToCart(ofertaDestacada)}
                                className="btn btn-warning btn-sm"
                                style={{
                                    borderRadius: 12,
                                    fontWeight: 600,
                                    color: "#fff",
                                    background: "linear-gradient(90deg, #fd7e14 0%, #d63384 100%)",
                                    border: "none",
                                    boxShadow: "0 1px 4px rgba(253,126,20,0.10)",
                                    fontSize: "0.85rem",
                                    padding: "4px 10px"
                                }}
                            >
                                <i className="bi bi-cart-plus"></i> Comprar Oferta
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos */}
            <h2 className="text-center text-primary mb-4" style={{ fontWeight: 700, letterSpacing: 1 }}>cuadernos</h2>
            <div className="row g-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm product-card-hover">
                            <img src={product.img} alt={product.name} className="card-img-top" style={{
                                height: 200, objectFit: "cover", borderRadius: "12px 12px 0 0"
                            }} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title mb-2" style={{ fontWeight: 600 }}>{product.name}</h5>
                                <span className="badge bg-secondary mb-2">{product.brand}</span>
                                <p className="card-text mb-3" style={{ color: "#d63384", fontWeight: 700, fontSize: "1.1rem" }}>{product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-success btn-lg mt-auto"
                                    style={{
                                        borderRadius: 20,
                                        fontWeight: 600,
                                        background: "linear-gradient(90deg, #fd7e14 0%, #d63384 100%)",
                                        border: "none"
                                    }}
                                >
                                    <i className="bi bi-cart-plus"></i> Añadir al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Estilos personalizados */}
            <style>{`
                .oferta-card-hover:hover, .product-card-hover:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 8px 32px rgba(214,51,132,0.12);
                    transition: all 0.2s;
                }
            `}</style>
        </div>
    );
};

export default Lapisespegamento;