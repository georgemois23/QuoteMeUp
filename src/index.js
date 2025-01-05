import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate,useLocation } from 'react-router-dom';
import Favorite from './Favorites';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
          <Route
            path="/"
            element={ <App />}
            // element={<FirstLand OnEnter={handleEnter} />}
          />
          <Route
            path="/favorites"
            element={ <Favorite />}
            // element={<FirstLand OnEnter={handleEnter} />}
          />
   </Routes>
   </Router>
  </React.StrictMode>
);


reportWebVitals();
