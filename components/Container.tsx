import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('w-full max-w-7xl mx-auto px-lg md:px-2xl lg:px-3xl', className)}>
      {children}
    </div>
  )
}
