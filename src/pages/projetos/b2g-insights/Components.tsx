import { BarChart3, Image, Plus } from 'lucide-react'

interface ComponentPlaceholderProps {
  name: string
  description: string
}

function ComponentPlaceholder({ name, description }: ComponentPlaceholderProps) {
  return (
    <div className="p-6 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
      <div className="flex flex-col items-center justify-center py-8 text-center">
        {/* [PLACEHOLDER: Screenshot do componente do Figma] */}
        <div className="w-16 h-16 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-4">
          <Image className="w-8 h-8 text-neutral-400" />
        </div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">{name}</h3>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  )
}

export function B2GInsightsComponents() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1
              className="text-4xl font-bold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              B2G Insights
            </h1>
            <p className="text-sm text-neutral-500">Componentes do projeto</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Biblioteca de componentes utilizados no projeto B2G Insights.
          Cada componente inclui screenshot do Figma e especificações de uso.
        </p>
      </div>

      {/* Component Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
          Componentes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComponentPlaceholder
            name="Card de Métricas"
            description="Aguardando screenshot do Figma"
          />
          <ComponentPlaceholder
            name="Gráfico de Barras"
            description="Aguardando screenshot do Figma"
          />
          <ComponentPlaceholder
            name="Tabela de Dados"
            description="Aguardando screenshot do Figma"
          />
          <ComponentPlaceholder
            name="Filtros"
            description="Aguardando screenshot do Figma"
          />
          <ComponentPlaceholder
            name="Navigation"
            description="Aguardando screenshot do Figma"
          />

          {/* Add new component placeholder */}
          <div className="p-6 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="font-semibold text-neutral-500 mb-1">Adicionar Componente</h3>
              <p className="text-sm text-neutral-400">Envie screenshot do Figma</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Como adicionar componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Para documentar os componentes deste projeto:
        </p>
        <ol className="list-decimal list-inside text-sm text-neutral-600 dark:text-neutral-400 mt-2 space-y-1">
          <li>Exporte screenshots dos componentes do Figma</li>
          <li>Envie as imagens para serem adicionadas aqui</li>
          <li>Inclua especificações de uso e variantes</li>
        </ol>
      </div>
    </div>
  )
}
