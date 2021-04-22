// Dependencies
import { Request } from 'express';

// Interfaces
import IUseCaseList from '@alversoft/server/api/products/application/use-case-list/interfaces';
import ICustomResponse from '@alversoft/server/core/middlewares/response/interfaces';

class ProductController {
  constructor(private readonly useCaseList: IUseCaseList) {}

  async productDetail(req: Request, res: ICustomResponse): Promise<void> {
    const {
      params: { id },
    } = req;
    const response = await this.useCaseList.getProduct(id);
    res.responseJson({ data: response });
  }

  async productList(req: Request, res: ICustomResponse): Promise<void> {
    const {
      query: { q },
    } = req;
    const response = await this.useCaseList.getProducts(q);
    res.responseJson({ data: response });
  }
}

export default ProductController;
