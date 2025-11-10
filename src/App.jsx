import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Alianza Emprende" className="nav-logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#proposito">Propósito</a></li>
          <li><a href="#que-es">Qué es</a></li>
          <li><a href="#pilares">Cómo</a></li>
          <li><a href="#principios">Principios</a></li>
          <li><a href="#contacto" className="nav-cta">Contacto</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="hero">
        <h1 className="hero-title">Potenciamos el emprendimiento juvenil en Chile</h1>
        <p className="hero-subtitle">
          Una plataforma interuniversitaria que conecta talento, innovación y oportunidades 
          para impulsar el emprendimiento juvenil.
        </p>
      </header>

      {/* Propósito */}
      <section className="section block-light" id="proposito">
        <div className="section-content">
          <h2 className="section-title">Por qué existimos</h2>
          <p className="section-text">
            Porque creemos que los jóvenes pueden transformar el país si se les da el espacio, la red y el empuje correcto.
          </p>
          <p className="section-text">
            Queremos que más estudiantes emprendan, colaboren y creen proyectos con impacto real.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="section" id="que-es">
        <div className="section-content">
          <h2 className="section-title">Qué</h2>
          <p className="section-text">
            Buscamos unir a los clubes universitarios y generar un ecosistema donde los proyectos 
            no solo nazcan, sino que <span className="highlight">crezcan y se vuelvan sostenibles</span>.
          </p>
        </div>
      </section>

      {/* Cómo - Pilares */}
      <section className="section block-colored" id="pilares">
        <div className="section-content">
          <h2 className="section-title">Cómo</h2>
          <ul className="list">
            <li className="list-item">
              <div className="list-item-title">Eventos</div>
              <div className="list-item-text">
                Experiencias que visibilizan el emprendimiento juvenil y reúnen al ecosistema.
              </div>
            </li>
            <li className="list-item">
              <div className="list-item-title">Apoyo a clubes</div>
              <div className="list-item-text">
                Acompañamiento, gestión y fortalecimiento de clubes universitarios.
              </div>
            </li>
            <li className="list-item">
              <div className="list-item-title">Vinculación con empresas</div>
              <div className="list-item-text">
                Conexión con retos, programas y oportunidades reales.
              </div>
            </li>
            <li className="list-item">
              <div className="list-item-title">Comunidad</div>
              <div className="list-item-text">
                Creación de una red activa de jóvenes que emprenden, aprenden y colaboran.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Principios */}
      <section className="section principles" id="principios">
        <div className="section-content">
          <h2 className="section-title">Nuestros principios</h2>
          <ul className="list">
            <li className="list-item">
              <div className="list-item-title">Honestidad brutal</div>
              <div className="list-item-text">
                Decimos las cosas como son, aunque duelan. La verdad construye más que el halago.
              </div>
            </li>
            <li className="list-item">
              <div className="list-item-title">Profit first</div>
              <div className="list-item-text">
                No seguimos ciegamente el modelo VC. Creemos en startups rentables desde el día uno.
              </div>
            </li>
            <li className="list-item">
              <div className="list-item-title">Resultados reales</div>
              <div className="list-item-text">
                No somos sindicalistas. No hacemos cosas por cumplir, sino para generar impacto y mover proyectos de verdad.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer className="footer" id="contacto">
        <p className="footer-email">
          <a href="mailto:contacto@alianzaemprende.cl">contacto@alianzaemprende.cl</a>
        </p>
        <p className="footer-text">Alianza Emprende © 2025</p>
      </footer>
    </div>
  )
}

export default App
