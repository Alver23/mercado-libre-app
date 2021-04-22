// Dependencies
import { render, screen } from '@testing-library/react';

// Under test file
import Layout from '../index';

describe('<Layout />', () => {
  const props = {
    meta: <></>,
    children: <></>,
  };

  it('should render correctly', () => {
    render(<Layout {...props} />);
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
  });
});
