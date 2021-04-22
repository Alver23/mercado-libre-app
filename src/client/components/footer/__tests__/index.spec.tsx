// Dependencies
import { render, screen, cleanup } from '@testing-library/react';

// Under test file
import Footer from '../index';

// Mocks
jest.mock('@alversoft/client/core/config', () => ({ siteName: 'fake test' }));

describe('<Footer />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    render(<Footer />);
    const linkElement = screen.getAllByText('fake test');
    expect(linkElement).toBeInTheDocument();
  });
});
