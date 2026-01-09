import { useState } from 'react'
import { ChevronDown, Code } from 'lucide-react'
import { CodeBlock } from '@/components/CodeBlock'

interface CodeAccordionProps {
  code: string
  language?: string
  title?: string
}

export function CodeAccordion({ code, language = 'tsx', title = 'Código' }: CodeAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-4 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <Code className="w-4 h-4" />
          {title}
        </div>
        <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="border-t border-neutral-200 dark:border-neutral-700">
          <CodeBlock code={code} language={language} isDark showLineNumbers />
        </div>
      )}
    </div>
  )
}
