// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Meta from '../index';

describe('<Meta />', () => {
  const props = {
    canonical: 'http://localhost/',
    title: 'fake title',
  };

  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Meta {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly when the prop is not sent image', () => {
    const newProps = {
      ...props,
      image: 'http://localhost:3000/img.png',
    };
    component.setProps(newProps);
    const ogImage = component.find('meta').filterWhere((element) => element.prop('content') === newProps.image);
    expect(ogImage).toBeTruthy();
  });
});
