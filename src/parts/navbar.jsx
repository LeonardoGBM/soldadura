import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top">
        <a className="menu navbar-brand ms-5">Logo</a>
        <form className="form-inline">
          <a href="" className='menu text-decoration-none m-2'><i className="bi bi-house-fill"></i> Inicio</a>
          <a href="" className='menu text-decoration-none m-2'><i className="bi bi-people-fill"></i> ¿Quienes Somos?</a>
          <a href="" className='menu text-decoration-none ms-2 me-5'><i className="bi bi-images"></i> Galeria</a>
            <button className="btn btn-outline-success my-2 my-sm-0 me-5" type="submit"><i className="bi bi-whatsapp"></i> 0987175379</button>
        </form>
      </nav>
    </>
  )
}
 
export default Navbar
