// Dependencies
import Head from 'next/head';
import { FC, ReactElement } from 'react';

// Config
import Config from '@alversoft/client/core/config';

// Interfaces
import IMetaProps from './interfaces';

const Meta: FC<IMetaProps> = ({
  title,
  description = Config.description,
  image = Config.ogImage,
}: IMetaProps): ReactElement => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link
        rel="icon"
        href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/favicon.svg"
        key="favicon"
      />
      <title>{`${title} | ${Config.siteName}`}</title>
      <meta name="description" content={description} key="description" />
      <meta name="author" content={Config.author} key="author" />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={`${title} | ${Config.siteName}`} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:locale" content={Config.locale} key="og:locale" />
      <meta property="og:site_name" content={Config.siteName} key="og:site_name" />
    </Head>
  );
};

export default Meta;
