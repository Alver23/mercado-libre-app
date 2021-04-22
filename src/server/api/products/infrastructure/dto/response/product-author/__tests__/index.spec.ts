import transformerPlainToClass from '@alversoft/server/__mocks__/plain-class';

// Under test file
import ProductAuthorResponse from '../index';

// Mocks
import mocks from './mocks.json';

describe('ProductAuthorResponse', () => {
  it('should get the model', () => {
    const response = transformerPlainToClass(ProductAuthorResponse, mocks);
    expect(response).toBeInstanceOf(ProductAuthorResponse);
  });
});
