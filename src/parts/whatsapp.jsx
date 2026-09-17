import React from 'react'
import './whatsapp.css'
const Whatsapp = () => {
    return (
        <div>
            <a
                href="https://wa.me/593987175379?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización."
                target="_blank"
                rel="noreferrer"
                className="boton-cotizar"
            >
                <i className="bi bi-whatsapp"></i>
                <span>Solicitar cotización</span>
            </a>
        </div>
    )
}

export default Whatsapp
