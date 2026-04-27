import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="tag">{t('contact.tag')}</div>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact-desc">
            {t('contact.desc')}
          </p>
          
          <div className="info-list">
            <div className="info-item">
              <div className="icon"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>disargenoilservices@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon"><Phone size={24} /></div>
              <div>
                <h4>{t('contact.form.phone') || 'Phones'}</h4>
                <p>+58 412 422 9035 (VZLA)</p>
                <p>+1 305 915 2125 (USA)</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon"><MapPin size={24} /></div>
              <div>
                <h4>{t('contact.form.location') || 'Location'}</h4>
                <p>Barcelona / Pto. La Cruz, Anzoátegui</p>
                <p>Houston, Texas, USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label>{t('contact.form.name')}</label>
              <input type="text" placeholder={t('contact.form.placeholderName')} />
            </div>
            <div className="form-group">
              <label>{t('contact.form.email')}</label>
              <input type="email" placeholder={t('contact.form.placeholderEmail')} />
            </div>
            <div className="form-group">
              <label>{t('contact.form.industry')}</label>
              <select>
                <option>Oil & Gas</option>
                <option>Energía</option>
                <option>Hídrico</option>
                <option>Minería</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label>{t('contact.form.message')}</label>
              <textarea placeholder={t('contact.form.placeholderMsg')}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {t('contact.form.submit')} <Send size={18} style={{ marginLeft: '10px' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
