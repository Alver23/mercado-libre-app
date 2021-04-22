// Domain
import IProductDetail from '@alversoft/server/api/products/domain/entities/product-detail';
import IProductList from '@alversoft/server/api/products/domain/entities/product-list';
import IProductAdapter from '@alversoft/server/api/products/domain/adapters/product-adapter';

// Interfaces
import IUseCaseList from './interfaces';

class UseCaseList implements IUseCaseList {
  constructor(private readonly adapter: IProductAdapter) {}

  getProduct(id: string): Promise<IProductDetail> {
    return this.adapter.getProduct(id);
  }

  getProducts(query: string): Promise<IProductList> {
    return this.adapter.getProducts(query);
  }
}

export default UseCaseList;
