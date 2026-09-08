import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      disabled,
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'btn font-semibold transition-all duration-base focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      tertiary: 'btn-tertiary',
      ghost: 'btn-ghost',
    }

    const sizeStyles = {
      sm: 'px-md py-sm text-sm',
      md: 'px-lg py-md text-base',
      lg: 'px-xl py-lg text-lg',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-sm">
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
