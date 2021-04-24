// Dependencies
import Image from 'next/image';
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import ProductDetail from '../index';

describe('<ProductDetail />', () => {
  let component: ShallowWrapper;
  const props = {
    id: 'MDFJ',
    title: 'Fake title',
    freeShipping: true,
    picture: 'http://localhost/img.png',
    price: {
      amount: 2000,
      currency: 'ARG',
      decimals: 2,
    },
    condition: 'new',
    onNavigateToDetail: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<ProductDetail {...props} />);
  });

  it('should render correctly', () => {
    const onClick: any = component.find('div').at(3).prop('onClick');
    const onClickImage: any = component.find(Image).at(0).prop('onClick');
    onClick();
    onClickImage();
    expect(props.onNavigateToDetail).toHaveBeenCalledWith(props.id);
  });
});
