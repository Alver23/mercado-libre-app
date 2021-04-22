// Domain
import IProductDetail from '@alversoft/server/api/products/domain/entities/product-detail';
import IProductList from '@alversoft/server/api/products/domain/entities/product-list';

interface IUseCaseList {
  getProduct(id: string): Promise<IProductDetail>;
  getProducts(query: string): Promise<IProductList>;
}

export default IUseCaseList;
