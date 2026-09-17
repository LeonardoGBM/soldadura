import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top">
        <a className="menu navbar-brand ms-5">Logo</a>
        <form className="form-inline">
          <Link to='/' className='menu text-decoration-none m-2'><i className="bi bi-house-fill"></i> Inicio</Link>
          <Link to='/qsomos' className='menu text-decoration-none m-2'><i className="bi bi-people-fill"></i> ¿Quienes Somos?</Link>
          <Link to='/galeria' className='menu text-decoration-none ms-2 me-5'><i className="bi bi-images"></i> Galeria</Link>
            <button className="btn btn-outline-success my-2 my-sm-0 me-5" type="submit"><i className="bi bi-telephone-fill"></i> 0987175379</button>
        </form>
      </nav>
    </>
  )
}
 
export default Navbar
