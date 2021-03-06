// Dependencies
import { ReactElement } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

// Styles
import '@alversoft/client/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => <Component {...pageProps} />;

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (process.env.NODE_ENV !== 'production') {
    console.log(metric); // eslint-disable-line no-console
  }
}

export default App;
