import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import Homepage from './pages/Homepage.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <div className='w-full px-40 mt-16'>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
