// Interfaces
import { IFilter } from '../../../../adapters/interfaces/product-list/paging';

const getCategories = (data: IFilter[]): string[] => {
  const categoryList = data.find((category) => category.id === 'category');
  if (categoryList) {
    const { values = [] } = categoryList;
    const [value] = values;
    if (value) {
      const { path_from_root: pathFromRoot } = value;
      return pathFromRoot.map(({ name }) => name);
    }
  }
  return [];
};

export default getCategories;
