// Dependencies
import { ReactElement } from 'react';

// Containers
import Layout from '@alversoft/client/containers/layout';
import Meta from '@alversoft/client/containers/meta';

const Home = (): ReactElement => (
  <Layout meta={<Meta title="Home" />}>
    <div>
      <p>Home page</p>
    </div>
  </Layout>
);

export default Home;
