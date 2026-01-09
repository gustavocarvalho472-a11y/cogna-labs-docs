import { useState } from 'react'
import { FilterSelect, filterData } from '@/components/b2g'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'
import { LayoutGrid } from 'lucide-react'

const categorias = [
  { value: 'educacao', label: 'Educação' },
  { value: 'saude', label: 'Saúde' },
  { value: 'tecnologia', label: 'Tecnologia' },
  { value: 'infraestrutura', label: 'Infraestrutura' },
]

const selectCode = `import { FilterSelect } from '@/components/b2g'
import { LayoutGrid } from 'lucide-react'

// Variante Purple
<FilterSelect
  label="Região"
  placeholder="Selecione"
  options={regioes}
  value={selected}
  onChange={setSelected}
  variant="purple"
/>

// Variante Outline
<FilterSelect
  label="Ano"
  placeholder="Selecione o ano"
  options={anos}
  variant="outline"
  width="166px"
/>

// Variante Icon
<FilterSelect
  label="Categorias"
  placeholder="Selecione a categoria"
  options={categorias}
  variant="icon"
  icon={<LayoutGrid className="w-5 h-5" />}
  width="240px"
/>`

export function B2GSelect() {
  const [selected1, setSelected1] = useState('')
  const [selected2, setSelected2] = useState('')
  const [selected3, setSelected3] = useState('')

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
          Select
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Exibe uma lista de opções para o usuário selecionar.
        </p>
      </div>

      {/* Select Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Variantes
          </h2>
          <p className="text-sm text-neutral-500">
            3 variantes disponíveis: purple, outline e icon.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="flex items-end gap-6 flex-wrap">
              <FilterSelect
                label="Região"
                placeholder="Selecione"
                options={filterData.regiao}
                value={selected1}
                onChange={setSelected1}
                variant="purple"
              />
              <FilterSelect
                label="Ano"
                placeholder="Selecione o ano"
                options={filterData.ano}
                value={selected2}
                onChange={setSelected2}
                variant="outline"
                width="166px"
              />
              <FilterSelect
                label="Categorias"
                placeholder="Selecione a categoria"
                options={categorias}
                value={selected3}
                onChange={setSelected3}
                variant="icon"
                icon={<LayoutGrid className="w-5 h-5" />}
                width="240px"
              />
            </div>
          }
          code={selectCode}
        />
      </section>
    </div>
  )
}
