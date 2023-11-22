const BASE_URL_PRODUCTO = 'http://localhost:8080/api/v1'

interface CreateProduct {
   denominacion: string
   descripcion: string
   precioVenta: number
   urlImagen: string
}

import { Producto } from '../types/producto'

export const ProductoService = {
   //METODO PARA OBTENER TODOS LOS PRODUCTOS
   getProducts: async (): Promise<Producto[]> => {
      const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados`)
      const data = await response.json()
      console.log(data)
      return data
   },
   //METODO PARA OBTENER UN SOLO PRODUCTO PASANDOLE EL ID_PRODUCTO
   getProduct: async (id: number): Promise<Producto> => {
      const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados/${id}`)
      const data = await response.json()

      return data
   },
   //METODO PARA CREAR UN PRODUCTO NUEVO PASANDOLE LOS DATOS
   createProduct: async (name: string, desc: string, precio: number, url: string): Promise<Producto> => {
      const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ denominacion: name, descripcion: desc, precioVenta: precio, urlImagen: url }),
      })

      const data = await response.json()
      return data
   },
   //METODO PARA ACTUALIZAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO y LOS DATOS DEL PRODUCTO NUEVOS
   updateProduct: async (
      id: String,
      name: String,
      price: number,
      description: string,
      url: String,
      status: String
   ): Promise<Producto> => {
      const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id,
            denominacion: name,
            descripcion: description,
            urlImagen: url,
            estado: status,
            precioVenta: price,
         }),
      })

      const data = await response.json()
      return data
   },
   //METODO PARA ELIMINAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO
   deleteProduct: async (id: number): Promise<void> => {
      await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados/${id}`, {
         method: 'DELETE',
      })
   },
}
