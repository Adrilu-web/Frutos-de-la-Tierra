import { Card, Row, Col, Button } from "react-bootstrap";
import { COLORS } from "../styles/colors";

function CarritoCard({ producto, funcionDisparadora }) {
    function borrarDelCarrito() {
        funcionDisparadora(producto.id);
    }

    return (
        <Card className="mb-3" style={{ background: COLORS.accent, borderRadius: '12px', boxShadow: `0 2px 8px ${COLORS.shadow}` }}>
            <Card.Body>
                <Row className="align-items-center">
                    <Col md={3}>
                        <Card.Img
                            variant="top"
                            src={producto.imagen}
                            style={{ maxHeight: "100px", objectFit: "cover", width: "100%", borderRadius: '8px', border: `2px solid ${COLORS.primary}`, background: '#fff' }}
                        />
                    </Col>
                    <Col md={2}>
                        <Card.Title style={{ color: COLORS.primary, fontWeight: 'bold' }}>{producto.name}</Card.Title>
                        <Card.Text
                            style={{
                                color: COLORS.dark,
                                maxHeight: '60px',
                                overflowY: 'auto',
                                fontSize: '0.95rem',
                                background: 'rgba(255,255,255,0.7)',
                                padding: '4px 8px',
                                borderRadius: '6px',
                            }}
                        >
                            {producto.descripcion}
                        </Card.Text>
                    </Col>
                    <Col md={1}>
                        <span style={{ color: COLORS.dark }}>Cant: {producto.cantidad}</span>
                    </Col>
                    <Col md={2}>
                        <span style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                            Precio: $ {Number(producto.precio).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        
                        </span>
                    </Col>
                    <Col md={2}>
                        <span style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                            Subtotal: $ {(producto.cantidad * producto.precio).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </Col>
                    <Col md={2}>
                        <Button
                            style={{
                                background: COLORS.primary,
                                color: COLORS.accent,
                                border: `2px solid ${COLORS.primary}`,
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                boxShadow: `0 2px 8px ${COLORS.shadow}`,
                                transition: 'background 0.2s, color 0.2s',
                            }}
                            onClick={borrarDelCarrito}
                        >
                            X
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CarritoCard;
