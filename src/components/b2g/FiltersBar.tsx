import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FilterSelect } from './FilterSelect'
import type { FilterOption } from './FilterSelect'
import { ApplyFiltersButton } from './ApplyFiltersButton'

// Dados dos filtros (mesmo do original)
export const filterData = {
  regiao: [
    { value: 'sul', label: 'Sul' },
    { value: 'sudeste', label: 'Sudeste' },
    { value: 'centro-oeste', label: 'Centro-Oeste' },
    { value: 'norte', label: 'Norte' },
    { value: 'nordeste', label: 'Nordeste' },
  ],
  estado: [
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
    { value: 'mg', label: 'Minas Gerais' },
    { value: 'rs', label: 'Rio Grande do Sul' },
    { value: 'pr', label: 'Paraná' },
    { value: 'sc', label: 'Santa Catarina' },
    { value: 'ba', label: 'Bahia' },
    { value: 'go', label: 'Goiás' },
    { value: 'pe', label: 'Pernambuco' },
    { value: 'ce', label: 'Ceará' },
    { value: 'pa', label: 'Pará' },
    { value: 'am', label: 'Amazonas' },
  ],
  mesoregiao: [
    { value: 'metropolitana', label: 'Metropolitana' },
    { value: 'litoral', label: 'Litoral' },
    { value: 'interior', label: 'Interior' },
    { value: 'serra', label: 'Serra' },
    { value: 'vale', label: 'Vale' },
  ],
  microregiao: [
    { value: 'capital', label: 'Capital' },
    { value: 'grande-abc', label: 'Grande ABC' },
    { value: 'campinas', label: 'Campinas' },
    { value: 'santos', label: 'Santos' },
    { value: 'sorocaba', label: 'Sorocaba' },
    { value: 'ribeirao-preto', label: 'Ribeirão Preto' },
  ],
  cidade: [
    { value: 'sao-paulo', label: 'São Paulo' },
    { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
    { value: 'belo-horizonte', label: 'Belo Horizonte' },
    { value: 'porto-alegre', label: 'Porto Alegre' },
    { value: 'curitiba', label: 'Curitiba' },
    { value: 'salvador', label: 'Salvador' },
    { value: 'brasilia', label: 'Brasília' },
    { value: 'fortaleza', label: 'Fortaleza' },
    { value: 'recife', label: 'Recife' },
    { value: 'manaus', label: 'Manaus' },
  ],
  ano: [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
  ],
}

export interface FilterConfig {
  key: string
  label: string
  placeholder: string
  options: FilterOption[]
  variant?: 'purple' | 'outline'
  width?: string
}

export interface FiltersBarProps {
  filters?: FilterConfig[]
  onApply?: (filters: Record<string, string>) => void
  className?: string
}

const defaultFilters: FilterConfig[] = [
  { key: 'regiao', label: 'Região', placeholder: 'Selecione', options: filterData.regiao },
  { key: 'estado', label: 'Estado', placeholder: 'Selecione', options: filterData.estado },
  { key: 'mesoregiao', label: 'Mesoregião', placeholder: 'Selecione', options: filterData.mesoregiao },
  { key: 'microregiao', label: 'Microregião', placeholder: 'Selecione', options: filterData.microregiao },
  { key: 'cidade', label: 'Cidade', placeholder: 'Selecione', options: filterData.cidade },
  { key: 'ano', label: 'Ano', placeholder: 'Selecione o ano', options: filterData.ano, variant: 'outline', width: '166px' },
]

export function FiltersBar({
  filters = defaultFilters,
  onApply,
  className,
}: FiltersBarProps) {
  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map((f) => [f.key, '']))
  )

  const handleFilterChange = (filterKey: string) => (value: string) => {
    setFilterValues((prev) => ({ ...prev, [filterKey]: value }))
  }

  const handleApplyFilters = () => {
    console.log('Filtros aplicados:', filterValues)
    onApply?.(filterValues)
  }

  const hasActiveFilters = Object.values(filterValues).some((v) => v !== '')

  return (
    <div
      className={cn(
        'flex items-end gap-[42px] px-8 py-3 bg-white rounded-[18px]',
        // Responsive
        'max-xl:flex-wrap max-xl:gap-6',
        'max-md:p-4',
        className
      )}
    >
      {/* Filter Fields */}
      <div className={cn(
        'flex items-start gap-6',
        'max-xl:flex-wrap'
      )}>
        {filters.map((filter) => (
          <FilterSelect
            key={filter.key}
            label={filter.label}
            placeholder={filter.placeholder}
            options={filter.options}
            value={filterValues[filter.key]}
            onChange={handleFilterChange(filter.key)}
            variant={filter.variant || 'purple'}
            width={filter.width || '132px'}
            className="max-md:!w-full"
          />
        ))}
      </div>

      {/* Apply Button */}
      <ApplyFiltersButton
        onClick={handleApplyFilters}
        isActive={hasActiveFilters}
        className="max-md:w-full"
      />
    </div>
  )
}
