import { Domicilio } from "./domicilio";
import { Pedido } from "./pedido";



export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    fechaHoraAltaCliente: string;
    fechaHoraModificacionCliente: string | null;
    fechaHoraBajaCliente: string | null;
    estadoCliente: string | null;
    
    domicilioList: Domicilio[];
    pedidos: Pedido[];
 }  

 export interface dtoCliente {

    cantidadPedidos: number;
    clienteId: number;
    nombre: string;
    apellido: string;
    pedidos: Pedido[];

 }  