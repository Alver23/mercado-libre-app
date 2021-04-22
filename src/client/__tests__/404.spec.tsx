// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Custom404 from '@alversoft/pages/404';

describe('<Custom404 />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Custom404 />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
