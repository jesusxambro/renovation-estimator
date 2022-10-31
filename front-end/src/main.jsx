import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>


  </React.StrictMode>
)
