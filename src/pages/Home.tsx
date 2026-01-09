import { ArrowRight, Palette, Grid3X3, FolderKanban, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Tokens',
    description: 'Cores, tipografia e espaçamentos que formam a base visual de todos os produtos.',
    href: '/tokens/colors',
  },
  {
    icon: <Grid3X3 className="w-6 h-6" />,
    title: 'Componentes',
    description: 'Blocos de interface reutilizáveis, prontos para acelerar a construção de protótipos.',
    href: '/components/button',
  },
  {
    icon: <FolderKanban className="w-6 h-6" />,
    title: 'Projetos',
    description: 'Histórico visual dos produtos já desenvolvidos, preservando decisões de design.',
    href: '/projetos/b2g-insights/tokens',
  },
]

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative -mx-8 -mt-12 px-8 pt-20 pb-24 rounded-b-3xl overflow-hidden min-h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-neutral-900" />
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-right-bottom" />

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/40" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <h1
            className="text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-family-2)' }}
          >
            Nosso Estilo
            <br />
            <span className="text-primary-400">Builder</span>
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Construímos inovação com agilidade, qualidade e consistência visual.
            Esta biblioteca é o nosso guia para alcançar excelência em design e produto —
            garantindo que cada protótipo reflita o padrão Cogna Labs.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/tokens/colors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Explorar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              {card.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {card.description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Acessar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      {/* shadcn/ui Card */}
      <section>
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-8 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border border-primary-500/30"
          style={{
            background: 'linear-gradient(135deg, #1a0a2e 0%, #16082a 50%, #0d0514 100%)'
          }}
        >
          {/* Purple glow effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-96 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: 'linear-gradient(to right, rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />

          <div className="relative flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 group-hover:shadow-primary-500/40 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-7 w-7"
                >
                  <rect width="256" height="256" fill="none" />
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    className="text-black"
                  />
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    className="text-black"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary-500/30 text-primary-200 rounded border border-primary-500/30">
                    Nossa base
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Construímos com shadcn/ui
                </h3>
                <p className="text-purple-200/70 text-sm max-w-xl leading-relaxed">
                  Nossos componentes são desenvolvidos sobre o <span className="text-white font-medium">shadcn/ui</span>,
                  uma biblioteca moderna que combina <span className="text-purple-100">Radix UI</span> e <span className="text-purple-100">Tailwind CSS</span>.
                  Isso nos permite criar interfaces acessíveis, consistentes e fáceis de customizar.
                  Conheça a documentação oficial para entender melhor os padrões que seguimos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm text-purple-300/60 group-hover:text-purple-100 transition-colors">
                ui.shadcn.com
              </span>
              <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 group-hover:border-primary-400/50 transition-all">
                <ExternalLink className="w-5 h-5 text-primary-200" />
              </div>
            </div>
          </div>
        </a>
      </section>
    </div>
  )
}
