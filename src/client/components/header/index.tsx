// Dependencies
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import Image from 'next/image';

// Interfaces
import IHeaderProps from './interfaces';

const Header: FC<IHeaderProps> = ({ children }: IHeaderProps): ReactElement => (
  <header className="h-14 md:h-16 bg-yellow-600 flex justify-center items-center">
    <nav className="container mx-auto flex justify-center items-center">
      <div className="w-full lg:w-10/12">
        <div className="flex flex-row">
          <Link href="/">
            <a className="mx-2 md:mr-6 flex justify-center items-center">
              <Image src="/assets/logo.png" alt="Mercado libre" width={54} height={36} />
            </a>
          </Link>
          <div className="w-9/12 md:w-full">{children}</div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
