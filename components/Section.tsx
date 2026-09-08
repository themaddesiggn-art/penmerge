import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: 'base' | 'warm' | 'premium'
}

export default function Section({
  children,
  className,
  containerClassName,
  id,
  background = 'base',
}: SectionProps) {
  const bgStyles = {
    base: 'bg-surface-base',
    warm: 'bg-surface-elevated',
    premium: 'bg-brand-ivory',
  }

  return (
    <section
      id={id}
      className={cn(bgStyles[background], 'py-3xl md:py-4xl lg:py-5xl', className)}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
