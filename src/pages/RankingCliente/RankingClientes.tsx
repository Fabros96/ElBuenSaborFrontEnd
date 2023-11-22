import React, { useEffect, useState } from 'react'
import './RankingClientes.css'
import Button from '@mui/material/Button'
import CheckIcon from '@mui/icons-material/Check'
import CachedIcon from '@mui/icons-material/Cached'
import SendIcon from '@mui/icons-material/Send'
import { StyledEngineProvider } from '@mui/material/styles'
import { ClienteService } from '../../services/clienteService'
import { dtoCliente } from '../../types/cliente'
import { ResponsiveDateRangePickers, getFecha1, getFecha2 } from '../../components/DatePicker'

export const RankingClientes: React.FC = () => {
   const [startDate, setStartDate] = useState<Date>(new Date('1900-12-31 00:00:00.000'))
   const [endDate, setEndDate] = useState<Date>(new Date('2050-12-31 00:00:00.000'))

   const [buttonText, setButtonText] = useState('Texto')
   const [variant, setVariant] = useState('contained')
   const [buttonIcon, setButtonIcon] = useState('CheckIcon')
   const [buttonDisabled, setButtonDisabled] = useState(false)
   const [buttonColor, setButtonColor] = useState('primary')
   const [codigo, setCodigo] = useState(false)

   const [dtoclientes, setdtoClientes] = useState<dtoCliente[]>([])
   const [refreshData, setRefreshData] = useState(false)

   let btn = document.getElementById('btnsta')
   let btnprops = 0
   let puesto
   let cod = ''

   let hoy = new Date()
   let hoynoche = new Date()
   let oneweekago = new Date()
   let twoweeksago = new Date()
   let threeweeksago = new Date()
   let onemonthago = new Date()
   let siempre1 = new Date('1900-1-1 00:00:00.000')

   //INICIALIZO ALGUNAS VARIABLE QUE SERAN UTILES MAS ADELANTE
   hoynoche.setHours(23)
   hoynoche.setMinutes(59)
   hoynoche.setSeconds(59)
   hoynoche.setMilliseconds(999)
   oneweekago.setDate(hoy.getDate() - 7)
   twoweeksago.setDate(hoy.getDate() - 14)
   threeweeksago.setDate(hoy.getDate() - 21)
   onemonthago.setMonth(hoy.getMonth() - 1)

   useEffect(() => {
      const fetchClientes = async () => {
         buscarclientesporfecha()
      }
      fetchClientes()
   }, [refreshData])

   function buscarclientesporfecha() {
      const fetchdtoClientes = async () => {
         if (codigo) {
            let aux1 = formatear(new Date(getFecha1()))
            let aux2 = formatear(new Date(getFecha2()))
            if (aux1.length == 18 && aux2.length == 18) {
               setCodigo(false)
               // ESTE SERIA EL CASO CORRECTO
               const dtoclientes = await ClienteService.getClientesPorFecha(aux1, aux2)

               setdtoClientes(dtoclientes)
               btnprops = 2
            } else {
               // ESTE SERIA EL CASO MALO
               btnprops = 3
               cambiarbtn()
               return
            }
         } else {
            //OTRO CASO DISTINTO AL INTERVALO
            const dtoclientes = await ClienteService.getClientesPorFecha(
               formatear(startDate),
               formatear(endDate)
            )
            setdtoClientes(dtoclientes)
            btnprops = 1
         }
         cambiarbtn()
      }
      fetchdtoClientes()
   }
   function compararElemArray(a: { cantidadPedidos: number }, b: { cantidadPedidos: number }) {
      return b.cantidadPedidos - a.cantidadPedidos
      //ORDENA EL ARRAY DE DATOS DE MANERA DESC (MAS PEDIDOS ARRIBA)
   }
   function habilitardp(event: { target: { value: any } }) {
      //DEPENDIENDO LA ELECCION HABILIDA EL DATEPICKER Y SETEA LAS FECHAS QUE SE VAN A ENVIAR A LA CONSULTA_DB
      let elem1 = document.getElementById('datepick')
      event.target.value === 'i' && elem1
         ? (elem1.style.visibility = 'visible')
         : elem1
         ? (elem1.style.visibility = 'hidden')
         : ''

      btnprops = 2

      switch (event.target.value) {
         case 'h':
            setStartDate(hoy)
            setEndDate(hoynoche)
            setCodigo(false)
            break
         case '1':
            setStartDate(oneweekago)
            setEndDate(hoynoche)
            setCodigo(false)
            break
         case '2':
            setStartDate(twoweeksago)
            setEndDate(hoynoche)
            setCodigo(false)
            break
         case '3':
            setStartDate(threeweeksago)
            setEndDate(hoynoche)
            setCodigo(false)
            break
         case '4':
            setStartDate(onemonthago)
            setEndDate(hoynoche)
            setCodigo(false)
            break
         case 'i':
            setCodigo(true)
            break
         case 's':
            setStartDate(siempre1)
            setEndDate(hoynoche)
            setCodigo(false)
            break
         default:
      }
      cambiarbtn()
   }
   function cambiarbtn() {
      //CAMBIA EL BTN SUPERIOR DERECHO
      let elem1 = document.getElementById('label')
      elem1 ? (elem1.style.visibility = 'hidden') : ''

      switch (btnprops) {
         case 1:
            setButtonText('Listo')
            setButtonIcon('CheckIcon')
            setButtonColor('success')
            setVariant('outlined')
            setButtonDisabled(true)
            break
         case 2:
            setButtonText('Cargar')
            setButtonIcon('SendIcon')
            setButtonColor('primary')
            setVariant('contained')
            setButtonDisabled(false)
            break
         case 3:
            setButtonText('Reintentar')
            setButtonIcon('CachedIcon')
            setButtonColor('error')
            setVariant('outlined')
            setButtonDisabled(false)
            elem1 ? (elem1.style.visibility = 'visible') : ''
            break
         default:
            setButtonText('Cargando...')
            setButtonIcon('LoopIcon')
            setButtonDisabled(true)
            buscarclientesporfecha()
            break
      }
   }

   function formatear(date: Date) {
      let h
      var d = new Date(date),
         msec = '' + d.getMilliseconds(),
         sec = '' + d.getSeconds(),
         min = '' + d.getMinutes(),
         hora = '' + d.getHours(),
         mes = '' + (d.getMonth() + 1),
         dia = '' + d.getDate(),
         ano = d.getFullYear()

      if (mes.length < 2) mes = '0' + mes
      if (dia.length < 2) dia = '0' + dia

      return [ano, mes, dia].join('-') + ' ' + [hora, min, sec].join(':') + '.' + msec
   }

   return (
      <>
         <div className="filtrosTitle">
            <div className="container-fluid">
               {/* <div className="top">
                  <a href="#">
                     <svg
                        xmlns="http:www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-caret-left"
                        viewBox="0 0 16 16"
                     >
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                     </svg>
                     Volver
                  </a>
               </div> */}
               {/* <span className="nombre">
                  <svg
                     xmlns="http:www.w3.org/2000/svg"
                     width="26"
                     height="26"
                     fill="currentColor"
                     className="bi bi-person-circle"
                     viewBox="0 0 16 16"
                  >
                     <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                     <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                     />
                  </svg>
                  Nombre y Apellido
               </span> */}
            </div>
            <div>Ranking Clientes</div>
            Periodo:
            <select
               name="Periodo"
               id="Periodo"
               onChange={habilitardp}
               defaultValue={'s'}
               className="selectDate"
            >
               <option value="h">Hoy</option>
               <option value="1">1 Semana</option>
               <option value="2">2 Semanas</option>
               <option value="3">3 Semanas</option>
               <option value="4">1 Mes</option>
               <option value="i">Intervalo</option>
               <option value="s">Siempre</option>
            </select>
            <span id="label" style={{ visibility: 'hidden', margin: '5px', fontFamily: 'cursive' }}>
               Para refrescar cambie el periodo y vuelva
            </span>
            <span id="datepick" style={{ visibility: 'hidden', padding: '0' }}>
               {/* ACA */}

               <React.StrictMode>
                  <StyledEngineProvider injectFirst>{ResponsiveDateRangePickers()}</StyledEngineProvider>
               </React.StrictMode>

               {/* FIN ACA */}
            </span>
            <span className="filtro-Periodo" style={{ display: 'inline-flex' }}>
               {
                  <Button
                     id="btnsta"
                     color={
                        buttonColor === 'primary' ? 'primary' : buttonColor === 'error' ? 'error' : 'success'
                     }
                     className="me-5"
                     variant={variant === 'contained' ? 'contained' : 'outlined'}
                     startIcon={
                        buttonIcon === 'CheckIcon' ? (
                           <CheckIcon />
                        ) : buttonIcon === 'SendIcon' ? (
                           <SendIcon />
                        ) : (
                           <CachedIcon />
                        )
                     }
                     onClick={cambiarbtn}
                  >
                     {buttonText}
                  </Button>
               }
            </span>
         </div>
         <div className="tabla">
            <table id="example" className="table table-striped" style={{ width: '100%' }}>
               <thead>
                  <tr>
                     <th scope="col">Puesto #</th>
                     <th scope="col1">Nombre y Apellido</th>
                     <th scope="col">Cantidad de Pedidos</th>
                  </tr>
               </thead>
               <tbody className="table-group-divider">
                  {dtoclientes.sort(compararElemArray).map(dtocliente => (
                     <tr key={dtocliente.clienteId}>
                        <td>{(puesto = dtoclientes.indexOf(dtocliente) + 1)}</td>
                        <td>{dtocliente.nombre + ' ' + dtocliente.apellido}</td>
                        <td>{dtocliente.cantidadPedidos}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   )
}
