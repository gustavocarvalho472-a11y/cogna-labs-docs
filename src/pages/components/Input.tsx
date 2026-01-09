import { useState } from 'react'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'
import { cn } from '@/lib/utils'
import { Mail, Lock, Search, AlertCircle } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
}

function DemoInput({ label, error, hint, leftIcon, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {leftIcon}
          </div>
        )}
        <input
          className={cn(
            'w-full h-10 px-3 text-sm rounded-lg border transition-colors',
            'bg-white dark:bg-neutral-900',
            'text-neutral-900 dark:text-white',
            'placeholder:text-neutral-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            leftIcon && 'pl-10',
            error
              ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
              : 'border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20',
            props.disabled && 'opacity-50 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800',
            className
          )}
          {...props}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-error-500">
            <AlertCircle className="w-4 h-4" />
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-error-500 flex items-center gap-1">
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="text-sm text-neutral-500">{hint}</p>
      )}
    </div>
  )
}

const componentCode = `import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
}

export function Input({ label, error, hint, leftIcon, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {leftIcon}
          </div>
        )}
        <input
          className={cn(
            'w-full h-10 px-3 text-sm rounded-lg border transition-colors',
            'bg-white dark:bg-neutral-900',
            'text-neutral-900 dark:text-white',
            'placeholder:text-neutral-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            leftIcon && 'pl-10',
            error
              ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
              : 'border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20',
            props.disabled && 'opacity-50 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800',
            className
          )}
          {...props}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-error-500">
            <AlertCircle className="w-4 h-4" />
          </div>
        )}
      </div>
      {error && <p className="text-sm text-error-500">{error}</p>}
      {hint && !error && <p className="text-sm text-neutral-500">{hint}</p>}
    </div>
  )
}

// Uso:
<Input placeholder="Digite seu nome" />
<Input label="Email" placeholder="seu@email.com" />
<Input label="Email" placeholder="seu@email.com" leftIcon={<Mail />} />
<Input label="Senha" type="password" error="Senha deve ter no mínimo 8 caracteres" />
<Input label="Username" hint="Este será seu identificador único" />
<Input label="Campo" disabled placeholder="Não editável" />`

export function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1
          className="text-4xl font-bold text-neutral-900 dark:text-white mb-4"
          style={{ fontFamily: 'var(--font-family-2)' }}
        >
          Input
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Campo de entrada de texto com suporte a labels, ícones, estados de erro
          e dicas de preenchimento.
        </p>
      </div>

      {/* Preview Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Input com ícones
          </h2>
          <p className="text-sm text-neutral-500">
            Inputs com label e ícones à esquerda.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="max-w-sm space-y-4">
              <DemoInput
                label="Email"
                placeholder="seu@email.com"
                leftIcon={<Mail className="w-4 h-4" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <DemoInput
                label="Senha"
                type="password"
                placeholder="••••••••"
                leftIcon={<Lock className="w-4 h-4" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          }
          code={componentCode}
        />
      </section>

      {/* States Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Estados
          </h2>
          <p className="text-sm text-neutral-500">
            Default, com ícone, com erro, com hint e desabilitado.
          </p>
        </div>

        <PreviewCodeTabs
          preview={
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-neutral-500 mb-2">Default</p>
                <DemoInput label="Nome" placeholder="Digite seu nome" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-2">Com ícone</p>
                <DemoInput
                  label="Buscar"
                  placeholder="Pesquisar..."
                  leftIcon={<Search className="w-4 h-4" />}
                />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-2">Com erro</p>
                <DemoInput
                  label="Email"
                  placeholder="seu@email.com"
                  error="Email inválido"
                  defaultValue="email-invalido"
                />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-2">Com hint</p>
                <DemoInput
                  label="Username"
                  placeholder="@username"
                  hint="Apenas letras minúsculas e números"
                />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-2">Desabilitado</p>
                <DemoInput
                  label="Campo bloqueado"
                  placeholder="Não editável"
                  disabled
                />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-2">Senha</p>
                <DemoInput
                  label="Senha"
                  type="password"
                  placeholder="••••••••"
                  leftIcon={<Lock className="w-4 h-4" />}
                />
              </div>
            </div>
          }
          code={`// Default
<Input label="Nome" placeholder="Digite seu nome" />

// Com ícone
<Input label="Buscar" placeholder="Pesquisar..." leftIcon={<Search />} />

// Com erro
<Input label="Email" error="Email inválido" defaultValue="email-invalido" />

// Com hint
<Input label="Username" hint="Apenas letras minúsculas e números" />

// Desabilitado
<Input label="Campo bloqueado" disabled />

// Senha
<Input label="Senha" type="password" leftIcon={<Lock />} />`}
        />
      </section>
    </div>
  )
}
