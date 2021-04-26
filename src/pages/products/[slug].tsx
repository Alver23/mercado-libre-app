// Dependencies
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

// Containers
import Layout from '@alversoft/client/containers/layout';
import Meta from '@alversoft/client/containers/meta';
import ProductDetail from '@alversoft/client/containers/product-detail';

// Components
import Breadcrumb from '@alversoft/client/components/breadcrumb';

// Services
import ProductService from '@alversoft/client/services/products';

// Interfaces
import IProductDetail from '@alversoft/client/interfaces/products/product-detail';

interface IProductDetailPage {
  data: IProductDetail;
}

const ProductDetailPage = ({ data }: IProductDetailPage): ReactElement => {
  const { item, categories } = data;
  const { title, description } = item;
  return (
    <Layout meta={<Meta title={title} description={description} />}>
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-11/12 lg:w-10/12">
          <div>
            <Breadcrumb items={categories} />
          </div>
          <section className="bg-white px-6 rounded">
            <ProductDetail {...item} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query;
    const productId = slug.toString();
    const data = await ProductService.getProductById(productId);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ProductDetailPage;
