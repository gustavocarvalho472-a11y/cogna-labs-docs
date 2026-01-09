import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { Colors } from '@/pages/tokens/Colors'
import { Typography } from '@/pages/tokens/Typography'
import { Spacing } from '@/pages/tokens/Spacing'
import { Button } from '@/pages/components/Button'
import { Input } from '@/pages/components/Input'
import { Card } from '@/pages/components/Card'
// Projetos
import { B2GInsightsTokens } from '@/pages/projetos/b2g-insights/Tokens'
import { B2GInsightsComponents } from '@/pages/projetos/b2g-insights/Components'
import { B2GSelect } from '@/pages/projetos/b2g-insights/Select'
import { B2GCards } from '@/pages/projetos/b2g-insights/Cards'
import { RadarTokens } from '@/pages/projetos/radar/Tokens'
import { RadarComponents } from '@/pages/projetos/radar/Components'
import { RadarBotoes, RadarTags, RadarSearchBar, RadarWordCloud, RadarBullets } from '@/pages/projetos/radar/radar-components'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isDark={isDark} onToggleTheme={toggleTheme} />}>
          <Route path="/" element={<Home />} />
          <Route path="/tokens/colors" element={<Colors />} />
          <Route path="/tokens/typography" element={<Typography />} />
          <Route path="/tokens/spacing" element={<Spacing />} />
          <Route path="/components/button" element={<Button />} />
          <Route path="/components/input" element={<Input />} />
          <Route path="/components/card" element={<Card />} />
          {/* Projetos */}
          <Route path="/projetos/b2g-insights/tokens" element={<B2GInsightsTokens />} />
          <Route path="/projetos/b2g-insights/components" element={<B2GInsightsComponents />} />
          <Route path="/projetos/b2g-insights/components/select" element={<B2GSelect />} />
          <Route path="/projetos/b2g-insights/components/cards" element={<B2GCards />} />
          <Route path="/projetos/radar/tokens" element={<RadarTokens />} />
          <Route path="/projetos/radar/components/botoes" element={<RadarBotoes />} />
          <Route path="/projetos/radar/components/tags" element={<RadarTags />} />
          <Route path="/projetos/radar/components/searchbar" element={<RadarSearchBar />} />
          <Route path="/projetos/radar/components/wordcloud" element={<RadarWordCloud />} />
          <Route path="/projetos/radar/components/bullets" element={<RadarBullets />} />
          <Route path="/projetos/radar/components" element={<RadarComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
