"use client"

import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import StatsOverview from "./StatsOverview"
import UserManagement from "./UserManagement"
import ActionLogs from "./ActionLogs"
import "./Dashboard.css"

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("overview")
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user_data")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("user_data")
    onLogout()
  }

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className={`main-content ${!sidebarOpen ? "sidebar-closed" : ""}`}>
        <header className="dashboard-header">
          <div className="header-left">
            <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <h1>SuperAdmin Panel</h1>
          </div>

          <div className="header-right">
            <div className="user-info">
              <div className="user-avatar">{user?.first_name?.charAt(0) || user?.username?.charAt(0) || "A"}</div>
              <div className="user-details">
                <span className="user-name">
                  {user?.first_name} {user?.last_name}
                </span>
                <span className="user-role">SuperAdmin</span>
              </div>
            </div>

            <button className="logout-button" onClick={handleLogout}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H9" stroke="currentColor" strokeWidth="2" />
                <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
              Chiqish
            </button>
          </div>
        </header>

        <main className="dashboard-main">
          {activeTab === "overview" && <StatsOverview />}
          {activeTab === "users" && <UserManagement />}
          {activeTab === "logs" && <ActionLogs />}
        </main>
      </div>
    </div>
  )
}

export default Dashboard

