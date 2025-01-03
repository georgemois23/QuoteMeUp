import React, { useState,useEffect } from "react";
import { ThemeProvider, CssBaseline, Box, Typography, Button, Modal, Fade, Tooltip } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Drawers from './Drawer';
import './App.css';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

function App() {
  const showAlert = sessionStorage.getItem("alert")=== 'true';
  const storedTheme = localStorage.getItem("theme") === "lightTheme" ? "lightTheme" : "darkTheme";
  const [darkMode, setDarkMode] = useState(storedTheme === "darkTheme");
  const [nextQuote, setnextQuote] = useState("Welcome to the Quote me Up!");
  const [nextQuoteBut, setnextQuoteBut] = useState("Show the first quote :)");
  
  
  // const handleClick = () => {
  //     setnextQuote("-Next quote-");
  //     setnextQuoteBut("Change quote again :(");
  // };
  const handleLogo = () => {
    window.location.reload();
  };
  useEffect(() => {
    // Attach the event listener when the component mounts
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', handleLogo);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (logo) {
        logo.removeEventListener('click', handleLogo);
      }
    };
  }, []);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // Open the modal after 1 second
    }, 500);

    // Close the modal after 5 seconds
    const closeTimer = setTimeout(() => {
      setOpen(false); // Close the modal after 5 seconds
    }, 2500);

    // Cleanup timers when component unmounts or when the modal is closed
    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null); // Reset error before making the request
    try {
      // console.log("Making API request...");
      const response = await fetch('https://dummyjson.com/quotes/random'); // Use the new API URL
      
      if (response.ok) {
        const data = await response.json();
        // console.log("Fetched data:", data); // Check the response data in the console
        // Assuming the response contains a quote and an author
        if (data && data.quote && data.author) {

          if(data.quote.length>100 ){
            fetchQuote();
            // console.log("Too big quote");
          }
          else{
          // setnextQuote(`"${data.quote}"\n - ${data.author}`);
          setnextQuote(`"${data.quote}"\n - ${data.author}`);
          setnextQuoteBut("Change quote :)");
          }
        } else {
          // setError("Quote or author missing in the response");
          setnextQuote("There was a problem loading the quote");
        }
      } else {
        // setError("Failed to fetch quote");
        setnextQuote("There was a problem connecting to the server");
        setError("Sorry for the incovinience :(")
        setnextQuoteBut("Please try again!");
      }
    } catch (err) {
      // console.error("Error fetching quote:", err);
      setError("Error fetching quote");
    } finally {
      setLoading(false);
    }
  };
  
  
  
  
  const toggleTheme = () => {
    const newTheme = darkMode ? "lightTheme" : "darkTheme";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme); // Save to localStorage
  };

  useEffect(() => {
    // Sync the theme with localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "lightTheme") {
      setDarkMode(false);
    }
  }, []);

  document.addEventListener("contextmenu", (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
         {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box  sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'background.default',
  bgcolor: 'text.primary',
  border: '2px solid #000',
  outline: 'none',
  textAlign: 'center',
  boxShadow: 24,
  p: 4,}}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              The site is under construction!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Moysiadis George :)
            </Typography>
          </Box>
        </Fade>
      </Modal>
       <Typography variant="div" className="logo" style={{ fontFamily: 'Pacifico-Regular ,Audiowide, Ruslan Display,Chelsea Market, sans-serif' }}>
        Quote me up!
      </Typography>
      <Button
        variant="contained"
        onClick={toggleTheme}
        className="Butt"
        sx={{
          fontSize: '17px',
          backgroundColor: 'text.primary',
          position: 'fixed', // Fixed positioning
          top: '1.3rem',       // Top distance
          right: '2.3rem',     // Right distance
          color: 'background.default'
          // ,fontFamily: 'Chelsea Market, sans-serif'
        }}
      >
        {/* {darkMode ? 'white' : 'blue'} */}
        <Tooltip title='Change theme color'>
        {storedTheme==='lightTheme'?
        <DarkModeOutlinedIcon/> :
        <WbSunnyOutlinedIcon/> }
        </Tooltip>
      </Button>
     
   <Box
  sx={{
    padding:'1rem',
    display:'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap:'1rem',
    border: '5px solid',
    borderColor: 'text.primary',
    borderRadius: '10px',
    width: '60vw',
    minWidth: '200px',
    height: 'fit-content'
    
   }}>
    <Box sx={{marginInline: 'auto'}}>
   Quote
    </Box>
    <Typography sx={{ marginInline: 'auto', fontSize: '1.5rem', textAlign: 'center' }}>
            {/* {loading ? 'Loading...' : nextQuote} */}
            {nextQuote}
          </Typography>
          {error && <Typography sx={{textAlign:'center'}}>{error}</Typography>}
    
    <Button 
    // onClick={handleClick}
    onClick={fetchQuote}
    // disabled={loading}
     sx={{
      textTransform: "none",
      width: 'fit-content',
      marginInline: 'auto',
      backgroundColor: 'text.primary',
        color: 'background.default'
        ,padding: '.3rem',
        borderRadius: '.2rem'
    }}>
      {/* {nextQuoteBut} */}
      {loading ? 'Loading...' : nextQuoteBut}
    </Button>


   </Box>

      {/* <Box  sx={{
        marginTop: '1.5rem',
        backgroundColor: 'text.primary',
        color: 'background.default'
        ,padding: '.3rem',
        borderRadius: '.2rem'
       }}
        >Site is under construction!</Box> */}

 {/* <Drawers /> */}
 <Drawers onTheme={toggleTheme} />

      </Box>
    </ThemeProvider>
  );
}

export default App;
