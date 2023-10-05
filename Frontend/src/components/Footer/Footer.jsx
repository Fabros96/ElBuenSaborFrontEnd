import React from 'react'
import logo from '../../logo.svg'
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact'
import './Footer.css'

const mi_footer = () => {
   return (
      <div fixed='bottom' className="shadow">
         <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '80%' }}
         >
            <CDBBox display="flex" alignItems="center">
               <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img alt="logo" src={logo} width="30px" />
                  <span className="footer-nombre ms-4 h5 mb-0 font-weight-bold">El Buen Sabor</span>
               </a>
            </CDBBox>
            <CDBBox>
               <small className="ms-2">&copy; El Buen Sabor, 2023. Todos los derechos reservados.</small>
            </CDBBox>
            <CDBBox display="flex">
               <CDBBtn flat color="dark" className="p-2" href='https://www.Facebook.com/El_Buen_Sabor'target="_blank" >
                  <CDBIcon fab icon="facebook-f" />
               </CDBBtn>
               <CDBBtn flat color="dark" className="mx-3 p-2" href='https://www.Twitter.com/El_Buen_Sabor'target="_blank" >
                  <CDBIcon fab icon="twitter" />
               </CDBBtn>
               <CDBBtn flat color="dark" className="p-2" href='https://www.Instagram.com/El_Buen_Sabor' target="_blank" >
                  <CDBIcon fab icon="instagram"/>
               </CDBBtn>
            </CDBBox>
         </CDBBox>
      </div>
   )
}
export default mi_footer
 