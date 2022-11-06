import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
