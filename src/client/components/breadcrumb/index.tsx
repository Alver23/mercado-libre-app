// Dependencies
import { useMemo, FC, ReactElement } from 'react';

// Interfaces
import IBreadcrumbProps from './interfaces';

const Breadcrumb: FC<IBreadcrumbProps> = ({ items }: IBreadcrumbProps): ReactElement => {
  const breadcrumbItems = useMemo(() => {
    return items.join(' > ');
  }, [items]);

  return (
    <div className="my-4">
      <p className="text-xs md:text-sm text-gray-500">{breadcrumbItems}</p>
    </div>
  );
};

export default Breadcrumb;
