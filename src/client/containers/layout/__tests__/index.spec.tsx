// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Layout from '../index';

describe('<Layout />', () => {
  const props = {
    meta: <></>,
    children: <></>,
  };

  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Layout {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
