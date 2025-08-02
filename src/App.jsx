"use client"

import { useState, useEffect } from "react"
import LoginForm from "./components/LoginForm"
import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    if (token) {
      // Token mavjudligini tekshirish
      fetch("http://127.0.0.1:8000/api/superadmin/stats/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setIsAuthenticated(true)
          } else {
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
          }
        })
        .catch(() => {
          localStorage.removeItem("access_token")
          localStorage.removeItem("refresh_token")
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Yuklanmoqda...</p>
      </div>
    )
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <LoginForm onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  )
}

export default App
