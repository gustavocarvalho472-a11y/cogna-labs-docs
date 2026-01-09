import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Palette,
  Grid3X3,
  Square,
  RectangleHorizontal,
  TextCursorInput,
  Search,
  Moon,
  Sun,
  FolderArchive,
  BarChart3,
  Radar,
} from 'lucide-react'

interface NavItem {
  label: string
  href?: string
  icon?: React.ReactNode
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    label: 'Início',
    href: '/',
    icon: <Home className="w-4 h-4" />,
  },
  {
    label: 'Foundation',
    icon: <Palette className="w-4 h-4" />,
    children: [
      { label: 'Colors', href: '/tokens/colors' },
      { label: 'Typography', href: '/tokens/typography' },
      { label: 'Spacing', href: '/tokens/spacing' },
    ],
  },
  {
    label: 'Components',
    icon: <Grid3X3 className="w-4 h-4" />,
    children: [
      { label: 'Button', href: '/components/button', icon: <Square className="w-3 h-3" /> },
      { label: 'Card', href: '/components/card', icon: <RectangleHorizontal className="w-3 h-3" /> },
      { label: 'Input', href: '/components/input', icon: <TextCursorInput className="w-3 h-3" /> },
    ],
  },
]

const projectsNavigation: NavItem[] = [
  {
    label: 'B2G Insights',
    icon: <BarChart3 className="w-4 h-4" />,
    children: [
      { label: 'Tokens', href: '/projetos/b2g-insights/tokens' },
      {
        label: 'Componentes',
        children: [
          { label: 'Select', href: '/projetos/b2g-insights/components/select' },
          { label: 'Cards', href: '/projetos/b2g-insights/components/cards' },
        ],
      },
    ],
  },
  {
    label: 'Radar',
    icon: <Radar className="w-4 h-4" />,
    children: [
      { label: 'Tokens', href: '/projetos/radar/tokens' },
      {
        label: 'Componentes',
        children: [
          { label: 'Botões', href: '/projetos/radar/components/botoes' },
          { label: 'Tags', href: '/projetos/radar/components/tags' },
          { label: 'SearchBar', href: '/projetos/radar/components/searchbar' },
          { label: 'WordCloud', href: '/projetos/radar/components/wordcloud' },
          { label: 'Bullets', href: '/projetos/radar/components/bullets' },
        ],
      },
    ],
  },
]

interface NavGroupProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  openGroups: Record<string, boolean>
  toggleGroup: (label: string) => void
  level?: number
}

function NavGroup({ item, isOpen, onToggle, openGroups, toggleGroup, level = 0 }: NavGroupProps) {
  const location = useLocation()

  const checkIsActive = (navItem: NavItem): boolean => {
    if (navItem.href === location.pathname) return true
    if (navItem.children) {
      return navItem.children.some(checkIsActive)
    }
    return false
  }

  const isActive = checkIsActive(item)

  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          isActive && 'text-primary-600 dark:text-primary-400'
        )}
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.label}
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-neutral-400" />
        )}
      </button>
      {isOpen && item.children && (
        <div className="ml-4 mt-1 space-y-1 border-l border-neutral-200 dark:border-neutral-700 pl-3">
          {item.children.map((child) => {
            if (child.children) {
              return (
                <NavGroup
                  key={child.label}
                  item={child}
                  isOpen={openGroups[child.label] ?? false}
                  onToggle={() => toggleGroup(child.label)}
                  openGroups={openGroups}
                  toggleGroup={toggleGroup}
                  level={level + 1}
                />
              )
            }
            return (
              <NavLink
                key={child.href}
                to={child.href!}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors',
                    'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 font-medium'
                      : 'text-neutral-600 dark:text-neutral-400'
                  )
                }
              >
                {child.icon}
                {child.label}
              </NavLink>
            )
          })}
        </div>
      )}
    </div>
  )
}

interface SidebarProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function Sidebar({ isDark, onToggleTheme }: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Foundation: true,
    Components: true,
  })
  const [searchQuery, setSearchQuery] = useState('')

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)] flex flex-col z-40">
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-[var(--sidebar-border)]">
        <NavLink to="/" className="flex items-center gap-3">
          {/* [PLACEHOLDER: Logo Cogna Labs - enviar imagem] */}
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CL</span>
          </div>
          <div>
            <span
              className="text-lg font-semibold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Cogna Labs
            </span>
            <span className="block text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Design System
            </span>
          </div>
        </NavLink>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-3 text-sm bg-neutral-100 dark:bg-neutral-800 border-0 rounded-lg placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-5 items-center gap-1 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 px-1.5 text-[10px] font-medium text-neutral-500">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {navigation.map((item) =>
          item.children ? (
            <NavGroup
              key={item.label}
              item={item}
              isOpen={openGroups[item.label] ?? false}
              onToggle={() => toggleGroup(item.label)}
              openGroups={openGroups}
              toggleGroup={toggleGroup}
            />
          ) : (
            <NavLink
              key={item.href}
              to={item.href!}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors mb-1',
                  'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                  isActive
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30'
                    : 'text-neutral-700 dark:text-neutral-300'
                )
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          )
        )}

        {/* Projetos Section */}
        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center gap-2 px-3 mb-2">
            <FolderArchive className="w-4 h-4 text-neutral-400" />
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Projetos Antigos
            </span>
          </div>
          {projectsNavigation.map((item) => (
            <NavGroup
              key={item.label}
              item={item}
              isOpen={openGroups[item.label] ?? false}
              onToggle={() => toggleGroup(item.label)}
              openGroups={openGroups}
              toggleGroup={toggleGroup}
            />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[var(--sidebar-border)]">
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-500">v1.0.0</span>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={isDark ? 'Modo claro' : 'Modo escuro'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-neutral-500" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-500" />
            )}
          </button>
        </div>
      </div>
    </aside>
  )
}
