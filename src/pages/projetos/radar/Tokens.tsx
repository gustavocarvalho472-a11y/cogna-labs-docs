import { Radar, ExternalLink } from 'lucide-react'

// Cores Primary
const primaryColors = [
  { name: '60', value: '#AD46FF' },
  { name: '90', value: '#E6C7FF' },
  { name: '99', value: '#F7ECFF' },
]

// Cores Neutral
const neutralColors = [
  { name: '10', value: '#0E0E12' },
  { name: '40', value: '#39394A' },
  { name: '80', value: '#A4A4B1' },
  { name: '90', value: '#C3C3CD' },
  { name: '95', value: '#D2D2DB' },
  { name: '99', value: '#F0F0F4' },
]

// Cores Background
const backgroundColors = [
  { name: '90', value: '#1C222B' },
  { name: '30', value: '#1C222B' },
]

// Cores Semânticas
const semanticColors = [
  { name: 'Success', value: '#2ECC71', text: '#ffffff' },
  { name: 'Warning', value: '#F39C12', text: '#ffffff' },
  { name: 'Alert', value: '#E74C3C', text: '#ffffff' },
  { name: 'Error', value: '#EC7063', text: '#ffffff' },
]

// Spacing
const spacings = [
  { name: '1', value: '4px' },
  { name: '2', value: '8px' },
  { name: '3', value: '12px' },
  { name: '4', value: '16px' },
  { name: '6', value: '24px' },
  { name: '8', value: '32px' },
]

// Border Radius
const radiuses = [
  { name: 'sm', value: '4px' },
  { name: 'default', value: '6px' },
  { name: 'lg', value: '8px' },
  { name: 'xl', value: '12px' },
  { name: 'full', value: '500px' },
]

export function RadarTokens() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <Radar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Tokens
            </h1>
            <p className="text-sm text-neutral-500">Radar Design Tokens</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Tokens extraídos do Figma do projeto Radar.
          Fonte principal: <strong>Segoe UI</strong>.
        </p>
      </div>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Typography
        </h2>
        <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
          <p className="text-sm text-neutral-500 mb-4">Font Family: Segoe UI</p>
          <div className="space-y-3" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            <p className="text-xs text-neutral-600">12px - Extra Small</p>
            <p className="text-sm text-neutral-700">14px - Small</p>
            <p className="text-base text-neutral-800">16px - Base</p>
            <p className="text-lg text-neutral-900 dark:text-white">18px - Large</p>
            <p className="text-xl text-neutral-900 dark:text-white font-semibold">20px - Extra Large</p>
            <p className="text-2xl text-neutral-900 dark:text-white font-bold">24px - 2XL</p>
          </div>
        </div>
      </section>

      {/* Primary Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Primary (Purple)
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
          {primaryColors.map((color) => (
            <div key={color.name} className="text-center">
              <div
                className="w-full aspect-square rounded-lg mb-2 border border-neutral-200 dark:border-neutral-700"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-xs font-medium text-neutral-900 dark:text-white">{color.name}</p>
              <p className="text-[10px] text-neutral-500 font-mono">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Neutral Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Neutral (Gray)
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
          {neutralColors.map((color) => (
            <div key={color.name} className="text-center">
              <div
                className="w-full aspect-square rounded-lg mb-2 border border-neutral-200 dark:border-neutral-700"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-xs font-medium text-neutral-900 dark:text-white">{color.name}</p>
              <p className="text-[10px] text-neutral-500 font-mono">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Background Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Background
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
          {backgroundColors.map((color, index) => (
            <div key={index} className="text-center">
              <div
                className="w-full aspect-square rounded-lg mb-2 border border-neutral-200 dark:border-neutral-700"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-xs font-medium text-neutral-900 dark:text-white">Back.{color.name}</p>
              <p className="text-[10px] text-neutral-500 font-mono">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Semantic
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2 flex items-center justify-center"
                style={{ backgroundColor: color.value, color: color.text }}
              >
                <span className="text-sm font-medium">{color.name}</span>
              </div>
              <p className="text-[10px] text-neutral-500 font-mono">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Spacing
        </h2>
        <div className="space-y-2">
          {spacings.map((spacing) => (
            <div key={spacing.name} className="flex items-center gap-4">
              <span className="w-8 text-xs font-medium text-neutral-500">{spacing.name}</span>
              <div
                className="h-4 bg-emerald-500 rounded"
                style={{ width: spacing.value }}
              />
              <span className="text-xs text-neutral-500 font-mono">{spacing.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Border Radius
        </h2>
        <div className="grid grid-cols-5 md:grid-cols-9 gap-4">
          {radiuses.map((radius) => (
            <div key={radius.name} className="text-center">
              <div
                className="w-full h-16 bg-emerald-100 border-2 border-emerald-500 mb-2"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-xs font-medium text-neutral-900 dark:text-white">{radius.name}</p>
              <p className="text-[10px] text-neutral-500 font-mono">{radius.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos tokens
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Estes tokens foram extraídos automaticamente do arquivo Figma do projeto Radar.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=13-377"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          Ver arquivo original no Figma
        </a>
      </div>
    </div>
  )
}
