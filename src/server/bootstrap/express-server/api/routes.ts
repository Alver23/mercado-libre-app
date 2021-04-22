// Dependencies
import { Application } from 'express';

// Routes
import productRoutes from '@alversoft/server/api/products/infrastructure/routes';

class Routes {
  constructor(private readonly app: Application) {}

  public publicRoutes(): void {
    productRoutes(this.app);
  }
}

export default Routes;
