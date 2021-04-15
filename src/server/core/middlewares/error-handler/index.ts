// Dependencies
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

// Config
import config from '@alversoft/server/config';

// Interfaces
import { IMiddleware } from '@alversoft/server/core/middlewares/interfaces';

// Utils
import setResponse from '@alversoft/server/utils/set-response';

class ErrorHandler implements IMiddleware {
  private errorWithStack(error, stack: unknown) {
    const { statusCode, ...otherValues } = error;
    const response = setResponse({
      status: statusCode,
      ...otherValues,
    });
    if (!config.isProduction) {
      return { ...response, stack };
    }
    return response;
  }

  public handler(): ErrorRequestHandler {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (error, req: Request, res: Response, next: NextFunction): void => {
      const {
        output: { statusCode, payload },
        stack,
        data,
      } = error;
      res.status(statusCode).json(this.errorWithStack({ ...payload, data }, stack));
    };
  }
}

export default new ErrorHandler();
