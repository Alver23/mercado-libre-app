// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Breadcrumb from '../index';

describe('<Breadcrumb />', () => {
  let component: ShallowWrapper;
  const items = ['item 1', 'ìtem 2'];

  beforeEach(() => {
    component = shallow(<Breadcrumb items={items} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
    expect(component.find('p').text()).toBe(items.join(' > '));
  });
});
