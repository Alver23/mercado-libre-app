// Dependencies
import { Expose } from 'class-transformer';

import IProductPrice from '@alversoft/server/api/products/domain/entities/product-price';

class ProductPriceResponse implements IProductPrice {
  @Expose()
  amount: number;

  @Expose()
  currency: string;

  @Expose()
  decimals: number;
}

export default ProductPriceResponse;
