import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";
import { Button } from "react-bootstrap";
import { COLORS } from "../styles/colors";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProductoDetalleB({}) {

  const navegar = useNavigate();

  const {admin} = useAuthContext();
  const {agregarAlCarrito} = useContext(CarritoContext);
  const {productoEncontrado, obtenerProducto, eliminarProducto} = useProductosContext();

  const { id } = useParams();
  //const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id).then(() => {
      setCargando(false);
    }).catch((error) => {
      if(error == "Producto no encontrado"){
        setError("Producto no encontrado")
      }
      if(error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);


  function funcionCarrito() {
    if (cantidad < 1) return;

    agregarAlCarrito({ ...productoEncontrado, cantidad });
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
  }

  function dispararEliminar(){
    eliminarProducto(id).then(() => {
      navegar("/productos")
    }).catch((error) => {
      dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
    })
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <div className="detalle-container" style={{ background: COLORS.accent, borderRadius: '16px', boxShadow: COLORS.primary, padding: '24px', margin: '24px auto', maxWidth: '900px' }}>
      <Row xs={1} md={2} lg={2}>
        <Col>
          <img
            className="detalle-imagen"
            src={productoEncontrado.imagen}
            alt={productoEncontrado.name}
            style={{
              borderRadius: '12px',
              border: `4px solid ${COLORS.primary}`,
              boxShadow: `0 0 10px ${COLORS.dark}`,
              width: '100%',
              maxHeight: '340px',
              objectFit: 'cover',
              background: '#fff',
              aspectRatio: '1.2',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </Col>
        <Col>
          <div className="detalle-info" style={{ color: COLORS.dark }}>
            <h2 style={{ color: COLORS.primary, fontWeight: 'bold' }}>{productoEncontrado.name}</h2>
            <p>{productoEncontrado.descripcion}</p>
            <p style={{ fontWeight: 'bold', color: COLORS.primary }}>
              Precio: $ {Number(productoEncontrado.precio).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <button onClick={restarContador} style={{ background: COLORS.primary, color: COLORS.accent, border: 'none', borderRadius: '6px', width: '32px', height: '32px', fontWeight: 'bold' }}>-</button>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem', minWidth: '32px', textAlign: 'center' }}>{cantidad}</span>
                <button onClick={sumarContador} style={{ background: COLORS.primary, color: COLORS.accent, border: 'none', borderRadius: '6px', width: '32px', height: '32px', fontWeight: 'bold' }}>+</button>
              </div>
              {admin ? (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <Link to={"/admin/editarProducto/" + id}>
                    <Button style={{ background: COLORS.primary, color: COLORS.accent, border: 'none', fontWeight: 'bold' }}>Editar Producto</Button>
                  </Link>
                  <Button onClick={dispararEliminar} style={{ background: COLORS.primary, color: COLORS.accent, border: 'none', fontWeight: 'bold' }}>Eliminar Producto</Button>
                </div>
              ) : (
                <Button onClick={funcionCarrito} style={{ background: COLORS.primary, color: COLORS.accent, border: 'none', fontWeight: 'bold' }}>Agregar al carrito</Button>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductoDetalleB;
