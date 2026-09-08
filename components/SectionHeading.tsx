import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  accent?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  accent = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left',
        'mb-3xl',
        className
      )}
    >
      {subtitle && (
        <div className="flex items-center justify-start gap-md mb-md">
          {accent && <div className="accent-line" />}
          <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">
            {subtitle}
          </p>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-lg leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  )
}
