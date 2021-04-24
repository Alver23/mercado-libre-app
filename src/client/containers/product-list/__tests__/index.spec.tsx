// Dependencies
import * as nextRouter from 'next/router';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import ProductDetail from '../product';

// Under test file
import ProductList from '../index';

describe('<ProductList />', () => {
  const props = {
    items: [
      {
        condition: 'new',
        freeShipping: true,
        id: 'MDJF2344',
        picture: 'http://localhost/img.png',
        price: { amount: 100, currency: 'ARG', decimals: 2 },
        title: 'fake title',
      },
    ],
  };

  let component: ShallowWrapper;
  const routerMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({ push: routerMock } as any));
    component = shallow(<ProductList {...props} />);
  });

  it('should render correctly', () => {
    const onNavigateToDetail = component.find(ProductDetail).at(0).prop('onNavigateToDetail');
    onNavigateToDetail('MDJF');
    expect(routerMock).toHaveBeenCalled();
  });
});
