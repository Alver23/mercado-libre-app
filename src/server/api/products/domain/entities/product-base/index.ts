// Entities
import IProductPrice from '../product-price';

interface IProductBase {
  condition: string;
  freeShipping: boolean;
  id: string;
  picture: string;
  price: IProductPrice;
  title: string;
}

export default IProductBase;
