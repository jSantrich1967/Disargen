import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Globe } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Company logo */}
        <a className="logo" href="#home" aria-label="DISARGEN Oil Services C.A.">
          <img
            className="logo-image"
            src={`${import.meta.env.BASE_URL}disargen-logo-gold-transparent.png`}
            alt="DISARGEN Oil Services C.A."
          />
        </a>
        
        <nav className="nav">
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#industries">{t('nav.industries')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </nav>

        <div className="header-actions-flex">
          <div className="lang-switcher">
            <Globe size={16} />
            <button 
              className={language === 'es' ? 'active' : ''} 
              onClick={() => toggleLanguage('es')}
            >
              ES
            </button>
            <span>/</span>
            <button 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => toggleLanguage('en')}
            >
              EN
            </button>
          </div>
          <div className="header-cta">
            <a href="#contact" className="btn btn-primary">{t('nav.cta')}</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
