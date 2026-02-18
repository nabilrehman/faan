import { type ReactNode } from 'react';

interface BlockProps {
  children: ReactNode;
  className?: string;
}

export const MetricCallout = ({ children, className = '' }: BlockProps) => {
  return (
    <div className={`bg-bg-secondary border-l-4 border-l-accent-green p-8 rounded-r-xl my-12 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

interface QuoteBlockProps extends BlockProps {
  author: string;
  title: string;
  company: string;
  imageSrc?: string;
}

export const QuoteBlock = ({ children, author, title, company, imageSrc, className = '' }: QuoteBlockProps) => {
  return (
    <figure className={`bg-bg-secondary border-l-4 border-l-accent-purple p-8 rounded-r-xl my-12 shadow-lg ${className}`}>
      <blockquote className="text-xl italic text-text-secondary leading-relaxed mb-6">
        "{children}"
      </blockquote>
      <figcaption className="flex items-center space-x-4">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={author}
            className="w-12 h-12 rounded-full border border-border-default object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-text-primary text-sm">{author}</div>
          <div className="text-text-muted text-sm">{title}, {company}</div>
        </div>
      </figcaption>
    </figure>
  );
};
