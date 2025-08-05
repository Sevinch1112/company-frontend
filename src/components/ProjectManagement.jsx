"use client"

import { useState, useEffect } from "react"
import "./ProjectManagement.css"

const ProjectManagement = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    images: null,
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://192.168.100.10:8000/api/projects/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error("Loyihalarni yuklashda xatolik:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("access_token")
    const formDataToSend = new FormData()

    formDataToSend.append("name", formData.name)
    formDataToSend.append("description", formData.description)
    formDataToSend.append("link", formData.link)

    if (formData.images) {
      formDataToSend.append("images", formData.images)
    }

    try {
      const url = editingProject
        ? `http://192.168.100.10:8000/api/projects/${editingProject.id}/`
        : "http://192.168.100.10:8000/api/projects/"

      const method = editingProject ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })

      if (response.ok) {
        fetchProjects()
        setShowModal(false)
        setEditingProject(null)
        setFormData({ name: "", description: "", link: "", images: null })
      }
    } catch (error) {
      console.error("Loyihani saqlashda xatolik:", error)
    }
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setFormData({
      name: project.name,
      description: project.description,
      link: project.link,
      images: null,
    })
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Loyihani o'chirishni xohlaysizmi?")) {
      try {
        const token = localStorage.getItem("access_token")
        const response = await fetch(`http://192.168.100.10:8000/api/projects/${id}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          fetchProjects()
        }
      } catch (error) {
        console.error("Loyihani o'chirishda xatolik:", error)
      }
    }
  }

  const openModal = () => {
    setEditingProject(null)
    setFormData({ name: "", description: "", link: "", images: null })
    setShowModal(true)
  }

  if (loading) return <div className="loading">Yuklanmoqda...</div>

  return (
    <div className="project-management">
      <div className="section-header">
        <h2>Loyihalar boshqaruvi</h2>
        <button className="btn-primary" onClick={openModal}>
          Yangi loyiha qo'shish
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.images && (
              <img src={project.images || "/placeholder.svg"} alt={project.name} className="project-image" />
            )}
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Loyihani ko'rish
              </a>
              <div className="project-actions">
                <button className="btn-edit" onClick={() => handleEdit(project)}>
                  Tahrirlash
                </button>
                <button className="btn-delete" onClick={() => handleDelete(project.id)}>
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
              <h3>{editingProject ? "Loyihani tahrirlash" : "Yangi loyiha qo'shish"}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Loyiha nomi</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tavsif</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Havola</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Rasm</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, images: e.target.files[0] })}
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                  Bekor qilish
                </button>
                <button type="submit" className="btn-primary">
                  {editingProject ? "Yangilash" : "Qo'shish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectManagement
