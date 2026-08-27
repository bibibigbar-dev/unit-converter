import { useState, useEffect } from 'react'
import CategoryTabs from './components/CategoryTabs'
import ConverterPanel from './components/ConverterPanel'
import { i18n } from './data/units'
import './App.css'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('length')
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [lang, setLang] = useState('ko')

  const t = i18n[lang]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return (
    <div className="app">
      {/* <!-- AdSense Placeholder: Replace this comment with your AdSense script tag --> */}
      <header className="app-header">
        <div className="header-inner">
          <h1 className="app-title">{t.appTitle}</h1>
          <div className="header-controls">
            <button
              className="lang-toggle"
              onClick={() => setLang((l) => (l === 'ko' ? 'en' : 'ko'))}
              aria-label={lang === 'ko' ? 'Switch to English' : '한국어로 전환'}
              title={lang === 'ko' ? 'Switch to English' : '한국어로 전환'}
            >
              {t.langToggle}
            </button>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode((d) => !d)}
              aria-label={darkMode ? t.lightMode : t.darkMode}
              title={darkMode ? t.lightMode : t.darkMode}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        {/* <!-- AdSense Placeholder Top Banner: <ins class="adsbygoogle" ...></ins> --> */}

        <CategoryTabs activeId={activeCategory} onChange={setActiveCategory} lang={lang} />

        <div className="panel-wrapper">
          <ConverterPanel key={activeCategory} categoryId={activeCategory} lang={lang} t={t} />
        </div>

        {/* <!-- AdSense Placeholder Bottom Banner: <ins class="adsbygoogle" ...></ins> --> */}
      </main>

      <footer className="app-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}
