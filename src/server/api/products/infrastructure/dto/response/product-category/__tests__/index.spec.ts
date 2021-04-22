// Mocks
import transformerPlainToClass from '@alversoft/server/__mocks__/plain-class';

// Under test file
import ProductCategoryResponse from '../index';

describe('ProductCategoryResponse', () => {
  it('should get the categories', () => {
    const response: any = transformerPlainToClass(ProductCategoryResponse, { categories: [] });
    expect(response.categories).toEqual([]);
  });
});
