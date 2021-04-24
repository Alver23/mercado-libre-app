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

  it('should render correctly', () => {
    const titleText = component.find('p').filterWhere((element) => element.text() === mocks.title);
    expect(titleText.text()).toBe(mocks.title);
  });
});
