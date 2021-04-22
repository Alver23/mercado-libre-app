// Dependencies
import { Expose, Transform } from 'class-transformer';

// Utils
import getCategories from './utils';

class ProductCategoryResponse {
  @Expose({ name: 'names' })
  @Transform(({ obj }) => {
    const { categories } = obj;
    return getCategories(categories);
  })
  categories: string[];
}

export default ProductCategoryResponse;
