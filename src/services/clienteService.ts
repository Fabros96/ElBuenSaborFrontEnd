import { Cliente, dtoCliente } from '../types/cliente';
import { Producto } from '../types/producto'

const BASE_URL_CLIENTE = 'http://localhost:8080/api/v1'


export const ClienteService = {

    getClientesPorFecha: async (d1:string,d2: string ): Promise<dtoCliente[]> => {
        const response = await fetch(`${BASE_URL_CLIENTE}/clientes/rankingClientes?date1=${d1}&date2=${d2}`)  
        const data = await response.json()
        return data
      },


    //METODO PARA OBTENER TODOS LOS CLIENTES
    getClientes: async (): Promise<Cliente[]> => {
        const response = await fetch(`${BASE_URL_CLIENTE}/clientes`)
        const data = await response.json()
        return data
    },
    //METODO PARA OBTENER UN SOLO CLIENTE PASANDOLE EL ID
    getCliente: async (id: number): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL_CLIENTE}/clientes/${id}`)
        const data = await response.json()

        return data
    },
    //METODO PARA CREAR UN CLIENTE NUEVO PASANDOLE LOS DATOS
    createCliente: async (nom: string, ape: string, tel: string, em: string, fHAltaCliente: string, estCli: "CLIENTE"): Promise<Producto> => {
        const response = await fetch(`${BASE_URL_CLIENTE}/clientes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nom,
                apellido: ape,
                telefono: tel,
                email: em,
                estadoCliente: estCli,

            }),
        })

        const data = await response.json()
        return data
    },
    //METODO PARA ACTUALIZAR UN CLIENTE PASANDOLE UN ID_CLIENTE y LOS DATOS DEL CLIENTE NUEVOS
    updateCliente: async (
        id:number,
        nom: string,
        ape: string,
        tel: string,
        em: string,
        fHAltaCliente: string,
        estCli: "CLIENTE",


    ): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL_CLIENTE}/clientes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                nombre: nom,
                apellido: ape,
                telefono: tel,
                email: em,
                estadoCliente: estCli,


            }),
        })

        const data = await response.json()
        return data
    },
    //METODO PARA ELIMINAR UN CLIENTE PASANDOLE UN ID_CLIENTE
    deleteCliente: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL_CLIENTE}/clientes/${id}`, {
            method: 'DELETE',
        })
    },
}
