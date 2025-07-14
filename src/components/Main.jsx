import { Container, Row, Col, Image } from "react-bootstrap";
import { COLORS } from "../styles/colors";

function Main() {
  return (
    <Container className="my-4 p-4 rounded" style={{ background: COLORS.accent, boxShadow: COLORS.primary }}>
      <Row className="align-items-center justify-content-center">
        <Col xs={12}>
          <h2 style={{ color: COLORS.dark, fontWeight: 'bold', textAlign: 'center', marginBottom: '0', fontSize: '1.5rem' }}>
            En Frutos de la Tierra, creemos que la salud comienza con una buena alimentación.
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
