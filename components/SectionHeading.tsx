import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading(
  {
    title,
    subtitle,
    description,
    align = 'center',
    className,
  }: SectionHeadingProps
) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left',
        'mb-3xl',
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-accent-600 uppercase tracking-wide mb-md">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-lg">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
