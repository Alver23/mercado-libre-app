// Dependencies
import supertest from 'supertest';
import express, { Application } from 'express';

// Interfaces
import { IBootstrap } from '@alversoft/server/bootstrap/interfaces';

// Under test file
import ApiServer from '../index';

describe('ApiServer', () => {
  const application: Application = express();
  const apiServer: IBootstrap = new ApiServer(application);

  it('should start a server', async (done) => {
    const apiServerInstance = await apiServer.initialize();
    supertest(apiServerInstance).get('/users').set('Accept', 'application/json').expect(200, done);
  });
});
