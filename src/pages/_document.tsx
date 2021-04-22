// Dependencies
import { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Config
import Config from '@alversoft/client/core/config';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={Config.locale}>
        <Head />
        <body className="bg-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
