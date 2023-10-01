import React from 'react'
import './RubroCard.css'
import ModifyRubro from './ModifyRubro'
import { Rubro } from '../../../models/rubro'

interface Props {
   rubro: Rubro
   handleFormEditSubmit: (rubro: Rubro) => void
}
function RubroCard(props: Props) {
   return (
      <div className="cardContainer">
         <div className="cardInfo">
            <div className="cardName">{props.rubro.name}</div>
            <div className="cardStatus">{props.rubro.status}</div>
         </div>
         <div className="cardEdit">
            <ModifyRubro handleFormEditSubmit={() => props.handleFormEditSubmit(props.rubro)} />
         </div>
      </div>
   )
}

export default RubroCard
