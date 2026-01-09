import { cn } from '@/lib/utils'

export interface ApplyFiltersButtonProps {
  onClick: () => void
  isActive?: boolean
  children?: React.ReactNode
  className?: string
}

export function ApplyFiltersButton({
  onClick,
  isActive = false,
  children = 'Aplicar filtros',
  className,
}: ApplyFiltersButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center h-[38px] px-7 py-3',
        'bg-[#95ffc1] border-none rounded-lg',
        "font-['Helvetica_Neue',Inter,sans-serif] font-bold text-xs leading-normal text-[#0f6533]",
        'cursor-pointer transition-all duration-200 whitespace-nowrap',
        'hover:bg-[#7df5ac] hover:-translate-y-px',
        'active:translate-y-0',
        isActive && 'shadow-[0_2px_8px_rgba(149,255,193,0.5)]',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
