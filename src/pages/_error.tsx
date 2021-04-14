// Dependencies
import { ReactElement } from 'react';

interface IErrorProps {
  statusCode?: number;
}

const Error = ({ statusCode }: IErrorProps): ReactElement => (
  <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode;
  return { statusCode };
};

export default Error;
