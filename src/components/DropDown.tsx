import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
   status: string
   setStatus: React.Dispatch<React.SetStateAction<string>>
}
export default function ControlledOpenSelect(props: Props) {
   const [open, setOpen] = React.useState(false)

   const handleChange = (event: SelectChangeEvent<typeof props.status>) => {
      props.setStatus(event.target.value)
   }

   const handleClose = () => {
      setOpen(false)
   }

   const handleOpen = () => {
      setOpen(true)
   }

   return (
      <div style={{}}>
         <FormControl sx={{ m: 1, minWidth: 120, height: '3vh' }}>
            <InputLabel
               id="demo-controlled-open-select-label"
               sx={{ height: '3vh', justifyContent: 'center' }}
            ></InputLabel>
            <Select
               labelId="demo-controlled-open-select-label"
               id="demo-controlled-open-select"
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={props.status}
               label="Age"
               onChange={handleChange}
               sx={{ height: '4vh' }}
            >
               <MenuItem value={'Alta'}>Alta</MenuItem>
               <MenuItem value={'Baja'}>Baja</MenuItem>
            </Select>
         </FormControl>
      </div>
   )
}
