// Dependencies
import supertest from 'supertest';
import { Request, Response } from 'express';

// Mocks
import { fakeServer } from '@alversoft/server/__mocks__/fake-server';

// Under test file
import catchErrors from '../index';

describe('catchErrors', () => {
  fakeServer.get(
    '/users',
    catchErrors.handler((req: Request, res: Response) => {
      res.status(200).json({ name: 'response' });
    })
  );

  fakeServer.get(
    '/error',
    catchErrors.handler(() => {
      throw new Error('fake error');
    })
  );

  it('should execute the callback correctly', (done) => {
    supertest(fakeServer).get('/users').set('Accept', 'application/json').expect(200, done);
  });

  it('should return error', (done) => {
    supertest(fakeServer).get('/error').set('Accept', 'application/json').expect(500, done);
  });
});
