import { type HTMLAttributes, forwardRef } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'tag' | 'status-green' | 'status-purple' | 'status-blue';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'tag', children, ...props }, ref) => {

    const variants = {
      'tag': "bg-bg-tertiary text-text-secondary text-[12px] font-medium px-2.5 py-1 rounded-full",
      'status-green': "bg-accent-green text-bg-primary text-[11px] font-semibold uppercase tracking-[0.04em] px-2 py-[3px] rounded-full",
      'status-purple': "bg-accent-purple text-bg-primary text-[11px] font-semibold uppercase tracking-[0.04em] px-2 py-[3px] rounded-full",
      'status-blue': "bg-accent-blue text-bg-primary text-[11px] font-semibold uppercase tracking-[0.04em] px-2 py-[3px] rounded-full",
    };

    const classes = `inline-flex items-center justify-center whitespace-nowrap ${variants[variant]} ${className}`;

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
