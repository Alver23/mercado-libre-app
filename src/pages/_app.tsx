// Dependencies
import { ReactElement } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

// Styles
import '../client/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => <Component {...pageProps} />;

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (process.env.NODE_ENV !== 'production') {
    console.log(metric);
  }
}

export default App;
