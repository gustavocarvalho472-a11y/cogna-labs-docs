import { Radar, ExternalLink, ChevronDown, ChevronUp, Search, Globe, Check, MessageCircle } from 'lucide-react'

// ============================================
// COMPONENTES DO RADAR - Extraídos do Figma
// ============================================

// Filled Button Component - Todas as variantes do Figma
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

// Filter Button Component - Primary e Secondary
interface FilterButtonProps {
  variant?: 'primary' | 'secondary'
  status?: 'default' | 'hover' | 'selected'
  children: React.ReactNode
}

function FilterButton({ variant = 'primary', status = 'default', children }: FilterButtonProps) {
  const getStyles = () => {
    if (variant === 'primary') {
      switch (status) {
        case 'selected':
          return 'bg-[#AD46FF]/30 border-[#6E2AA5] text-[#E6C7FF]'
        case 'hover':
          return 'bg-[#1C222B]/30 border-[#6E2AA5] text-[#E6C7FF]'
        default:
          return 'bg-[#1C222B]/30 border-[#39394A] text-[#D2D2DB]'
      }
    } else {
      switch (status) {
        case 'selected':
          return 'bg-[#2B7FFF]/20 border-[#3169A9] text-[#51A2FF]'
        case 'hover':
          return 'bg-[#1C222B]/30 border-[#3169A9] text-[#51A2FF]'
        default:
          return 'bg-[#1C222B]/30 border-[#39394A] text-[#D2D2DB]'
      }
    }
  }

  return (
    <button
      className={`px-3 py-1.5 rounded-[10px] text-xs font-semibold border transition-colors ${getStyles()}`}
    >
      {children}
    </button>
  )
}

// Text Button Component
interface TextButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

function TextButton({ variant = 'primary', children }: TextButtonProps) {
  const styles = variant === 'primary'
    ? 'text-[#AD46FF] hover:text-[#BD6BFF]'
    : 'text-[#74B5FF] hover:text-[#85C1E9]'

  return (
    <button className={`text-xs font-medium underline transition-colors ${styles}`}>
      {children}
    </button>
  )
}

// Icon Button Component - 3 tamanhos
interface IconButtonProps {
  size?: 'sm' | 'md' | 'lg'
  status?: 'default' | 'hover' | 'pressed'
}

function IconButton({ size = 'lg', status = 'default' }: IconButtonProps) {
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
interface ListButtonProps {
  status?: 'default' | 'hover' | 'pressed'
  children: React.ReactNode
}

function ListButton({ status = 'default', children }: ListButtonProps) {
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

// Bullet Component
interface BulletProps {
  type?: 'error' | 'alert' | 'warning' | 'default'
}

function Bullet({ type = 'default' }: BulletProps) {
  const colors = {
    error: 'bg-[#E74C3C]',
    alert: 'bg-[#F39C12]',
    warning: 'bg-[#E2B70E]',
    default: 'bg-[#A4A4B1]',
  }

  return <span className={`w-2 h-2 rounded-full ${colors[type]}`} />
}

// Search Bar Component
function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded bg-[#1C222B] border border-[#39394A]">
      <Search className="w-4 h-4 text-[#A4A4B1]" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-xs text-[#D2D2DB] placeholder-[#A4A4B1] outline-none flex-1"
      />
    </div>
  )
}

// Tag Component
interface TagProps {
  color: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'pink' | 'orange'
  children: React.ReactNode
}

function Tag({ color, children }: TagProps) {
  const colors = {
    purple: 'bg-[#AD46FF]/20 text-[#E6C7FF]',
    blue: 'bg-[#2B7FFF]/20 text-[#74B5FF]',
    green: 'bg-[#2EC995]/20 text-[#CEF8EA]',
    yellow: 'bg-[#E2B70E]/20 text-[#EED46E]',
    red: 'bg-[#E74C3C]/20 text-[#F1948A]',
    pink: 'bg-[#E91E63]/20 text-[#F48FB1]',
    orange: 'bg-[#F39C12]/20 text-[#F8C471]',
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs ${colors[color]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

// Word Cloud Component
interface WordCloudWord {
  text: string
  size: number
  gradient: string
  rotate?: number
}

function WordCloud() {
  const words: WordCloudWord[] = [
    { text: 'Inteligência Artificial', size: 42, gradient: 'linear-gradient(180deg, #d23c3c 0%, #7d5858 100%)' },
    { text: 'E-learning', size: 38, gradient: 'linear-gradient(180deg, #fff 0%, #00b8db 100%)' },
    { text: 'LMS', size: 36, gradient: 'linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)' },
    { text: 'Gamificação', size: 32, gradient: 'linear-gradient(166deg, #43e97b 0%, #38f9d7 100%)' },
    { text: 'Flashcards', size: 30, gradient: 'linear-gradient(164deg, #fa709a 0%, #fee140 100%)' },
    { text: 'Cursos Online', size: 28, gradient: 'linear-gradient(168deg, #30cfd0 0%, #330867 100%)' },
    { text: 'Videoaulas', size: 26, gradient: 'linear-gradient(164deg, #a8edea 0%, #fed6e3 100%)' },
    { text: 'AR/VR', size: 24, gradient: 'linear-gradient(154deg, #ff9a56 0%, #ff6a88 100%)' },
    { text: 'STEM', size: 24, gradient: 'linear-gradient(152deg, #ffecd2 0%, #fcb69f 100%)' },
    { text: 'MOOC', size: 22, gradient: 'linear-gradient(154deg, #ff6e7f 0%, #bfe9ff 100%)' },
    { text: 'Coding', size: 22, gradient: 'linear-gradient(157deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { text: 'Tutoria Online', size: 20, gradient: 'linear-gradient(167deg, #f77062 0%, #fe5196 100%)' },
    { text: 'Analytics', size: 18, gradient: 'linear-gradient(162deg, #fbc2eb 0%, #a6c1ee 100%)' },
    { text: 'Matemática', size: 18, gradient: 'linear-gradient(165deg, #fdcbf1 0%, #e6dee9 100%)' },
    { text: 'STEAM', size: 16, gradient: 'linear-gradient(157deg, #667eea 0%, #764ba2 100%)' },
    { text: 'Idiomas', size: 20, gradient: 'linear-gradient(158deg, #ff758c 0%, #ff7eb3 100%)' },
    { text: 'K-12', size: 14, gradient: 'linear-gradient(146deg, #f093fb 0%, #f5576c 100%)' },
    { text: 'Mobile Learning', size: 18, gradient: 'linear-gradient(169deg, #868f96 0%, #596164 100%)' },
  ]

  return (
    <div className="relative w-full h-64 bg-[#030712] rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-4">
        {words.map((word, index) => (
          <span
            key={index}
            className="font-bold opacity-75 whitespace-nowrap"
            style={{
              fontSize: `${word.size}px`,
              background: word.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: word.rotate ? `rotate(${word.rotate}deg)` : undefined,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  )
}

// ============================================
// COMPONENT DOCUMENTATION SECTION
// ============================================

interface ComponentSectionProps {
  title: string
  description: string
  figmaLink?: string
  children: React.ReactNode
}

function ComponentSection({ title, description, figmaLink, children }: ComponentSectionProps) {
  return (
    <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
          <p className="text-sm text-neutral-500 mt-1">{description}</p>
        </div>
        {figmaLink && (
          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Preview Area - Dark background to match Radar theme */}
      <div className="p-6 rounded-lg bg-[#0E0E12] border border-[#39394A]">
        {children}
      </div>
    </div>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export function RadarComponents() {
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
              Radar
            </h1>
            <p className="text-sm text-neutral-500">Componentes do projeto</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Componentes extraídos do Figma do projeto Radar.
          Cada componente é apresentado com preview visual e variantes disponíveis.
        </p>
      </div>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Buttons</h2>
        <div className="space-y-6">

          {/* Filled Buttons */}
          <ComponentSection
            title="Filled Button"
            description="Botões preenchidos com ícones para ações principais. 8 variantes de cor com estados default, hover, pressed e disabled."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=44-1067"
          >
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
          </ComponentSection>

          {/* Filter Buttons */}
          <ComponentSection
            title="Filter Button"
            description="Botões para seleção de filtros. Disponível em Primary (roxo) e Secondary (azul) com 3 estados."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=11-15"
          >
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
          </ComponentSection>

          {/* Text Buttons */}
          <ComponentSection
            title="Text Button"
            description="Botões de texto com sublinhado para ações menos destacadas."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=11-116"
          >
            <div className="flex flex-wrap gap-4">
              <TextButton variant="primary">Conteúdo</TextButton>
              <TextButton variant="secondary">Conteúdo</TextButton>
            </div>
          </ComponentSection>

          {/* Icon Buttons */}
          <ComponentSection
            title="Icon Button"
            description="Botões com ícones para ações compactas. 3 tamanhos (Large, Medium, Small) com 3 estados."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=11-98"
          >
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
          </ComponentSection>

          {/* List Buttons */}
          <ComponentSection
            title="List Button"
            description="Botões para itens de lista e menus com ícones de check e chat."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=106-5657"
          >
            <div className="flex flex-col gap-2 max-w-xs">
              <ListButton status="default">Agendar um Bench</ListButton>
              <ListButton status="hover">Agendar um Bench</ListButton>
              <ListButton status="pressed">Agendar um Bench</ListButton>
            </div>
          </ComponentSection>

          {/* Bullets */}
          <ComponentSection
            title="Bullets"
            description="Indicadores visuais de status em diferentes cores semânticas."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=136-7412"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Bullet type="error" />
                <span className="text-xs text-[#A4A4B1]">Error</span>
              </div>
              <div className="flex items-center gap-2">
                <Bullet type="alert" />
                <span className="text-xs text-[#A4A4B1]">Alert</span>
              </div>
              <div className="flex items-center gap-2">
                <Bullet type="warning" />
                <span className="text-xs text-[#A4A4B1]">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <Bullet type="default" />
                <span className="text-xs text-[#A4A4B1]">Default</span>
              </div>
            </div>
          </ComponentSection>
        </div>
      </section>

      {/* Form Components */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Formulários</h2>
        <div className="space-y-6">
          <ComponentSection
            title="Search Bar"
            description="Campo de busca com ícone integrado."
            figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3425"
          >
            <div className="max-w-xs">
              <SearchBar />
            </div>
          </ComponentSection>
        </div>
      </section>

      {/* Tags */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Tags</h2>
        <ComponentSection
          title="Tags Coloridas"
          description="Tags para categorização de conteúdo com indicador de cor. 7 cores disponíveis."
          figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3423"
        >
          <div className="flex flex-wrap gap-2">
            <Tag color="purple">Content Technologies</Tag>
            <Tag color="blue">Content Technologies</Tag>
            <Tag color="green">Content Technologies</Tag>
            <Tag color="yellow">Content Technologies</Tag>
            <Tag color="red">Content Technologies</Tag>
            <Tag color="pink">Content Technologies</Tag>
            <Tag color="orange">Content Technologies</Tag>
          </div>
        </ComponentSection>
      </section>

      {/* Data Visualization */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Visualização de Dados</h2>
        <ComponentSection
          title="Nuvem de Palavras"
          description="Visualização de termos e categorias com tamanhos variados e gradientes coloridos. Palavras maiores indicam maior relevância."
          figmaLink="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=44-701"
        >
          <WordCloud />
        </ComponentSection>
      </section>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Estes componentes foram recriados em React baseados no design original do Figma.
          As cores e estilos seguem os tokens extraídos do projeto Radar.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=13-377"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          Ver página de componentes no Figma
        </a>
      </div>
    </div>
  )
}
