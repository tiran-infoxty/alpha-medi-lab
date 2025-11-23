'use client'
import Contact from '@/components/Contact'
import DarkModeToggle from '@/components/DarkModeToggle'
import { useDarkMode } from '@/context/DarkModeContext'

export default function ContactPage() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <main>
        <Contact />
      </main>
      <DarkModeToggle />
    </div>
  )
}