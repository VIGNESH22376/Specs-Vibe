import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Import slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Importing Aos
import 'aos/dist/aos.css'
import 'aos/dist/aos.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <App />
  </>
);

reportWebVitals();
