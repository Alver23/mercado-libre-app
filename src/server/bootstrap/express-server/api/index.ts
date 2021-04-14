// Dependencies
import cors from 'cors';
import express, { Application } from 'express';
import methodOverride from 'method-override';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Interfaces
import { IBootstrap } from '@alversoft/server/bootstrap/interfaces';

// Template server
import ServerTemplate from '../server-template';

class ApiServer extends ServerTemplate implements IBootstrap {
  protected server: Application;

  constructor(server: Application) {
    super();
    this.server = server;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  protected errorHandlers(): void {}

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
  }

  protected setRoutes(): void {
    this.server.get('/users', (req, res) => {
      res.status(200).json({ name: 'Alver Grisales' });
    });
  }
}

export default ApiServer;
