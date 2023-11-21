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
               <img src={props.producto.urlImagen} alt="imagen producto" className="image" />
               <div className="productId">id: {props.producto.id}</div>
               <div className="productName">nombre: {props.producto.denominacion}</div>
               <div className="productPrice">precioVenta: {props.producto.precioVenta}</div>
               <div className="productEstado">estado: {props.producto.estado}</div>
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
