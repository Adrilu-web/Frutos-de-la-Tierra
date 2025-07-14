import { useEffect, useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductosContainer from './components/ProductosContainer';
import About from './components/About';
import FormularioProducto from './components/FormularioProducto';
import FormularioEdicion from './components/FormularioEdicion';
import { useAuthContext } from './contexts/AuthContext';
import Carrito from './components/Carrito';
import Footer from './layouts/Footer';
import LoginB from './components/LoginB';
import NavBs from './components/NavBs';
import ProductoDetalleB from './components/ProductoDetalleB';
import FormularioContacto from './components/FormularioContacto';
// import Admin from './components/Admin';


function App() {
  const {verificacionLog} = useAuthContext();

  useEffect(() => {
    verificacionLog()
  }, [])
  
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBs/>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginB/>} />
            <Route path="/productos" element={<ProductosContainer/>}/>
            <Route path="/carrito" element={<Carrito/> }/>      
            <Route path="/nosotros" element={<About/>} />
            <Route path="/contacto" element={<FormularioContacto/>} />
            <Route path="/productos/:id" element={<ProductoDetalleB/>}/>
            {/* <Route path='/admin' element={<Admin/>}/> */}
            <Route path="/admin/agregarProductos" element={<FormularioProducto/>}/>
            <Route path="/admin/editarProducto/:id" element={<FormularioEdicion/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;