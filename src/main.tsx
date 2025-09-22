import React from 'react'
import './App.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom' // Removed Route, Routes
import { createRoot } from 'react-dom/client'
// Removed LoginPage import as it's now handled in App.tsx

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Render App directly */}
    </BrowserRouter>
  </React.StrictMode>
)
