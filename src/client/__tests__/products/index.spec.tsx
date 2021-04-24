// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

// Services
import ProductService from '@alversoft/client/services/products';

// Under test file
import ProductList, { getServerSideProps } from '@alversoft/pages/products';

// Mocks
import mocks from './mocks.json';

describe('<ProductList />', () => {
  let component: ShallowWrapper;
  const props = {
    ...mocks,
  };
  beforeEach(() => {
    component = shallow(<ProductList {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('getServerSideProps method', () => {
    const searchText = 'apple ipod';
    const context: Partial<GetServerSidePropsContext> = {
      query: {
        q: searchText,
      },
    };

    afterEach(() => {
      expect(ProductService.getProducts).toHaveBeenCalledWith(context.query.q);
      expect(ProductService.getProducts).toHaveBeenCalledTimes(1);
    });

    it('should get the props successfully', async () => {
      jest.spyOn(ProductService, 'getProducts').mockResolvedValue({ ...mocks.data });
      const response: GetServerSidePropsResult<unknown> = await getServerSideProps(
        context as GetServerSidePropsContext
      );
      expect(response).toHaveProperty('props.data', mocks.data);
      expect(response).toHaveProperty('props.searchText', searchText);
    });

    it('should get an error when service fails', async () => {
      const exceptionMocked = new Error('fake error');
      jest.spyOn(ProductService, 'getProducts').mockRejectedValue(exceptionMocked);
      const response: GetServerSidePropsResult<unknown> = await getServerSideProps(
        context as GetServerSidePropsContext
      );
      expect(response).toHaveProperty('notFound', true);
    });
  });
});
