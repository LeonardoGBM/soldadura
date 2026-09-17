import React from 'react'
import './qsomos.css'
import electri from '../assets/electri.jpg'
const Qsomos = () => {
    return (
        <div>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-md-4">
                                <img src={electri} alt="Trabajo de electricidad" className="img-fluid imagen-qsomos"
                                />
                            </div>
                            <div className="col-md-8 texto-qsomos">
                                <p className="subtitulo">CONÓCENOS</p>
                                <h1 className='titulo'>¿QUIÉNES SOMOS?</h1>
                                <p>
                                    Somos una empresa dedicada a la fabricación, reparación
                                    y mantenimiento de estructuras y elementos metálicos.
                                </p>
                                <p>
                                    Trabajamos en diferentes proyectos de soldadura y
                                    fabricación, buscando ofrecer soluciones prácticas y
                                    adaptadas a las necesidades de cada cliente.
                                </p>
                                <p>
                                    Además de nuestros servicios de soldadura, contamos con
                                    trabajos complementarios de plomería, electricidad y
                                    albañilería, permitiéndonos brindar diferentes soluciones
                                    para hogares, negocios y otros espacios.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <a
                    href="https://wa.me/593987175379?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización."
                    target="_blank"
                    rel="noreferrer"
                    className="boton-cotizar"
                >
                    <i className="bi bi-whatsapp"></i>
                    <span>Solicitar cotización</span>
                </a>
            </main>
        </div>
    )
}

export default Qsomos
