import React from 'react'
import { Box, Activity, Radio, Settings2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  
  const serviceList = t('services.list').map((service, i) => {
    const icons = [<Box size={40} />, <Activity size={40} />, <Radio size={40} />, <Settings2 size={40} />]
    return { ...service, icon: icons[i] }
  })

  return (
    <section id="services" className="services">
      <div className="tag">{t('services.tag')}</div>
      <h2 className="section-title">{t('services.title')}</h2>
      
      <div className="services-grid">
        {serviceList.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-body">
              <h3>{service.title}</h3>
              <p className="service-summary">{service.summary}</p>
              <ul className="service-details">
                {service.details.map((detail, j) => (
                  <li key={j}><span>•</span> {detail}</li>
                ))}
              </ul>
            </div>
            <div className="service-footer">
              <a href="#contact" className="learn-more">{t('services.cta')}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
