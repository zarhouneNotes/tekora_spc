import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'dark' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-poppins font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      solid: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary',
      dark: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
      ghost: 'bg-background text-foreground border border-border hover:bg-muted focus:ring-primary',
      outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
