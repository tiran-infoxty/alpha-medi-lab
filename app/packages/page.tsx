'use client'
import Packages from '@/components/Packages'
import DarkModeToggle from '@/components/DarkModeToggle'
import { useDarkMode } from '@/context/DarkModeContext'

export default function PackagesPage() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <main>
        <Packages />
      </main>
      <DarkModeToggle />
    </div>
  )
}