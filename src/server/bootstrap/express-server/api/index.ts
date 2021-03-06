// Dependencies
import cors from 'cors';
import express, { Application } from 'express';
import methodOverride from 'method-override';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Interfaces
import { IBootstrap } from '@alversoft/server/bootstrap/interfaces';

// Middlewares
import FourOrFour from '@alversoft/server/core/middlewares/404';
import ResponseToJson from '@alversoft/server/core/middlewares/response';
import ErrorHandler from '@alversoft/server/core/middlewares/error-handler';
import WrapperError from '@alversoft/server/core/middlewares/wrapper-error';

// Routes
import Routes from './routes';

// Template server
import ServerTemplate from '../server-template';

class ApiServer extends ServerTemplate implements IBootstrap {
  protected server: Application;

  private readonly routes: Routes;

  constructor(server: Application) {
    super();
    this.server = server;
    this.routes = new Routes(this.server);
  }

  protected errorHandlers(): void {
    this.server.use(FourOrFour.handler());
    this.server.use(WrapperError.handler());
    this.server.use(ErrorHandler.handler());
  }

  protected setMiddlewares(): void {
    const rateLimitTime = 15 * 60 * 1000;
    const limitPerRequest = 100;
    const limiter = rateLimit({
      windowMs: rateLimitTime,
      max: limitPerRequest,
    });
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(methodOverride());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(limiter);
    this.server.use(ResponseToJson.handler());
  }

  protected setRoutes(): void {
    this.routes.publicRoutes();
  }
}

export default ApiServer;
