// Dependencies
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import Image from 'next/image';

// Interfaces
import IHeaderProps from './interfaces';

const Header: FC<IHeaderProps> = ({ children }: IHeaderProps): ReactElement => (
  <header className="h-24 bg-yellow-600 flex justify-center items-center">
    <nav className="container mx-auto flex justify-center items-center">
      <div className="w-full lg:w-10/12">
        <div className="flex flex-row">
          <Link href="/">
            <a className="mr-12 flex justify-center items-center">
              <Image src="/assets/logo.png" alt="Mercado libre" width={54} height={36} />
            </a>
          </Link>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
