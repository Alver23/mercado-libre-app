// Core
import Config from '@alversoft/client/core/config';

export default {
  v1: {
    basePath: `${Config.apiURL}v1/`,
    productList(query: string): string {
      return `${this.basePath}items?q=${query}`;
    },
    productDetail(id: string): string {
      return `${this.basePath}items/${id}`;
    },
  },
};
