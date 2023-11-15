import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Home } from './pages/home/Home'
import { EmpleadoDatos } from './pages/empleados/EmpleadoDatos'
import { RankingProd } from './pages/RankingProductos/RankingProd'
import  {Productos}  from './pages/Productos/Productos'
/* import Change_password from './pages/change_password/change_password'; */
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Rubros from './pages/rubros/Rubros'

function App() {
   return (
      <>
         {/* <Navbar /> */}
         <Router>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/rubros" element={<Rubros />} />
               <Route path="/empleados" element={<EmpleadoDatos />} />
               <Route path ="/rankingprod" element={<RankingProd />}/>
               <Route path ="/productos" element={<Productos/>}/>
              {/* <Route path='/change_password' element={<Change_password/>}/> */}
                <Route path="/" element={<Home />} /> 
            </Routes>
         </Router>
         <Footer/>
      </>
   )
}

export default App
