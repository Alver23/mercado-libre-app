// Under test file
import getCategories from '../index';

// Mocks
import mocks from './mocks.json';

describe('getCategories', () => {
  const { withValues, withoutValues } = mocks.request;
  const cases = [
    ['with categories', withValues.categories, mocks.response],
    ['with categories but without values', withoutValues.categories, []],
  ];

  it.each(cases)('should get the categories when the case is %s', (_, request: any, response: string[]) => {
    const categories = getCategories(request);
    expect(categories).toEqual(response);
  });
});
