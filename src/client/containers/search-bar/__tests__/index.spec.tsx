// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Hooks
import * as searchHooks from '../hooks';

// Under test file
import SearchBar from '../index';

describe('<SearchBar />', () => {
  let component: ShallowWrapper;
  const onChangeText = jest.fn();
  const handleClick = jest.fn();
  const searchText = 'fake text';
  const useSearchProductMock: any = [searchText, onChangeText, handleClick];

  beforeEach(() => {
    jest.spyOn(searchHooks, 'default').mockImplementation(() => useSearchProductMock);
    component = shallow(<SearchBar />);
  });

  afterEach(jest.clearAllMocks);

  it('should render correctly', () => {
    expect(component.find('input').exists()).toBeTruthy();
    expect(component.find('button').exists()).toBeTruthy();
  });

  it('should call function onChangeText, and handleClick', () => {
    const onChange: any = component.find('input').prop('onChange');
    const onClick: any = component.find('button').prop('onClick');
    onChange();
    onClick();
    expect(onChangeText).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalled();
  });
});
