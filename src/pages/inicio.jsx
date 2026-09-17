import React from 'react'
import './inicio.css'
const Inicio = () => {
    
    return (
        <div>
            <main>

                <section className="hero">
                    <div className="hero-content">
                        <h1>
                            SOLDADURA Y
                            <span> FABRICACIÓN METÁLICA</span>
                        </h1>
                        <p>
                            Soluciones profesionales en soldadura y estructuras metálicas
                            para todo tipo de proyectos.
                        </p>
                    </div>


                </section>

                <section className="servicios py-5" id="servicios">
                    <div className="container py-4">
                        <div className="titulo text-center">
                            <p>SERVICIOS</p>
                            <h2>
                                LO QUE <span>HACEMOS</span>
                            </h2>
                            <p>
                                Ofrecemos soluciones de fabricación y soldadura
                                adaptadas a diferentes necesidades.
                            </p>
                        </div>
                        <div className="row g-4 mt-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="servicio">
                                    <i className="bi bi-fire"></i>
                                    <h3>Soldadura</h3>
                                    <p>
                                        Trabajos de soldadura para estructuras y
                                        diferentes proyectos metálicos.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="servicio">
                                    <i className="bi bi-building"></i>
                                    <h3>Estructuras</h3>
                                    <p>
                                        Fabricación de estructuras metálicas
                                        resistentes y funcionales.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="servicio">
                                    <i className="bi bi-door-open"></i>
                                    <h3>Puertas</h3>
                                    <p>
                                        Fabricación de puertas y elementos
                                        metálicos personalizados.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="servicio">
                                    <i className="bi bi-tools"></i>
                                    <h3>Reparaciones</h3>
                                    <p>
                                        Reparación y mantenimiento de elementos
                                        y estructuras metálicas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="porque py-5">
                    <div className="container py-4">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p className="subtitulo">
                                    NUESTRA FORMA DE TRABAJAR
                                </p>
                                <h2>
                                    ¿POR QUÉ <span>ELEGIRNOS?</span>
                                </h2>
                                <p className="texto">
                                    Buscamos ofrecer trabajos que combinen
                                    resistencia, funcionalidad y buenos acabados,
                                    tomando en cuenta las necesidades de cada cliente.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="razones">
                                    <div className="razon">
                                        <i className="bi bi-shield-check"></i>
                                        <div>
                                            <h3>Calidad</h3>
                                            <p>
                                                Cuidamos cada detalle durante la elaboración
                                                de nuestros trabajos.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="razon">
                                        <i className="bi bi-person-check"></i>
                                        <div>
                                            <h3>Atención personalizada</h3>
                                            <p>
                                                Escuchamos las necesidades del cliente
                                                para buscar la mejor solución.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="razon">
                                        <i className="bi bi-hammer"></i>
                                        <div>
                                            <h3>Trabajo especializado</h3>
                                            <p>
                                                Realizamos diferentes tipos de trabajos
                                                relacionados con la fabricación metálica.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="otros-servicios py-5">
                    <div className="container py-4">
                        <div className="titulo text-center">
                            <p>SERVICIOS COMPLEMENTARIOS</p>
                            <h2>
                                TAMBIÉN REALIZAMOS <span>OTROS TRABAJOS</span>
                            </h2>
                            <p>
                                Contamos con diferentes servicios para ayudarte
                                en el mantenimiento y mejora de tu hogar o negocio.
                            </p>
                        </div>
                        <div className="row g-4 mt-4">

                            <div className="col-md-4">
                                <div className="otro-servicio">
                                    <i className="bi bi-droplet-fill"></i>
                                    <h3>Plomería</h3>
                                    <p>
                                        Realizamos trabajos de instalación, reparación
                                        y mantenimiento de sistemas de agua y tuberías.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="otro-servicio">
                                    <i className="bi bi-lightning-charge-fill"></i>
                                    <h3>Electricidad</h3>
                                    <p>
                                        Trabajos eléctricos, instalaciones, reparaciones
                                        y mantenimiento para hogares y negocios.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="otro-servicio">
                                    <i className="bi bi-bricks"></i>
                                    <h3>Albañilería</h3>
                                    <p>
                                        Realizamos trabajos de construcción, reparación
                                        y mantenimiento de diferentes espacios.
                                    </p>
                                </div>
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

export default Inicio
