import { Ruler } from 'lucide-react'

const spacings = [
  { name: '1', value: '4px' },
  { name: '2', value: '8px' },
  { name: '3', value: '12px' },
  { name: '4', value: '16px' },
  { name: '5', value: '20px' },
  { name: '6', value: '24px' },
  { name: '8', value: '32px' },
  { name: '10', value: '40px' },
  { name: '12', value: '48px' },
  { name: '16', value: '64px' },
]

const radiuses = [
  { name: 'none', value: '0' },
  { name: 'sm', value: '4px' },
  { name: 'md', value: '6px' },
  { name: 'lg', value: '8px' },
  { name: 'xl', value: '12px' },
  { name: '2xl', value: '16px' },
  { name: '3xl', value: '20px' },
  { name: 'full', value: '500px' },
]

export function Spacing() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <Ruler className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1
              className="text-3xl font-bold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Spacing
            </h1>
            <p className="text-sm text-neutral-500">Design System Tokens</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Escala de espaçamentos e border-radius para criar layouts consistentes.
        </p>
      </div>

      {/* Spacing Scale */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Spacing Scale
        </h2>
        <div className="space-y-2">
          {spacings.map((spacing) => (
            <div key={spacing.name} className="flex items-center gap-4">
              <span className="w-8 text-xs font-medium text-neutral-500">{spacing.name}</span>
              <div
                className="h-4 bg-primary-600 rounded"
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
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {radiuses.map((radius) => (
            <div key={radius.name} className="text-center">
              <div
                className="w-full h-16 bg-primary-100 border-2 border-primary-600 mb-2"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-xs font-medium text-neutral-900 dark:text-white">{radius.name}</p>
              <p className="text-[10px] text-neutral-500 font-mono">{radius.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Exemplo Visual
        </h2>
        <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm text-neutral-500">gap-2 (8px)</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-primary-200 rounded" />
                <div className="w-8 h-8 bg-primary-300 rounded" />
                <div className="w-8 h-8 bg-primary-400 rounded" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm text-neutral-500">gap-4 (16px)</div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-200 rounded" />
                <div className="w-8 h-8 bg-primary-300 rounded" />
                <div className="w-8 h-8 bg-primary-400 rounded" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm text-neutral-500">gap-6 (24px)</div>
              <div className="flex gap-6">
                <div className="w-8 h-8 bg-primary-200 rounded" />
                <div className="w-8 h-8 bg-primary-300 rounded" />
                <div className="w-8 h-8 bg-primary-400 rounded" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm text-neutral-500">gap-8 (32px)</div>
              <div className="flex gap-8">
                <div className="w-8 h-8 bg-primary-200 rounded" />
                <div className="w-8 h-8 bg-primary-300 rounded" />
                <div className="w-8 h-8 bg-primary-400 rounded" />
              </div>
            </div>
          </div>
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
.card {
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  border-radius: var(--radius-lg);
}

/* Tailwind CSS */
<div className="p-4 mb-6 rounded-lg">
  Conteúdo
</div>

<section className="py-12 px-8">
  Seção
</section>`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
