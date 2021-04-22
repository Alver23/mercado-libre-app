// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Header from '../index';

describe('<Header />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
