// Dependencies
import { render, waitFor } from '@testing-library/react';

// Under test file
import Meta from '../index';

describe('<Meta />', () => {
  const props = {
    canonical: 'http://localhost/',
    title: 'fake title',
    image: 'http://localhost:3000/img.png',
  };

  it('should render correctly', async () => {
    render(<Meta {...props} />);
    await waitFor(() => expect(document.querySelector('head')).toMatchSnapshot());
  });
});
