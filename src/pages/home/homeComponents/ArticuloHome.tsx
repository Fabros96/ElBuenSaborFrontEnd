import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import './ArticuloHomePopup'
import './ArticuloHome.css'
import PopUp from './ArticuloHomePopup'
import { Producto } from '../../../types/producto'

interface Props {
   producto: Producto
}
export default function ArticuloHome(props: Props) {
   const [count, setCount] = React.useState(0)

   return (
      <div className="articulo">
         <div className="image">
            <img src={props.producto.urlImagen} className="artImage" alt=";" />
         </div>
         <div className="nombre">{props.producto.denominacion}</div>
         <div className="precio">${props.producto.precioVenta}</div>
         <button className="popUp">
            <PopUp descripcion={props.producto.descripcion} imagen={props.producto.urlImagen}></PopUp>
         </button>
         <div className="cartFooter">
            <div>
               <Box
                  sx={{
                     color: 'action.active',
                     display: 'flex',
                     flexDirection: 'column',
                     '& > *': {
                        marginBottom: 2,
                     },
                     '& .MuiBadge-root': {
                        marginRight: 4,
                     },
                  }}
               >
                  <div>
                     <button className="carrito">
                        <Badge color="secondary" badgeContent={count}>
                           <AddShoppingCartIcon />
                        </Badge>
                     </button>
                     <ButtonGroup className="masymenos">
                        <Button
                           aria-label="reduce"
                           onClick={() => {
                              setCount(Math.max(count - 1, 0))
                           }}
                        >
                           <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                           aria-label="increase"
                           onClick={() => {
                              setCount(count + 1)
                           }}
                        >
                           <AddIcon fontSize="small" />
                        </Button>
                     </ButtonGroup>
                  </div>
               </Box>
            </div>
         </div>
      </div>
   )
}
