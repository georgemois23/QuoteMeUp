import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from "./theme";
import './App.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import { Navigate, useNavigate } from 'react-router-dom';

const Favourite = () => {
   const navigate = useNavigate();

   const goBack = () => {
    navigate('/');

  }

  const handleLogo = () => {
      navigate('/')
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
  
    const [quotes, setQuotes] = useState([]);
    const storedTheme = localStorage.getItem("theme");
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = storedTheme || (getSystemTheme() ? "darkTheme" : "lightTheme");
const [darkMode, setDarkMode] = useState(defaultTheme === "darkTheme");

const [showLogo, setShowLogo] = useState(true); // State to manage logo visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [scrollingDown, setScrollingDown] = useState(false); // Track if scrolling down
  const threshold = 50; // Scroll distance threshold (in pixels) to hide/show the logo

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > threshold) {
        // Scrolling down and passed threshold
        setScrollingDown(true);
      } else if (window.scrollY < lastScrollY && window.scrollY > threshold) {
        // Scrolling up and passed threshold
        setScrollingDown(false);
      }

      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

function removeQuoteById(idToRemove) {
  // Step 1: Retrieve the quotes array from localStorage
  const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  
  // Step 2: Filter out the object with the matching ID
  const updatedQuotes = storedQuotes.filter(quote => quote.id !== idToRemove);
  
  // Step 3: Save the updated array back to localStorage
  localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
  setQuotes(updatedQuotes);
}

    useEffect(() => {
      // Retrieve messages from sessionStorage
      const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
      setQuotes(storedQuotes);
    }, []);
  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
  <CssBaseline />
  {/* Logo */}
  <Typography
    variant="div"
    className="logso"
    sx={{
      fontFamily: 'Pacifico-Regular, Audiowide, Ruslan Display, Chelsea Market, sans-serif',
      textAlign: 'center',
      position:'fixed',
      fontSize:'1.35rem',
      marginBottom: '1rem',
      transition: 'top 0.8s', // Smooth transition for the top property
      top: scrollingDown ? '-100px' : '0rem',
      backgroundColor:'background.default',
      width: '100%',
     zIndex: '1000',
     height: '3rem',
     paddingTop:'.3rem'

    }}
  >
    Quote me up!
  </Typography>

  {/* Scrollable container */}
  <Box
    sx={{
      height: '100%', // Full viewport height
      
      overflowY: 'auto', // Enable vertical scrolling
      padding: '1rem', // Add spacing around
      display: 'flex',
      marginTop:'4rem',
      flexDirection: 'column', // Stack elements vertically
      alignItems: 'center', // Center items horizontally
    }}
  >
    {/* Title */}
    <Typography variant="h4" fontFamily={'Chelsea Market'} textAlign="center" marginBottom="1rem">
      {quotes.length === 0 ? "You haven't liked any quotes yet :(" : 'Liked quotes'}
    </Typography>

    {/* Quotes */}
    {quotes.map((quote, index) => (
      <Box
        key={index}
        sx={{
          border: '2px solid',
          borderColor: 'text.primary',
          margin: '1rem 0', // Vertical spacing
          padding: '1rem',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          textAlign: 'center',
          width: '80%', // Adjust for responsiveness
          maxWidth: '600px', // Limit box width
          backgroundColor: 'background.color',
        }}
      >
        <blockquote>“{quote.quote}”</blockquote>
        <footer>- {quote.author || "Unknown"} -</footer>
        <ClearIcon
          sx={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          onClick={() => removeQuoteById(quote.id)}
        />
      </Box>
    ))}
  </Box>

  {/* Home Icon */}
  <HomeIcon
    onClick={goBack}
    sx={{
      position: 'fixed',
      bottom: '.5rem',
      right: '.3rem',
      fontSize: '40px',
      cursor: 'pointer',
    }}
  />
</ThemeProvider>

  );
};

export default Favourite;
