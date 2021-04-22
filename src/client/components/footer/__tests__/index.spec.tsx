// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Footer from '../index';

// Mocks
jest.mock('@alversoft/client/core/config', () => ({ siteName: 'fake test' }));

describe('<Footer />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
