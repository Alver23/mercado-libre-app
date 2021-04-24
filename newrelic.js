'use strict';

const { newrelic } = require('./build/server/config').default;

exports.config = {
  app_name: newrelic.appName,
  license_key: newrelic.license,
  logging: {
    level: newrelic.logLevel,
    enabled: false,
  },
  distributed_tracing: { enabled: true },
  cross_application_tracer: { enabled: true },
};
