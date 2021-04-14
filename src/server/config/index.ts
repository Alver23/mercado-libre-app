// Dependencies
import dotenv from 'dotenv';

dotenv.config();

export default {
  appName: process.env.APP_NAME,
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  newrelic: {
    appName: [process.env.APP_NAME],
    license: process.env.NEWRELIC_LICENSE_KEY,
    logLevel: process.env.NEWRELIC_LOG_LEVEL,
  },
  port: process.env.PORT || 3000,
};
