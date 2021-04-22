// Dependencies
import { renderHook, act } from '@testing-library/react-hooks';
import * as nextRouter from 'next/router';

// Under test file
import useSearchProduct from '../index';

describe('useSearchProduct', () => {
  const routerMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({ push: routerMock } as any));
  });

  afterEach(jest.clearAllMocks);

  it('should change the state of the text', () => {
    const textValue = 'fake text';
    const { result } = renderHook(() => useSearchProduct());
    act(() => {
      result.current[1]({ currentTarget: { value: textValue } } as any);
    });

    expect(result.current[0]).toBe(textValue);
  });

  it('should navigate to page result', () => {
    const textValue = 'fake text';
    const { result } = renderHook(() => useSearchProduct(textValue));
    act(() => {
      result.current[2]({ preventDefault: jest.fn() } as any);
    });
    expect(routerMock).toHaveBeenCalled();
  });

  it('should does not navigate to page result', () => {
    const { result } = renderHook(() => useSearchProduct());
    act(() => {
      result.current[2]({ preventDefault: jest.fn() } as any);
    });
    expect(routerMock).not.toHaveBeenCalled();
  });
});
