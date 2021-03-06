// Dependencies
import axios, { AxiosInstance } from 'axios';

// Interceptors
import responseInterceptor from './interceptors/reponse';

const DEFAULT_TIMEOUT = 5000;

export class InternalAxiosInstance {
  private readonly http: AxiosInstance;

  constructor(configuration = {}) {
    this.http = axios.create(configuration);
  }

  instance(): AxiosInstance {
    this.http.interceptors.response.use(responseInterceptor());
    return this.http;
  }
}

export const internalAxiosInstance: AxiosInstance = new InternalAxiosInstance({
  timeout: DEFAULT_TIMEOUT,
  headers: { 'content-type': 'application/json' },
}).instance();
