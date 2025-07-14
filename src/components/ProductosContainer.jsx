import { useEffect, useState } from "react"
import { useProductosContext } from "../contexts/ProductosContext"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardProducto from "./Card"
import { FaSearch } from "react-icons/fa";
import { COLORS } from "../styles/colors";


function ProductosContainer({}){
    const {productos, obtenerProductos, filtrarProductos} = useProductosContext();

    const productosPorPagina = 8;
    const [paginaActual, setPaginaActual] = useState(1);
    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

    // Estados para manejar la carga y errores

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("")

    {useEffect(() => {
        obtenerProductos().then((productos) => {
            setCargando(false);
        }).catch((error) => {
            setError('Hubo un problema al cargar los productos.');
            setCargando(false);
        })
    }, []);}

    useEffect(() => {
        filtrarProductos(filtro)
    },[filtro])//filtro

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    // Cambiar la página actual al hacer clic en un botón de paginación
    // const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);
    const cambiarPagina = (numeroPagina) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setPaginaActual(numeroPagina);
        };


    if (cargando) {
        return <p>Cargando productos...</p>;
    }else if (error){
        return <p>{error}</p>;
    }else{
        return(
            <div style={{ minHeight: 'calc(100vh - 100px)' }}>
                
                {/* <Helmet>  --->SACO Y DESINSTALO HELMET PORQUE ME GENERA PROBLEMAS CON LA VERSION DE REACT
                    <title>Productos | Tienda Natural</title>
                    <meta name="description" content="Explora nuestra variedad de productos." />
                </Helmet> */}

                <div className="input-group mb-3 mt-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <span className="input-group-text" style={{ background: COLORS.primary, color: COLORS.accent }}>
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar productos..."
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                        style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark }}
                    />
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">{/*Grid nde boostrap*/ }
                    {productosActuales.length > 0 ? productosActuales.map((producto) => (
                        <Col key={producto.id}>
                        
                            <CardProducto
                                producto={producto}
                            />
                        </Col>
                    )): <></>}
                </Row>
                <div className="d-flex justify-content-center my-4"> {/*Componente de paginacion*/ }
                    {Array.from({ length: totalPaginas }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`btn mx-1`}
                        style={{
                            background: paginaActual === index + 1 ? COLORS.primary : COLORS.accent,
                            color: paginaActual === index + 1 ? COLORS.accent : COLORS.primary,
                            border: `2px solid ${COLORS.primary}`,
                            fontWeight: 'bold',
                            minWidth: '36px'
                        }}
                        onClick={() => cambiarPagina(index + 1)}
                    >
                        {index + 1}
                    </button>
                    ))}
                </div>
            </div>
        )
    }

    
}

export default ProductosContainer

