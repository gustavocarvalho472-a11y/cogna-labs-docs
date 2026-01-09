import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export interface StatCardProps {
  label: string
  value: string
  description?: string
  icon?: ReactNode
  variant?: 'main' | 'secondary'
  className?: string
  onClick?: () => void
}

export function StatCard({
  label,
  value,
  description,
  icon,
  variant = 'main',
  className,
  onClick,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 p-[33px] rounded-2xl h-[274px] transition-all duration-200 cursor-pointer',
        'hover:-translate-y-1',
        variant === 'main' && [
          'flex-1 bg-[#eee6ff]',
          'hover:shadow-[0_8px_24px_rgba(135,37,255,0.2)]',
        ],
        variant === 'secondary' && [
          'w-[362px] bg-[#fdfdfd] border border-[#bbbec4]',
          'hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]',
        ],
        className
      )}
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={onClick}
    >
      {/* Icon */}
      {icon && (
        <div
          className={cn(
            'w-[52px] h-[52px] rounded-[14px] flex items-center justify-center',
            variant === 'main' ? 'bg-[#3d4149]' : 'bg-[#aa80ff]'
          )}
        >
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3">
        <span
          className={cn(
            'text-xs font-normal tracking-[1.2px] uppercase leading-4',
            variant === 'main' ? 'text-[#2e3137]' : 'text-[#8b8d91]'
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            'tracking-[0.35px]',
            variant === 'main'
              ? 'text-[60px] leading-[60px] font-bold text-[#8725ff] tracking-[0.26px]'
              : 'text-5xl leading-[48px] font-normal text-[#3d4149]'
          )}
        >
          {value}
        </span>
        {description && (
          <span className="text-base font-normal leading-6 tracking-[-0.31px] text-[#6b6d71]">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}
