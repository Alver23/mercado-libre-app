import { internalAxiosInstance } from '@alversoft/shared/axios/internal-axios-instance';

// Under test file
import ProductService from '../index';

// Mocks
import mocks from './mocks.json';

describe('ProductService', () => {
  const expectedAuthor = () => ({
    name: expect.any(String),
    lastName: expect.any(String),
  });

  const expectedPrices = () => ({
    amount: expect.any(Number),
    currency: expect.any(String),
    decimals: expect.any(Number),
  });

  const expectedProductBase = () => ({
    id: expect.any(String),
    title: expect.any(String),
    picture: expect.any(String),
    condition: expect.any(String),
    freeShipping: expect.any(Boolean),
  });

  beforeEach(() => {
    jest
      .spyOn(internalAxiosInstance, 'get')
      .mockResolvedValueOnce({ data: mocks.productList })
      .mockResolvedValueOnce({ data: mocks.productDetail });
  });

  afterEach(jest.clearAllMocks);

  describe('getProducts method', () => {
    it('should return the product list', async () => {
      const response = await ProductService.getProducts('ipod');
      expect(response).toEqual(
        expect.objectContaining({
          author: expectedAuthor(),
          categories: expect.any(Array),
          items: expect.arrayContaining([
            expect.objectContaining({
              ...expectedProductBase(),
              price: expectedPrices(),
            }),
          ]),
        })
      );
    });
  });

  describe('getProductById method', () => {
    it('should return the product list', async () => {
      const response = await ProductService.getProductById('MHDefr234');
      expect(response).toEqual(
        expect.objectContaining({
          author: expectedAuthor(),
          item: expect.objectContaining({
            ...expectedProductBase(),
            soldQuantity: expect.any(Number),
            description: expect.any(String),
            price: expectedPrices(),
          }),
        })
      );
    });
  });
});
