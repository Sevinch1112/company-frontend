"use client"

import { useState, useEffect } from "react"
import "./StatsOverview.css"

const StatsOverview = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://127.0.0.1:8000/api/superadmin/stats/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error("Statistika olishda xato:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="stats-loading">
        <div className="spinner"></div>
        <p>Statistika yuklanmoqda...</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="stats-error">
        <p>Statistika ma'lumotlarini olishda xato yuz berdi</p>
        <button onClick={fetchStats} className="retry-button">
          Qaytadan urinish
        </button>
      </div>
    )
  }

  const statCards = [
    {
      title: "Umumiy xizmatlar",
      value: stats.total_services,
      subtitle: `${stats.active_services} faol`,
      icon: "🛠️",
      color: "blue",
    },
    {
      title: "Jamoa a'zolari",
      value: stats.total_team_members,
      subtitle: "Faol a'zolar",
      icon: "👥",
      color: "green",
    },
    {
      title: "Testimoniallar",
      value: stats.total_testimonials,
      subtitle: "Mijoz sharhlari",
      icon: "⭐",
      color: "yellow",
    },
    {
      title: "Xabarlar",
      value: stats.total_messages,
      subtitle: `${stats.new_messages} yangi`,
      icon: "💬",
      color: "purple",
    },
  ]

  return (
    <div className="stats-overview">
      <div className="stats-header">
        <h2>Statistika ko'rinishi</h2>
        <button onClick={fetchStats} className="refresh-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <polyline points="23,4 23,10 17,10" stroke="currentColor" strokeWidth="2" />
            <polyline points="1,20 1,14 7,14" stroke="currentColor" strokeWidth="2" />
            <path
              d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M22.88 14.36A9 9 0 0 1 8.51 18.36L23 14"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          Yangilash
        </button>
      </div>

      <div className="stats-cards">
        {statCards.map((card, index) => (
          <div key={index} className={`stat-card ${card.color}`}>
            <div className="stat-icon">{card.icon}</div>
            <div className="stat-content">
              <h3>{card.title}</h3>
              <div className="stat-value">{card.value}</div>
              <div className="stat-subtitle">{card.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-charts">
        <div className="chart-container">
          <h3>So'nggi xabarlar</h3>
          <div className="recent-messages">
            {stats.recent_messages.map((message, index) => (
              <div key={index} className="message-item">
                <div className="message-avatar">{message.name.charAt(0).toUpperCase()}</div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-name">{message.name}</span>
                    <span className={`message-status ${message.status}`}>{message.status}</span>
                  </div>
                  <div className="message-email">{message.email}</div>
                  <div className="message-text">{message.message}</div>
                  <div className="message-date">{new Date(message.submitted_at).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h3>Mashhur xizmatlar</h3>
          <div className="popular-services">
            {stats.popular_services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">🛠️</div>
                <div className="service-content">
                  <div className="service-name">{service.name}</div>
                  <div className="service-price">${service.price}</div>
                  <div className="service-date">{new Date(service.created_at).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverview
