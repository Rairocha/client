import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/auth.context.jsx'
import { PoliticianProvider } from './context/politicians.context.jsx'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PoliticianProvider>
          <App />
        </PoliticianProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
