// Dependencies
import { Expose, Transform } from 'class-transformer';

// Domain
import { IItem } from '@alversoft/server/api/products/domain/entities/product-detail';

// Interfaces
import { IProductDetailApiResponse } from '@alversoft/server/api/products/infrastructure/adapters/interfaces/product-detail';

// DTO`s
import ProductBaseResponse from '@alversoft/server/api/products/infrastructure/dto/response/product-base';

class Item extends ProductBaseResponse implements IItem {
  @Expose()
  @Transform(({ obj }) => (obj as IProductDetailApiResponse).sold_quantity)
  soldQuantity: number;

  @Expose()
  description: string;
}

export default Item;
