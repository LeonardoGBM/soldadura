import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './parts/navbar'
import Footer from './parts/footer'
import Inicio from './pages/inicio'
import Qsomos from './pages/qsomos'
import Galeria from './pages/galeria'
import { Form } from 'react-router-dom'
import Whatsapp from './parts/whatsapp';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/qsomos' element={<Qsomos/>} />
            <Route path='/galeria' element={<Galeria/>}/> 
            </Routes>
        </main>
        <Whatsapp/>
        <Footer />
      </BrowserRouter >


    </>
  )
}

export default App
