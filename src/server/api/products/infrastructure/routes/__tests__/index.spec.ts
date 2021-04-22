/* eslint global-require: "off" */
// Dependencies
import supertest from 'supertest';

// Server
import { fakeServer } from '@alversoft/server/__mocks__/fake-server';

// Under test files
import productRouter from '../index';

// Mocks
jest.mock('@alversoft/server/api/products/application/use-case-list', () =>
  require('@alversoft/server/__mocks__/fake-class')
);

jest.mock('@alversoft/server/api/products/infrastructure/adapters', () =>
  require('@alversoft/server/__mocks__/fake-class')
);

jest.mock(
  '@alversoft/server/api/products/infrastructure/controllers',
  () =>
    class ProductController {
      productDetail(request, response) {
        return response.json();
      }

      productList(request, response) {
        return response.json();
      }
    }
);

describe('productRouter', () => {
  const path = '/v1/items';
  productRouter(fakeServer);

  it('GET /items?q=ipod', async () => {
    const response = await supertest(fakeServer).get(`${path}?q=ipod`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('GET /items/MKO123', async () => {
    const response = await supertest(fakeServer).get(`${path}/MKO123`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
