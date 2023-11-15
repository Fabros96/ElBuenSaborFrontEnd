import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import AddIcon from '@mui/icons-material/Add'
import './AddRubro.css'
import DropDown from './DropDown'
import { Rubro } from '../../../types/rubro'

interface Props {
   successCallback: (rubro: Rubro) => void
   service: (name: String, status: String) => Promise<Rubro>
}

export default function AddRubro(props: Props) {
   const [open, setOpen] = React.useState(false)
   const [name, setName] = React.useState('')
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
      const response = await props.service(name, status)
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
            <DialogTitle> Añadir nuevo rubro: </DialogTitle>
            <DialogContent>
               <form onSubmit={(e) => handleSubmit(e)}>
                  <p>Ingrese el nombre del rubro:</p>
                  <br />
                  <input
                     type="text"
                     autoFocus
                     required
                     name="nombre"
                     value={name}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
