import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from "react-router-dom";


//css
import "./assets/css/reset.css";
import "./assets/css/global.css";
import "./assets/css/variables.css";
import "./assets/css/header.css";
import "./assets/css/popup.css";
//Boxicon import in index.html


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
