// Dependencies
import { ReactElement } from 'react';

// Containers
import Layout from '@alversoft/client/containers/layout';
import Meta from '@alversoft/client/containers/meta';

const ProductList = (): ReactElement => (
  <Layout meta={<Meta title="Product List" />}>
    <div>
      <p>Product list</p>
    </div>
  </Layout>
);

export default ProductList;
