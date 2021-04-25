// Dependencies
import 'newrelic';
import 'module-alias/register';
import 'reflect-metadata';
import 'es6-shim';
import express from 'express';
import next from 'next';

// Bootstrap
import ExpressServer from '@alversoft/server/bootstrap/express-server/server';
import HttpServer from '@alversoft/server/bootstrap/http-server';

// Config
import config from '@alversoft/server/config';

// Utils
import { normalizePort } from '@alversoft/server/utils/http-server';
import ApiServer from './bootstrap/express-server/api';

const port: number = normalizePort(config.port as string) as number;
const app = next({ dev: !config.isProduction });
const basePath = '';

const start = async () => {
  try {
    await app.prepare();
    const expressServer = new ExpressServer(express(), port, basePath);
    const apiServer = new ApiServer(express());
    const apiServerInstance = await apiServer.initialize();
    const serverInstance = await expressServer.initialize();
    const requestHandler = app.getRequestHandler();
    serverInstance.use(`${basePath}/api`, apiServerInstance);
    serverInstance.all('*', (req, res) => {
      return requestHandler(req, res);
    });
    const httpServer = new HttpServer(serverInstance, port);
    await httpServer.initialize();
  } catch (e) {
    process.exit(1);
  }
};

start();
