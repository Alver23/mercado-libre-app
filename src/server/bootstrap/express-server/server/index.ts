// Dependencies
import { Application } from 'express';
import cookieParser from 'cookie-parser';
import healthCheck from 'express-healthcheck';

// Interfaces
import { IBootstrap } from '@alversoft/server/bootstrap/interfaces';

// Middlewares
import RequestLogger from '@alversoft/server/core/middlewares/request-logger';

// Config
import config from '@alversoft/server/config';

// Template server
import ServerTemplate from '../server-template';

class Server extends ServerTemplate implements IBootstrap {
  protected server: Application;

  constructor(server: Application, private readonly port: number = 3000, private readonly basePath = '') {
    super();
    this.server = server;
    this.server.set('port', this.port);
  }

  private setDevelopmentMiddlewares() {
    if (!config.isProduction) {
      this.server.use(RequestLogger.handler());
    }
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  protected errorHandlers(): void {}

  protected setMiddlewares(): void {
    this.server.disable('x-powered-by');
    this.server.set('trust proxy', true);
    this.server.use(cookieParser());
    this.setDevelopmentMiddlewares();
  }

  protected async setRoutes(): Promise<void> {
    this.server.get(`${this.basePath}/health(check)?`, healthCheck());
  }
}

export default Server;
