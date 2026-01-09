import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  isDark?: boolean
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = 'tsx',
  isDark = false,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('relative group rounded-lg overflow-hidden', className)}>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-neutral-700/50 hover:bg-neutral-700 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        title="Copiar código"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          borderRadius: '0.5rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
