import {useState} from 'react'  
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'   
import AddHomeIcon from '@mui/icons-material/AddHome';   
import {NavLink} from 'react-router-dom'  
import logo from '../Images/logo.jpeg' 
import React from 'react'   
import (AppBar)   
const Header = () => {   
  const [value,setValue]=useState()  
  return (   
    <div>   
      <AppBar sx={{backgroundColor:'black'}} position='sticky'>   
      <Toolbar>   
      <Typography>
      <img
        src={logo}
        alt="Logo"
        style={{ width: '75px', height: 'auto' }} // Adjust the width as needed
      />
    </Typography>  
      <Typography variant="h5" sx={{flexGrow:1,color:'white'}}><strong>COUNSELLING AND VISITOR MANAGEMENT SYSTEM</strong></Typography>  
  
      <Tabs sx={{m1:'auto'}} textColor='inherit' indicatorColor='primary'   
      value={value} onChange={(e,val)=>setValue(val)} >  
        <Tab LinkComponent= {NavLink}to='/signup' label='SignUp'/>   
        <Tab LinkComponent= {NavLink}to='/signin'label='Login'/>   
        <Tab LinkComponent= {NavLink}to='/counsellor'label='Counsellor'/>   
        <Tab LinkComponent= {NavLink}to='/appointment'label='Appointment'/>   
        <Tab LinkComponent= {NavLink}to='/vistor'label='Visitor'/>   
        <Tab LinkComponent= {NavLink}to='/Contact'label='Contact'/> 
        <Tab LinkComponent= {NavLink}to='/Registration'label='FetchRegistration'/>
      </Tabs>   
      </Toolbar>   
      </AppBar>   
   
    </div>   
   
  )   
}   
   
export default Header
