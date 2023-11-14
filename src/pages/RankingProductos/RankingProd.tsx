import React from 'react';
import "./RankingProductos.css";

export const RankingProd: React.FC = () => {
  return (
    <div>
      <nav className="navbar bg-body-white">
        <div className="container-fluid">
          <div className="top">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
              Volver
            </a>
          </div>
          <span className="nombre">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            Nombre y Apellido
          </span>
        </div>
        <hr className="separador" />

        <h2 className="txt-Productosmas">Productos más vendidos</h2>
        <span className="filtro-Tipo">Tipo:
          <select name="Tipo" id="Tipo">
            <option value="Bebida">Bebida</option>
            <option value="Comida">Comida</option>
          </select>
        </span>
        <span className="filtro-Periodo">
          Periodo:
          <select name="Periodo" id="Periodo">
            <option value="1-semana">1 semana</option>
            <option value="2-semanas">2 semanas</option>
          </select>
        </span>
      </nav>
      <div className="tabla">
        <table id="example" className="table table-striped" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col1">Nombre Producto</th>
              <th scope="col">Cantidad vendida</th>
              <th scope="col1">Unidad Medida</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {/* Aquí deberías mapear tus datos para generar las filas de la tabla */}
            {/* Ejemplo:
            {tusDatos.map((dato, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{dato.nombre}</td>
                <td>{dato.cantidad}</td>
                <td>{dato.unidad}</td>
              </tr>
            ))}
            */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
