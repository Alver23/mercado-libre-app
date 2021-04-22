// Mocks
import transformerPlainToClass from '@alversoft/server/__mocks__/plain-class';

// Under test file
import Item from '../index';

// Mocks
import mocks from './mocks.json';

jest.mock('@alversoft/server/api/products/infrastructure/dto/response/product-base', () => jest.fn());

describe('Product Detail Item', () => {
  it('should return the model', () => {
    const response: any = transformerPlainToClass(Item, mocks);
    expect(response).toEqual(
      expect.objectContaining({
        soldQuantity: expect.any(Number),
        description: expect.any(String),
      })
    );
  });
});
