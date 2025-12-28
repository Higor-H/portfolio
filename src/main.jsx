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
import 'boxicons/css/boxicons.min.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element '#root' not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
