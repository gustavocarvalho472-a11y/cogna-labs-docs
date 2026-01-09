import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export interface FilterOption {
  value: string
  label: string
}

export interface FilterSelectProps {
  label: string
  placeholder: string
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  variant?: 'purple' | 'outline' | 'icon'
  icon?: React.ReactNode
  width?: string
  className?: string
}

export function FilterSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  variant = 'purple',
  icon,
  width = '132px',
  className,
}: FilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find((opt) => opt.value === value)
  const displayText = selectedOption ? selectedOption.label : placeholder

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div
      className={cn('flex flex-col gap-2 relative', className)}
      style={{ width, fontFamily: 'Inter, sans-serif' }}
      ref={dropdownRef}
    >
      {/* Label */}
      <label className={cn(
        "font-bold text-sm leading-5 text-[#494e57]",
        variant === 'icon' && 'font-semibold text-xs text-[#474b52]'
      )}>
        {label}
      </label>

      {/* Select Button */}
      <div
        className={cn(
          'flex items-center justify-between cursor-pointer transition-all duration-200 select-none',
          // Purple variant
          variant === 'purple' && [
            'h-[38px] px-4 py-2 rounded-lg',
            'bg-[#f4efff] border-none',
            'hover:bg-[#ebe3ff]',
            isOpen && 'bg-[#e0d4ff] shadow-[0_0_0_2px_#8725ff]',
          ],
          // Outline variant
          variant === 'outline' && [
            'h-[38px] px-4 py-2 rounded-lg',
            'bg-white border border-[#a5aec0]',
            'hover:border-[#8725ff]',
            isOpen && 'border-[#8725ff] shadow-[0_0_0_1px_#8725ff]',
          ],
          // Icon variant
          variant === 'icon' && [
            'h-[46px] px-3 py-3 rounded-lg gap-2',
            'bg-white border border-[#bbbec4]',
            'hover:border-[#8725ff]',
            isOpen && 'border-[#8725ff] shadow-[0_0_0_1px_#8725ff]',
          ]
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon (for icon variant) */}
        {variant === 'icon' && icon && (
          <span className="flex items-center justify-center text-[#9ca3af] flex-shrink-0">
            {icon}
          </span>
        )}

        <span
          className={cn(
            'whitespace-nowrap overflow-hidden text-ellipsis',
            variant === 'icon'
              ? 'flex-1 font-medium text-base leading-[1.4] text-[#9ca3af]'
              : 'font-normal text-xs leading-normal text-[#6b7280]',
            value && (variant === 'icon' ? 'text-[#2e3137]' : 'text-[#2e3137] font-medium')
          )}
        >
          {displayText}
        </span>
        <span
          className={cn(
            'flex items-center justify-center transition-transform duration-200 flex-shrink-0',
            variant === 'icon' ? 'w-4 h-4' : 'w-3 h-3',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronDown
            className={cn(
              variant === 'icon' ? 'w-4 h-4 text-[#9ca3af]' : 'w-3 h-3 text-[#8725ff]'
            )}
            strokeWidth={1.5}
          />
        </span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 min-w-full max-h-[200px] overflow-y-auto bg-white border border-[#e5e7eb] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-[100] animate-in fade-in-0 slide-in-from-top-2 duration-150">
          {options.map((option, index) => (
            <div
              key={option.value}
              className={cn(
                'px-4 py-2.5 text-[#2e3137] cursor-pointer transition-colors duration-150 whitespace-nowrap',
                variant === 'icon' ? 'text-sm' : 'text-xs',
                'hover:bg-[#f4efff]',
                value === option.value && 'bg-[#f4efff] text-[#8725ff] font-semibold',
                index === 0 && 'rounded-t-lg',
                index === options.length - 1 && 'rounded-b-lg'
              )}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
