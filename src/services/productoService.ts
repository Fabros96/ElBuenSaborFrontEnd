
const BASE_URL_PRODUCTO = 'http://localhost:8080/api/v1/articuloManufacturados'


import {Producto} from '../types/producto'

export const ProductoService = {

    //METODO PARA OBTENER TODOS LOS PRODUCTOS
    getProducts: async (): Promise<Producto[]> => {
        const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados`);
        const data = await response.json();

        return data;
    },
    //METODO PARA OBTENER UN SOLO PRODUCTO PASANDOLE EL ID_PRODUCTO 
    getProduct: async (id:number): Promise<Producto> => {
        const response = await fetch(`${BASE_URL_PRODUCTO}/artuculoManufacturados/${id}`);
        const data = await response.json();

        return data;
    },
    //METODO PARA CREAR UN PRODUCTO NUEVO PASANDOLE LOS DATOS 
    createProduct: async (producto: Producto): Promise<Producto> => {
        const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ACTUALIZAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO y LOS DATOS DEL PRODUCTO NUEVOS
    updateProduct: async (id: number, producto: Producto): Promise<Producto> => {

        const response = await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ELIMINAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO
    deleteProduct: async (id: number): Promise<void> => {

        await fetch(`${BASE_URL_PRODUCTO}/articuloManufacturados/${id}`, {
            method: "DELETE"
        });
    }
}

