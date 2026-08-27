import { useState, useEffect } from 'react'
import CategoryTabs from './components/CategoryTabs'
import ConverterPanel from './components/ConverterPanel'
import './App.css'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('length')
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="app">
      {/* <!-- AdSense Placeholder: Replace this comment with your AdSense script tag --> */}
      <header className="app-header">
        <div className="header-inner">
          <h1 className="app-title">⚙️ 단위 변환기</h1>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((d) => !d)}
            aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            title={darkMode ? '라이트 모드' : '다크 모드'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="app-main">
        {/* <!-- AdSense Placeholder Top Banner: <ins class="adsbygoogle" ...></ins> --> */}

        <CategoryTabs activeId={activeCategory} onChange={setActiveCategory} />

        <div className="panel-wrapper">
          <ConverterPanel key={activeCategory} categoryId={activeCategory} />
        </div>

        {/* <!-- AdSense Placeholder Bottom Banner: <ins class="adsbygoogle" ...></ins> --> */}
      </main>

      <footer className="app-footer">
        <p>© 2024 단위 변환기 · Made with React + Vite</p>
      </footer>
    </div>
  )
}
