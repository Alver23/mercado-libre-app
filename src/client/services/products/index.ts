// Shared
import Connector from '@alversoft/shared/connector';
import { internalAxiosInstance } from '@alversoft/shared/axios/internal-axios-instance';

// Config
import endpoints from '@alversoft/client/core/config/endpoints';

// Interfaces
import IProductList from '@alversoft/client/interfaces/products/product-list';
import IProductDetail from '@alversoft/client/interfaces/products/product-detail';

const { v1: endpointsV1 } = endpoints;

class ProductService {
  private readonly endpoints = endpointsV1;

  constructor(private readonly httpClient: Connector) {}

  private transformerData(response) {
    return response.data;
  }

  getProducts(query: string): Promise<IProductList> {
    const url = this.endpoints.productList(query);
    return this.httpClient.get(url).then(this.transformerData);
  }

  getProductById(id: string): Promise<IProductDetail> {
    const url = this.endpoints.productDetail(id);
    return this.httpClient.get(url).then(this.transformerData);
  }
}

const connector = new Connector(internalAxiosInstance);
export default new ProductService(connector);
