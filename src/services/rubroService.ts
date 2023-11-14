import { Rubro } from '../types/rubro'

const BASE_URL_INSUMO = 'http://localhost:8080/api/v1/rubroArticulos'
const BASE_URL_ARTICULO = 'http://localhost:8080/api/v1/tipoArticulos'

export const rubroService = {
   getRubrosArticulos: async (): Promise<Rubro[]> => {
      try {
         console.log('acaaa')
         const response = await fetch(BASE_URL_ARTICULO)
         if (!response.ok) {
            throw new Error(`Failed to fetch rubros. Status: ${response.status}`)
         }
         const data = await response.json()
         return data
      } catch (error) {
         console.error('Error fetching rubros:', error)
         throw error
      }
   },

   // METODO PARA CREAR UN PRODUCTO NUEVO PASANDOLE LOS DATOS
   createRubroArticulo: async (name: String, status: String): Promise<Rubro> => {
      try {
         console.log('hola joaco')
         console.log(BASE_URL_ARTICULO)
         const response = await fetch(BASE_URL_ARTICULO, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               denominacion: 'rubroDenominacion',
               estadoRubro: 'ALTA',
            }),
         })
         console.log(response)
         if (!response.ok) {
            throw new Error(`Failed to create rubro. Status: ${response.status}`)
         }

         const data = await response.json()
         return data
      } catch (error) {
         console.error('Error creating rubro:', error)
         throw error
      }
   },

   // METODO PARA ACTUALIZAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO y LOS DATOS DEL PRODUCTO NUEVOS
   updateRubroArticulo: async (id: String, name: String, status: String): Promise<Rubro> => {
      try {
         const response = await fetch(`${BASE_URL_ARTICULO}/products/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, denominacion: name, estadoRubro: status }),
         })

         if (!response.ok) {
            throw new Error(`Failed to update rubro. Status: ${response.status}`)
         }

         const data = await response.json()
         return data
      } catch (error) {
         console.error('Error updating rubro:', error)
         throw error
      }
   },

   // METODO PARA ELIMINAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO
   deleteRubroArticulo: async (id: number): Promise<void> => {
      try {
         const response = await fetch(`${BASE_URL_ARTICULO}/products/${id}`, {
            method: 'DELETE',
         })

         if (!response.ok) {
            throw new Error(`Failed to delete rubro. Status: ${response.status}`)
         }
      } catch (error) {
         console.error('Error deleting rubro:', error)
         throw error
      }
   },
}

// Example Usage:
// const rubros = await rubroService.getRubros();
// console.log(rubros);

// Uncomment and use other methods as needed.
// const newRubro = await rubroService.createRubro({ /* data */ });
// const updatedRubro = await rubroService.updateRubro(1, { /* updated data */ });
// await rubroService.deleteRubro(1);
