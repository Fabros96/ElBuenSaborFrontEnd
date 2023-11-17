import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import './modifyProducto.css'
import EditIcon from '@mui/icons-material/Edit'
import { Producto } from '../../../types/producto'
import DropDown from '../../../components/DropDown'
import { number } from 'yup'

interface Props {
   modifyFormCallback: (producto: Producto) => void
   producto: Producto
   service: (
      denominacion: String,
      descripcion: String,
      precioVenta: number,
      urlImagen: string,
      status: string,
      id: string
   ) => Promise<Producto>
}
export default function ModifyRubro(props: Props) {
   const [open, setOpen] = React.useState(false)
   const [denominacion, setDenominacion] = React.useState('')
   const [descripcion, setDescripcion] = React.useState('')
   const [urlImagen, setUrlImagen] = React.useState('')
   const [precioVenta, setPrecioVenta] = React.useState<number>(0)
   const [status, setStatus] = React.useState('')

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
      event.preventDefault()
      // Manda la requesta al backend

      const response = await props.service(
         props.producto.id.toString(),
         denominacion,
         precioVenta,
         descripcion,
         urlImagen,
         status
      )

      // Response -> producto actualizado (q te lo manda el backend)
      if (response) {
         props.modifyFormCallback(response)
      }
      handleClose()
   }
   return (
      <div className="AddButton">
         <Button onClick={handleClickOpen}>
            <EditIcon className="AddIcon" />
         </Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xl"
         >
            <DialogTitle> Modificar producto: </DialogTitle>
            <DialogContent>
               <form onSubmit={e => handleSubmit(e)}>
                  <p>Ingrese el nombre del producto:</p>
                  <br />
                  <input
                     type="text"
                     autoFocus
                     required
                     name="denominacion"
                     value={denominacion}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDenominacion(e.target.value)}
                  />
                  <br />
                  <p>Ingrese una descripcion del producto:</p>
                  <br />
                  <input
                     type="text"
                     required
                     name="descripcion"
                     value={descripcion}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescripcion(e.target.value)}
                  />
                  <br />
                  <p>Ingrese el precio:</p>
                  <br />
                  <input
                     type="text"
                     required
                     name="precioVenta"
                     value={precioVenta}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPrecioVenta(parseInt(e.target.value))
                     }
                  />
                  <br />
                  <p>Ingrese url de una imagen:</p>
                  <br />
                  <input
                     type="text"
                     required
                     name="urlImagen"
                     value={urlImagen}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrlImagen(e.target.value)}
                  />
                  <br />
                  <p>Ingrese el estado del producto</p>
                  <DropDown status={status} setStatus={setStatus} />
                  <br />
                  <input type="submit" className="confirmar" />
               </form>
            </DialogContent>
         </Dialog>
      </div>
   )
}
