import React, { createContext, useState, useContext } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  const t = (path) => {
    const keys = path.split('.')
    let result = translations[language]
    for (const key of keys) {
      if (result[key]) {
        result = result[key]
      } else {
        return path
      }
    }
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
