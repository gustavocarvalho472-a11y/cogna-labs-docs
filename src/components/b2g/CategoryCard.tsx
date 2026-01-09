import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

// Main Card (gradient)
export interface CategoryMainCardProps {
  title: string
  value: string
  percent: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

export function CategoryMainCard({
  title,
  value,
  percent,
  icon,
  className,
  onClick,
}: CategoryMainCardProps) {
  return (
    <div
      className={cn(
        'w-[353px] h-[297px] rounded-2xl flex flex-col items-center justify-center gap-2.5',
        'bg-gradient-to-b from-[#8725ff] to-[#511699]',
        'transition-all duration-200 cursor-pointer',
        'hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(135,37,255,0.35)]',
        className
      )}
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={onClick}
    >
      <div className="font-bold text-base leading-[18px] text-white text-center tracking-[-0.16px] whitespace-pre-line">
        {title}
      </div>
      {icon && (
        <div className="bg-[#cdb3ff] rounded-[20px] p-2.5 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="font-bold text-5xl text-white text-center">
        {value}
      </div>
      <div className="font-normal text-base leading-5 text-white">
        {percent}
      </div>
    </div>
  )
}

// Medium Card (purple/light-purple)
export interface CategoryCardProps {
  title: string
  value: string
  percent: string
  icon?: ReactNode
  variant?: 'purple' | 'light-purple'
  className?: string
  onClick?: () => void
}

export function CategoryCard({
  title,
  value,
  percent,
  icon,
  variant = 'purple',
  className,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      className={cn(
        'flex-1 rounded-2xl flex flex-col items-center justify-center gap-2.5 p-2.5',
        'transition-all duration-200 cursor-pointer',
        'hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(135,37,255,0.25)]',
        variant === 'purple' && 'bg-[#8725ff]',
        variant === 'light-purple' && 'bg-[#ac81ff]',
        className
      )}
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={onClick}
    >
      <div className="font-bold text-xs leading-5 text-white text-center whitespace-pre-line">
        {title}
      </div>
      {icon && (
        <div className="bg-[#cdb3ff] rounded-[20px] p-2.5 w-[38px] h-[38px] flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex items-center justify-center gap-2.5 text-white">
        <span className="font-medium text-xl">{value}</span>
        <span className="font-normal text-base leading-5">{percent}</span>
      </div>
    </div>
  )
}

// Small Card (light purple background)
export interface CategorySmallCardProps {
  title: string
  value: string
  percent: string
  className?: string
  onClick?: () => void
}

export function CategorySmallCard({
  title,
  value,
  percent,
  className,
  onClick,
}: CategorySmallCardProps) {
  return (
    <div
      className={cn(
        'flex-1 h-[92px] bg-[#f1eaff] rounded-2xl flex flex-col items-center justify-center gap-2 p-2',
        'transition-all duration-200 cursor-pointer',
        'hover:bg-[#e9ddff] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(135,37,255,0.15)]',
        className
      )}
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={onClick}
    >
      <div className="font-bold text-xs leading-5 text-[#51169a] text-center whitespace-pre-line">
        {title}
      </div>
      <div className="flex items-center justify-center gap-2 text-[#8725ff]">
        <span className="font-bold text-sm leading-5">{value}</span>
        <span className="font-normal text-xs">{percent}</span>
      </div>
    </div>
  )
}
