// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Exceptions
import RouteNotFoundException from './exceptions';

// Models
import { IMiddleware } from '../interfaces';

class FourOFour implements IMiddleware {
  handler(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      next(new RouteNotFoundException(req.originalUrl));
    };
  }
}

export default new FourOFour();
