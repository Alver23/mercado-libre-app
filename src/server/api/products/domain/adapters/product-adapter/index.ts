// Entities
import IProductDetail from '../../entities/product-detail';
import IProductList from '../../entities/product-list';

interface IProductAdapter {
  getProduct(id: string): Promise<IProductDetail>;
  getProducts(query: string): Promise<IProductList>;
}

export default IProductAdapter;
