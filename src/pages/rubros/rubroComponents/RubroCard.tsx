import React from 'react'
import './RubroCard.css'
import ModifyRubro from './ModifyRubro'
import { Rubro } from '../../../types/rubro'
import { rubroService } from '../../../services/rubroService'

interface Props {
   rubro: Rubro
   modifyFormCallback: (rubro: Rubro) => void
}
function RubroCard(props: Props) {
   return (
      <div className="cardContainer">
         <div className="cardInfo">
            <div className="cardName">{props.rubro.denominacion}</div>
            <div className="cardStatus">{props.rubro.estadoRubro}</div>
         </div>
         <div className="cardEdit">
            <ModifyRubro
               modifyFormCallback={props.modifyFormCallback}
               rubro={props.rubro}
               service={rubroService.updateRubroArticulo}
            />
         </div>
      </div>
   )
}

export default RubroCard
