// Dependencies
import supertest from 'supertest';
import { Request } from 'express';

// Mocks
import { fakeServer } from '@alversoft/server/__mocks__/fake-server';

// Under test file
import ResponseToJson from '../index';

// Models
import { ICustomResponse } from '../interfaces';

describe('addResponseJsonToResponse', () => {
  fakeServer.use(ResponseToJson.handler());
  fakeServer.get('/users', (req: Request, res: ICustomResponse) => {
    res.responseJson({ data: [], status: 201, message: 'fake', options: {} });
  });

  fakeServer.get('/roles', (req: Request, res: ICustomResponse) => {
    res.responseJson({ data: [], message: 'fake', options: {} });
  });

  it('should be able to use the function', () => {
    return supertest(fakeServer)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            status: expect.any(Number),
            data: expect.any(Array),
          })
        );
      });
  });

  it('should be able to use the function when status is empty', () => {
    return supertest(fakeServer).get('/roles').set('Accept', 'application/json').expect(200);
  });
});
