import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import './ModifyRubro.css'
import DropDown from '../rubroComponents/DropDown'
import { Rubro } from '../../../models/rubro'
import EditIcon from '@mui/icons-material/Edit'

interface Props {
   handleFormEditSubmit: (rubro: Rubro) => void
}
export default function ModifyRubro(props: Props) {
   const [open, setOpen] = React.useState(false)
   const [name, setName] = React.useState('')
   const [status, setStatus] = React.useState('')

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
      event.preventDefault()
      //const test = await postRubro(name, status)
      const rubro = { name: name, status: status }
      props.handleFormEditSubmit(rubro)
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
            <DialogTitle> Modificar rubro: </DialogTitle>
            <DialogContent>
               <form onSubmit={(e) => handleSubmit(e)}>
                  <p>Nombre del rubro:</p>
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
                  <p>Estado del rubro</p>
                  <DropDown setStatus={setStatus} status={status} />
                  <br />
                  <input type="submit" className="confirmar" />
               </form>
            </DialogContent>
         </Dialog>
      </div>
   )
}
