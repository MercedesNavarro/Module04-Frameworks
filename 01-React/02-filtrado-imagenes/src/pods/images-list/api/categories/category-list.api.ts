import { categories } from './category-list.mock-data';
import { Category } from './category-list.api-model';

let categoryList = [...categories];

export const getCategoryList = async (): Promise<Category[]> => {
  return categoryList;
};
