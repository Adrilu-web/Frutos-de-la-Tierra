import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { COLORS } from "../styles/colors";

function Footer() {  
    return (  
        <footer style={{ background: COLORS.primary, color: COLORS.accent, padding: '16px 24px', fontWeight: 'bold', letterSpacing: '1px', marginTop: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'left', fontSize: '1rem' }}>
                    <p style={{ margin: 0 }}>&copy; 2025 - ALM - Todos los derechos reservados.</p>
                    {/* <p style={{ margin: 0 }}>Todos los derechos reservados.</p> */}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '1rem', marginBottom: '2px', color: COLORS.accent }}>Seguinos en:</span>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, fontSize: '1.3rem' }} title="Instagram"><FaInstagram /></a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, fontSize: '1.3rem' }} title="Facebook"><FaFacebook /></a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, fontSize: '1.3rem' }} title="X"><FaXTwitter /></a>
                        
                    </div>
                </div>
            </div>
        </footer>  
    );  
}  

export default Footer;  