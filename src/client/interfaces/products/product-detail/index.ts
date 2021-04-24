// Interfaces
import IProductBase from '../product-base';
import IProductAuthor from '../product-author';

export interface IItem extends IProductBase {
  soldQuantity: number;
  description: string;
}
interface IProductDetail {
  author: IProductAuthor;
  categories: string[];
  item: IItem;
}

export default IProductDetail;
