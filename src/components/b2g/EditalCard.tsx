import { cn } from '@/lib/utils'

// Icons
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10L4 6H7V2H9V6H12L8 10Z" fill="currentColor"/>
    <path d="M14 12V14H2V12H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V12H14Z" fill="currentColor"/>
  </svg>
)

export interface EditalCardProps {
  secretaria: string
  titulo: string
  diasRestantes: number
  link: string
  tags: string[]
  valor: string
  valorColor?: 'green' | 'purple'
  className?: string
  onClick?: () => void
}

export function EditalCard({
  secretaria,
  titulo,
  diasRestantes,
  link,
  tags,
  valor,
  valorColor = 'green',
  className,
  onClick,
}: EditalCardProps) {
  return (
    <div
      className={cn(
        'flex justify-between items-center py-3 px-4 pr-14 bg-[#f6f8fa] rounded-2xl',
        'transition-all duration-200 cursor-pointer',
        'hover:bg-[#f0f2f5] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
        className
      )}
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={onClick}
    >
      {/* Info */}
      <div className="flex-1">
        {/* Secretaria */}
        <h3 className="font-bold text-sm text-[#2e3137] m-0 mb-2">
          {secretaria}
        </h3>

        {/* Titulo Row */}
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="text-base font-normal text-[#2e3137]">
            {titulo}
          </span>
          <span className="inline-flex items-center justify-center h-4 py-2.5 px-1 bg-[#ff9f99] text-[#98231b] text-[8px] font-normal rounded">
            {diasRestantes} dias restantes
          </span>
          <a
            href="#"
            className="inline-flex items-center justify-center h-4 py-2.5 px-1 text-[8px] font-normal text-[#0096dc] underline rounded hover:text-[#007bb5]"
            onClick={(e) => e.stopPropagation()}
          >
            {link}
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-[13px]">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={cn(
                'inline-flex items-center justify-center h-4 py-2.5 px-1 text-[8px] rounded tracking-[-0.08px]',
                idx === tags.length - 1
                  ? 'bg-[#767e8e] text-white font-normal'
                  : 'bg-[#2e3137] text-white font-medium'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Download Button */}
        <button
          className="flex items-center justify-center gap-3 py-3 px-3 bg-[#dccdfa] border-none rounded-md text-sm font-bold text-[#2e3137] cursor-pointer transition-all duration-200 hover:bg-[#cdb8f5]"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Baixar Edital</span>
          <DownloadIcon />
        </button>

        {/* Valor */}
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-1 w-[151px] h-[72px] rounded-xl',
            valorColor === 'green' ? 'bg-[#a9f1a6]' : 'bg-[#dccdfa]'
          )}
        >
          <span className="text-xs font-normal text-[#2e3137] text-center leading-normal">
            Valor do Edital
          </span>
          <span className="font-bold text-sm leading-5 text-[#2e3137] text-center">
            {valor}
          </span>
        </div>
      </div>
    </div>
  )
}
