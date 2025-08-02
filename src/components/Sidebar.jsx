"use client"
import "./Sidebar.css"

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    {
      id: "overview",
      label: "Statistika",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "users",
      label: "Foydalanuvchilar",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19A4 4 0 0 0 13 15H5A4 4 0 0 0 1 19V21" stroke="currentColor" strokeWidth="2" />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M23 21V19A4 4 0 0 0 16 13.13" stroke="currentColor" strokeWidth="2" />
          <path d="M16 3.13A4 4 0 0 1 16 11" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "logs",
      label: "Harakatlar tarixi",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" />
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
          <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ]

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {isOpen && <span className="logo-text">Admin</span>}
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
            title={!isOpen ? item.label : ""}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
