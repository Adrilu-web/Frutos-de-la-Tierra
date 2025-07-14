import { COLORS } from "../styles/colors";
function About() {
  return (
    <section
      className="about-hero d-flex align-items-center justify-content-center w-100"
      style={{
        minHeight: '60vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom, rgba(255,242,135,0.7) 0%, rgba(200,63,18,0.25) 100%), url('/imagenes/frutos-secos.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        boxShadow: `0 0 20px ${COLORS.dark}`,
        paddingTop: '60px',
      }}
    >
      <style>{`
        @media (max-width: 600px) {
          .about-hero .about-fade {
            max-width: 95vw !important;
            padding: 1.2rem !important;
          }
          .about-hero h2 {
            font-size: 1.3rem !important;
          }
          .about-hero p {
            font-size: 0.95rem !important;
          }
        }
        .about-fade {
          opacity: 0;
          animation: fadeInAbout 1.2s ease-in-out 0.2s forwards;
        }
        @keyframes fadeInAbout {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div
        className="about-fade text-center p-4 rounded shadow"
        style={{
          background: 'rgba(255,242,135,0.85)',
          color: COLORS.dark,
          maxWidth: '700px',
          boxShadow: `0 0 20px ${COLORS.dark}`,
          zIndex: 2
        }}
      >
        <h2 className="mb-3" style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: '2.2rem', textShadow: `1px 1px 8px ${COLORS.accent}` }}>Sobre Nosotros</h2>
        <p style={{ color: COLORS.dark, fontSize: '1.15rem', marginBottom: '0.8rem', textShadow: `1px 1px 6px ${COLORS.accent}` }}>
          En <span style={{ color: COLORS.primary, fontWeight: 'bold' }}>Frutos de la Tierra</span> creemos que una alimentación saludable es la base para una vida plena. Nos especializamos en ofrecer productos naturales y nutritivos, cuidadosamente seleccionados para garantizar calidad y frescura. Desde nueces y almendras hasta aceite de coco y miel pura, cada artículo en nuestra tienda está pensado para aportar bienestar a tu día a día.
        </p>
        <p style={{ color: COLORS.dark, fontSize: '1.15rem', textShadow: `1px 1px 6px ${COLORS.accent}` }}>
          Nos apasiona promover un estilo de vida saludable y sostenible, brindando opciones deliciosas y beneficiosas para ti y tu familia. Descubre la variedad de productos naturales que tenemos para vos y sumate a la comunidad que elige cuidarse de manera consciente.
        </p>
      </div>
    </section>
  );
}
  
export default About;