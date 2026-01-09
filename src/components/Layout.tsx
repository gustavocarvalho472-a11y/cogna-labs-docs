import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

interface LayoutProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function Layout({ isDark, onToggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <Sidebar isDark={isDark} onToggleTheme={onToggleTheme} />
      <main className="pl-64">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
