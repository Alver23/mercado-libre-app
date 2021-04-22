// Dependencies
import { render, screen, act } from '@testing-library/react';

// Under test file
import Header from '../index';

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />);
    act(() => {
      const linkElement = screen.getByText('Home');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
