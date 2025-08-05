"use client"
import { useState, useEffect } from "react"
import "./Style/home.css"

function Home() {
  const [companydata, setCompanyData] = useState([])
  const [blogs, setBlogs] = useState([])
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch("http://192.168.100.10:8000/api/projects/"),
      fetch("http://192.168.100.10:8000/api/news/"),
      fetch("http://192.168.100.10:8000/api/groups/")
    ])
      .then(async ([projectsRes, blogsRes, teamRes]) => {
        if (!projectsRes.ok || !blogsRes.ok || !teamRes.ok) {
          throw new Error("Ma'lumotlarni olishda xatolik yuz berdi")
        }
        const projectsData = await projectsRes.json()
        const blogsData = await blogsRes.json()
        const teamData = await teamRes.json()
        
        setCompanyData(projectsData)
        setBlogs(blogsData)
        setTeam(teamData)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h2>Yuklanmoqda...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>❌ {error}</h2>
        <button onClick={() => window.location.reload()}>Qayta urinish</button>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2>TechCorp</h2>
            </div>
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                Kompaniya
              </a>
              <a href="#portfolio" className="nav-link" onClick={() => scrollToSection('portfolio')}>
                Loyihalar
              </a>
              <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>
                Xizmatlar
              </a>
              <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                Kontaktlar
              </a>
            </nav>
            <div className="header-contact">
              <span className="phone">+998 99 123 45 67</span>
              <button className="cta-button" onClick={() => scrollToSection('contact')}>
                Bog'lanish
              </button>
            </div>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="highlight">Zamonaviy</span> veb-saytlar va 
                <span className="highlight"> ilovalar</span> yaratamiz
              </h1>
              <p className="hero-description">
                Professional jamoamiz bilan biznesingizni raqamli olamda yangi bosqichga olib chiqing. 
                Innovatsion yechimlar va zamonaviy texnologiyalar yordamida muvaffaqiyatga erishing.
              </p>
              <div className="hero-buttons">
                <button className="hero-button primary" onClick={() => scrollToSection('portfolio')}>
                  Loyihalarni ko'rish
                </button>
                <button className="hero-button secondary" onClick={() => scrollToSection('contact')}>
                  Biz bilan bog'lanish
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image">
                <div className="floating-card card-1">
                  <div className="card-icon">💻</div>
                  <span>Web Development</span>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">📱</div>
                  <span>Mobile Apps</span>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🎨</div>
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="stats">
        <div className="container">
          <div className="stats-content">
            <div className="stats-text">
              <h2 className="section-title">Kompaniya haqida</h2>
              <p>
                Bizning kompaniyamiz 5 yildan ortiq vaqt davomida raqamli yechimlar sohasida faoliyat yuritadi. 
                Biz mijozlarimizning ehtiyojlarini tushunib, ularning biznesini rivojlantirishga yordam beramiz.
              </p>
              <p>
                Har bir loyiha uchun individual yondashuv va zamonaviy texnologiyalardan foydalanish 
                bizning asosiy tamoyillarimizdir.
              </p>
              <div className="stats-features">
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Professional jamoa</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Zamonaviy texnologiyalar</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>24/7 qo'llab-quvvatlash</span>
                </div>
              </div>
            </div>
            <div className="stats-numbers">
              <div className="stat-item">
                <span className="stat-number" data-count="5">0</span>
                <span className="stat-label">Yil tajriba</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="100">0</span>
                <span className="stat-label">Muvaffaqiyatli loyihalar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="15">0</span>
                <span className="stat-label">Mutaxassislar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="50">0</span>
                <span className="stat-label">Mamnun mijozlar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Bizning afzalliklarimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🎯</span>
                </div>
              </div>
              <h3>Individual yondashuv</h3>
              <p>
                Har bir mijoz uchun maxsus yechimlar ishlab chiqamiz va ularning biznes ehtiyojlarini hisobga olamiz.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>⚡️</span>
                </div>
              </div>
              <h3>Tezkorlik</h3>
              <p>Loyihalarni belgilangan muddatlarda sifatli va tezkor tarzda amalga oshiramiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🚀</span>
                </div>
              </div>
              <h3>Professional xizmat</h3>
              <p>Zamonaviy texnologiyalar va eng so'nggi trendlardan foydalanib professional xizmat ko'rsatamiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🛡️</span>
                </div>
              </div>
              <h3>Xavfsizlik</h3>
              <p>Barcha loyihalarimizda yuqori darajadagi xavfsizlik standartlarini ta'minlaymiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>💡</span>
                </div>
              </div>
              <h3>Innovatsiya</h3>
              <p>Eng so'nggi texnologiyalar va innovatsion yechimlardan foydalanib ishlaymiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🤝</span>
                </div>
              </div>
              <h3>Hamkorlik</h3>
              <p>Mijozlarimiz bilan uzoq muddatli va ishonchli hamkorlik o'rnatishga intilamiz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Bizning loyihalarimiz</h2>
          <div className="portfolio-grid">
            {companydata.map((item, index) => (
              <div key={item.id} className="portfolio-item" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="portfolio-image">
                  <img src={item.images || "/placeholder.svg?height=300&width=400"} alt={item.name} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        Loyihani ko'rish →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">Bizning xizmatlar</h2>
          <div className="additional-services-grid">
            <div className="additional-service-item">
              <div className="service-icon-small">🌐</div>
              <h4>Veb saytlar</h4>
              <p>Zamonaviy va responsive veb-saytlar yaratamiz</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">📱</div>
              <h4>UX/UI Dizayn</h4>
              <p>Foydalanuvchi tajribasini yaxshilaydigan dizaynlar</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">💼</div>
              <h4>Mobil ilovalar</h4>
              <p>iOS va Android uchun mobil ilovalar ishlab chiqamiz</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">🎨</div>
              <h4>SMM</h4>
              <p>Ijtimoiy tarmoqlarda marketing va reklama</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">📊</div>
              <h4>Grafik dizayn</h4>
              <p>Professional grafik dizayn xizmatlari</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">🔧</div>
              <h4>Texnik qo'llab-quvvatlash</h4>
              <p>24/7 texnik yordam va qo'llab-quvvatlash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <h2 className="section-title">Blog yangilikalarimiz</h2>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="blog-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="blog-image">
                  <img src={blog.images || "/placeholder.svg?height=200&width=300"} alt={blog.name} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {new Date(blog.created_at).toLocaleDateString('uz-UZ')}
                  </span>
                  <h4>{blog.name}</h4>
                  <p>{blog.description}</p>
                  <button className="blog-read-more">Batafsil o'qish</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Bizning jamoa</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.id} className="team-member" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="team-image">
                  <img src={member.photo || "/placeholder.svg?height=300&width=300"} alt={member.full_name} />
                  <div className="team-overlay">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
                <div className="team-info">
                  <h4>{member.full_name}</h4>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Biz bilan bog'laning</h2>
              <p>
                Loyihangiz haqida gaplashish va bepul maslahat olish uchun quyidagi aloqa ma'lumotlaridan foydalaning.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <span>Telefon raqami:</span>
                    <p>+998 99 123 45 67</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <span>Email:</span>
                    <p>info@techcorp.uz</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <span>Manzil:</span>
                    <p>Toshkent, O'zbekiston</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div>
                    <span>Telegram:</span>
                    <p>@techcorp_uz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-awards">
              <h3>NIMA UCHUN BIZNI TANLAYSIZ?</h3>
              <div className="awards-grid">
                <div className="award-item">
                  <div className="award-icon gold">🏆</div>
                  <span>Sifat kafolati</span>
                </div>
                <div className="award-item">
                  <div className="award-icon silver">🥈</div>
                  <span>Tezkor yetkazib berish</span>
                </div>
                <div className="award-item">
                  <div className="award-icon bronze">🥉</div>
                  <span>Arzon narxlar</span>
                </div>
                <div className="award-item">
                  <div className="award-icon red">⭐</div>
                  <span>24/7 qo'llab-quvvatlash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h3>TechCorp</h3>
                <p>Raqamli kelajakni bugun yaratamiz</p>
              </div>
            </div>
            <div className="footer-section">
              <h4>Xizmatlar</h4>
              <ul>
                <li><a href="#services">Veb saytlar</a></li>
                <li><a href="#services">Mobil ilovalar</a></li>
                <li><a href="#services">UI/UX Dizayn</a></li>
                <li><a href="#services">SMM</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Kompaniya</h4>
              <ul>
                <li><a href="#about">Biz haqimizda</a></li>
                <li><a href="#portfolio">Loyihalar</a></li>
                <li><a href="#team">Jamoa</a></li>
                <li><a href="#contact">Kontaktlar</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Bog'lanish</h4>
              <div className="footer-contact">
                <p>📞 +998 99 123 45 67</p>
                <p>📧 info@techcorp.uz</p>
                <p>📍 Toshkent, O'zbekiston</p>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Telegram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TechCorp. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
