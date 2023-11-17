import { Rubro } from './rubro'

export interface Producto {
   id: number
   fechaAlta?: Date
   fechaModificacion?: Date
   denominacion: string
   descripcion: string
   tiempoEstimadoCocina?: number
   precioVenta: number
   costo?: number
   urlImagen: string
   tipoArticulo?: Rubro
   estado: string
}
