import { type ReactNode } from 'react';
import { Search } from 'lucide-react';
import { Button } from './Button';


interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

export const EmptyState = ({
  icon,
  title,
  description,
  actionText,
  actionHref,
  className = ''
}: EmptyStateProps) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-16 border border-dashed border-border-default rounded-2xl bg-bg-secondary/50 ${className}`}>
      <div className="text-text-muted mb-6">
        {icon || <Search size={48} />}
      </div>
      <h3 className="text-2xl font-semibold text-text-secondary mb-2">
        {title}
      </h3>
      <p className="text-base text-text-muted max-w-md mb-8">
        {description}
      </p>
      {actionText && actionHref && (
        <Button variant="link" href={actionHref}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

// SKELETON COMPONENTS

interface SkeletonProps {
  className?: string;
}

const shimmerClass = "animate-[shimmer_1.5s_infinite_linear] bg-bg-secondary bg-[linear-gradient(90deg,#161b22_25%,#21262d_50%,#161b22_75%)] bg-[length:1000px_100%]";

export const SkeletonBox = ({ className = "h-48 w-full rounded-xl" }: SkeletonProps) => {
  return <div className={`${shimmerClass} ${className}`} />;
};

export const SkeletonText = ({ className = "h-4 w-3/4 rounded" }: SkeletonProps) => {
  return <div className={`${shimmerClass} ${className}`} />;
};

export const SkeletonAvatar = ({ className = "h-12 w-12 rounded-full" }: SkeletonProps) => {
  return <div className={`${shimmerClass} ${className}`} />;
};
