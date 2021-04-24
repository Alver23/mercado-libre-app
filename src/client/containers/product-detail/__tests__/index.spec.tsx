// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import ProductDetail from '../index';

// Mocks
import mocks from './mocks.json';

describe('<ProductDetail />', () => {
  const props = { ...mocks };

  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<ProductDetail {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
