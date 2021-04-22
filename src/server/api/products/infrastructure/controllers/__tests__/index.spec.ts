// Dependencies
import { getMockReq, getMockRes } from '@jest-mock/express';

// Under test file
import ProductController from '../index';

describe('ProductController', () => {
  let controller;
  const mock = { id: 1 };
  const { res: resMock, next, clearMockRes } = getMockRes();
  const useCaseListMock = {
    getProduct: jest.fn().mockResolvedValue(mock),
    getProducts: jest.fn().mockResolvedValue([mock]),
  };

  const res = {
    ...resMock,
    responseJson: jest.fn(),
  };

  beforeEach(() => {
    clearMockRes();
    controller = new ProductController(useCaseListMock);
  });

  describe('productList method', () => {
    const cases = [
      [null, {}],
      [1, { query: { q: 'ipod' } }],
    ];

    it.each(cases)('should get the data correctly when page to equal %s', async (page, query: any) => {
      const req = getMockReq(query);
      await controller.productList(req, res);
      expect(res.responseJson).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('productDetail method', () => {
    const req = getMockReq({
      params: { id: 'IDKDM234' },
    });

    it('should get the data correctly', async () => {
      await controller.productDetail(req, res);
      expect(res.responseJson).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 when data not found', async () => {
      const response: any = { status: 404 };
      await controller.productDetail(req, res);
      expect(response.status).toEqual(404);
    });
  });
});
