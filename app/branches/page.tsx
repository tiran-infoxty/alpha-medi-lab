'use client'
import Branches from '@/components/Branches'
import DarkModeToggle from '@/components/DarkModeToggle'
import { useDarkMode } from '@/context/DarkModeContext'

export default function BranchesPage() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <main>
        <Branches />
      </main>
      <DarkModeToggle />
    </div>
  )
}