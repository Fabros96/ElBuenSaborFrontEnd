import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import './rubros.css'
import RubroCard from './rubroComponents/RubroCard'
import AddRubro from './rubroComponents/AddRubro'
import { Rubro } from '../../models/rubro'

function Rubros() {
   const [rubroInsumo, setRubroInsumo] = useState<Rubro[]>([])
   const [rubroProdcuto, setRubroProducto] = useState<Rubro[]>([])
   const [rubro, setRubro] = useState<Rubro>()
   //crear modelo rubro?
   function handleFormSubmitInsumo(rubro: Rubro) {
      console.log(rubro)
      setRubroInsumo([rubro, ...rubroInsumo])
      console.log('aaddRubroooaaaaa')
   }
   function handleFormSubmitProducto(rubro: Rubro) {
      setRubroProducto([rubro, ...rubroProdcuto])
      console.log('aaddRubroooaaaaa')
   }
   function handleFormEditSubmit(rubro: Rubro) {
      console.log('editRubroooaaaaa')
      //edit una vez implementado el back, hacerlo como en la linea 18
      //actualizar el arrays
   }
   return (
      <div>
         <div className="container">
            <div className="RubroContainer">
               <div className="RubroListTitle">
                  <div className="titulo">Rubros Ingredientes</div>
                  <AddRubro handleFormSubmit={handleFormSubmitInsumo} />
                  {/* <button className="Add" onClick={() => addRubro()}>
                     <AddIcon className="AddIcon" />
                  </button> */}
               </div>
               <div className="RubroList">
                  {rubroInsumo.map((rubro, index) => (
                     <RubroCard key={index} rubro={rubro} handleFormEditSubmit={handleFormEditSubmit} />
                  ))}
               </div>
            </div>
            <div className="RubroContainer">
               <div className="RubroListTitle">
                  <div className="titulo">Rubros Productos</div>
                  <AddRubro handleFormSubmit={handleFormSubmitProducto} />
               </div>
               <div className="RubroList">
                  {rubroProdcuto.map((rubro, index) => (
                     <RubroCard key={index} rubro={rubro} handleFormEditSubmit={handleFormEditSubmit} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Rubros
