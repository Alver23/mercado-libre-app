// Dependencies
import { Expose, Type } from 'class-transformer';

// Domain
import IProductList from '@alversoft/server/api/products/domain/entities/product-list';

// DTO`s
import ProductBaseResponse from '../product-base';
import ProductAuthorResponse from '../product-author';

class ProductListResponse implements IProductList {
  @Type(() => ProductAuthorResponse)
  @Expose()
  author: ProductAuthorResponse;

  categories: string[];

  @Type(() => ProductBaseResponse)
  @Expose()
  items: ProductBaseResponse[];
}

export default ProductListResponse;
