import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
   imagen: string
   descripcion: string
}

export default function ArticleInformation({ descripcion, imagen }: Props) {
   const [open, setOpen] = React.useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div>
         <Button onClick={handleClickOpen}>Ver descripción</Button>
         <Dialog
            open={open}
            onClose={handleClose}
            // aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
            maxWidth="sm"
         >
            <DialogTitle> Descripción de producto: </DialogTitle>

            <DialogContent className="popUpDescripcion">
               <img src={imagen} alt="" className="artImagePop" />
               <div>{descripcion}</div>
            </DialogContent>
         </Dialog>
      </div>
   )
}
