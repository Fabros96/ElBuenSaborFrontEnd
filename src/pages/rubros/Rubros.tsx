import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import './rubros.css'
import RubroCard from './rubroComponents/RubroCard'
import AddRubro from './rubroComponents/AddRubro'

import { rubroService } from '../../services/rubroService'
import { Rubro } from '../../types/rubro'

function Rubros() {
   const [rubroInsumo, setRubroInsumo] = useState<Rubro[]>([])
   const [rubroProdcuto, setRubroProducto] = useState<Rubro[]>([])
   const [rubro, setRubro] = useState<Rubro>()

   useEffect(() => {
      // Apenas entra pide al backend lista
      // Solo la pide una vez
      getRubroArticulos()
      getRubroInsumos()
   }, [])

   const getRubroArticulos = async () => {
      const response = await rubroService.getRubrosArticulos()
      setRubroProducto(response)
   }

   const getRubroInsumos = async () => {
      const response = await rubroService.getRubrosInsumos()
      setRubroInsumo(response)
   }
   //crear modelo rubro?
   //este en realidad no funciona porque esta implementado los rubros
   //de los articulos nada mas :(
   async function createInsumoRubroCallBack(rubro: Rubro) {
      // console.log(rubro)
      // let response = await rubroService.createRubro(rubro)
      setRubroInsumo([rubro, ...rubroInsumo])
   }
   //este si
   function createProdctoRubroCallBack(rubro: Rubro) {
      // Agrega el rubro creado a la lista
      setRubroProducto([rubro, ...rubroProdcuto])
   }

   function modifyRubroCallback(rubro: Rubro) {
      // Crear un nuevo objeto que es igual al rubroProducto
      const rubrosCopias = [...rubroProdcuto]

      const index = rubroProdcuto.findIndex((r) => r.id === rubro.id)
      rubrosCopias[index] = rubro

      setRubroProducto(rubrosCopias)
   }

   function modifyInsumoCallback(rubro: Rubro) {
      // Crear un nuevo objeto que es igual al rubroInsumo
      const rubrosCopias = [...rubroInsumo]

      const index = rubroInsumo.findIndex((r) => r.id === rubro.id)
      rubrosCopias[index] = rubro

      setRubroInsumo(rubrosCopias)
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
                     successCallback={createInsumoRubroCallBack}
                     service={rubroService.createRubroInsumo}
                  />
               </div>
               <div className="RubroList">
                  {rubroInsumo.map((rubro, index) => (
                     <RubroCard key={index} rubro={rubro} modifyFormCallback={modifyInsumoCallback} />
                  ))}
               </div>
            </div>
            <div className="RubroContainer">
               <div className="RubroListTitle">
                  <div className="titulo">Rubros Productos</div>
                  <AddRubro
                     successCallback={createProdctoRubroCallBack}
                     service={rubroService.createRubroArticulo}
                  />
               </div>
               <div className="RubroList">
                  {rubroProdcuto.map((rubro) => (
                     <RubroCard key={rubro.id} rubro={rubro} modifyFormCallback={modifyRubroCallback} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Rubros
