import React from 'react'
import { Producto } from '../../../types/producto'
import './singleProduct.css'
import { ProductoService } from '../../../services/productoService'
import ModifyProducto from './ModifyProducto'
interface Props {
   producto: Producto
   modifyFormCallback: (producto: Producto) => void
}
const SingleProduct = (props: Props) => {
   return (
      <>
         <div className="singleProductContainer">
            <div className="productInfo">
               <img src={props.producto.urlImagen} alt="imagen producto" />
               <div className="productName">{props.producto.denominacion}</div>
               <div className="productPrice">{props.producto.precioVenta}</div>
               <div>{props.producto.precioVenta}</div>
               <div>{props.producto.estado}</div>
            </div>
            <div className="productEdit">
               <ModifyProducto
                  modifyFormCallback={props.modifyFormCallback}
                  producto={props.producto}
                  service={ProductoService.updateProduct}
               />
            </div>
         </div>
      </>
   )
}

export default SingleProduct
