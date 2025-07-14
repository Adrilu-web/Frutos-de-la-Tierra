import { COLORS } from "../styles/colors";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";


function FormularioContacto () {

    const ancho = 'auto';
    const alto = 'auto';
    const estiloForm = {
        width: ancho,
        minWidth: ancho,
        maxWidth: ancho,
        height: alto,
        background: COLORS.accent,
        borderColor: COLORS.primary,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };
    const estiloMapa = {
        width: ancho,
        minWidth: ancho,
        maxWidth: ancho,
        height: 250,
        borderRadius: '16px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        border: `2px solid ${COLORS.primary}`,
        margin: '2rem',
    };
    return(
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', width: '100%' }}>
            <form className="p-4 border rounded shadow" style={estiloForm}>
                <h3 className="mb-3" style={{ color: COLORS.primary, fontWeight: 'bold', textAlign: 'center' }}>Formulario de Contacto</h3>
             
               
               <div className="mb-3">
                   
                    <input type="text" className="form-control mb-3" 
                         placeholder="Nombre" 
                         required
                        style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff' }}
                     />
               </div>
               
               <div className="mb-3">
              
                    <textarea 
                        className="form-control mb-3" 
                        placeholder="Mensaje"
                        rows={3}     
                        required    
                        style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff', resize: 'vertical' }} 
                    />
                </div>
               
            
                <div className="mb-3">
                     <input 
                     type="email" 
                     className="form-control mb-3" 
                     placeholder="Correo Electrónico" 
                     required
                     style={{ border: `2px solid ${COLORS.primary}`, color: COLORS.dark, background: '#fff' }} />
                </div>
                <button className="btn w-100" style={{ background: COLORS.primary, color: COLORS.accent, fontWeight: 'bold' }} type="submit" >Enviar</button>
                
            </form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: alto }}>
                <iframe
                    title="Ubicación de la tienda"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6644264034085!2d-58.459272988804294!3d-34.56205095518599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3849d6dbb%3A0x34a17e7f13a06d16!2sAv.%20Cabildo%20%26%20Av.%20Juramento%2C%20C1428%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1730847633207!5m2!1ses!2sar" 
                    style={estiloMapa}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', marginTop: '20px', width: ancho }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                        <FaPhoneAlt style={{ color: COLORS.primary, fontSize: '1.5rem' }} />
                        <span style={{ color: COLORS.dark, fontSize: '1.0rem', fontWeight: 'bold' }}>Teléfono:</span>
                        <span style={{ color: COLORS.dark, fontSize: '1.0rem' }}>+54 11 1234-5678</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                        <FaWhatsapp style={{ color: COLORS.primary, fontSize: '1.5rem' }} />
                        <span style={{ color: COLORS.dark, fontSize: '1.0rem', fontWeight: 'bold' }}>WhatsApp:</span>
                        <a href="https://wa.me/541112345678" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.dark, fontSize: '1.1rem', textDecoration: 'none' }}>+54 11 1234-5678</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                        <FaMapMarkerAlt style={{ color: COLORS.primary, fontSize: '1.5rem' }} />
                        <span style={{ color: COLORS.dark, fontSize: '1.0rem', fontWeight: 'bold' }}>Dirección:</span>
                        <span style={{ color: COLORS.dark, fontSize: '1.0rem' }}>Av. Ejemplo 1234, CABA</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioContacto;