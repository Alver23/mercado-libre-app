// Under test file
import UseCaseList from '../index';

describe('UseCaseList', () => {
  let useCaseList: UseCaseList;
  const mock = { id: 1 };

  const adapterService = {
    getProduct: jest.fn().mockResolvedValue(mock),
    getProducts: jest.fn().mockResolvedValue([mock]),
  };

  beforeEach(() => {
    useCaseList = new UseCaseList(adapterService);
  });

  it('should return a product list', async () => {
    const queryParams = 'ipod';
    const response = await useCaseList.getProducts(queryParams);
    expect(response).toEqual([mock]);
    expect(adapterService.getProducts).toHaveBeenCalledWith(queryParams);
  });

  it('should return a product', async () => {
    const productId = 'MKLF123';
    const response = await useCaseList.getProduct(productId);
    expect(response).toEqual(mock);
    expect(adapterService.getProduct).toHaveBeenCalledWith(productId);
  });
});
