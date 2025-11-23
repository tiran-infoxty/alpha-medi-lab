'use client'
import About from '@/components/About'
import DarkModeToggle from '@/components/DarkModeToggle'
import { useDarkMode } from '@/context/DarkModeContext'

export default function AboutPage() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <main>
        <About />
      </main>
      <DarkModeToggle />
    </div>
  )
}