import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from "./theme";
import './App.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
const Favourite = () => {
    const [quotes, setQuotes] = useState([]);
    const storedTheme = localStorage.getItem("theme");
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = storedTheme || (getSystemTheme() ? "darkTheme" : "lightTheme");
const [darkMode, setDarkMode] = useState(defaultTheme === "darkTheme");

   
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
          <Typography variant="div" className="logo" style={{ fontFamily: 'Pacifico-Regular ,Audiowide, Ruslan Display,Chelsea Market, sans-serif' }}>
          Quote me up!
        </Typography>
        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column', // Stack all boxes vertically
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    height: '100vh', // Full viewport height
    padding: '1rem', // Optional: Prevent content from touching edges
  }}
>
<Typography variant='h4'>Liked quotes</Typography>
  {quotes.map((quote, index) => (
    <Box
      key={index}
      sx={{
        border: '2px solid',
        borderColor: 'text.primary',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign:'center',
        width: '80%', // Adjust for responsiveness
        maxWidth: '600px', // Optional: Limit box width
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
        }}
        onClick={() => removeQuoteById(quote.id)}
      />
    </Box>
  ))}
</Box>
     </ThemeProvider>
  );
};

export default Favourite;
