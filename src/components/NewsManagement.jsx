"use client"

import { useState, useEffect } from "react"
import "./NewsManagement.css"

const NewsManagement = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    images: null,
  })

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://192.168.100.10:8000/api/news/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.error("Yangiliklarni yuklashda xatolik:", error)
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

    if (formData.images) {
      formDataToSend.append("images", formData.images)
    }

    try {
      const url = editingNews
        ? `http://192.168.100.10:8000/api/news/${editingNews.id}/`
        : "http://192.168.100.10:8000/api/news/"

      const method = editingNews ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })

      if (response.ok) {
        fetchNews()
        setShowModal(false)
        setEditingNews(null)
        setFormData({ name: "", description: "", images: null })
      }
    } catch (error) {
      console.error("Yanglikni saqlashda xatolik:", error)
    }
  }

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem)
    setFormData({
      name: newsItem.name,
      description: newsItem.description,
      images: null,
    })
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Yanglikni o'chirishni xohlaysizmi?")) {
      try {
        const token = localStorage.getItem("access_token")
        const response = await fetch(`http://192.168.100.10:8000/api/news/${id}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          fetchNews()
        }
      } catch (error) {
        console.error("Yanglikni o'chirishda xatolik:", error)
      }
    }
  }

  const openModal = () => {
    setEditingNews(null)
    setFormData({ name: "", description: "", images: null })
    setShowModal(true)
  }

  if (loading) return <div className="loading">Yuklanmoqda...</div>

  return (
    <div className="news-management">
      <div className="section-header">
        <h2>Yangiliklar boshqaruvi</h2>
        <button className="btn-primary" onClick={openModal}>
          Yangi yangilik qo'shish
        </button>
      </div>

      <div className="news-grid">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="news-card">
            {newsItem.images && (
              <img src={newsItem.images || "/placeholder.svg"} alt={newsItem.name} className="news-image" />
            )}
            <div className="news-content">
              <h3>{newsItem.name}</h3>
              <p>{newsItem.description}</p>
              <div className="news-date">{new Date(newsItem.created_at).toLocaleDateString("uz-UZ")}</div>
              <div className="news-actions">
                <button className="btn-edit" onClick={() => handleEdit(newsItem)}>
                  Tahrirlash
                </button>
                <button className="btn-delete" onClick={() => handleDelete(newsItem.id)}>
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
              <h3>{editingNews ? "Yanglikni tahrirlash" : "Yangi yangilik qo'shish"}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Yangilik sarlavhasi</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Matn</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                  {editingNews ? "Yangilash" : "Qo'shish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsManagement
