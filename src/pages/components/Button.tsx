import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

const buttonVariants = {
  default: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700',
  outline: 'border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
  ghost: 'text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
  destructive: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500',
}

const buttonSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

function DemoButton({ variant = 'default', size = 'md', children, className, disabled }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const componentCode = `import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700',
        outline: 'border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
        ghost: 'text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
        destructive: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Uso:
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Desabilitado
<Button disabled>Disabled</Button>`

export function Button() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1
          className="text-4xl font-bold text-neutral-900 dark:text-white mb-4"
          style={{ fontFamily: 'var(--font-family-2)' }}
        >
          Button
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Componente de botão com múltiplas variantes e tamanhos.
          Construído com class-variance-authority para tipagem segura.
        </p>
      </div>

      {/* Variants Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Variantes
          </h2>
          <p className="text-sm text-neutral-500">
            5 variantes disponíveis: default, secondary, outline, ghost e destructive.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="flex flex-wrap gap-4 items-center">
              <DemoButton variant="default">Primary</DemoButton>
              <DemoButton variant="secondary">Secondary</DemoButton>
              <DemoButton variant="outline">Outline</DemoButton>
              <DemoButton variant="ghost">Ghost</DemoButton>
              <DemoButton variant="destructive">Destructive</DemoButton>
            </div>
          }
          code={componentCode}
        />
      </section>

      {/* Sizes Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Tamanhos
          </h2>
          <p className="text-sm text-neutral-500">
            3 tamanhos disponíveis: sm, md e lg.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="flex flex-wrap gap-4 items-center">
              <DemoButton size="sm">Small</DemoButton>
              <DemoButton size="md">Medium</DemoButton>
              <DemoButton size="lg">Large</DemoButton>
            </div>
          }
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </section>

      {/* States Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Estados
          </h2>
          <p className="text-sm text-neutral-500">
            Normal e desabilitado.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="flex flex-wrap gap-4 items-center">
              <DemoButton>Normal</DemoButton>
              <DemoButton disabled>Disabled</DemoButton>
            </div>
          }
          code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>`}
        />
      </section>
    </div>
  )
}
