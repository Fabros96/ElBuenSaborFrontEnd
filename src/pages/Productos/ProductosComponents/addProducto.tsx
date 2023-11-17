import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import AddIcon from '@mui/icons-material/Add'
import './addProducto.css'
import DropDown from '../../../components/DropDown'
import { Producto } from '../../../types/producto'

interface Props {
   successCallback: (prodcuto: Producto) => void
   service: (
      denominacion: string,
      descripcion: string,
      precioVenta: number,
      urlImagen: string
   ) => Promise<Producto>
}

export default function AddRubro(props: Props) {
   const [open, setOpen] = React.useState(false)
   const [denominacion, setDenominacion] = React.useState('')
   const [descripcion, setDescripcion] = React.useState('')
   const [urlImagen, setUrlImagen] = React.useState('')
   const [precioVenta, setPrecioVenta] = React.useState(0)
   const [status, setStatus] = React.useState('')

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
      event.preventDefault()

      // Mandas la request Editar -> Rta: Rubro editado
      const response = await props.service(descripcion, denominacion, precioVenta, urlImagen)
      if (response) {
         props.successCallback(response)
      }
      handleClose()
   }
   return (
      <div className="AddButton">
         <Button onClick={handleClickOpen}>
            <AddIcon className="AddIcon" />
         </Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xl"
         >
            <DialogTitle> Añadir nuevo producto: </DialogTitle>
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
                     autoFocus
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
                     autoFocus
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
                     autoFocus
                     required
                     name="urlImagen"
                     value={urlImagen}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrlImagen(e.target.value)}
                  />
                  <br />
                  <p>Ingrese el estado del rubro</p>
                  <DropDown status={status} setStatus={setStatus} />
                  <br />
                  <input type="submit" className="confirmar" />
               </form>
            </DialogContent>
         </Dialog>
      </div>
   )
}
