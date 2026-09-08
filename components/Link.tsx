import NextLink from 'next/link'
import { ReactNode, AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type LinkVariant = 'default' | 'underline' | 'button'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  variant?: LinkVariant
  external?: boolean
}

export default function Link({
  href,
  children,
  variant = 'default',
  external = false,
  className,
  ...props
}: LinkProps) {
  const variantStyles = {
    default: 'text-primary hover:text-primary-light transition-colors duration-base',
    underline: 'link-underline',
    button: 'btn btn-primary',
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
