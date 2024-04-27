import {useState} from 'react'  
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'   
import AddHomeIcon from '@mui/icons-material/AddHome';   
import {NavLink} from 'react-router-dom'  
import img1 from '../Images/img1.png' 
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
        src={img1}
        alt="img1"
        style={{ width: '150px', height: '150 px' }} // Adjust the width as needed
      />
    </Typography>  
      <Typography variant="h6" sx={{flexGrow:1,color:'white'}}><strong></strong></Typography>  
  
      <Tabs sx={{m1:'auto'}} textColor='inherit' indicatorColor='primary'   
      value={value} onChange={(e,val)=>setValue(val)} >  
        <Tab LinkComponent= {NavLink}to='/signup' label='SignUp'/>   
        <Tab LinkComponent= {NavLink}to='/signin'label='Login'/>   
        <Tab LinkComponent= {NavLink}to='/Createadd'label='CreateAd'/> 
        <Tab LinkComponent= {NavLink}to='/aboutus'label='AboutUs'/>     
        <Tab LinkComponent= {NavLink}to='/Contact'label='Contact'/> 
        <Tab LinkComponent= {NavLink}to='/Role'label='Role'/>
        <Tab LinkComponent= {NavLink}to='/History'label='History'/>

      </Tabs>   
      </Toolbar>   
      </AppBar>   
   
    </div>   
   
  )   
}   
   
export default Header
