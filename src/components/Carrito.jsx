import { useContext, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { AuthContext, useAuthContext } from "../contexts/AuthContext.jsx";
import CarritoCard from "./CarritoCard";
import Row from 'react-bootstrap/Row';
import { COLORS } from "../styles/colors";


const btnstyle = {
     background: COLORS.primary,
     color: COLORS.accent,
    border: `2px solid ${COLORS.primary}`,
    fontWeight: 'bold',
     borderRadius: '8px',
     boxShadow: `0 2px 8px ${COLORS.shadow}`,
    transition: 'background 0.2s, color 0.2s',                      
};

function Carrito() {
    const {user} = useContext(AuthContext);
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext);
    const [showModal, setShowModal] = useState(false);
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.precio * producto.cantidad,
        0
    );

    function funcionDisparadora(id) {
        borrarProductoCarrito(id);
    }

    function funcionDisparadora2() {
        vaciarCarrito();
    }

    function finalizarCompra() {
        vaciarCarrito();
        setShowModal(false);
        setCompraFinalizada(true);
        // El mensaje permanece hasta que el usuario navegue o realice otra acción
    }

    if (!user) {
        return (
            <Container className="my-4">
                <div className="alert alert-warning w-50 mx-auto text-center" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    Tenés que iniciar sesión para ver tu carrito de compras.
                </div>
            </Container>
        );
    }

    return (
        <Container className="my-4">
            <h2 className="mb-3">Carrito de compras</h2>
            {compraFinalizada && (
                <div className="alert alert-success w-50 mx-auto text-center" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    ¡Su compra ha finalizado con éxito!
                </div>
            )}
            {productosCarrito.length > 0 ? (
                <Button variant="warning" className="mb-4" onClick={funcionDisparadora2}>
                    Vaciar carrito
                </Button>
            ) : (
                <h6 className="mb-4 text-center" style={{ fontSize: '1rem', color: '#555' }}>Tu carrito está vacío</h6>
            )}
            <Row xs={1} md={1} lg={1} >
                {productosCarrito.length > 0 ? (
                    productosCarrito.map((producto) => (
                        <CarritoCard
                            key={producto.id}
                            producto={producto}
                            funcionDisparadora={funcionDisparadora}
                        />
                    ))
                ) : null}
            </Row>
            {total > 0 && (
                <>
                    <h5 className="mt-4 text-end">Total a pagar: $ {total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </h5>
                    <div className="d-flex justify-content-end mt-3">
                        <Button   style={btnstyle} variant="success" onClick={() => setShowModal(true)}>
                            Finalizar compra
                        </Button>
                    </div>
                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">Confirmar compra</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ textAlign: 'center' }}>
                            <p>¿Está seguro que desea finalizar la compra por un total de </p>
                            <p><strong>$ {total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>?</p>
                        </Modal.Body >
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Cancelar
                            </Button>
                            <Button style={btnstyle} variant="success" onClick={finalizarCompra}>
                                Confirmar compra
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </Container>
    );
}

export default Carrito;
