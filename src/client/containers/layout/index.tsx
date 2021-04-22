// Dependencies
import { FC, ReactElement } from 'react';

// Components
import Footer from '@alversoft/client/components/footer';
import Header from '@alversoft/client/components/header';

// Interfaces
import ILayoutProps from './interfaces';

const Layout: FC<ILayoutProps> = ({ meta, children }: ILayoutProps): ReactElement => {
  return (
    <>
      {meta}
      <Header />
      <div className="h-full min-h-86">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
