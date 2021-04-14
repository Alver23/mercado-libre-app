// Dependencies
import { act, render, screen } from '@testing-library/react';

// Under test file
import Home from '../../pages';

describe('<Home />', () => {
  jest.useFakeTimers();

  it('should render correctly', () => {
    render(<Home />);
    act(() => jest.advanceTimersByTime(1000));
    expect(screen).toMatchSnapshot();
  });
});
