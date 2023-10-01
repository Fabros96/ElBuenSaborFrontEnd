import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import logo from '../../logo.svg'

function barra_navegacion() {
   return (
      <Navbar sticky="top" expand="lg" className="NavContainer">
         <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <a href="/" ><img alt="Logo El Buen Sabor" src={logo} className="logo-navbar" /></a>
               <Nav className="centro-navbar">
               <Nav.Link href="/" className='btn-navbar'>Inicio</Nav.Link>
                  <NavDropdown title="Categorias" id="basic-nav-dropdown" className='btn-navbar'>
                     <NavDropdown.Item href="#">Hamburguesas</NavDropdown.Item>
                     <NavDropdown.Item href="#">Pollo Frito</NavDropdown.Item>
                     <NavDropdown.Item href="#">Panchos</NavDropdown.Item>
                     <NavDropdown.Item href="#">Bebidas</NavDropdown.Item>
                     <NavDropdown.Item href="#">Donas</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Promociones" className='btn-navbar'>Promociones</Nav.Link>
                  <Nav.Link href="/Contact Us" className='btn-navbar'>Contactanos</Nav.Link>
               </Nav>
               <Button variant="primary" href='/login'>Ingresar</Button>{' '}
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default barra_navegacion
