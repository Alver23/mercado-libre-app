// Dependencies
import { Expose } from 'class-transformer';

// Domain
import IProductAuthor from '@alversoft/server/api/products/domain/entities/product-author';

class ProductAuthorResponse implements IProductAuthor {
  @Expose()
  lastName: string;

  @Expose()
  name: string;
}

export default ProductAuthorResponse;
