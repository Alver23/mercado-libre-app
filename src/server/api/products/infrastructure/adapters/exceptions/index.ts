// Dependencies
import { notFound } from '@hapi/boom';

// Utils
import CustomError from '@alversoft/server/utils/custom-error';

class ProductNotFoundException extends CustomError {
  constructor() {
    const {
      output: { statusCode },
    } = notFound();
    super('The product does not exist', statusCode, statusCode);
  }
}

export default ProductNotFoundException;
