import React from 'react'
import { Droplet, Flame, Lightbulb, Factory } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Industries = () => {
  const { t } = useLanguage()
  
  const industries = t('industries.list').map((ind, i) => {
    const icons = [<Flame size={48} />, <Lightbulb size={48} />, <Droplet size={48} />, <Factory size={48} />]
    return { ...ind, icon: icons[i] }
  })

  return (
    <section id="industries" className="industries">
      <div className="industries-header">
        <div className="tag">{t('industries.tag')}</div>
        <h2 className="section-title">{t('industries.title')}</h2>
      </div>

      <div className="industries-grid">
        {industries.map((ind, i) => (
          <div key={i} className="industry-item">
            <div className="industry-content">
              <div className="industry-icon">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
            <div className="industry-bg"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Industries
