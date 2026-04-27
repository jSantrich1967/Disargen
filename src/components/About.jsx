import React from 'react'
import { ShieldCheck, Target, Globe, Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  const values = t('about.values').map((val, i) => {
    const icons = [<ShieldCheck size={32} />, <Target size={32} />, <Globe size={32} />, <Award size={32} />]
    return { ...val, icon: icons[i] }
  })

  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-text">
          <div className="tag">{t('about.tag')}</div>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="description">
            {t('about.p1')}
          </p>
          <p className="description">
            {t('about.p2')}
          </p>
          
          <div className="stats">
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">{t('about.stat1')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">{t('about.stat2')}</span>
            </div>
          </div>
        </div>

        <div className="values-grid">
          {values.map((item, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
