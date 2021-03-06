// Dependencies
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

// Utils
import { HttpMessages } from '@alversoft/server/utils/messages';

abstract class CustomError extends Error {
  constructor(
    public message: string,
    public code: string | number = HttpMessages.INTERNAL_ERROR,
    public statusCode: number = INTERNAL_SERVER_ERROR,
    public data: { [key: string]: any } = {}
  ) {
    super();
  }
}

export default CustomError;
