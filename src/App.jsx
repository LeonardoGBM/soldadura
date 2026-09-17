import { useState } from 'react'
import './App.css'
import Navbar from './parts/navbar'
import Footer from './parts/footer'
import Inicio from './pages/inicio'
import Qsomos from './pages/qsomos'
function App() {

  return (
    <>
   <Navbar/>
    <main className="flex-grow-1">
        <Qsomos/>
    </main>
   <Footer/>
    </>
  )
}

export default App
