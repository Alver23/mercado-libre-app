// Dependencies
import { Expose, Type, Transform } from 'class-transformer';

// Domain
import IProductBase from '@alversoft/server/api/products/domain/entities/product-base';

// Interfaces
import IProductDetail from '@alversoft/server/api/products/infrastructure/adapters/interfaces/product-list/product-detail';

// DTO`s
import ProductPriceResponse from '../product-price';

// Utils
import getPrice from './utils';

class ProductBaseResponse implements IProductBase {
  @Expose()
  condition: string;

  @Expose()
  @Transform(({ obj }) => {
    const { shipping } = obj as IProductDetail;
    const { free_shipping: freeShipping } = shipping;
    return freeShipping;
  })
  freeShipping: boolean;

  @Expose()
  id: string;

  @Expose()
  @Transform(({ obj }) => {
    const { thumbnail } = obj as IProductDetail;
    return thumbnail;
  })
  picture: string;

  @Expose({ name: 'prices' })
  @Type(() => ProductPriceResponse)
  @Transform(({ obj }) => {
    return getPrice(obj);
  })
  price: ProductPriceResponse;

  @Expose()
  title: string;
}

export default ProductBaseResponse;
