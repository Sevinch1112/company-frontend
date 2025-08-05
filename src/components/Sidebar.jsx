"use client"

import "./Sidebar.css"

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: "overview", label: "Statistika", icon: "📊" },
    { id: "projects", label: "Loyihalar", icon: "💼" },
    { id: "news", label: "Yangiliklar", icon: "📰" },
    { id: "groups", label: "Jamoa", icon: "👥" },
  ]

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
