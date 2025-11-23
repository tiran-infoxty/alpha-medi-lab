'use client'
import Services from '@/components/Services'
import DarkModeToggle from '@/components/DarkModeToggle'
import { useDarkMode } from '@/context/DarkModeContext'

export default function ServicesPage() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <main>
        <Services />
      </main>
      <DarkModeToggle />
    </div>
  )
}