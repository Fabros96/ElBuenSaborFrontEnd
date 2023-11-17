import { useEffect, useState } from 'react'
import React from 'react'
import { Producto } from '../../../types/producto'
import { ProductoService } from '../../../services/productoService'
import Loader from '../../../components/Loader/Loader'
// import { ModalType } from '../../../types/modalTypes'
// import ProductModal from './ModalProducto'
import { Button, Table } from 'react-bootstrap'
import './tablaProductos.css'
import SingleProduct from './SingleProduct'
import AddProducto from './addProducto'

function TablaProducto() {
   //Variable con los datos recibidos por la API
   const [products, setProducts] = useState<Producto[]>([])

   //Variable que muestra el Loader hasta que cargue la info de la API
   const [isLoading, setIsLoading] = useState(true)

   //Variable que actualizará la tabla después de cada operación exitosa
   const [refreshData, setRefreshData] = useState(false)

   const [product, setProduct] = useState<Producto>()

   const [showModal, setShowModal] = useState(false)
   //  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE)
   const [title, setTitle] = useState('')

   useEffect(() => {
      getProducts()
   }, [])

   const getProducts = async () => {
      const response = await ProductoService.getProducts()
      setProducts(response)
      setIsLoading(false)
   }

   async function createProductoCallBack(producto: Producto) {
      // console.log(rubro)
      // let response = await rubroService.createRubro(rubro)
      setProducts([producto, ...products])
   }

   function modifyProductoCallback(producto: Producto) {
      // Crear un nuevo objeto que es igual al rubroProducto
      const productCopias = [...products]

      const index = products.findIndex(r => r.id === producto.id)
      productCopias[index] = producto

      setProducts(productCopias)
   }

   //Logica del Modal
   //  const handleClick = (newTitle: string, prod: Producto, modal: ModalType) => {
   //     setTitle(newTitle)
   //     setModalType(modal)
   //     setProduct(prod)
   //     setShowModal(true)
   //  }

   return (
      <>
         <div className="ProductoListTitle">
            <div className="titulo">Productos</div>
            <AddProducto successCallback={createProductoCallBack} service={ProductoService.createProduct} />
         </div>
         <div className="productsContainer">
            {products.map(product => (
               <SingleProduct
                  key={product.id}
                  producto={product}
                  modifyFormCallback={modifyProductoCallback}
               />
            ))}
         </div>
         <></>
      </>
   )
}

export default TablaProducto
