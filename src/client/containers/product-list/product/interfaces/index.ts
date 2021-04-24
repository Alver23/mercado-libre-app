// Interfaces
import IProductBase from '@alversoft/client/interfaces/products/product-base';

interface IProductDetailProps extends IProductBase {
  onNavigateToDetail: (productId: string) => void;
}

export default IProductDetailProps;
