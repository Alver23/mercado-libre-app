// Dependencies
import { FC, ReactElement } from 'react';

// Components
import Footer from '@alversoft/client/components/footer';
import Header from '@alversoft/client/components/header';

// Containers
import SearchBar from '@alversoft/client/containers/search-bar';

// Interfaces
import ILayoutProps from './interfaces';

const Layout: FC<ILayoutProps> = ({ meta, children }: ILayoutProps): ReactElement => {
  return (
    <>
      {meta}
      <Header>
        <SearchBar />
      </Header>
      <div className="h-full min-h-86">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
