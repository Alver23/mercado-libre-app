// Interfaces
import IProductBase from '../product-base';
import IProductAuthor from '../product-author';

interface IProductList {
  author: IProductAuthor;
  categories: string[];
  items: IProductBase[];
}

export default IProductList;
