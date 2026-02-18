import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {


  return (
    <nav aria-label="Breadcrumb" className="py-3 flex items-center space-x-2 text-sm">
      <Link
        to="/"
        className="text-text-muted hover:text-accent-blue transition-colors duration-150"
      >
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center space-x-2">
            <span className="text-text-placeholder">
              <ChevronRight size={14} />
            </span>
            {isLast || !item.href ? (
              <span className="text-text-secondary font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-text-muted hover:text-accent-blue transition-colors duration-150"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
