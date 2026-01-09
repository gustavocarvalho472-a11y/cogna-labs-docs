import { Radar, ExternalLink, ChevronDown, ChevronUp, Globe, Check, MessageCircle } from 'lucide-react'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'

// ============================================
// COMPONENTES DE BOTÃO DO RADAR
// ============================================

// Filled Button Component
interface FilledButtonProps {
  variant?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'alert' | 'success' | 'cta'
  children: React.ReactNode
  disabled?: boolean
}

function FilledButton({ variant = 'neutral', children, disabled }: FilledButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors'

  const variants = {
    neutral: {
      bg: disabled ? 'bg-[#2B3241]' : 'bg-[#1C222B] hover:bg-[#2B3241] hover:border hover:border-[#858594]',
      text: disabled ? 'text-[#666678]' : 'text-[#F0F0F4]',
      icon: disabled ? 'text-[#4F1C77]' : 'text-[#AD46FF]',
    },
    primary: {
      bg: disabled ? 'bg-[#AD46FF]/20 border border-[#8E38D2]' : 'bg-[#AD46FF]/20 border border-[#AD46FF] hover:bg-[#AD46FF]/30 hover:border-[#BD6BFF]',
      text: disabled ? 'text-[#8E38D2]' : 'text-[#F7ECFF]',
      icon: disabled ? 'text-[#8E38D2]' : 'text-[#E6C7FF]',
    },
    secondary: {
      bg: disabled ? 'bg-[#2B7FFF]/10 border border-[#204C7E]' : 'bg-[#2B7FFF]/10 border border-[#204C7E] hover:bg-[#2B7FFF]/20 hover:border-[#4185D4]',
      text: disabled ? 'text-[#3169A9]' : 'text-[#74B5FF]',
      icon: disabled ? 'text-[#3169A9]' : 'text-[#74B5FF]',
    },
    error: {
      bg: disabled ? 'bg-[#E74C3C]/10 border border-[#8B2E24]' : 'bg-[#E74C3C]/10 border border-[#8B2E24] hover:bg-[#E74C3C]/20 hover:border-[#E74C3C]',
      text: disabled ? 'text-[#8B2E24]' : 'text-[#EC7063] hover:text-[#F1948A]',
      icon: disabled ? 'text-[#8B2E24]' : 'text-[#F1948A]',
    },
    warning: {
      bg: disabled ? 'bg-[#E2B70E]/10 border border-[#886E08]' : 'bg-[#E2B70E]/10 border border-[#886E08] hover:bg-[#E2B70E]/20 hover:border-[#E2B70E]',
      text: disabled ? 'text-[#886E08]' : 'text-[#E8C53E] hover:text-[#EED46E]',
      icon: disabled ? 'text-[#886E08]' : 'text-[#EED46E]',
    },
    alert: {
      bg: disabled ? 'bg-[#F39C12]/10 border border-[#925E0B]' : 'bg-[#F39C12]/10 border border-[#925E0B] hover:bg-[#F39C12]/20 hover:border-[#F39C12]',
      text: disabled ? 'text-[#925E0B]' : 'text-[#F5B041] hover:text-[#F8C471]',
      icon: disabled ? 'text-[#925E0B]' : 'text-[#F8C471]',
    },
    success: {
      bg: disabled ? 'bg-[#2EC995]/10 border border-[#00714B]' : 'bg-[#2EC995]/10 border border-[#2EC995] hover:bg-[#2EC995]/20 hover:border-[#00BC7D]',
      text: disabled ? 'text-[#009664]' : 'text-[#CEF8EA]',
      icon: disabled ? 'text-[#009664]' : 'text-[#CEF8EA]',
    },
    cta: {
      bg: disabled ? 'bg-[#39394A] border border-[#666678]' : 'bg-[#8E38D2] hover:bg-[#AD46FF] hover:shadow-[0_0_10px_10px_rgba(173,70,255,0.05)]',
      text: disabled ? 'text-[#666678]' : 'text-white',
      icon: disabled ? 'text-[#666678]' : 'text-white',
    },
  }

  const style = variants[variant]

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${style.bg} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <Globe className={`w-2 h-2 ${style.icon}`} />
      <span className={style.text}>{children}</span>
      <ChevronDown className={`w-2 h-2 ${style.icon}`} />
    </button>
  )
}

// Filter Button Component
interface FilterButtonProps {
  variant?: 'primary' | 'secondary'
  status?: 'default' | 'hover' | 'selected'
  children: React.ReactNode
}

function FilterButton({ variant = 'primary', status = 'default', children }: FilterButtonProps) {
  const getStyles = () => {
    if (variant === 'primary') {
      switch (status) {
        case 'selected': return 'bg-[#AD46FF]/30 border-[#6E2AA5] text-[#E6C7FF]'
        case 'hover': return 'bg-[#1C222B]/30 border-[#6E2AA5] text-[#E6C7FF]'
        default: return 'bg-[#1C222B]/30 border-[#39394A] text-[#D2D2DB]'
      }
    } else {
      switch (status) {
        case 'selected': return 'bg-[#2B7FFF]/20 border-[#3169A9] text-[#51A2FF]'
        case 'hover': return 'bg-[#1C222B]/30 border-[#3169A9] text-[#51A2FF]'
        default: return 'bg-[#1C222B]/30 border-[#39394A] text-[#D2D2DB]'
      }
    }
  }

  return (
    <button className={`px-3 py-1.5 rounded-[10px] text-xs font-semibold border transition-colors ${getStyles()}`}>
      {children}
    </button>
  )
}

// Text Button Component
function TextButton({ variant = 'primary', children }: { variant?: 'primary' | 'secondary'; children: React.ReactNode }) {
  const styles = variant === 'primary'
    ? 'text-[#AD46FF] hover:text-[#BD6BFF]'
    : 'text-[#74B5FF] hover:text-[#85C1E9]'

  return (
    <button className={`text-xs font-medium underline transition-colors ${styles}`}>
      {children}
    </button>
  )
}

// Icon Button Component
function IconButton({ size = 'lg', status = 'default' }: { size?: 'sm' | 'md' | 'lg'; status?: 'default' | 'hover' | 'pressed' }) {
  const sizes = {
    sm: { container: 'w-3 h-3', icon: 'w-2 h-2' },
    md: { container: 'w-5 h-5', icon: 'w-3 h-3' },
    lg: { container: 'w-10 h-10', icon: 'w-6 h-6' },
  }

  const statusStyles = {
    default: 'bg-[#0E0E12] text-[#A4A4B1]',
    hover: 'bg-[#1C222B] text-white',
    pressed: 'bg-[#2B3241] text-white',
  }

  return (
    <button className={`${sizes[size].container} rounded flex items-center justify-center transition-colors ${statusStyles[status]}`}>
      <ChevronUp className={sizes[size].icon} />
    </button>
  )
}

// List Button Component
function ListButton({ status = 'default', children }: { status?: 'default' | 'hover' | 'pressed'; children: React.ReactNode }) {
  const statusStyles = {
    default: 'bg-[#2B3241] text-[#F0F0F4]',
    hover: 'bg-[#394356] text-white',
    pressed: 'bg-[#47475C] text-white',
  }

  const iconColor = status === 'default' ? 'text-[#F0F0F4]' : 'text-white'

  return (
    <button className={`flex items-center gap-1.5 px-2 py-2 rounded-md text-xs font-semibold transition-colors ${statusStyles[status]}`}>
      <Check className={`w-2 h-2 ${iconColor}`} />
      <MessageCircle className={`w-2 h-2 ${iconColor}`} />
      {children}
    </button>
  )
}

// ============================================
// CODE EXAMPLES
// ============================================

const filledButtonCode = `<FilledButton variant="neutral">Content Technologies</FilledButton>
<FilledButton variant="primary">Content Technologies</FilledButton>
<FilledButton variant="secondary">Content Technologies</FilledButton>
<FilledButton variant="error">Content Technologies</FilledButton>
<FilledButton variant="warning">Content Technologies</FilledButton>
<FilledButton variant="alert">Content Technologies</FilledButton>
<FilledButton variant="success">Content Technologies</FilledButton>
<FilledButton variant="cta">Content Technologies</FilledButton>

// Disabled
<FilledButton variant="neutral" disabled>Content Technologies</FilledButton>`

const filterButtonCode = `<FilterButton variant="primary" status="default">Conteúdo</FilterButton>
<FilterButton variant="primary" status="hover">Conteúdo</FilterButton>
<FilterButton variant="primary" status="selected">Conteúdo</FilterButton>

<FilterButton variant="secondary" status="default">Conteúdo</FilterButton>
<FilterButton variant="secondary" status="hover">Conteúdo</FilterButton>
<FilterButton variant="secondary" status="selected">Conteúdo</FilterButton>`

const textButtonCode = `<TextButton variant="primary">Conteúdo</TextButton>
<TextButton variant="secondary">Conteúdo</TextButton>`

const iconButtonCode = `<IconButton size="lg" status="default" />
<IconButton size="md" status="hover" />
<IconButton size="sm" status="pressed" />`

const listButtonCode = `<ListButton status="default">Agendar um Bench</ListButton>
<ListButton status="hover">Agendar um Bench</ListButton>
<ListButton status="pressed">Agendar um Bench</ListButton>`

// ============================================
// MAIN PAGE
// ============================================

export function RadarBotoes() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <Radar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h1
              className="text-4xl font-bold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Botões
            </h1>
            <p className="text-sm text-neutral-500">Radar / Componentes</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Todos os tipos de botão utilizados no projeto Radar, com suas variantes e estados.
        </p>
      </div>

      {/* Filled Buttons Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Filled Button</h2>
            <p className="text-sm text-neutral-500 mt-1">
              8 variantes de cor com estados default e disabled.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=44-1067"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          previewClassName="bg-[#0E0E12]"
          preview={
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[#A4A4B1] mb-3">Default</p>
                <div className="flex flex-wrap gap-2">
                  <FilledButton variant="neutral">Content Technologies</FilledButton>
                  <FilledButton variant="primary">Content Technologies</FilledButton>
                  <FilledButton variant="secondary">Content Technologies</FilledButton>
                  <FilledButton variant="error">Content Technologies</FilledButton>
                  <FilledButton variant="warning">Content Technologies</FilledButton>
                  <FilledButton variant="alert">Content Technologies</FilledButton>
                  <FilledButton variant="success">Content Technologies</FilledButton>
                  <FilledButton variant="cta">Content Technologies</FilledButton>
                </div>
              </div>
              <div className="pt-4 border-t border-[#39394A]">
                <p className="text-xs text-[#A4A4B1] mb-3">Disabled</p>
                <div className="flex flex-wrap gap-2">
                  <FilledButton variant="neutral" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="primary" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="secondary" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="error" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="warning" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="alert" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="success" disabled>Content Technologies</FilledButton>
                  <FilledButton variant="cta" disabled>Content Technologies</FilledButton>
                </div>
              </div>
            </div>
          }
          code={filledButtonCode}
        />
      </section>

      {/* Filter Buttons Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Filter Button</h2>
            <p className="text-sm text-neutral-500 mt-1">
              Primary (roxo) e Secondary (azul) com 3 estados.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=11-15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          previewClassName="bg-[#0E0E12]"
          preview={
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[#A4A4B1] mb-3">Primary</p>
                <div className="flex flex-wrap gap-2">
                  <FilterButton variant="primary" status="default">Conteúdo</FilterButton>
                  <FilterButton variant="primary" status="hover">Conteúdo</FilterButton>
                  <FilterButton variant="primary" status="selected">Conteúdo</FilterButton>
                </div>
              </div>
              <div className="pt-4 border-t border-[#39394A]">
                <p className="text-xs text-[#A4A4B1] mb-3">Secondary</p>
                <div className="flex flex-wrap gap-2">
                  <FilterButton variant="secondary" status="default">Conteúdo</FilterButton>
                  <FilterButton variant="secondary" status="hover">Conteúdo</FilterButton>
                  <FilterButton variant="secondary" status="selected">Conteúdo</FilterButton>
                </div>
              </div>
            </div>
          }
          code={filterButtonCode}
        />
      </section>

      {/* Text Buttons Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Text Button</h2>
            <p className="text-sm text-neutral-500 mt-1">
              Botões de texto com sublinhado.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=11-116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          previewClassName="bg-[#0E0E12]"
          preview={
            <div className="flex flex-wrap gap-4">
              <TextButton variant="primary">Conteúdo</TextButton>
              <TextButton variant="secondary">Conteúdo</TextButton>
            </div>
          }
          code={textButtonCode}
        />
      </section>

      {/* Icon Buttons Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Icon Button</h2>
            <p className="text-sm text-neutral-500 mt-1">
              3 tamanhos (Large, Medium, Small) com 3 estados.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=11-98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          previewClassName="bg-[#0E0E12]"
          preview={
            <div className="space-y-4">
              {(['default', 'hover', 'pressed'] as const).map((status) => (
                <div key={status}>
                  <p className="text-xs text-[#A4A4B1] mb-3 capitalize">{status}</p>
                  <div className="flex items-end gap-4">
                    <div className="text-center">
                      <IconButton size="lg" status={status} />
                      <p className="text-xs text-[#666678] mt-1">Big</p>
                    </div>
                    <div className="text-center">
                      <IconButton size="md" status={status} />
                      <p className="text-xs text-[#666678] mt-1">Medium</p>
                    </div>
                    <div className="text-center">
                      <IconButton size="sm" status={status} />
                      <p className="text-xs text-[#666678] mt-1">Small</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          code={iconButtonCode}
        />
      </section>

      {/* List Buttons Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">List Button</h2>
            <p className="text-sm text-neutral-500 mt-1">
              Botões para itens de lista e menus.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=106-5657"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          previewClassName="bg-[#0E0E12]"
          preview={
            <div className="flex flex-col gap-2 max-w-xs">
              <ListButton status="default">Agendar um Bench</ListButton>
              <ListButton status="hover">Agendar um Bench</ListButton>
              <ListButton status="pressed">Agendar um Bench</ListButton>
            </div>
          }
          code={listButtonCode}
        />
      </section>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Estes botões foram recriados em React baseados no design original do Figma.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3423"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          Ver Buttons no Figma
        </a>
      </div>
    </div>
  )
}
