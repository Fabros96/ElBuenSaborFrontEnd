import React from 'react'
import './Navbar.css'
import logo_sintexto from '../images/Logo-sintexto.svg';
import { Divide as MenuHmb } from 'hamburger-react'

function Navbar() {
   return (
      <>
         {
            <div className="NavContainer">
              <img src={logo_sintexto} />
               <h2>
                  <span>El Buen Sabor</span>
               </h2>
               <div className = 'IniciarSesion'>  <a>Log in</a> </div>
               <div className="NavLinks">
                  <a href="/">Inicio</a>
                  <a href="/">Categorias</a>
                  <a href="/"></a>
                  <a href="/">Acceder</a>
                  <a href="/">Nuevo</a>
               </div>
               <div className="Btn-MenuHmb">
                  <MenuHmb />
               </div>
            </div>
         }
      </>
   )
}

export default Navbar
