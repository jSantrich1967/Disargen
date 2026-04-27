import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Play } from 'lucide-react'

const VideoShowcase = () => {
  const { t } = useLanguage()

  const videos = [
    { src: '/videos/op_1.mp4', title: 'Operational Overview I' },
    { src: '/videos/op_2.mp4', title: 'Technical Deployment II' },
    { src: '/videos/op_3.mp4', title: 'Field Services III' },
    { src: '/videos/op_4.mp4', title: 'Logistics & Supply IV' },
    { src: '/videos/op_5.mp4', title: 'Project Execution V' },
    { src: '/videos/op_6.mp4', title: 'Security & Quality VI' }
  ]

  return (
    <section id="showcase" className="showcase">
      <div className="showcase-header">
        <div className="tag">{t('showcase.tag')}</div>
        <h2 className="section-title">{t('showcase.title')}</h2>
        <p className="section-desc">{t('showcase.desc')}</p>
      </div>

      <div className="video-grid">
        {videos.map((vid, i) => (
          <div key={i} className="video-card">
            <video 
              src={vid.src} 
              muted 
              loop 
              onMouseEnter={(e) => e.target.play()} 
              onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
            ></video>
            <div className="video-overlay">
              <div className="play-icon">
                <Play size={24} fill="currentColor" />
              </div>
              <h4>{vid.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoShowcase
