// Dependencies
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

// Componentes
import Breadcrumb from '@alversoft/client/components/breadcrumb';

// Containers
import Layout from '@alversoft/client/containers/layout';
import Meta from '@alversoft/client/containers/meta';
import ProductList from '@alversoft/client/containers/product-list';

// Services
import ProductService from '@alversoft/client/services/products';

// Interfaces
import IProductList from '@alversoft/client/interfaces/products/product-list';

interface IProductListPageProps {
  data: IProductList;
  searchText: string;
}

const ProductListPage = ({ data, searchText }: IProductListPageProps): ReactElement => {
  const { categories, items } = data;
  return (
    <Layout meta={<Meta title={searchText} />}>
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-11/12 lg:w-10/12">
          <div>
            <Breadcrumb items={categories} />
          </div>
          <section className="bg-white px-6 rounded">
            <ProductList items={items} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const searchText = query.q as string;
    const data = await ProductService.getProducts(searchText);
    return {
      props: {
        data,
        searchText,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ProductListPage;
