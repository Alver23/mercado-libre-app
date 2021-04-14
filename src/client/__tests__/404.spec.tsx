// Dependencies
import { render, screen } from '@testing-library/react';

// Under test file
import Custom404 from '../../pages/404';

describe('<Custom404 />', () => {
  it('should render correctly', () => {
    render(<Custom404 />);
    expect(screen).toMatchSnapshot();
  });
});
