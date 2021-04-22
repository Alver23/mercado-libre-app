// Dependencies
import { Application, Request, Router } from 'express';

// Application
import UseCaseList from '@alversoft/server/api/products/application/use-case-list';

// Interfaces
import ICustomResponse from '@alversoft/server/core/middlewares/response/interfaces';

// Middlewares
import catchErrors from '@alversoft/server/core/middlewares/async-error';

// Adapters
import ProductAdapter from '@alversoft/server/api/products/infrastructure/adapters';

// Controllers
import ProductController from '@alversoft/server/api/products/infrastructure/controllers';

const useCaseList = new UseCaseList(new ProductAdapter());
const productController = new ProductController(useCaseList);

const routes = (app: Application): void => {
  const basePath = '/v1/items';
  const router = Router();
  app.use(basePath, router);

  router.get(
    '/:id',
    catchErrors.handler((request: Request, response: ICustomResponse) =>
      productController.productDetail(request, response)
    )
  );

  router.get(
    '/',
    catchErrors.handler((request: Request, response: ICustomResponse) =>
      productController.productList(request, response)
    )
  );
};

export default routes;
