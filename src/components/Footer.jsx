import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const logoSrc = `${import.meta.env.BASE_URL}Logo%20Disargen%202.png`

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            {/* Company logo */}
            <a className="logo logo-footer" href="#home" aria-label="DISARGEN Oil Services C.A.">
              <img
                className="logo-image logo-image-footer"
                src={logoSrc}
                srcSet={`${logoSrc} 2x`}
                sizes="(max-width: 640px) min(92vw, 380px), 580px"
                width={2172}
                height={724}
                alt="DISARGEN Oil Services C.A."
                decoding="async"
              />
            </a>
            <p className="footer-motto">
              {t('footer.motto')}
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>{t('footer.col1')}</h4>
              <ul>
                <li><a href="#about">{t('nav.about')}</a></li>
                <li><a href="#services">{t('nav.services')}</a></li>
                <li><a href="#industries">{t('nav.industries')}</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>{t('footer.col2')}</h4>
              <ul>
                <li><a href="#">Términos de Servicio</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DISARGEN Oil Services C.A. {t('footer.rights')}</p>
          <div className="location-tags">
            <span>Barcelona, VE</span>
            <span>Houston, USA</span>
            <span>Bogotá, COL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
