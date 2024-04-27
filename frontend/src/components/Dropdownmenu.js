import React, { useState } from 'react'; 
import { Menu, MenuItem, IconButton } from '@mui/material'; 
import { AccountCircle } from '@mui/icons-material'; 
import { Link } from 'react-router-dom'; 
import './Dropdownmenu.css';

const Dropdownmenu = () => { 
  const [anchorEl, setAnchorEl] = useState(null); 
 
  const handleClick = (event) => { 
    setAnchorEl(event.currentTarget); 
  }; 
 
  const handleClose = () => { 
    setAnchorEl(null); 
  }; 
 
  return ( 
    <div> 
      <IconButton 
        aria-controls="user-menu" 
        aria-haspopup="true" 
        onClick={handleClick} 
        color="inherit" 
      > 
        <AccountCircle /> 
      </IconButton> 
      <Menu 
        id="user-menu" 
        anchorEl={anchorEl} 
        open={Boolean(anchorEl)} 
        onClose={handleClose} 
      > 
        <MenuItem component={Link} to="/signup" onClick={handleClose}>Influencer</MenuItem> 
        <MenuItem component={Link} to="/login" onClick={handleClose}>Brand Manager</MenuItem> 
      </Menu> 
    </div> 
  ); 
}; 
 
export default Dropdownmenu;
