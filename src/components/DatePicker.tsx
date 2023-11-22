import React, { useState } from 'react'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField/SingleInputDateRangeField'

let f1: string
let f2: string
 

export function getFecha1():string {
    return f1
 }
 export function getFecha2():string {
    return f2
 }


export function ResponsiveDateRangePickers() {
   function setFechas(x: any, event: any) {
      let x1 = JSON.stringify(x[0])
         .slice(1, -2)
         .split('T')
      let x2 = JSON.stringify(x[1])
         .slice(1, -2)
         .split('T')

      f1 = x1[0] + ' ' + x1[1]
      f2 = x2[0] + ' ' + x2[1]
   }

      
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DateRangePicker']}>
            <DemoItem component="DateRangePicker">
               <DateRangePicker
                  onChange={(x, event) => setFechas(x, event)}
                  disableFuture={true}
                  label="Intervalo"
                  slots={{ field: SingleInputDateRangeField }}
               />
            </DemoItem>
         </DemoContainer>
      </LocalizationProvider>
   )
}
