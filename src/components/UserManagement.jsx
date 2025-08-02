"use client"

import { useState, useEffect } from "react"
import "./UserManagement.css"

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://127.0.0.1:8000/api/superadmin/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUsers(data.results || data)
      }
    } catch (error) {
      console.error("Foydalanuvchilarni olishda xato:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleToggleActive = async (userId) => {
    try {
      const token = localStorage.getItem("access_token")
      const response = await fetch(`http://127.0.0.1:8000/api/superadmin/users/${userId}/toggle_active/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.error("Foydalanuvchi holatini o'zgartirishda xato:", error)
    }
  }

  const handleDeleteUser = async (userId, username) => {
    if (window.confirm(`"${username}" foydalanuvchisini o'chirishni tasdiqlaysizmi?`)) {
      try {
        const token = localStorage.getItem("access_token")
        const response = await fetch(`http://127.0.0.1:8000/api/superadmin/users/${userId}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          fetchUsers()
        }
      } catch (error) {
        console.error("Foydalanuvchini o'chirishda xato:", error)
      }
    }
  }

  // Qidiruv va sahifalash
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  if (loading) {
    return (
      <div className="users-loading">
        <div className="spinner"></div>
        <p>Foydalanuvchilar yuklanmoqda...</p>
      </div>
    )
  }

  return (
    <div className="user-management">
      <div className="users-header">
        <h2>Foydalanuvchilar boshqaruvi</h2>
        <div className="users-actions">
          <div className="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" />
            </svg>
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="users-count">Jami: {filteredUsers.length} foydalanuvchi</div>
        </div>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Foydalanuvchi</th>
              <th>Email</th>
              <th>Holat</th>
              <th>Rol</th>
              <th>Ro'yxatdan o'tgan</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-info">
                    <div className="user-avatar">{user.first_name?.charAt(0) || user.username?.charAt(0) || "U"}</div>
                    <div className="user-details">
                      <div className="user-name">
                        {user.first_name} {user.last_name}
                      </div>
                      <div className="username">@{user.username}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`status-badge ${user.is_active ? "active" : "inactive"}`}>
                    {user.is_active ? "Faol" : "Nofaol"}
                  </span>
                </td>
                <td>
                  <div className="user-roles">
                    {user.is_superuser && <span className="role-badge superuser">Super</span>}
                    {user.is_staff && <span className="role-badge staff">Staff</span>}
                    {!user.is_staff && !user.is_superuser && <span className="role-badge user">User</span>}
                  </div>
                </td>
                <td>{new Date(user.date_joined).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className={`action-btn ${user.is_active ? "block" : "unblock"}`}
                      onClick={() => handleToggleActive(user.id)}
                      title={user.is_active ? "Bloklash" : "Blokdan chiqarish"}
                    >
                      {user.is_active ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                    </button>

                    <button className="action-btn edit" title="Tahrirlash">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11 4H4A2 2 0 0 0 2 6V20A2 2 0 0 0 4 22H18A2 2 0 0 0 20 20V13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M18.5 2.5A2.12 2.12 0 0 1 21 5L12 14L8 15L9 11L18.5 2.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>

                    <button
                      className="action-btn delete"
                      onClick={() => handleDeleteUser(user.id, user.username)}
                      title="O'chirish"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V6M8 6V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V6"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
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

export default UserManagement
