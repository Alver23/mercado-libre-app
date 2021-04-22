// Dependencies
import { OK } from 'http-status-codes';
import { NextFunction, Request, RequestHandler } from 'express';

// Utils
import setResponse from '@alversoft/server/utils/set-response';

// Interfaces
import ICustomResponse from './interfaces';
import { IMiddleware } from '../interfaces';

class ResponseToJson implements IMiddleware {
  handler(): RequestHandler {
    return (req: Request, res: ICustomResponse, next: NextFunction): void => {
      res.responseJson = ({ data, message, status, options }): void => {
        res.status(status || OK).json(setResponse({ data, message, status, options }));
      };
      next();
    };
  }
}

export default new ResponseToJson();
