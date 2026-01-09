import { Radar, ExternalLink, Search } from 'lucide-react'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'

// Search Bar Component
function SearchBarComponent() {
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

const searchBarCode = `import { Search } from 'lucide-react'

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

// Uso:
<SearchBar />

// Especificações:
// Background: #1C222B
// Border: #39394A
// Placeholder color: #A4A4B1
// Text color: #D2D2DB`

// ============================================
// MAIN PAGE
// ============================================

export function RadarSearchBar() {
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
              SearchBar
            </h1>
            <p className="text-sm text-neutral-500">Radar / Componentes</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Campo de busca utilizado no projeto Radar.
        </p>
      </div>

      {/* SearchBar Section */}
      <section className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Search Bar
            </h2>
            <p className="text-sm text-neutral-500">
              Campo de busca com ícone integrado. Fundo escuro com borda sutil.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3425"
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
                <p className="text-xs text-[#A4A4B1] mb-3">Default</p>
                <div className="max-w-xs">
                  <SearchBarComponent />
                </div>
              </div>
              <div className="pt-4 border-t border-[#39394A]">
                <p className="text-xs text-[#A4A4B1] mb-3">Largura total</p>
                <div className="max-w-md">
                  <SearchBarComponent />
                </div>
              </div>
            </div>
          }
          code={searchBarCode}
          previewClassName="bg-[#0E0E12]"
        />
      </section>

      {/* Specs */}
      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Especificações</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <p className="text-neutral-500 mb-1">Background</p>
            <p className="font-mono text-neutral-900 dark:text-white">#1C222B</p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <p className="text-neutral-500 mb-1">Border</p>
            <p className="font-mono text-neutral-900 dark:text-white">#39394A</p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <p className="text-neutral-500 mb-1">Placeholder color</p>
            <p className="font-mono text-neutral-900 dark:text-white">#A4A4B1</p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800">
            <p className="text-neutral-500 mb-1">Text color</p>
            <p className="font-mono text-neutral-900 dark:text-white">#D2D2DB</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          SearchBar recriado em React baseado no design original do Figma.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=251-3425"
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
