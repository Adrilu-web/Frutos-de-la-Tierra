import React, { useState, useEffect } from 'react';
import { COLORS } from "../styles/colors";
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';


function LoginB() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logout, admin } = useAuthContext();




  function registrarUsuario (e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if(error.code == "auth/invalid-credential"){
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      }if(error.code == "auth/weak-password"){
        dispararSweetBasico("Contraseña debil", "Password should be at least 6 characters", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  const handleSubmit2 = (e) => {
    logout()
  }



  function iniciarSesionEmailPass (e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if(error.code == "auth/invalid-credential"){
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  function handleShow (e) {
    e.preventDefault();
    setShow(!show)
  }

// Resetear los campos de usuario y contraseña si no hay usuario autenticado

  useEffect(() => {
  if (!user && !admin) {
    setUsuario('');
    setPassword('');
  }
}, [user, admin]);
  


  if(!user && show){
    return(
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100 ' style={{ background: '#fff'}}>
        <form onSubmit={iniciarSesionEmailPass} className="p-4 border rounded shadow w-100" style={{ maxWidth: '400px', background: COLORS.accent, borderColor: COLORS.primary }}>
          <h3 style={{ color: COLORS.primary, fontWeight: 'bold', textAlign: 'center' }}>Iniciar sesión</h3>
          <div className="mb-3">
            <label className="form-label" style={{ color: COLORS.dark }}>Email</label>
            <input value={usuario}
              onChange={(e) => setUsuario(e.target.value)} type="email" className="form-control" required style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark }} />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: COLORS.dark }}>Contraseña</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" className="form-control" required style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark }} />
          </div>
          <button type="submit" className="btn w-100" style={{ background: COLORS.primary, color: COLORS.accent, fontWeight: 'bold', marginBottom: '8px' }}>Ingresar</button>
          <a href="#" onClick={handleShow} style={{ display: 'block', marginTop: '8px', color: COLORS.primary, fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }}>
            ¿No tenés cuenta? Registrate
          </a>
        </form>
      </div>
    )
  }if(!user && !show){
    return(
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100' style={{ background: '#fff'}}>
        <form onSubmit={registrarUsuario} className="p-4 border rounded shadow w-100" style={{ maxWidth: '400px', background: COLORS.accent , borderColor: COLORS.primary }}>
          <h3 style={{ color: COLORS.primary, fontWeight: 'bold', textAlign: 'center' }}>Registrarse</h3>
          <div className="mb-3">
            <label className="form-label" style={{ color: COLORS.dark }}>Email</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="form-control"
              required
              style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: COLORS.dark }}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
              style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark }}
            />
          </div>
          <button type="submit" className="btn w-100" style={{ background: COLORS.primary, color: COLORS.accent, fontWeight: 'bold', marginBottom: '8px' }}>Registrarse</button>
          <a href="#" onClick={handleShow} style={{ display: 'block', marginTop: '8px', color: COLORS.primary, fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }}>
            ¿Ya tenés cuenta? Iniciá sesión
          </a>
        </form>
      </div>
    )
  }
}
export default LoginB;
