import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, success, id, ...props }, ref) => {

    const baseStyles = "w-full bg-bg-primary border rounded-lg px-4 py-3 text-text-secondary placeholder:text-text-placeholder focus:outline-none transition-all duration-200 min-h-[120px] resize-y";

    let borderStyles = "border-border-default focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50";

    if (error) {
      borderStyles = "border-[#f85149] focus:border-[#f85149] focus:ring-1 focus:ring-[#f85149]/50";
    } else if (success) {
      borderStyles = "border-accent-green focus:border-accent-green focus:ring-1 focus:ring-accent-green/50";
    }

    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full mb-4">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-text-primary mb-2">
            {label}
            {props.required && <span className="text-[#f85149] ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <textarea
            ref={ref}
            id={inputId}
            className={`${baseStyles} ${borderStyles} ${className} ${(error || success) ? 'pr-10' : ''}`}
            disabled={props.disabled}
            {...props}
          />

          {error && (
            <div className="absolute right-3 top-4 text-[#f85149]">
              <AlertCircle size={18} />
            </div>
          )}

          {success && !error && (
            <div className="absolute right-3 top-4 text-accent-green">
              <CheckCircle2 size={18} />
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-[13px] text-[#f85149] flex items-start">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
