// Dependencies
import express from 'express';

const basePath = '/api';
const fakeServer = express();
fakeServer.use(express.json());

export { fakeServer, basePath };
