import { Type } from 'lucide-react'

export function Typography() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <Type className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1
              className="text-3xl font-bold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Typography
            </h1>
            <p className="text-sm text-neutral-500">Design System Tokens</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Sistema tipográfico com duas famílias de fontes: <strong>Golos Text</strong> para corpo de texto
          e <strong>Barlow</strong> para títulos e destaques.
        </p>
      </div>

      {/* Font Families */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Font Families
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
            <p className="text-sm text-neutral-500 mb-2">Corpo (Body)</p>
            <p
              className="text-3xl text-neutral-900 dark:text-white mb-2"
              style={{ fontFamily: 'var(--font-family-1)' }}
            >
              Golos Text
            </p>
            <p
              className="text-lg text-neutral-600 dark:text-neutral-400"
              style={{ fontFamily: 'var(--font-family-1)' }}
            >
              Aa Bb Cc Dd Ee Ff Gg 0123456789
            </p>
            <code className="text-xs text-primary-600 font-mono mt-2 block">
              var(--font-family-1)
            </code>
          </div>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
            <p className="text-sm text-neutral-500 mb-2">Display (Títulos)</p>
            <p
              className="text-3xl text-neutral-900 dark:text-white mb-2"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Barlow
            </p>
            <p
              className="text-lg text-neutral-600 dark:text-neutral-400"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Aa Bb Cc Dd Ee Ff Gg 0123456789
            </p>
            <code className="text-xs text-primary-600 font-mono mt-2 block">
              var(--font-family-2)
            </code>
          </div>
        </div>
      </section>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Font Sizes
        </h2>
        <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">12px</span>
              <p className="text-xs text-neutral-900 dark:text-white">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">14px</span>
              <p className="text-sm text-neutral-900 dark:text-white">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">16px</span>
              <p className="text-base text-neutral-900 dark:text-white">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">18px</span>
              <p className="text-lg text-neutral-900 dark:text-white">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">20px</span>
              <p className="text-xl text-neutral-900 dark:text-white font-semibold">The quick brown fox jumps</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">24px</span>
              <p className="text-2xl text-neutral-900 dark:text-white font-bold">The quick brown fox</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">32px</span>
              <p className="text-3xl text-neutral-900 dark:text-white font-bold" style={{ fontFamily: 'var(--font-family-2)' }}>Design System</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 text-xs font-medium text-neutral-500">48px</span>
              <p className="text-5xl text-neutral-900 dark:text-white font-bold" style={{ fontFamily: 'var(--font-family-2)' }}>Cogna Labs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Font Weights
        </h2>
        <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs font-medium text-neutral-500">Light (300)</span>
              <p className="text-2xl text-neutral-900 dark:text-white font-light">Cogna Labs Design System</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs font-medium text-neutral-500">Regular (400)</span>
              <p className="text-2xl text-neutral-900 dark:text-white font-normal">Cogna Labs Design System</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs font-medium text-neutral-500">Medium (500)</span>
              <p className="text-2xl text-neutral-900 dark:text-white font-medium">Cogna Labs Design System</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs font-medium text-neutral-500">Semibold (600)</span>
              <p className="text-2xl text-neutral-900 dark:text-white font-semibold">Cogna Labs Design System</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs font-medium text-neutral-500">Bold (700)</span>
              <p className="text-2xl text-neutral-900 dark:text-white font-bold">Cogna Labs Design System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Line Heights */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Line Heights
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {[
            { name: 'xs', value: '110%' },
            { name: 'sm', value: '120%' },
            { name: 'md', value: '140%' },
            { name: 'lg', value: '148%' },
            { name: 'xl', value: '160%' },
          ].map((lh) => (
            <div
              key={lh.name}
              className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950 text-center"
            >
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">{lh.value}</p>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{lh.name}</p>
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
.heading {
  font-family: var(--font-family-2); /* Barlow */
  font-size: var(--font-size-xl2);
  font-weight: var(--font-weight-bold);
}

.body {
  font-family: var(--font-family-1); /* Golos Text */
  font-size: var(--font-size-xs3);
  font-weight: var(--font-weight-regular);
}

/* Tailwind CSS */
<h1 className="font-display text-4xl font-bold">
  Título
</h1>
<p className="font-sans text-base">
  Texto do corpo
</p>`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
