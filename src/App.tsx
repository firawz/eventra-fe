import React, { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout' // Import Layout
import HomePage from './pages/HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage' // Import RegisterPage
import DashboardAdminPage from './pages/DashboardAdminPage' // Import DashboardAdminPage

function App(): ReactElement {
  return (
    <Layout>
      {/* Use Layout component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />{' '}
        {/* Add RegisterPage route */}
        <Route path="/dashboard-admin" element={<DashboardAdminPage />} />{' '}
        {/* Add DashboardAdminPage route */}
        {/* Add other routes here as needed */}
      </Routes>
    </Layout>
  )
}

export default App
