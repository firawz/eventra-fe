import React, { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout' // Import Layout
import HomePage from './pages/HomePage'
import LoginPage from './LoginPage'

function App(): ReactElement {
  return (
    <Layout>
      {/* Use Layout component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Layout>
  )
}

export default App
