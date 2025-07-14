import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart, FaHome, FaBoxOpen, FaInfoCircle, FaEnvelope, FaPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { COLORS } from "../styles/colors";

function NavBs() {
  const { productosCarrito } = useContext(CarritoContext);
  const { admin, user, logout } = useAuthContext();

 return (
    <Navbar expand="lg" sticky="top" style={{ background: COLORS.primary, boxShadow: COLORS.shadow }}>
      <Container>

        <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/miLogo.png" alt="Frutos de la Tierra" style={{ height: '40px' }} />
          <span style={{ color: COLORS.accent, fontWeight: 'bold', fontSize: '1.3rem', letterSpacing: '1px' }}>
            Frutos de la Tierra
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-principal" style={{ background: COLORS.accent }} />
       
        <Navbar.Collapse id="nav-principal">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><FaHome style={{ color: COLORS.accent }} />Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><FaBoxOpen style={{ color: COLORS.accent }} />Productos</Nav.Link>
            <Nav.Link as={Link} to="/nosotros" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><FaInfoCircle style={{ color: COLORS.accent }} />Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><FaEnvelope style={{ color: COLORS.accent }} />Contacto</Nav.Link>
            {/* {admin && <Nav.Link as={Link} to="/admin" style={{ color: COLORS.accent, fontWeight: 'bold' }}>Admin</Nav.Link>} */}
            {admin && <Nav.Link as={Link} to="/admin/agregarProductos" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><FaPlus style={{ color: COLORS.accent }} />Agregar productos</Nav.Link>}
          </Nav>
         
          <Nav>
            <Nav.Link as={Link} to="/carrito" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><FaShoppingCart style={{ color: COLORS.accent }} />Carrito
              {productosCarrito.length > 0 && (
                // <Badge bg="warning" text="dark" style={{ position: 'absolute', top: '-8px', right: '-8px', fontSize: '0.8rem' }}>{productosCarrito.length}</Badge>
                <Badge bg="warning" text="dark">{productosCarrito.length}</Badge>
             )}
            </Nav.Link>
            {(user || admin)
              ? <Nav.Link onClick={logout} style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', minWidth: '140px' }}><FaSignOutAlt style={{ color: COLORS.accent }} />Salir</Nav.Link>
              : <Nav.Link as={Link} to="/login" style={{ color: COLORS.accent, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '140px' }}><FaSignInAlt style={{ color: COLORS.accent }} />Iniciar Sesión</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBs;
