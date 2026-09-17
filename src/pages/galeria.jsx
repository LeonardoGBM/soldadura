import React, { useState } from 'react'
import './galeria.css'
import electri from '../assets/electri.jpg'
import qs from '../assets/qs.jpg'
import sold from '../assets/sold.jpg'
import sold1 from '../assets/sold1.webp'
import sold2 from '../assets/sold2.jpg'
import soldadura1 from '../assets/soldadura1.webp'





const Galeria = () => {

    const [galeria, setGaleria] = useState([
        electri, qs, sold, sold1, sold2, soldadura1
    ])
    return (
        <div>
            <main>
                <section className='hero'>
                    <div className='container'>
                        <div className="row align-items-center g-5">
                            {galeria.map((data) => (
                                <div key={data.id} className="ajuste col-md-3">
                                    <img src={data} alt="" className='imagenes' />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Galeria
