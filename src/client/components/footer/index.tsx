// Dependencies
import { ReactElement } from 'react';

// Config
import Config from '@alversoft/client/core/config';

const Footer = (): ReactElement => {
  return (
    <footer className="flex justify-center items-center h-16 bg-white px-0.5 mt-6">
      <p className="text-gray-500 text-center text-sm">
        Copyright © 1999-{new Date().getFullYear()} {Config.siteName} LTDA.
      </p>
    </footer>
  );
};

export default Footer;
