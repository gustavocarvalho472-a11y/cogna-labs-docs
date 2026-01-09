import React from 'react'
import { Radar, ExternalLink } from 'lucide-react'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'

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

const tagCode = `interface TagProps {
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
    <span className={\`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs \${colors[color]}\`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

// Uso:
<Tag color="purple">Content Technologies</Tag>
<Tag color="blue">Análise</Tag>
<Tag color="green">Sucesso</Tag>
<Tag color="yellow">Em progresso</Tag>
<Tag color="red">Urgente</Tag>
<Tag color="pink">Design</Tag>
<Tag color="orange">Pendente</Tag>`

// ============================================
// MAIN PAGE
// ============================================

export function RadarTags() {
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
              Tags
            </h1>
            <p className="text-sm text-neutral-500">Radar / Componentes</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Tags coloridas para categorização de conteúdo no projeto Radar.
        </p>
      </div>

      {/* Tags Section */}
      <section className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Tags Coloridas
            </h2>
            <p className="text-sm text-neutral-500">
              Tags para categorização de conteúdo com indicador de cor. 7 cores disponíveis.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3423"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="space-y-6">
              <div>
                <p className="text-xs text-[#A4A4B1] mb-3">Todas as variantes</p>
                <div className="flex flex-wrap gap-2">
                  <Tag color="purple">Content Technologies</Tag>
                  <Tag color="blue">Content Technologies</Tag>
                  <Tag color="green">Content Technologies</Tag>
                  <Tag color="yellow">Content Technologies</Tag>
                  <Tag color="red">Content Technologies</Tag>
                  <Tag color="pink">Content Technologies</Tag>
                  <Tag color="orange">Content Technologies</Tag>
                </div>
              </div>
              <div className="pt-4 border-t border-[#39394A]">
                <p className="text-xs text-[#A4A4B1] mb-3">Uso sugerido</p>
                <div className="space-y-2 text-xs text-[#A4A4B1]">
                  <p><span className="text-[#E6C7FF]">Purple:</span> Tecnologia, Inovação</p>
                  <p><span className="text-[#74B5FF]">Blue:</span> Informação, Análise</p>
                  <p><span className="text-[#CEF8EA]">Green:</span> Sucesso, Crescimento</p>
                  <p><span className="text-[#EED46E]">Yellow:</span> Atenção, Em progresso</p>
                  <p><span className="text-[#F1948A]">Red:</span> Urgente, Crítico</p>
                  <p><span className="text-[#F48FB1]">Pink:</span> Criativo, Design</p>
                  <p><span className="text-[#F8C471]">Orange:</span> Aviso, Pendente</p>
                </div>
              </div>
            </div>
          }
          code={tagCode}
          previewClassName="bg-[#0E0E12]"
        />
      </section>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Tags recriadas em React baseadas no design original do Figma.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3423"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          Ver no Figma
        </a>
      </div>
    </div>
  )
}
