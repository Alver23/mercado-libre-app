// Dependencies
import { Expose, Type } from 'class-transformer';

// Domain
import IProductDetail from '@alversoft/server/api/products/domain/entities/product-detail';

// DTO`s
import Item from './item';
import ProductAuthorResponse from '../product-author';

class ProductDetailResponse implements IProductDetail {
  @Type(() => ProductAuthorResponse)
  @Expose()
  author: ProductAuthorResponse;

  @Type(() => Item)
  @Expose()
  item: Item;

  @Expose()
  categories: string[];
}

export default ProductDetailResponse;
