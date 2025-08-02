"use client"

import { useState, useEffect } from "react"
import "./ActionLogs.css"

const ActionLogs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    action: "all",
    user: "all",
    search: "",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [logsPerPage] = useState(15)

  useEffect(() => {
    fetchLogs()
  }, [filters])

  const fetchLogs = async () => {
    try {
      const token = localStorage.getItem("access_token")
      let url = "http://127.0.0.1:8000/api/superadmin/logs/"

      const params = new URLSearchParams()
      if (filters.action !== "all") params.append("action", filters.action)
      if (filters.user !== "all") params.append("user_id", filters.user)

      if (params.toString()) {
        url += `?${params.toString()}`
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setLogs(data.results || data)
      }
    } catch (error) {
      console.error("Loglarni olishda xato:", error)
    } finally {
      setLoading(false)
    }
  }

  const getActionColor = (action) => {
    const colors = {
      CREATE: "green",
      UPDATE: "blue",
      DELETE: "red",
      LOGIN: "purple",
      LOGOUT: "gray",
      ACTIVATE: "emerald",
      DEACTIVATE: "orange",
      RESPOND: "indigo",
    }
    return colors[action] || "gray"
  }

  const getActionIcon = (action) => {
    const icons = {
      CREATE: "➕",
      UPDATE: "✏️",
      DELETE: "🗑️",
      LOGIN: "🔑",
      LOGOUT: "🚪",
      ACTIVATE: "✅",
      DEACTIVATE: "❌",
      RESPOND: "💬",
    }
    return icons[action] || "📝"
  }

  // Qidiruv va sahifalash
  const filteredLogs = logs.filter(
    (log) =>
      log.user_username.toLowerCase().includes(filters.search.toLowerCase()) ||
      log.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      (log.target_model && log.target_model.toLowerCase().includes(filters.search.toLowerCase())),
  )

  const indexOfLastLog = currentPage * logsPerPage
  const indexOfFirstLog = indexOfLastLog - logsPerPage
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog)
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage)

  const exportLogs = () => {
    const csvContent = [
      ["Sana-vaqt", "Foydalanuvchi", "Amal", "Maqsad", "Tavsif", "IP Address"].join(","),
      ...filteredLogs.map((log) =>
        [
          new Date(log.timestamp).toLocaleString(),
          log.user_username,
          log.action,
          log.target_model || "",
          log.description.replace(/,/g, ";"),
          log.ip_address || "",
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `action-logs-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="logs-loading">
        <div className="spinner"></div>
        <p>Loglar yuklanmoqda...</p>
      </div>
    )
  }

  return (
    <div className="action-logs">
      <div className="logs-header">
        <h2>Harakatlar tarixi</h2>
        <div className="logs-actions">
          <button onClick={exportLogs} className="export-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" strokeWidth="2" />
              <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
            </svg>
            Export
          </button>
          <button onClick={fetchLogs} className="refresh-button">
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
      </div>

      <div className="logs-filters">
        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" />
          </svg>
          <input
            type="text"
            placeholder="Qidirish..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        <select
          value={filters.action}
          onChange={(e) => setFilters({ ...filters, action: e.target.value })}
          className="filter-select"
        >
          <option value="all">Barcha amallar</option>
          <option value="CREATE">Yaratish</option>
          <option value="UPDATE">Yangilash</option>
          <option value="DELETE">O'chirish</option>
          <option value="LOGIN">Kirish</option>
          <option value="LOGOUT">Chiqish</option>
          <option value="ACTIVATE">Faollashtirish</option>
          <option value="DEACTIVATE">O'chirish</option>
          <option value="RESPOND">Javob berish</option>
        </select>

        <div className="logs-count">Jami: {filteredLogs.length} log</div>
      </div>

      <div className="logs-table-container">
        <table className="logs-table">
          <thead>
            <tr>
              <th>Sana-vaqt</th>
              <th>Foydalanuvchi</th>
              <th>Amal</th>
              <th>Maqsad</th>
              <th>Tavsif</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map((log) => (
              <tr key={log.id}>
                <td>
                  <div className="timestamp">
                    <div className="date">{new Date(log.timestamp).toLocaleDateString()}</div>
                    <div className="time">{new Date(log.timestamp).toLocaleTimeString()}</div>
                  </div>
                </td>
                <td>
                  <div className="user-info">
                    <div className="user-avatar">{log.user_username.charAt(0).toUpperCase()}</div>
                    <div className="user-details">
                      <div className="username">{log.user_username}</div>
                      <div className="email">{log.user_email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`action-badge ${getActionColor(log.action)}`}>
                    <span className="action-icon">{getActionIcon(log.action)}</span>
                    {log.action}
                  </span>
                </td>
                <td>
                  {log.target_model && (
                    <div className="target-info">
                      <span className="target-model">{log.target_model}</span>
                      {log.target_id && <span className="target-id">#{log.target_id}</span>}
                    </div>
                  )}
                </td>
                <td>
                  <div className="description" title={log.description}>
                    {log.description}
                  </div>
                </td>
                <td>
                  <span className="ip-address">{log.ip_address || "N/A"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sahifalash */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polyline points="15,18 9,12 15,6" stroke="currentColor" strokeWidth="2" />
            </svg>
            Oldingi
          </button>

          <div className="pagination-info">
            {currentPage} / {totalPages}
          </div>

          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Keyingi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polyline points="9,18 15,12 9,6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default ActionLogs
