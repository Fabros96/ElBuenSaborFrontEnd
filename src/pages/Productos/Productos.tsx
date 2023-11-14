import React, { useState } from 'react';
import './Productos.css';
import { Navbar, Modal, Button, Table } from 'react-bootstrap';

export function Productos() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#">
        <svg width="20" height="20" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
          </svg>
          Volver
        </Navbar.Brand>
        <span className="nombre">
        <svg width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          Nombre y Apellido
        </span>
      </Navbar>
      <h2 className='tituloproducto'>Productos</h2>
      <Button variant="primary" onClick={handleShow}>
                <a href="#" className="navbar-brand" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </a>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar o Editar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="buscador">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
            </form>
        </div>

      <div className="tabla">
        <Table striped bordered hover>
          <thead>
          <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th> 
                    <th scope="col">Rubro</th>
                    <th scope="col">Tiempo cocción</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Estado Producto</th>
                    <th></th>
                </tr>
            </thead>
          <tbody>
            {/* Contenido de la tabla... */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Productos;
