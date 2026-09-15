import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="container">

          <div className="row py-5">

            {/* Logo y descripción */}
            <div className="col-md-4 mb-4">
              <h3 className="footer-logo">Logo</h3>

              <p className="footer-text">
                Somos especialistas en soldadura y fabricación de
                estructuras metálicas, ofreciendo trabajos de calidad
                y soluciones personalizadas.
              </p>
            </div>


            {/* Navegación */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">Navegación</h5>

              <ul className="footer-links">
                <li>
                  <a href="#">
                    <i className="bi bi-house-fill"></i> Inicio
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="bi bi-people-fill"></i> ¿Quiénes Somos?
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="bi bi-tools"></i> Trabajos Realizados
                  </a>
                </li>
              </ul>
            </div>


            {/* Contacto */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">Contáctanos</h5>

              <p>
                <i className="bi bi-whatsapp"></i>
                <span> 0987175379</span>
              </p>

              <p>
                <i className="bi bi-geo-alt-fill"></i>
                <span> Quito, Ecuador</span>
              </p>

              <p>
                <i className="bi bi-envelope-fill"></i>
                <span> correo@empresa.com</span>
              </p>
            </div>

          </div>


          {/* Parte inferior */}
          <div className="footer-bottom">

            <p>
              © 2026 Logo. Todos los derechos reservados.
            </p>

            <div className="footer-social">

              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

            </div>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer
