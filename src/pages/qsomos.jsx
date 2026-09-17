import React, { useState } from 'react'
import './qsomos.css'
import electri from '../assets/electri.jpg'
import qs from '../assets/qs.jpg'


const Qsomos = () => {

    const [trabajadores, setTrabajadores] = useState([
        {fotos:electri, name:'Leonardo'},
        {fotos:qs, name:'Jose'},

    ])
    const [names, setNames] = useState([
        'Jose', 'Leonardo'
    ])
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


                        <div className="row">
                            <h3 className='titulo text-center'>Grupo de Trabajo</h3>
                            {trabajadores.map((data) => (
                                <div key={data.id} className="grupo col-md-3 text-center">
                                    <img className='trabajador' src={data.fotos} alt="" />
                                    <h3 className='nombre'>{data.name}</h3>
                                </div>
                                )
                            )}
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Qsomos
