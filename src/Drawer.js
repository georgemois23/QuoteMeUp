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
import { Typography } from '@mui/material';
import { lightTheme, darkTheme } from "./theme";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './App.css';

export default function TemporaryDrawer({onTheme}) {
  const [open, setOpen] = React.useState(false);
  const [changetheme, setChangetheme] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleTheme = () => {
    onTheme(true);
  }

  const DrawerList = (
    <Box sx={{ width: '100vw', height:'100vh',display:'flex', justifyContent:'center',flexDirection:'column',bgcolor: 'background.default'}}>
    <Box  sx={{ display:'flex', justifyContent:'center',flexDirection:'column' ,gap:'1rem', bgcolor: 'background.default', textAlign:'center' } } role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="div" className="logo" style={{ fontFamily: 'Pacifico-Regular ,Audiowide, Ruslan Display,Chelsea Market, sans-serif' }}>
              Quote me up!
            </Typography>

          <Typography variant='h6'>MENU</Typography>
          <Typography >This site was created by George Moysiadis</Typography>
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
        <DarkModeOutlinedIcon />
      </Button>
     
      
    </Box>
    <Button sx={{bgcolor: 'text.primary', color: 'background.default',marginInline:'auto',marginTop:'6rem'}} onClick={toggleDrawer(false)}>Close menu</Button> 
    </Box>
  );

  return (
    <div>
      <Button className='menu' sx={{position:'fixed',top:'1rem',right: '1rem'}} onClick={toggleDrawer(true)}><MenuIcon 
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