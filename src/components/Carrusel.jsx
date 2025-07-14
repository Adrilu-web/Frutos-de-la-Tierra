import { useProductosContext } from "../contexts/ProductosContext";
import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { COLORS } from "../styles/colors";

function Carrusel() {
    const { productos, obtenerProductos } = useProductosContext();
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (productos.length === 0) {
            obtenerProductos().then(() => setCargando(false));
        } else {
            setCargando(false);
        }
    }, []);

    const primerosTres = productos.slice(0, 3);
 
    if (cargando) return <p>Cargando carrusel...</p>;
    if (primerosTres.length === 0) return <p>No hay productos para mostrar.</p>;

    return (
        <Container className="my-4 p-3 rounded" style={{ background: COLORS.accent, boxShadow: COLORS.primary }}>
            <style>{`
                .carousel-indicators [data-bs-target] {
                    background-color: ${COLORS.dark} !important;
                }
                .carousel-control-next-icon,
                .carousel-control-prev-icon {
                    filter: none !important;
                    background-image: none !important;
                    width: 2.5rem !important;
                    height: 2.5rem !important;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .carousel-control-next-icon::after,
                .carousel-control-prev-icon::after {
                    content: '';
                    display: block;
                    width: 2.2rem;
                    height: 2.2rem;
                    border: solid ${COLORS.dark};
                    border-width: 0 6px 6px 0;
                    padding: 4px;
                }
                .carousel-control-next-icon::after {
                    transform: rotate(-45deg);
                    margin-left: 8px;
                }
                .carousel-control-prev-icon::after {
                    transform: rotate(135deg);
                    margin-right: 8px;
                }
            `}</style>
            <Carousel>
                {primerosTres.map((producto) => (
                <Carousel.Item key={producto.id}>
                    <img
                    className="d-block w-100"
                    src={producto.imagen}
                    alt={producto.name}
                    style={{ height: "400px", objectFit: "cover", borderRadius: '12px', border: `4px solid ${COLORS.primary}`, boxShadow: `0 0 10px ${COLORS.dark}` }}
                    />
                    <Carousel.Caption style={{ background: 'rgba(255,242,135,0.85)', borderRadius: '10px', color: COLORS.dark, padding: '8px 12px', maxWidth: '60%', left: '20%', right: '20%' }}>
                    <h3 style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: '1.5rem', textShadow: `1px 1px 4px ${COLORS.accent}`, marginBottom: '6px' }}>{producto.name}</h3>
                    <p style={{ color: COLORS.dark, fontSize: '1.1rem', textShadow: `1px 1px 4px ${COLORS.accent}`, marginBottom: '2px' }}>{producto.descripcion}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Carrusel;
