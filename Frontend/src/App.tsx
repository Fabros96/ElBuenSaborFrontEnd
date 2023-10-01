import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/home/Home'
import EmpleadoDatos from './pages/EmpleadoDatos'
import Rubros from './pages/rubros/Rubros'

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/rubros" element={<Rubros />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </Router>
   )
}

export default App
