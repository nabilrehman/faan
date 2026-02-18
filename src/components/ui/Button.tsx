import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link' | 'primary-glow' | 'github-primary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-bg-primary";

    const variants = {
      'primary': 'button-primary-gradient text-white hover:button-primary-hover shadow-sm group',
      'github-primary': 'bg-[#1a7f37] text-white border border-[rgba(255,255,255,0.1)] hover:bg-[#2da44e] shadow-sm transition-colors duration-200 group',
      'primary-glow': 'bg-accent-green text-white hover:bg-accent-greenHover shadow-[0_0_20px_rgba(46,160,67,0.4)] hover:shadow-[0_0_30px_rgba(46,160,67,0.6)] border border-transparent hover:border-accent-green/50 transition-all duration-300 relative overflow-hidden',
      'secondary': 'bg-bg-tertiary text-text-primary border border-border-default hover:bg-border-default hover:border-text-secondary/30 shadow-sm',
      link: "text-accent-blue hover:text-white hover:underline bg-transparent group p-0",
    };

    const sizes = {
      sm: variant === 'link' ? '' : "px-3 py-1.5 text-xs font-semibold leading-5",
      md: variant === 'link' ? '' : "px-5 py-2 text-sm font-semibold leading-6",
      lg: variant === 'link' ? '' : "px-6 py-3 text-base font-semibold leading-7",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as any}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
            {variant === 'link' && (
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 ml-1">&rarr;</span>
            )}
          </a>
        );
      }
      return (
        <a
          ref={ref as any}
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
          {(variant === 'link' || variant === 'primary' || variant === 'github-primary') && (
            <span className={`inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 ml-1 ${variant === 'link' ? '' : 'opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1'}`}>&rarr;</span>
          )}
        </a>
      );
    }

    return (
      <button ref={ref as any} className={classes} {...props}>
        {children}
        {variant === 'link' && (
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 ml-1">&rarr;</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
