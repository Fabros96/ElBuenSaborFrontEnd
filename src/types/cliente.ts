



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
    

 }  

 export interface dtoCliente {

    cantidadPedidos: number;
    clienteId: number;
    nombre: string;
    apellido: string;

 }  