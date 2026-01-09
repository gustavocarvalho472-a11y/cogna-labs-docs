import { Palette } from 'lucide-react'

// Cores Primary
const primaryColors = [
  { name: '50', value: '#f5f3ff' },
  { name: '100', value: '#ede9fe' },
  { name: '200', value: '#ddd6fe' },
  { name: '300', value: '#c4b5fd' },
  { name: '400', value: '#a78bfa' },
  { name: '500', value: '#8b5cf6' },
  { name: '600', value: '#7c3aed' },
  { name: '700', value: '#6d28d9' },
  { name: '800', value: '#5b21b6' },
  { name: '900', value: '#4c1d95' },
]

// Cores Secondary
const secondaryColors = [
  { name: '50', value: '#f8fafc' },
  { name: '100', value: '#f1f5f9' },
  { name: '200', value: '#e2e8f0' },
  { name: '300', value: '#cbd5e1' },
  { name: '400', value: '#94a3b8' },
  { name: '500', value: '#64748b' },
  { name: '600', value: '#475569' },
  { name: '700', value: '#334155' },
  { name: '800', value: '#1e293b' },
  { name: '900', value: '#0f172a' },
]

// Cores Neutral
const neutralColors = [
  { name: '50', value: '#fafafa' },
  { name: '100', value: '#f4f4f5' },
  { name: '200', value: '#e4e4e7' },
  { name: '300', value: '#d4d4d8' },
  { name: '400', value: '#a1a1aa' },
  { name: '500', value: '#71717a' },
  { name: '600', value: '#52525b' },
  { name: '700', value: '#3f3f46' },
  { name: '800', value: '#27272a' },
  { name: '900', value: '#18181b' },
]

// Cores Semânticas
const semanticColors = [
  { name: 'Success', value: '#22c55e', bg: '#dcfce7', text: '#166534' },
  { name: 'Error', value: '#ef4444', bg: '#fee2e2', text: '#991b1b' },
  { name: 'Warning', value: '#f59e0b', bg: '#fef3c7', text: '#92400e' },
  { name: 'Info', value: '#06b6d4', bg: '#cffafe', text: '#155e75' },
]

export function Colors() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <Palette className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1
              className="text-3xl font-bold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Colors
            </h1>
            <p className="text-sm text-neutral-500">Design System Tokens</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Sistema de cores extraído do Figma. As cores estão disponíveis como variáveis CSS
          e classes Tailwind.
        </p>
      </div>

      {/* Primary Colors */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Primary (Purple)
          </h2>
          <p className="text-sm text-neutral-500">
            Cor principal da marca, usada para ações e elementos de destaque.
          </p>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
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

      {/* Secondary Colors */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Secondary (Slate)
          </h2>
          <p className="text-sm text-neutral-500">
            Cor secundária para elementos complementares.
          </p>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {secondaryColors.map((color) => (
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
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Neutral (Gray)
          </h2>
          <p className="text-sm text-neutral-500">
            Tons de cinza para textos, backgrounds e bordas.
          </p>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
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
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Semantic
          </h2>
          <p className="text-sm text-neutral-500">
            Cores semânticas para feedback e estados.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2 flex items-center justify-center"
                style={{ backgroundColor: color.bg, color: color.text }}
              >
                <span className="text-sm font-medium">{color.name}</span>
              </div>
              <p className="text-[10px] text-neutral-500 font-mono">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Como usar
        </h2>
        <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
          <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`/* CSS - Usando variáveis */
.my-element {
  background-color: var(--color-primary-600);
  color: var(--color-neutral-50);
}

/* Tailwind CSS */
<div className="bg-primary-600 text-neutral-50">
  Conteúdo
</div>`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
