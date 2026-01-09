import { useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TabType = 'preview' | 'code'

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
        active
          ? 'bg-[#f4efff] text-[#8725ff]'
          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
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

interface PreviewCodeTabsProps {
  preview: ReactNode
  code: string
  previewClassName?: string
}

export function PreviewCodeTabs({ preview, code, previewClassName }: PreviewCodeTabsProps) {
  const [tab, setTab] = useState<TabType>('preview')

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
        <TabButton active={tab === 'preview'} onClick={() => setTab('preview')}>
          Preview
        </TabButton>
        <TabButton active={tab === 'code'} onClick={() => setTab('code')}>
          Code
        </TabButton>
      </div>

      {tab === 'preview' ? (
        <div className={cn(
          'p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950',
          previewClassName
        )}>
          {preview}
        </div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  )
}
