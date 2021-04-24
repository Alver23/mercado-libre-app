// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

// Services
import ProductService from '@alversoft/client/services/products';

// Under test file
import ProductDetailPage, { getServerSideProps } from '@alversoft/pages/products/[slug]';

// Mocks
import mocks from './mocks.json';

describe('<ProductDetailPage />', () => {
  let component: ShallowWrapper;
  const props = {
    ...mocks,
  };
  beforeEach(() => {
    component = shallow(<ProductDetailPage {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('getServerSideProps method', () => {
    const productId = 'KDEJFRM';
    const context: Partial<GetServerSidePropsContext> = {
      query: {
        slug: productId,
      },
    };

    afterEach(() => {
      expect(ProductService.getProductById).toHaveBeenCalledWith(context.query.slug);
      expect(ProductService.getProductById).toHaveBeenCalledTimes(1);
    });

    it('should get the props successfully', async () => {
      jest.spyOn(ProductService, 'getProductById').mockResolvedValue({ ...mocks.data });
      const response: GetServerSidePropsResult<unknown> = await getServerSideProps(
        context as GetServerSidePropsContext
      );
      expect(response).toHaveProperty('props.data', mocks.data);
    });

    it('should get an error when service fails', async () => {
      const exceptionMocked = new Error('fake error');
      jest.spyOn(ProductService, 'getProductById').mockRejectedValue(exceptionMocked);
      const response: GetServerSidePropsResult<unknown> = await getServerSideProps(
        context as GetServerSidePropsContext
      );
      expect(response).toHaveProperty('notFound', true);
    });
  });
});
