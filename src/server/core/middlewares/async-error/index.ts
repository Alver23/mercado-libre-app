// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Interfaces
import { IMiddleware } from '../interfaces';

class CatchErrors implements IMiddleware {
  handler(requestHandler: RequestHandler): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return await requestHandler(req, res, next);
      } catch (error) {
        return next(error);
      }
    };
  }
}

export default new CatchErrors();
