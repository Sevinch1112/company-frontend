import { useEffect, useState } from "react"
import "./style/home.css"

function Home() {

  const [companydata,setCompanyData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    fetch('')
    .then((response) => {
        if (!response.ok) {
          throw new Error("Backendda muammo yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        setCompanyData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  //   .then((response)) => 
  //     if(!response.ok) {
  //       setError("Backendda") }
  //     return response.json()
  //   })
  // .then ((data) => {
  //   setCompanyData(data)
  //   setLoading(false)
  // })
  // .catch((err)) => {
  //   setError(err.message)
  // }, [])

  if(!loading) {
    <h1>Yuklanmoqda...</h1>
  }
  if (!error) {
    <h1>Malumotlarni olishda xato</h1>
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Logo</div>
          <nav className="nav">
            <a href="#" className="nav-link">
              Bosh sahifa
            </a>
            <a href="#" className="nav-link">
              Loyihalar
            </a>
            <a href="#" className="nav-link">
              Biz haqimizda
            </a>
            <a href="#" className="nav-link">
              Xizmatlar
            </a>
          </nav>
          <div className="header-contact">
            <span className="phone">+998 97 777 77</span>
            <button className="contact-btn">Bog'lanish</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Biz veb-saytlar, ilovalarni ishlab chiqamiz</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button className="cta-btn">Batafsil</button>
            </div>
            <div className="hero-circle"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-content">
            <div className="stats-text">
              <h2>Kompaniya haqida</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">4 yillik tajriba</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">4 yillik tajriba</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Bizning xizmatlarimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Saytlar yaratamiz</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Dizaynlar</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Professional xizmat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Saytlar yaratamiz</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Dizaynlar</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Professional xizmat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title">Bizlardan loyihalarimiz</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Project 1" />
              <div className="portfolio-overlay">
                <h4>LOYIHALAR NOMI YOZILADI</h4>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Project 2" />
              <div className="portfolio-overlay">
                <h4>LOYIHALAR NOMI YOZILADI</h4>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Project 3" />
              <div className="portfolio-overlay">
                <h4>LOYIHALAR NOMI YOZILADI</h4>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Project 4" />
              <div className="portfolio-overlay">
                <h4>LOYIHALAR NOMI YOZILADI</h4>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Project 5" />
              <div className="portfolio-overlay">
                <h4>LOYIHALAR NOMI YOZILADI</h4>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Project 6" />
              <div className="portfolio-overlay">
                <h4>LOYIHALAR NOMI YOZILADI</h4>
              </div>
            </div>
          </div>
          <button className="view-all-btn">Barchasini ko'rish</button>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">Bizning xizmatlar</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon blue">📱</div>
              <h3>Veb saytlar</h3>
              <p>Professional veb saytlar yaratamiz</p>
            </div>
            <div className="service-card">
              <div className="service-icon red">🎨</div>
              <h3>UX/UI Dizayn</h3>
              <p>Zamonaviy dizaynlar yaratamiz</p>
            </div>
            <div className="service-card">
              <div className="service-icon yellow">📱</div>
              <h3>Mobil ilovalar</h3>
              <p>iOS va Android ilovalar</p>
            </div>
            <div className="service-card">
              <div className="service-icon green">💻</div>
              <h3>SMM</h3>
              <p>Ijtimoiy tarmoqlar boshqaruvi</p>
            </div>
            <div className="service-card">
              <div className="service-icon purple">📊</div>
              <h3>Grafik dizayn</h3>
              <p>Kreativ grafik dizaynlar</p>
            </div>
            <div className="service-card">
              <div className="service-icon orange">🚀</div>
              <h3>Mobil dizayn</h3>
              <p>Mobil uchun optimallashtirilgan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <h2 className="section-title">Blog yangilikalarimiz</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Blog 1" />
              <div className="blog-content">
                <h3>Blog sarlavhasi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <div className="blog-meta">
                  <span>📅 12 Dekabr</span>
                  <span>👁 1.2k</span>
                </div>
              </div>
            </article>
            <article className="blog-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Blog 2" />
              <div className="blog-content">
                <h3>Blog sarlavhasi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <div className="blog-meta">
                  <span>📅 10 Dekabr</span>
                  <span>👁 856</span>
                </div>
              </div>
            </article>
            <article className="blog-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Blog 3" />
              <div className="blog-content">
                <h3>Blog sarlavhasi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <div className="blog-meta">
                  <span>📅 8 Dekabr</span>
                  <span>👁 2.1k</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Bizning jamoa</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Team Member 1" />
              <h4>Sardorbek Boboyev</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Team Member 2" />
              <h4>Sardorbek Boboyev</h4>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Team Member 3" />
              <h4>Sardorbek Boboyev</h4>
              <p>Backend Developer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Team Member 4" />
              <h4>Sardorbek Boboyev</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>
                Sayt bo'yicha qo'shimcha ma'lumot olishingiz uchun quyidagi raqamlar bilan bog'lanishingiz mumkin:
              </h3>
              <div className="footer-contact">
                <div className="contact-item">
                  <span>📞 +998 97 777 77 77</span>
                </div>
                <div className="contact-item">
                  <span>📧 info@company.uz</span>
                </div>
              </div>
              <div className="footer-question">
                <h4>Qanday savollaringiz loyihalarimiz bo'yicha?</h4>
                <ul>
                  <li>✓ SMM xizmat</li>
                  <li>✓ Grafik dizayn</li>
                  <li>✓ Veb sayt yaratish</li>
                  <li>✓ Logotip va brendbook</li>
                  <li>✓ Mobil ilovalar</li>
                  <li>✓ UX/UI dizayn</li>
                  <li>✓ SEO xizmati</li>
                  <li>✓ SMM xizmat</li>
                </ul>
              </div>
            </div>
            <div className="footer-right">
              <h4>NIMLAR KERAK BO'LADI?</h4>
              <div className="service-icons">
                <div className="service-icon-item">
                  <div className="icon-circle brown">🎯</div>
                  <span>Aniqlik bilan</span>
                </div>
                <div className="service-icon-item">
                  <div className="icon-circle beige">⚡</div>
                  <span>Tez ishlar</span>
                </div>
                <div className="service-icon-item">
                  <div className="icon-circle white">💼</div>
                  <span>Professional</span>
                </div>
                <div className="service-icon-item">
                  <div className="icon-circle red">❤️</div>
                  <span>Sevgi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">LOGO</div>
            <div className="footer-info">
              <p>Biz sizning biznesingizni rivojlantirishga yordam beramiz</p>
              <div className="footer-contacts">
                <span>📞 +998 97 777 77 77</span>
                <span>📧 info@company.uz</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                📷
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
