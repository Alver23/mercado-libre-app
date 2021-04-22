// Dependencies
import { ReactElement } from 'react';

// Config
import Config from '@alversoft/client/core/config';

const Footer = (): ReactElement => {
  return (
    <footer className="flex justify-center items-center bg-white h-12 bg-gray-400">
      <p className="text-gray-500 text-center text-lg">
        Copyright © 1999-{new Date().getFullYear()} {Config.siteName} LTDA.
      </p>
    </footer>
  );
};

export default Footer;
