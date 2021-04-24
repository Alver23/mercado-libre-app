// Dependencies
import 'reflect-metadata';

// Shared
import { internalAxiosInstance } from '@alversoft/shared/axios/internal-axios-instance';

// Exceptions
import ProductNotFoundException from '../exceptions';

// Under test file
import ProductAdapter from '../index';

// Mocks
import mocks from './mocks.json';

describe('ProductAdapter', () => {
  let productAdapter: ProductAdapter;

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
    productAdapter = new ProductAdapter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getProducts methods', () => {
    it('should get the product list', async () => {
      jest.spyOn(internalAxiosInstance, 'get').mockResolvedValue(mocks.items);
      const response = await productAdapter.getProducts('ipod');
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

  describe('getProduct method', () => {
    it('debería obtener el detalle con éxito', async () => {
      jest
        .spyOn(internalAxiosInstance, 'get')
        .mockResolvedValueOnce(mocks.item)
        .mockResolvedValueOnce(mocks.itemDescription)
        .mockResolvedValueOnce(mocks.category);

      const response = await productAdapter.getProduct('MLA905983453');
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

    it('should get an error', () => {
      const fakeError = new Error('fake error');

      const onError = (error) => expect(error).toBeInstanceOf(ProductNotFoundException);
      jest.spyOn(internalAxiosInstance, 'get').mockRejectedValue(fakeError);
      productAdapter.getProduct('MLA905983453').catch(onError);
    });
  });
});
