// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Home from '@alversoft/pages';

describe('<Home />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
