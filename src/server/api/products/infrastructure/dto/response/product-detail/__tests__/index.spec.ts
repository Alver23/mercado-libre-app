// Mocks
import transformerPlainToClass from '@alversoft/server/__mocks__/plain-class';

// Under test file
import ProductDetailResponse from '../index';

// Mocks
jest.mock('../item', () => jest.fn());
jest.mock('../../product-author', () => jest.fn());

describe('ProductDetailResponse', () => {
  it('should return the model', () => {
    const response = transformerPlainToClass(ProductDetailResponse, {});
    expect(response).toBeInstanceOf(ProductDetailResponse);
  });
});
