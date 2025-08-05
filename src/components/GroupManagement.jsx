"use client"

import { useState, useEffect } from "react"
import "./GroupManagement.css"

const GroupManagement = () => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingGroup, setEditingGroup] = useState(null)
  const [formData, setFormData] = useState({
    full_name: "",
    position: "",
    linkedin: "",
    photo: null,
  })

  useEffect(() => {
    fetchGroups()
  }, [])

  const fetchGroups = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://192.168.100.10:8000/api/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      setGroups(data)
    } catch (error) {
      console.error("Jamoa a'zolarini yuklashda xatolik:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("access_token")
    const formDataToSend = new FormData()

    formDataToSend.append("full_name", formData.full_name)
    formDataToSend.append("position", formData.position)
    formDataToSend.append("linkedin", formData.linkedin)

    if (formData.photo) {
      formDataToSend.append("photo", formData.photo)
    }

    try {
      const url = editingGroup
        ? `http://192.168.100.10:8000/api/groups/${editingGroup.id}/`
        : "http://192.168.100.10:8000/api/groups/"

      const method = editingGroup ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })

      if (response.ok) {
        fetchGroups()
        setShowModal(false)
        setEditingGroup(null)
        setFormData({ full_name: "", position: "", linkedin: "", photo: null })
      }
    } catch (error) {
      console.error("Jamoa a'zosini saqlashda xatolik:", error)
    }
  }

  const handleEdit = (group) => {
    setEditingGroup(group)
    setFormData({
      full_name: group.full_name,
      position: group.position,
      linkedin: group.linkedin || "",
      photo: null,
    })
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Jamoa a'zosini o'chirishni xohlaysizmi?")) {
      try {
        const token = localStorage.getItem("access_token")
        const response = await fetch(`http://192.168.100.10:8000/api/groups/${id}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          fetchGroups()
        }
      } catch (error) {
        console.error("Jamoa a'zosini o'chirishda xatolik:", error)
      }
    }
  }

  const openModal = () => {
    setEditingGroup(null)
    setFormData({ full_name: "", position: "", linkedin: "", photo: null })
    setShowModal(true)
  }

  if (loading) return <div className="loading">Yuklanmoqda...</div>

  return (
    <div className="group-management">
      <div className="section-header">
        <h2>Jamoa boshqaruvi</h2>
        <button className="btn-primary" onClick={openModal}>
          Yangi a'zo qo'shish
        </button>
      </div>

      <div className="groups-grid">
        {groups.map((group) => (
          <div key={group.id} className="group-card">
            {group.photo && (
              <img src={group.photo || "/placeholder.svg"} alt={group.full_name} className="group-photo" />
            )}
            <div className="group-content">
              <h3>{group.full_name}</h3>
              <p className="group-position">{group.position}</p>
              {group.linkedin && (
                <a href={group.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn profili
                </a>
              )}
              <div className="group-actions">
                <button className="btn-edit" onClick={() => handleEdit(group)}>
                  Tahrirlash
                </button>
                <button className="btn-delete" onClick={() => handleDelete(group.id)}>
                  O'chirish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{editingGroup ? "A'zoni tahrirlash" : "Yangi a'zo qo'shish"}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>To'liq ismi</label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Lavozimi</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>LinkedIn (ixtiyoriy)</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Rasm</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                  Bekor qilish
                </button>
                <button type="submit" className="btn-primary">
                  {editingGroup ? "Yangilash" : "Qo'shish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default GroupManagement
