import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'
import { cn } from '@/lib/utils'
import { ArrowRight, Star, Clock, Users } from 'lucide-react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

function DemoCard({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
}

function DemoCardHeader({ className, children }: CardProps) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>
}

function DemoCardContent({ className, children }: CardProps) {
  return <div className={cn('p-6', className)}>{children}</div>
}

function DemoCardFooter({ className, children }: CardProps) {
  return (
    <div className={cn('p-6 pt-0 flex items-center gap-2', className)}>
      {children}
    </div>
  )
}

function DemoCardTitle({ className, children }: CardProps) {
  return (
    <h3 className={cn('text-lg font-semibold text-neutral-900 dark:text-white', className)}>
      {children}
    </h3>
  )
}

function DemoCardDescription({ className, children }: CardProps) {
  return (
    <p className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}>
      {children}
    </p>
  )
}

const componentCode = `import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-200 dark:border-neutral-800',
        'bg-white dark:bg-neutral-900 overflow-hidden',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn('p-6 pb-0', className)} {...props} />
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('p-6', className)} {...props} />
}

export function CardFooter({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('p-6 pt-0 flex items-center gap-2', className)}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={cn('text-lg font-semibold text-neutral-900 dark:text-white', className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }: CardProps) {
  return (
    <p
      className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}
      {...props}
    />
  )
}

// Uso:
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Uma descrição breve do conteúdo.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card vai aqui.</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>`

export function Card() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1
          className="text-4xl font-bold text-neutral-900 dark:text-white mb-4"
          style={{ fontFamily: 'var(--font-family-2)' }}
        >
          Card
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Componente de card flexível com header, content e footer.
          Ideal para agrupar informações relacionadas.
        </p>
      </div>

      {/* Basic Card Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Card básico
          </h2>
          <p className="text-sm text-neutral-500">
            Card com header, content e footer.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="grid md:grid-cols-2 gap-6">
              <DemoCard>
                <DemoCardHeader>
                  <DemoCardTitle>Projeto Design System</DemoCardTitle>
                  <DemoCardDescription>POC para padronização visual</DemoCardDescription>
                </DemoCardHeader>
                <DemoCardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Este projeto visa criar uma base sólida de tokens e componentes
                    para uso em protótipos da área de inovação.
                  </p>
                </DemoCardContent>
                <DemoCardFooter>
                  <button className="inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                    Ver mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </DemoCardFooter>
              </DemoCard>

              <DemoCard>
                <div className="h-40 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <span className="text-white/50 text-sm">[Imagem de capa]</span>
                </div>
                <DemoCardContent>
                  <DemoCardTitle>Card com imagem</DemoCardTitle>
                  <DemoCardDescription className="mt-1">
                    Cards podem ter imagens de capa para destacar conteúdo visual.
                  </DemoCardDescription>
                </DemoCardContent>
              </DemoCard>
            </div>
          }
          code={componentCode}
        />
      </section>

      {/* Examples Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Exemplos de uso
          </h2>
          <p className="text-sm text-neutral-500">
            Cards para diferentes contextos: stats, features e info.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="grid md:grid-cols-3 gap-6">
              {/* Stats Card */}
              <DemoCard>
                <DemoCardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-neutral-900 dark:text-white">2,847</p>
                      <p className="text-sm text-neutral-500">Usuários ativos</p>
                    </div>
                  </div>
                </DemoCardContent>
              </DemoCard>

              {/* Feature Card */}
              <DemoCard>
                <DemoCardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-warning-100 dark:bg-warning-900/30 flex items-center justify-center">
                      <Star className="w-5 h-5 text-warning-600 dark:text-warning-400" />
                    </div>
                    <DemoCardTitle>Destaque</DemoCardTitle>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Cards de destaque para funcionalidades importantes.
                  </p>
                </DemoCardContent>
              </DemoCard>

              {/* Info Card */}
              <DemoCard>
                <DemoCardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-info-100 dark:bg-info-900/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-info-600 dark:text-info-400" />
                    </div>
                    <DemoCardTitle>Tempo</DemoCardTitle>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Última atualização há 2 horas.
                  </p>
                </DemoCardContent>
              </DemoCard>
            </div>
          }
          code={`// Stats Card
<Card>
  <CardContent>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
        <Users className="w-5 h-5 text-primary-600" />
      </div>
      <div>
        <p className="text-2xl font-bold">2,847</p>
        <p className="text-sm text-neutral-500">Usuários ativos</p>
      </div>
    </div>
  </CardContent>
</Card>

// Feature Card
<Card>
  <CardContent>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-lg bg-warning-100 flex items-center justify-center">
        <Star className="w-5 h-5 text-warning-600" />
      </div>
      <CardTitle>Destaque</CardTitle>
    </div>
    <p className="text-sm text-neutral-600">
      Cards de destaque para funcionalidades importantes.
    </p>
  </CardContent>
</Card>`}
        />
      </section>

      {/* Interactive Card Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Card interativo
          </h2>
          <p className="text-sm text-neutral-500">
            Cards com hover para interação.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="max-w-sm">
              <DemoCard className="hover:border-primary-300 dark:hover:border-primary-700 transition-colors cursor-pointer group">
                <DemoCardContent>
                  <DemoCardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Card clicável
                  </DemoCardTitle>
                  <DemoCardDescription className="mt-1">
                    Adicione classes de hover para criar cards interativos.
                  </DemoCardDescription>
                  <div className="mt-4 flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </DemoCardContent>
              </DemoCard>
            </div>
          }
          code={`<Card className="hover:border-primary-300 transition-colors cursor-pointer group">
  <CardContent>
    <CardTitle className="group-hover:text-primary-600 transition-colors">
      Card clicável
    </CardTitle>
    <CardDescription className="mt-1">
      Adicione classes de hover para criar cards interativos.
    </CardDescription>
    <div className="mt-4 flex items-center gap-1 text-primary-600 text-sm font-medium">
      Saiba mais
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </CardContent>
</Card>`}
        />
      </section>
    </div>
  )
}
