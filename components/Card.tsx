import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  elevated?: boolean
  interactive?: boolean
  onClick?: () => void
}

export default function Card({
  children,
  className,
  elevated = false,
  interactive = false,
  onClick,
}: CardProps) {
  return (
    <div
      className={cn(
        elevated ? 'card-elevated' : 'card',
        interactive && 'cursor-pointer hover:shadow-lg hover:scale-105',
        className
      )}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      {children}
    </div>
  )
}
