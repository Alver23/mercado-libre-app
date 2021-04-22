// Domain
import IProductDetail from '@alversoft/server/api/products/domain/entities/product-detail';
import IProductList from '@alversoft/server/api/products/domain/entities/product-list';
import IProductAdapter from '@alversoft/server/api/products/domain/adapters/product-adapter';

// Shared
import Connector from '@alversoft/shared/connector';
import { internalAxiosInstance } from '@alversoft/shared/axios/internal-axios-instance';

// Config
import config from '@alversoft/server/config';
import endpoints from '@alversoft/server/config/endpoints';

// Utils
import objectToClass from '@alversoft/server/utils/plain-tranformer';

// DTO`s
import ProductCategoryResponse from '../dto/response/product-category';
import ProductListResponse from '../dto/response/product-list';
import ProductDetailResponse from '../dto/response/product-detail';

// Exceptions
import ProductNotFoundException from './exceptions';

// Interfaces
import { IProductListApiResponse } from './interfaces/product-list';
import { IProductDetailApiResponse } from './interfaces/product-detail';
import { IProductDetailDescriptionAPIResponse } from './interfaces/product-detail/product-description';
import { IFilter } from './interfaces/product-list/paging';

class ProductAdapter implements IProductAdapter {
  private readonly endpoints = endpoints;

  private readonly http: Connector;

  constructor() {
    this.http = new Connector(internalAxiosInstance);
  }

  private productsTranformer(data: IProductListApiResponse): IProductList {
    const { filters, results } = data;
    const categoryNameList = this.categoriesTranformer(filters);
    const productResponse = { items: results, author: config.author };
    const productList: IProductList = objectToClass(ProductListResponse, productResponse);
    productList.categories = categoryNameList;

    return productList;
  }

  private productTranformer(
    response: [IProductDetailApiResponse, IProductDetailDescriptionAPIResponse]
  ): IProductDetail {
    const [productDetailApiResponse, productDescriptionApiResponse] = response;
    const data = {
      author: config.author,
      item: {
        ...productDetailApiResponse,
        description: productDescriptionApiResponse.plain_text,
      },
    };

    const productDetail: IProductDetail = objectToClass(ProductDetailResponse, data);
    return productDetail;
  }

  private categoriesTranformer(data: IFilter[]): string[] {
    const categoryNameList: ProductCategoryResponse = objectToClass(ProductCategoryResponse, { categories: data });
    return categoryNameList.categories;
  }

  public getProduct(id: string): Promise<IProductDetail> {
    const productDetailUrl = this.endpoints.v1.productDetail(id);
    const productDetailDescriptionUrl = this.endpoints.v1.productDescription(id);
    return new Promise<IProductDetail>((resolve, reject) => {
      const onSuccess = (response: [IProductDetailApiResponse, IProductDetailDescriptionAPIResponse]) =>
        resolve(this.productTranformer(response));
      const onError = () => reject(new ProductNotFoundException());
      Promise.all([
        this.http.get<IProductDetailApiResponse>(productDetailUrl),
        this.http.get<IProductDetailDescriptionAPIResponse>(productDetailDescriptionUrl),
      ])
        .then(onSuccess)
        .catch(onError);
    });
  }

  public getProducts(query: string): Promise<IProductList> {
    const url = this.endpoints.v1.productList(encodeURIComponent(query));
    return new Promise((resolve, reject) => {
      const onSuccess = (response: IProductListApiResponse) => resolve(this.productsTranformer(response));
      this.http.get<IProductListApiResponse>(url).then(onSuccess).catch(reject);
    });
  }
}

export default ProductAdapter;
