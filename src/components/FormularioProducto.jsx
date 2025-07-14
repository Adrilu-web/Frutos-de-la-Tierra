import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../contexts/ProductosContext';
import { COLORS } from "../styles/colors";
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

function FormularioProducto({}) {
  const {agregarProducto} = useProductosContext();
  const {admin} = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    precio: '',
    descripcion: '',
    imagen: ""
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.precio || producto.precio <= 0) {
      return("El precio debe ser mayor a 0.")
    }
 
    if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.imagen.trim()){
      return("La url de la imgaen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
      toast.success("Producto agregado correctamente!");
        setProducto({ name: '', precio: '', descripcion: '', imagen: ""});
      }).catch((error) => {
      toast.error("Hubo un problema al agregar el producto. " + error.message);
      })
    } else{
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }
  }

  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  // Estilo visual igual a los otros formularios
  const estiloForm = {
    maxWidth: '600px',
    width: '100%',
    background: COLORS.accent,
    borderColor: COLORS.primary,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
    margin: '2rem',
    height: 'auto',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  return ( 
    <div className='d-flex flex-column justify-content-center align-items-center min-vh-100' style={{ background: '#fff' }}>
      <form onSubmit={handleSubmit2} className="p-4 border rounded shadow w-100" style={estiloForm}>
        <h3 style={{ color: COLORS.primary, fontWeight: 'bold', textAlign: 'center' }}>Agregar Producto</h3>
        <div className="mb-3">
          <label className="form-label" style={{ color: COLORS.dark }}>Nombre:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={producto.name || ''}
            onChange={handleChange}
            required
            style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: COLORS.dark }}>Imagen URL:</label>
          <input
            type="text"
            className="form-control"
            name="imagen"
            value={producto.imagen}
            onChange={handleChange}
            required
            style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: COLORS.dark }}>Precio:</label>
          <input
            type="number"
            name="precio"
            value={producto.precio || ''}
            onChange={handleChange}
            required
            className="form-control"
            min="0"
            style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: COLORS.dark }}>Descripción:</label>
          <textarea
            name="descripcion"
            value={producto.descripcion || ''}
            onChange={handleChange}
            required
            className="form-control"
            rows={3}
            style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff', resize: 'vertical' }}
          />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn w-100" style={{ background: COLORS.primary, color: COLORS.accent, fontWeight: 'bold' }}>Agregar Producto</button>
          <Link to="/productos" className="btn w-100" style={{ background: COLORS.dark, color: COLORS.accent, fontWeight: 'bold' }}>Cancelar</Link>
        </div>
         <ToastContainer />
      </form>
    </div>
  );
}

export default FormularioProducto;
  