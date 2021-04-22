// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import ProductList from '@alversoft/pages/products';

describe('<ProductList />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<ProductList />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
