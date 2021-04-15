// Error
import CustomError from '../index';

class FakeError extends CustomError {
  constructor() {
    super('fake error');
  }
}

describe('CustomError', () => {
  let error: FakeError;

  beforeEach(() => {
    error = new FakeError();
  });

  it('should get an error', () => {
    expect(error).toBeInstanceOf(CustomError);
  });
});
