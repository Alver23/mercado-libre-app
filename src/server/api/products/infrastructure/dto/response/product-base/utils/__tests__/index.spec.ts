/* eslint-disable camelcase */
// Interfaces
import IProductDetail from '@alversoft/server/api/products/infrastructure/adapters/interfaces/product-list/product-detail';

// Under test file
import getPrice from '../index';

// Mocks
import mocks from './mocks.json';

describe('getPrice utils', () => {
  const { price, currency_id } = mocks.request;
  const withoutPrices = {
    price,
    currency_id,
  };

  const withPrices = {
    price,
    currency_id,
    prices: {},
  };

  const cases = [
    ['with prices', mocks.request, mocks.response],
    ['with prices sub level', withPrices, mocks.response],
    ['without prices', withoutPrices, mocks.response],
  ];

  it.each(cases)('should get the price of product when of case is %s', (_, request, response) => {
    expect(getPrice(request as IProductDetail)).toEqual(response);
  });
});
