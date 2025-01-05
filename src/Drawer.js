import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Tooltip, Typography } from '@mui/material';
import { lightTheme, darkTheme } from "./theme";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './App.css';
import { FireExtinguisher } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Navigate, useNavigate } from 'react-router-dom';


export default function TemporaryDrawer({onTheme}) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [changetheme, setChangetheme] = useState(false);

  const storedTheme = localStorage.getItem("theme")

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const gotoFavorite = () => {
    navigate('/favorites');

  }
  const toggleTheme = () => {
    onTheme(true);
  }

  const DrawerList = (
    <Box sx={{ width: '100vw', height:'100vh',display:'flex', justifyContent:'center',flexDirection:'column',bgcolor: 'background.default'}}>
    <Box  sx={{ display:'flex', justifyContent:'center',flexDirection:'column' ,gap:'1rem', bgcolor: 'background.default', textAlign:'center' } } role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="div" className="logo" style={{ fontFamily: 'Pacifico-Regular ,Audiowide, Ruslan Display,Chelsea Market, sans-serif' }}>
              Quote me up!
            </Typography>

          {/* <Typography variant='h6'>MENU</Typography> */}
          <Typography >This site was created by George Moysiadis</Typography>
          <Typography onClick={gotoFavorite} >Your favorite quotes <FavoriteIcon/></Typography>
          <Button
        variant="contained"
        onClick={toggleTheme}
        className="Butts"
        sx={{
          textWrap:'wrap',
          backgroundColor: 'text.primary',
          width: 'fit-content',
          color: 'background.default'
          ,marginInline: 'auto'
          // ,fontFamily: 'Chelsea Market, sans-serif'
        }}
      >
        <Tooltip title='Change theme color' bg="text.primary">
        {storedTheme==='lightTheme'?
        <DarkModeOutlinedIcon/> :
        <WbSunnyOutlinedIcon/> }
        </Tooltip>
      </Button>
     
      
    </Box >
    <Button disableRipple='true' focusRipple='true' sx={{bgcolor:'unset',marginTop:'6rem',borderRadius:'50%',width:'5px',position:'fixed',bottom:'1rem',left: '50%',transform: 'translateX(-50%)'}} onClick={toggleDrawer(false)}><CloseOutlinedIcon sx={{bgcolor:'text.primary',color:'background.default',borderRadius:'50%'}}/></Button> 
    </Box>
  );

  return (
    <div>
      <Button disableRipple={true} className='menu' sx={{bgcolor:'unset',position:'fixed',top:'1rem',right: '1rem'}} onClick={toggleDrawer(true)}><MenuIcon 
      sx={{color:'text.primary',
        '&:hover': {
      backgroundColor: 'none',
      outline:'none'
      // Prevent any hover background
       // Ensure no hover color change
    },
    '&:focus': { outline: 'none' }, // Remove focus ring
    '&:active': { backgroundColor: 'transparent' },
      }}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}