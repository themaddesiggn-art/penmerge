import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export default function Section(
  {
    children,
    className,
    containerClassName,
    id,
  }: SectionProps
) {
  return (
    <section
      id={id}
      className={cn('py-3xl md:py-4xl lg:py-5xl', className)}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
