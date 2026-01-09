import React from 'react'
import { Radar, ExternalLink } from 'lucide-react'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'

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

const bulletCode = `interface BulletProps {
  type?: 'error' | 'alert' | 'warning' | 'default'
}

function Bullet({ type = 'default' }: BulletProps) {
  const colors = {
    error: 'bg-[#E74C3C]',
    alert: 'bg-[#F39C12]',
    warning: 'bg-[#E2B70E]',
    default: 'bg-[#A4A4B1]',
  }

  return <span className={\`w-2 h-2 rounded-full \${colors[type]}\`} />
}

// Uso:
<Bullet type="error" />   // Vermelho - #E74C3C
<Bullet type="alert" />   // Laranja - #F39C12
<Bullet type="warning" /> // Amarelo - #E2B70E
<Bullet type="default" /> // Cinza - #A4A4B1

// Exemplo em lista:
<div className="flex items-center gap-2">
  <Bullet type="error" />
  <span>Item crítico que precisa de atenção</span>
</div>`

// ============================================
// MAIN PAGE
// ============================================

export function RadarBullets() {
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
              Bullets
            </h1>
            <p className="text-sm text-neutral-500">Radar / Componentes</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Indicadores visuais de status utilizados no projeto Radar.
        </p>
      </div>

      {/* Bullets Section */}
      <section className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Bullets de Status
            </h2>
            <p className="text-sm text-neutral-500">
              Indicadores visuais de status em diferentes cores semânticas.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=136-7412"
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
                <p className="text-xs text-[#A4A4B1] mb-4">Todas as variantes</p>
                <div className="flex items-center gap-8">
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
              </div>
              <div className="pt-4 border-t border-[#39394A]">
                <p className="text-xs text-[#A4A4B1] mb-4">Exemplo de uso em lista</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Bullet type="error" />
                    <span className="text-xs text-[#F0F0F4]">Item crítico que precisa de atenção</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bullet type="alert" />
                    <span className="text-xs text-[#F0F0F4]">Item em alerta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bullet type="warning" />
                    <span className="text-xs text-[#F0F0F4]">Item com aviso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bullet type="default" />
                    <span className="text-xs text-[#F0F0F4]">Item normal</span>
                  </div>
                </div>
              </div>
            </div>
          }
          code={bulletCode}
          previewClassName="bg-[#0E0E12]"
        />
      </section>

      {/* Specs */}
      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Especificações</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <Bullet type="error" />
              <span className="text-neutral-500">Error</span>
            </div>
            <p className="font-mono text-neutral-900 dark:text-white">#E74C3C</p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <Bullet type="alert" />
              <span className="text-neutral-500">Alert</span>
            </div>
            <p className="font-mono text-neutral-900 dark:text-white">#F39C12</p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <Bullet type="warning" />
              <span className="text-neutral-500">Warning</span>
            </div>
            <p className="font-mono text-neutral-900 dark:text-white">#E2B70E</p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <Bullet type="default" />
              <span className="text-neutral-500">Default</span>
            </div>
            <p className="font-mono text-neutral-900 dark:text-white">#A4A4B1</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bullets recriados em React baseados no design original do Figma.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=136-7412"
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
