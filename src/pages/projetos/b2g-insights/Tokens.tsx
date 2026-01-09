import { BarChart3 } from 'lucide-react'

// Cores do B2G Insights
const primaryColors = [
  { name: '50', value: '#f9f5ff', cssVar: '--b2g-primary-50' },
  { name: '100', value: '#f4efff', cssVar: '--b2g-primary-100' },
  { name: '200', value: '#eee6ff', cssVar: '--b2g-primary-200' },
  { name: '300', value: '#e9ddff', cssVar: '--b2g-primary-300' },
  { name: '400', value: '#e0d4ff', cssVar: '--b2g-primary-400' },
  { name: '500', value: '#dccdfa', cssVar: '--b2g-primary-500' },
  { name: '600', value: '#cdb3ff', cssVar: '--b2g-primary-600' },
  { name: '700', value: '#aa80ff', cssVar: '--b2g-primary-700' },
  { name: '800', value: '#8725ff', cssVar: '--b2g-primary-800' },
  { name: '900', value: '#7c3aed', cssVar: '--b2g-primary-900' },
  { name: '950', value: '#6b1fcc', cssVar: '--b2g-primary-950' },
]

const neutralColors = [
  { name: '50', value: '#fdfdfd', cssVar: '--b2g-neutral-50' },
  { name: '100', value: '#f9fafb', cssVar: '--b2g-neutral-150' },
  { name: '200', value: '#f6f8fa', cssVar: '--b2g-neutral-200' },
  { name: '300', value: '#f3f4f6', cssVar: '--b2g-neutral-250' },
  { name: '400', value: '#e5e7eb', cssVar: '--b2g-neutral-400' },
  { name: '500', value: '#bbbec4', cssVar: '--b2g-neutral-500' },
  { name: '600', value: '#a5aec0', cssVar: '--b2g-neutral-550' },
  { name: '700', value: '#6b7280', cssVar: '--b2g-neutral-750' },
  { name: '800', value: '#494e57', cssVar: '--b2g-neutral-850' },
  { name: '900', value: '#2e3137', cssVar: '--b2g-neutral-1000' },
  { name: '950', value: '#1e2024', cssVar: '--b2g-neutral-1050' },
]

const semanticColors = [
  { name: 'Success', value: '#95ffc1', text: '#0f6533', cssVar: '--b2g-success-100' },
  { name: 'Error', value: '#ff9f99', text: '#98231b', cssVar: '--b2g-error-100' },
  { name: 'Info', value: '#deeafc', text: '#223d85', cssVar: '--b2g-info-50' },
]

const spacings = [
  { name: '1', value: '4px', cssVar: '--b2g-spacing-1' },
  { name: '2', value: '8px', cssVar: '--b2g-spacing-2' },
  { name: '3', value: '12px', cssVar: '--b2g-spacing-3' },
  { name: '4', value: '16px', cssVar: '--b2g-spacing-4' },
  { name: '5', value: '20px', cssVar: '--b2g-spacing-5' },
  { name: '6', value: '24px', cssVar: '--b2g-spacing-6' },
  { name: '8', value: '32px', cssVar: '--b2g-spacing-8' },
  { name: '10', value: '40px', cssVar: '--b2g-spacing-10' },
  { name: '12', value: '48px', cssVar: '--b2g-spacing-12' },
]

const radiuses = [
  { name: 'sm', value: '4px', cssVar: '--b2g-radius-md' },
  { name: 'default', value: '6px', cssVar: '--b2g-radius-default' },
  { name: 'lg', value: '8px', cssVar: '--b2g-radius-lg' },
  { name: 'xl', value: '10px', cssVar: '--b2g-radius-xl' },
  { name: '2xl', value: '12px', cssVar: '--b2g-radius-2xl' },
  { name: '3xl', value: '16px', cssVar: '--b2g-radius-3xl' },
  { name: '4xl', value: '18px', cssVar: '--b2g-radius-4xl' },
  { name: '5xl', value: '20px', cssVar: '--b2g-radius-5xl' },
  { name: 'full', value: '500px', cssVar: '--b2g-radius-full' },
]

export function B2GInsightsTokens() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#f4efff] flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-[#8725ff]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Tokens
            </h1>
            <p className="text-sm text-neutral-500">B2G Insights Design Tokens</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Tokens extraídos da página de oportunidades do B2G Insights.
          Fonte principal: <strong>Inter</strong>.
        </p>
      </div>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Typography
        </h2>
        <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
          <p className="text-sm text-neutral-500 mb-4">Font Family: Inter</p>
          <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
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

      {/* Semantic Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Semantic
        </h2>
        <div className="grid grid-cols-3 gap-4">
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
                className="h-4 bg-[#8725ff] rounded"
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
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {radiuses.map((radius) => (
            <div key={radius.name} className="text-center">
              <div
                className="w-full h-16 bg-[#f4efff] border-2 border-[#8725ff] mb-2"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-xs font-medium text-neutral-900 dark:text-white">{radius.name}</p>
              <p className="text-[10px] text-neutral-500 font-mono">{radius.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
