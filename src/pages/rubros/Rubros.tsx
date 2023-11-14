import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import './rubros.css'
import RubroCard from './rubroComponents/RubroCard'
import AddRubro from './rubroComponents/AddRubro'
import { Rubro } from '../../types/rubro'
import { rubroService } from '../../services/rubroService'

function Rubros() {
   const [rubroInsumo, setRubroInsumo] = useState<Rubro[]>([])
   const [rubroProdcuto, setRubroProducto] = useState<Rubro[]>([])
   const [rubro, setRubro] = useState<Rubro>()

   useEffect(() => {
      getRubros()
   }, [])

   const getRubros = async () => {
      const response = await rubroService.getRubrosArticulos()
      console.log(response)
   }
   //crear modelo rubro?
   //este en realidad no funciona porque esta implementado los rubros
   //de los articulos nada mas :(
   async function createInsumoRubroCallBack(rubro: Rubro) {
      // console.log(rubro)
      // let response = await rubroService.createRubro(rubro)
      setRubroInsumo([rubro, ...rubroInsumo])
      console.log('aaddRubroooaaaaa')
   }
   //este si
   async function createProdctoRubroCallBack(rubro: Rubro) {
      // let response = await rubroService.createRubro(rubro)
      setRubroProducto([rubro, ...rubroProdcuto])
      console.log('aaddRubroooaaaaa')
   }

   function modifyRubroCallback(rubro: Rubro) {
      const rubrosCopias = [...rubroProdcuto]

      const index = rubroProdcuto.findIndex(r => r.id === rubro.id)
      rubrosCopias[index] = rubro

      setRubroProducto(rubrosCopias)
   }
   // async function handleFormEditSubmit(rubro: Rubro, id: number) {
   //    console.log('editRubroooaaaaa')
   //    let response = await rubroService.updateRubro(rubro.id, rubro)
   //    setRubroProducto([response, ...rubroProdcuto])
   // }
   return (
      <div>
         <div className="container">
            <div className="RubroContainer">
               <div className="RubroListTitle">
                  <div className="titulo">Rubros Ingredientes</div>
                  <AddRubro
                     handleFormSubmit={createInsumoRubroCallBack}
                     service={rubroService.createRubroArticulo}
                  />
               </div>
               <div className="RubroList">
                  {/* {rubroInsumo.map((rubro, index) => (
                     <RubroCard key={index} rubro={rubro} handleFormEditSubmit={handleFormEditSubmit} />
                  ))} */}
               </div>
            </div>
            <div className="RubroContainer">
               <div className="RubroListTitle">
                  <div className="titulo">Rubros Productos</div>
                  <AddRubro
                     handleFormSubmit={createProdctoRubroCallBack}
                     service={rubroService.createRubroArticulo}
                  />
               </div>
               <div className="RubroList">
                  {rubroProdcuto.map((rubro, index) => (
                     <RubroCard key={index} rubro={rubro} modifyFormCallback={modifyRubroCallback} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Rubros
