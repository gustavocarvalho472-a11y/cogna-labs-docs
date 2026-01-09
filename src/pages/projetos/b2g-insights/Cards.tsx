import { useState } from 'react'
import { BarChart3 } from 'lucide-react'
import { StatCard } from '@/components/b2g/StatCard'
import { CategoryMainCard, CategoryCard, CategorySmallCard } from '@/components/b2g/CategoryCard'
import { EditalCard } from '@/components/b2g/EditalCard'
import { cn } from '@/lib/utils'

type TabType = 'preview' | 'code'

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
        active
          ? 'bg-[#f4efff] text-[#8725ff]'
          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
      )}
    >
      {children}
    </button>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  )
}

// Icons (exatos do original)
const TrendingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.333 7L14.583 15.75L10.5 11.667L4.667 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 7H23.333V12.833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ContractIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.333 2.333H7A2.333 2.333 0 004.667 4.667v18.666A2.333 2.333 0 007 25.667h14a2.333 2.333 0 002.333-2.334V9.333L16.333 2.333z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.333 2.333v7h7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.667 15.167H9.333M18.667 19.833H9.333M11.667 10.5H9.333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CompetitorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.833 24.5v-2.333A4.667 4.667 0 0015.167 17.5H8.167A4.667 4.667 0 003.5 22.167V24.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11.667" cy="8.167" r="4.667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.5 24.5v-2.333a4.667 4.667 0 00-3.5-4.515M17.5 3.652a4.667 4.667 0 010 9.03" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FoodIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2v6M6 4v4M14 4v4M4 10h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Code examples
const statCardCode = `import { StatCard } from '@/components/b2g/StatCard'

// Main Card
<StatCard
  label="TOTAL DE CONTRATOS EM EDUCAÇÃO"
  value="R$ 19,3B"
  description="Volume acumulado no período e categoria selecionado."
  icon={<TrendingIcon />}
  variant="main"
/>

// Secondary Card
<StatCard
  label="CONTRATOS YTD"
  value="4.287"
  description="Contratos ativos"
  icon={<ContractIcon />}
  variant="secondary"
/>`

const categoryCardCode = `import { CategoryMainCard, CategoryCard, CategorySmallCard } from '@/components/b2g/CategoryCard'

// Main Card (gradient)
<CategoryMainCard
  title={"Materiais Didáticos\\ne Sistemas de Ensino"}
  value="R$2.7BI"
  percent="(3%)"
  icon={<DesignIcon />}
/>

// Medium Card (purple)
<CategoryCard
  title={"Formação e Capacitação\\nde Professores e Equipe Pedagógica"}
  value="R$1.7BI"
  percent="(1%)"
  icon={<FoodIcon />}
  variant="purple"
/>

// Small Card
<CategorySmallCard
  title={"Qualificação Profissional\\ne Lifelong Learning"}
  value="R$7MI"
  percent="(0.3%)"
/>`

const editalCardCode = `import { EditalCard } from '@/components/b2g/EditalCard'

<EditalCard
  secretaria="Sec. Saúde Rio de Janeiro"
  titulo="Vacinação - Adultos"
  diasRestantes={3}
  link="Ver mais informações"
  tags={['Campanhas de Vacinação...', 'Treinamento em Saúde...', 'Apoio a Comunidades ...', 'Acessar']}
  valor="R$450M"
  valorColor="green"
/>`

export function B2GCards() {
  const [statTab, setStatTab] = useState<TabType>('preview')
  const [categoryTab, setCategoryTab] = useState<TabType>('preview')
  const [editalTab, setEditalTab] = useState<TabType>('preview')

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
              Cards
            </h1>
            <p className="text-sm text-neutral-500">B2G Insights Components</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Componentes de card extraídos da página de oportunidades do B2G Insights.
          Inclui StatCard, CategoryCard e EditalCard.
        </p>
      </div>

      {/* StatCard Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            StatCard
          </h2>
          <p className="text-sm text-neutral-500">
            Card de estatísticas da seção "SAM e Oportunidades". Variantes: main e secondary.
          </p>
        </div>

        <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
          <TabButton active={statTab === 'preview'} onClick={() => setStatTab('preview')}>
            Preview
          </TabButton>
          <TabButton active={statTab === 'code'} onClick={() => setStatTab('code')}>
            Code
          </TabButton>
        </div>

        {statTab === 'preview' ? (
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
            <div className="flex gap-[22px] flex-wrap">
              <StatCard
                label="TOTAL DE CONTRATOS EM EDUCAÇÃO"
                value="R$ 19,3B"
                description="Volume acumulado no período e categoria selecionado."
                icon={<TrendingIcon />}
                variant="main"
              />
              <StatCard
                label="CONTRATOS YTD"
                value="4.287"
                description="Contratos ativos"
                icon={<ContractIcon />}
                variant="secondary"
              />
              <StatCard
                label="CONCORRENTES IDENTIFICADOS"
                value="100"
                icon={<CompetitorIcon />}
                variant="secondary"
              />
            </div>
          </div>
        ) : (
          <CodeBlock code={statCardCode} />
        )}
      </section>

      {/* CategoryCard Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            CategoryCard
          </h2>
          <p className="text-sm text-neutral-500">
            Cards da seção "O que mais se Compra - Análise de categoria". Tipos: CategoryMainCard, CategoryCard, CategorySmallCard.
          </p>
        </div>

        <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
          <TabButton active={categoryTab === 'preview'} onClick={() => setCategoryTab('preview')}>
            Preview
          </TabButton>
          <TabButton active={categoryTab === 'code'} onClick={() => setCategoryTab('code')}>
            Code
          </TabButton>
        </div>

        {categoryTab === 'preview' ? (
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
            <div className="flex flex-col gap-3">
              {/* Top Section */}
              <div className="flex gap-[7px]">
                <CategoryMainCard
                  title={"Materiais Didáticos\ne Sistemas de Ensino"}
                  value="R$2.7BI"
                  percent="(3%)"
                  icon={<DesignIcon />}
                />
                <div className="flex flex-col gap-[7px] flex-1">
                  <CategoryCard
                    title={"Formação e Capacitação\nde Professores e Equipe Pedagógica"}
                    value="R$1.7BI"
                    percent="(1%)"
                    icon={<FoodIcon />}
                    variant="purple"
                  />
                  <CategoryCard
                    title={"Suporte a Alunos\ne Inclusão Educacional"}
                    value="R$1.7BI"
                    percent="(1%)"
                    icon={<FoodIcon />}
                    variant="light-purple"
                  />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex gap-[6px]">
                <CategorySmallCard
                  title={"Qualificação Profissional\ne Lifelong Learning"}
                  value="R$7MI"
                  percent="(0.3%)"
                />
                <CategorySmallCard
                  title="Infraestrutura, Construção e Equipamentos Escolares"
                  value="R$7MI"
                  percent="(0.3%)"
                />
                <CategorySmallCard
                  title="Gestão e Administração Educacional"
                  value="R$7MI"
                  percent="(0.3%)"
                />
              </div>

              <div className="flex gap-[6px]">
                <CategorySmallCard
                  title={"Serviços de Apoio\nOperacional"}
                  value="R$7MI"
                  percent="(0.3%)"
                />
                <CategorySmallCard
                  title="Suprimentos e Materiais de Consumo Escolar"
                  value="R$7MI"
                  percent="(0.3%)"
                />
                <CategorySmallCard
                  title={"Outros Editais\nEducacionais"}
                  value="R$7MI"
                  percent="(0.3%)"
                />
              </div>
            </div>
          </div>
        ) : (
          <CodeBlock code={categoryCardCode} />
        )}
      </section>

      {/* EditalCard Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            EditalCard
          </h2>
          <p className="text-sm text-neutral-500">
            Card da seção "Editais & Licitações ativas". Inclui secretaria, título, dias restantes, tags, valor e botão de download.
          </p>
        </div>

        <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
          <TabButton active={editalTab === 'preview'} onClick={() => setEditalTab('preview')}>
            Preview
          </TabButton>
          <TabButton active={editalTab === 'code'} onClick={() => setEditalTab('code')}>
            Code
          </TabButton>
        </div>

        {editalTab === 'preview' ? (
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950">
            <div className="flex flex-col gap-3">
              <EditalCard
                secretaria="Sec. Saúde Rio de Janeiro"
                titulo="Vacinação - Adultos"
                diasRestantes={3}
                link="Ver mais informações"
                tags={['Campanhas de Vacinação...', 'Treinamento em Saúde...', 'Apoio a Comunidades ...', 'Acessar']}
                valor="R$450M"
                valorColor="green"
              />
              <EditalCard
                secretaria="Sec. Transporte Minas Gerais"
                titulo="Manutenção de Estradas"
                diasRestantes={7}
                link="Ver detalhes"
                tags={['Infraestrutura de Transporte...', 'Capacitação de Motoristas...', 'Assistência Técnica ...', 'Visualizar']}
                valor="R$1.2B"
                valorColor="purple"
              />
              <EditalCard
                secretaria="Sec. Educação São Paulo"
                titulo="Material didático - Ensino Fundamental"
                diasRestantes={3}
                link="Ver mais detalhes"
                tags={['Materiais Didáticos e Sistemas...', 'Formação e Capacitação...', 'Suporte a Alunos ...', 'Ver mais']}
                valor="R$892M"
                valorColor="green"
              />
            </div>
          </div>
        ) : (
          <CodeBlock code={editalCardCode} />
        )}
      </section>
    </div>
  )
}
