"use client"

import { useState, useEffect } from "react"
import "./StatsOverview.css"

const StatsOverview = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://192.168.100.10:8000/api/stats/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Statistikani yuklashda xatolik")
      }

      const data = await response.json()
      setStats(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="loading">Yuklanmoqda...</div>
  if (error) return <div className="error">Xatolik: {error}</div>

  return (
    <div className="stats-overview">
      <h2>Statistika</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💼</div>
          <div className="stat-content">
            <h3>Loyihalar</h3>
            <p className="stat-number">{stats?.projects_count || 0}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📰</div>
          <div className="stat-content">
            <h3>Yangiliklar</h3>
            <p className="stat-number">{stats?.news_count || 0}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Jamoa a'zolari</h3>
            <p className="stat-number">{stats?.groups_count || 0}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-content">
            <h3>Foydalanuvchilar</h3>
            <p className="stat-number">{stats?.users_count || 0}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverview
