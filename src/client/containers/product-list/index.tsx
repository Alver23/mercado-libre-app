// Dependencies
import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';

// Components
import ProductDetail from './product';

// Interfaces
import IProductListProps from './interfaces';

const ProductList: FC<IProductListProps> = ({ items }: IProductListProps): ReactElement => {
  const router = useRouter();
  const onNavigateToDetail = (productId: string) => {
    const url = `/items/${productId}`;
    router.push(url);
  };

  return (
    <>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <ProductDetail {...item} onNavigateToDetail={onNavigateToDetail} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default ProductList;
