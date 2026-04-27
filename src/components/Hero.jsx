import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <video 
        className="hero-video-bg" 
        src="/videos/op_1.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>
      <div className="hero-overlay"></div>
      <div className="hero-content reveal">
        <div className="hero-tag">{t('hero.tag')}</div>
        <h1 className="hero-title">
          {t('hero.title').split('. ').map((part, i) => (
            <React.Fragment key={i}>
              {i === 1 ? <br /> : null}
              {i === 1 ? <span>{part}</span> : part + (i === 0 ? '. ' : '')}
            </React.Fragment>
          ))}
        </h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            {t('hero.ctaPrimary')} <ArrowRight size={18} style={{ marginLeft: '10px' }} />
          </a>
          <a href="#services" className="btn btn-outline">{t('hero.ctaSecondary')}</a>
        </div>
      </div>

      <div className="trust-bar">
        <span>{t('hero.partners')}</span>
        <div className="brand-logos">
          <div className="brand-item">JOHN CRANE</div>
          <div className="brand-item">REXNORD</div>
          <div className="brand-item">HUDSON PRODUCTS</div>
          <div className="brand-item">CATERPILLAR</div>
          <div className="brand-item">KOMATSU</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
