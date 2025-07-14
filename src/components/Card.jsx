import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { COLORS } from "../styles/colors";
import Card from 'react-bootstrap/Card';

function CardProducto({producto}){
 

    return(
        <Card>
            <Link to={"/productos/" + producto.id} style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" src={producto.imagen} style={{ maxHeight: "200px", objectFit: "cover", cursor: "pointer" }} />
            </Link>
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
                <Link to={"/productos/" + producto.id}>
                  <Button
                    className="btn btn-sm"
                    style={{
                      background: COLORS.primary,
                      color: COLORS.accent,
                      border: `2px solid ${COLORS.primary}`,
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      boxShadow: `0 2px 8px ${COLORS.shadow}`,
                      transition: 'background 0.2s, color 0.2s',
                      padding: '2px 8px',
                      fontSize: '0.85rem',
                    }}
                  >
                    Ver detalles
                  </Button>
                </Link>
            </Card.Body>
          </Card>
        
    )
}

export default CardProducto