// Dependencies
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { badImplementation, boomify } from '@hapi/boom';

// Interfaces
import { IMiddleware } from '@alversoft/server/core/middlewares/interfaces';

// Utils
import CustomError from '@alversoft/server/utils/custom-error';

class WrapperError implements IMiddleware {
  public handler(): ErrorRequestHandler {
    return (error: any, req: Request, res: Response, next: NextFunction): void => {
      if (error instanceof CustomError) {
        next(boomify(error, { statusCode: error.statusCode }));
      }

      if (!error.isBoom) {
        next(badImplementation(error));
      }

      next(error);
    };
  }
}

export default new WrapperError();
