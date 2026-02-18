import { type ReactNode } from 'react';
import { Badge } from './Badge';

// SERVICE CARD
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  accentColor?: 'blue' | 'purple';
}

export const ServiceCard = ({
  icon,
  title,
  description,
  href,
  accentColor: _accentColor = 'blue'
}: ServiceCardProps) => {
  return (
    <a
      href={href || '#'}
      className={`block bg-[#161b22] border border-border-default rounded-xl p-8 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-text-muted group relative overflow-hidden`}
    >
      <div className="w-10 h-10 rounded-full bg-accent-purpleBg/20 flex items-center justify-center mb-4 text-[#a371f7]">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">{title}</h4>
      <p className="text-base text-text-secondary leading-relaxed mb-4">{description}</p>
      <div className="text-base font-medium text-accent-blue flex items-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Learn more
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
      </div>
    </a>
  );
};

// CASE STUDY CARD
interface CaseStudyCardProps {
  imageSrc: string;
  logoSrc?: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export const CaseStudyCard = ({
  imageSrc,
  logoSrc,
  title,
  description,
  tags,
  href
}: CaseStudyCardProps) => {
  return (
    <a
      href={href || '#'}
      className="flex flex-col bg-[#161b22] border border-border-default rounded-xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-text-muted group h-full overflow-hidden"
    >
      <div className="relative w-full pt-[56.25%] overflow-hidden bg-bg-primary">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        {/* Subtle dark overlay for tech feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-60"></div>
        {logoSrc && (
          <div className="absolute bottom-4 left-6 max-w-[120px] h-8 opacity-80 group-hover:opacity-100 transition-opacity">
            <img src={logoSrc} alt="Client Logo" className="h-full object-contain filter brightness-0 invert" />
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-xl font-semibold text-text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors">{title}</h4>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="tag">{tag}</Badge>
          ))}
        </div>

        <p className="text-sm text-text-secondary line-clamp-2 mt-auto mb-4">{description}</p>

        <div className="text-sm font-semibold text-text-primary flex items-center mt-auto group-hover:text-accent-blue transition-colors">
          Read case study
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
        </div>
      </div>
    </a>
  );
};

// METRIC CARD
interface MetricCardProps {
  number: string;
  label: string;
  color?: 'green' | 'blue';
}

export const MetricCard = ({ number, label, color = 'green' }: MetricCardProps) => {
  const numberColor = color === 'green' ? 'text-accent-green' : 'text-accent-blue';

  return (
    <div className="flex flex-col justify-center bg-transparent border border-border-default rounded-xl p-6 text-center hover:bg-[#161b22] transition-colors duration-200">
      <div className={`text-4xl md:text-5xl font-mono font-bold ${numberColor} mb-2 tracking-tight`}>
        {number}
      </div>
      <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};
