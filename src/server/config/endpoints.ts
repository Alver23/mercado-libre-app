// Dependencies
import dotenv from 'dotenv';

dotenv.config();

const { API_GATEWAY_URL } = process.env;

export default {
  v1: {
    basePath: API_GATEWAY_URL,
    productList(query: string): string {
      return `${this.basePath}sites/MLA/search?q=${query}`;
    },
    productDetail(id: string): string {
      return `${this.basePath}items/${id}`;
    },
    productDescription(id: string): string {
      return `${this.basePath}items/${id}/description`;
    },
    categoryDetail(id: string): string {
      return `${this.basePath}categories/${id}`;
    },
  },
};
